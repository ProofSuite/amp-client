// @flow
import ethers, { Contract } from 'ethers';
import { getSendEtherFormDomain, getTokenDomain } from '../domains';
import * as actionCreators from '../actions/sendEtherForm';

import type { EtherTxParams, TransferTokensTxParams } from '../../types/sendEtherForm';
import type { State, ThunkAction } from '../../types';

import { getSigner } from '../services/signer';
import { ERC20 } from '../../config/abis';

export default function sendEtherSelector(state: State) {
  let tokenDomain = getTokenDomain(state);
  let sendEtherFormDomain = getSendEtherFormDomain(state);

  return {
    getState: () => sendEtherFormDomain.getState(),
    isLoading: () => sendEtherFormDomain.isLoading(),
    getStatus: () => sendEtherFormDomain.getStatus(),
    getStatusMessage: () => sendEtherFormDomain.getStatusMessage(),
    getGas: () => sendEtherFormDomain.getGas(),
    getGasPrice: () => sendEtherFormDomain.getGasPrice(),
    getHash: () => sendEtherFormDomain.getHash(),
    getReceipt: () => sendEtherFormDomain.getReceipt(),
    tokens: () => tokenDomain.rankedTokens(),
  };
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

      console.log(signer)
      console.log(signer.provider)

      let estimatedGas = await signer.provider.estimateGas(tx);
      estimatedGas = estimatedGas.toNumber();

      return dispatch(actionCreators.validateTx('Transaction Valid', estimatedGas));
    } catch (error) {
      console.log(error)
      return dispatch(actionCreators.invalidateTx(error.message));
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
      dispatch(actionCreators.sendTx(tx.hash));

      let receipt = await signer.provider.waitForTransaction(tx.hash);
      if (receipt.status === '0x0') {
        return dispatch(actionCreators.revertTx('Transaction Failed', receipt));
      } else {
        return dispatch(actionCreators.confirmTx(receipt));
      }
    } catch (error) {
      console.log(error)
      dispatch(actionCreators.txError('error', error.message));
    }
  };
};

export const validateTransferTokensTx = (params: TransferTokensTxParams): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let { receiver, amount, tokenAddress } = params;
      let signer = getSigner();

      let token = new Contract(tokenAddress, ERC20, signer);


      let estimatedGas = await token.estimate.transfer(receiver, amount);
      estimatedGas = estimatedGas.toNumber();
      dispatch(actionCreators.validateTx('Transaction Valid', estimatedGas));
    } catch (error) {
      console.log(error)
      dispatch(actionCreators.invalidateTx(error.message));
    }
  };
};

export const sendTransferTokensTx = (params: TransferTokensTxParams): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let { receiver, amount, gas, gasPrice, tokenAddress } = params;
      let signer = getSigner();
      let token = new Contract(tokenAddress, ERC20, signer);

      let txOpts = {
        gasLimit: parseFloat(gas) || 0,
        gasPrice: parseFloat(gasPrice) || 2 * 10e9,
      };
      let tx = await token.transfer(receiver, amount, txOpts);

      dispatch(actionCreators.sendTx(tx.hash));

      console.log(tx)

      let receipt = await signer.provider.waitForTransaction(tx.hash);

      console.log(receipt)

      receipt.status === '0x0'
        ? dispatch(actionCreators.revertTx('Transaction Failed', receipt))
        : dispatch(actionCreators.confirmTx(receipt));
    } catch (error) {
      console.log(error)
      dispatch(actionCreators.txError('error', error.message));
    }
  };
};
