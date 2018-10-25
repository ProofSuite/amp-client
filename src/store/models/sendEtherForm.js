// @flow
import ethers, { Contract, utils } from 'ethers';
import { getSendEtherFormDomain, getTokenDomain } from '../domains';
import * as actionCreators from '../actions/sendEtherForm';

import type { EtherTxParams, TransferTokensTxParams } from '../../types/sendEtherForm';
import type { State, ThunkAction } from '../../types';

import { getSigner } from '../services/signer';
import { ERC20 } from '../../config/abis';
import { parseTransferEtherError, parseTransferTokensError } from '../../config/errors'

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
        value: utils.parseEther(amount.toString()),
      };

      let estimatedGas = await signer.provider.estimateGas(tx);
      estimatedGas = estimatedGas.toNumber();
      dispatch(actionCreators.validateTx('Transaction Valid', estimatedGas));

    } catch (error) {
      let errorMessage = parseTransferEtherError(error)
      dispatch(actionCreators.invalidateTx(errorMessage))
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
        value: utils.parseEther(amount.toString()),
      };

      let tx = await signer.sendTransaction(rawTx);
      dispatch(actionCreators.sendTx(tx.hash));

      let receipt = await signer.provider.waitForTransaction(tx.hash);
      receipt.status === '0x0'
        ? dispatch(actionCreators.revertTx('Transaction Failed', receipt))
        : dispatch(actionCreators.confirmTx(receipt));

    } catch (error) {
      let errorMessage = parseTransferEtherError(error)
      dispatch(actionCreators.invalidateTx(errorMessage))
    }
  };
};

export const validateTransferTokensTx = (params: TransferTokensTxParams): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let { receiver, amount, tokenAddress } = params;
      let signer = getSigner();

      let token = new Contract(tokenAddress, ERC20, signer);
      let amountTokens = utils.parseEther(amount)

      let estimatedGas = await token.estimate.transfer(receiver, amountTokens);
      estimatedGas = estimatedGas.toNumber();
      dispatch(actionCreators.validateTx('Transaction Valid', estimatedGas));

    } catch (error) {
      let errorMessage = parseTransferTokensError(error)
      dispatch(actionCreators.invalidateTx(errorMessage))
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

      let amountTokens = utils.parseEther(amount)
      let tx = await token.transfer(receiver, amountTokens, txOpts);
      dispatch(actionCreators.sendTx(tx.hash));

      let receipt = await signer.provider.waitForTransaction(tx.hash);
      receipt.status === '0x0'
        ? dispatch(actionCreators.revertTx('Transaction Failed', receipt))
        : dispatch(actionCreators.confirmTx(receipt));

    } catch (error) {
      let errorMessage = parseTransferTokensError(error)
      dispatch(actionCreators.txError('error', errorMessage))
    }
  };
};
