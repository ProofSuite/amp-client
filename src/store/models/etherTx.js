// @flow
import ethers, { Contract } from 'ethers';
import { getEtherTxDomain } from '../domains';
import * as actionCreators from '../actions/etherTx';

import type { EtherTxParams, TransferTokensTxParams } from '../../types/etherTx';
import type { State, ThunkAction } from '../../types';

import { getSigner } from '../services/signer';
import { ERC20Token } from 'proof-contracts-interfaces';

export default function getEtherTxSelector(state: State) {
  return getEtherTxDomain(state);
}

export const validateEtherTx = ({ amount, receiver, gas, gasPrice }: EtherTxParams): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let signer = getSigner();

      let tx = {
        gasLimit: parseFloat(gas) || 0,
        gasPrice: parseFloat(gasPrice) || 2 * 10e9,
        to: receiver,
        value: ethers.utils.parseEther(amount),
      };

      let estimatedGas = await signer.provider.estimateGas(tx);
      estimatedGas = estimatedGas.toNumber();

      return dispatch(actionCreators.validateEtherTx('Transaction Valid', estimatedGas));
    } catch (error) {
      return dispatch(actionCreators.invalidateEtherTx(error.message));
    }
  };
};

export const sendEtherTx = ({ amount, receiver, gas, gasPrice }: EtherTxParams): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let signer = getSigner();

      let rawTx = {
        gasLimit: parseFloat(gas) || 0,
        gasPrice: parseFloat(gasPrice) || 2 * 10e9,
        to: receiver,
        value: amount * 10 ** 18,
      };

      let tx = await signer.sendTransaction(rawTx);
      dispatch(actionCreators.sendEtherTx(tx.hash));

      let receipt = await signer.provider.waitForTransaction(tx.hash);
      if (receipt.status === '0x0') {
        return dispatch(actionCreators.revertEtherTx('Transaction Failed', receipt));
      } else {
        return dispatch(actionCreators.confirmEtherTx(receipt));
      }
    } catch (error) {
      dispatch(actionCreators.etherTxError('error', error.message));
    }
  };
};

export const validateTransferTokensTx = (params: TransferTokensTxParams): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let { receiver, amount, gas, gasPrice, tokenAddress } = params;
      let signer = getSigner();
      let token = new Contract(tokenAddress, ERC20Token.abi, signer);

      let estimatedGas = await token.estimate.transfer(receiver, amount);
      estimatedGas = estimatedGas.toNumber();
      dispatch(actionCreators.validateEtherTx('Transaction Valid', estimatedGas));
    } catch (error) {
      dispatch(actionCreators.invalidateEtherTx(error.message));
    }
  };
};

export const sendTransferTokensTx = (params: TransferTokensTxParams): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let { receiver, amount, gas, gasPrice, tokenAddress } = params;
      let signer = getSigner();
      let token = new Contract(tokenAddress, ERC20Token.abi, signer);

      let txOpts = {
        gasLimit: parseFloat(gas) || 0,
        gasPrice: parseFloat(gasPrice) || 2 * 10e9,
      };
      let tx = await token.transfer(receiver, amount, txOpts);

      dispatch(actionCreators.sendEtherTx(tx.hash));

      let receipt = await signer.provider.waitForTransaction(tx.hash);

      receipt.status === '0x0'
        ? dispatch(actionCreators.revertEtherTx('Transaction Failed', receipt))
        : dispatch(actionCreators.confirmEtherTx(receipt));
    } catch (error) {
      dispatch(actionCreators.etherTxError('error', error.message));
    }
  };
};
