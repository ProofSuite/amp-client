// @flow
import { Contract, utils } from 'ethers';
import { getTransferTokensFormDomain, getTokenDomain } from '../domains';

import * as notificationActionCreators from '../actions/app'
import * as actionCreators from '../actions/transferTokensForm';

import type { EtherTxParams, TransferTokensTxParams } from '../../types/transferTokensForm';
import type { State, ThunkAction } from '../../types';
import type { RankedToken } from '../../types/tokens'

import { getSigner } from '../services/signer';
import { ERC20 } from '../../config/abis';
import { parseTransferEtherError, parseTransferTokensError } from '../../config/errors'

export default function sendEtherSelector(state: State) {
  let tokenDomain = getTokenDomain(state);
  let transferTokensFormDomain = getTransferTokensFormDomain(state);

  let eth = { symbol: 'ETH', address: '0x0', rank: 0}
  let otherTokens = tokenDomain.rankedTokens()
  let tokens: Array<RankedToken> = [ eth ].concat(otherTokens)

  return {
    getState: () => transferTokensFormDomain.getState(),
    isLoading: () => transferTokensFormDomain.isLoading(),
    getStatus: () => transferTokensFormDomain.getStatus(),
    getStatusMessage: () => transferTokensFormDomain.getStatusMessage(),
    getGas: () => transferTokensFormDomain.getGas(),
    getGasPrice: () => transferTokensFormDomain.getGasPrice(),
    getHash: () => transferTokensFormDomain.getHash(),
    getReceipt: () => transferTokensFormDomain.getReceipt(),
    tokens: () => tokens,
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
      console.log(error)
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

      if (receipt.status === 0) {
        dispatch(actionCreators.revertTx('Transaction Failed', receipt))
        dispatch(notificationActionCreators.addDangerNotification({ message: 'Token transfer failed.' }))
      } else {
        dispatch(actionCreators.confirmTx(receipt))
        dispatch(notificationActionCreators.addSuccessNotification({ message: 'Token transfer successful!' }))
      }

    } catch (error) {
      console.log(error)
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
      console.log(error)
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

      if (receipt.status === 0) {
        dispatch(actionCreators.revertTx('Transaction Failed', receipt))
        dispatch(notificationActionCreators.addDangerNotification({ message: 'Token transfer failed.' }))
      } else {
        dispatch(actionCreators.confirmTx(receipt));
        dispatch(notificationActionCreators.addSuccessNotification({ message: 'Token transfer successful!' }))
      }

    } catch (error) {
      console.log(error)
      let errorMessage = parseTransferTokensError(error)
      dispatch(actionCreators.txError('error', errorMessage))
    }
  };
};
