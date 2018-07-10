// @flow
import { Contract } from 'ethers';
import etherTxModel from '../domains/etherTx';
import * as actionCreators from '../actions/etherTx';
import { getDefaultSigner } from '../services/signer';
import { ERC20Token } from 'proof-contracts-interfaces';

import type { TransferTokensTxParams } from '../../types/etherTx';
import type { State, ThunkAction } from '../../types';

export default function getModel(state: State) {
  return etherTxModel(state.etherTx);
}

export const validateTransferTokensTx = (params: TransferTokensTxParams): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let { receiver, amount, gas, gasPrice, tokenAddress } = params;
      let signer = await getDefaultSigner(getState);
      let token = new Contract(tokenAddress, ERC20Token.abi, signer);

      let estimatedGas = await token.estimate.transfer(receiver, amount);
      estimatedGas = estimatedGas.toNumber();
      return dispatch(actionCreators.validateEtherTx('Transaction Valid', estimatedGas));
    } catch (error) {
      return dispatch(actionCreators.invalidateEtherTx(error.message));
    }
  };
};

export const sendTransferTokensTx = (params: TransferTokensTxParams): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let { receiver, amount, gas, gasPrice, tokenAddress } = params;
      let signer = await getDefaultSigner(getState);
      let token = new Contract(tokenAddress, ERC20Token.abi, signer);

      let tx = await token.transfer(receiver, amount, params);
      dispatch(actionCreators.sendEtherTx(tx.Hash));

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
