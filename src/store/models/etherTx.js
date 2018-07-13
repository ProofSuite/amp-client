// @flow
import ethers from 'ethers';
import etherTxModel from '../domains/etherTx';
import * as actionCreators from '../actions/etherTx';
import { getDefaultSigner } from '../services/signer';

import type { EtherTxParams } from '../../types/etherTx';
import type { State, ThunkAction } from '../../types';

export default function getEtherTxModel(state: State) {
  return etherTxModel(state.etherTx);
}

export const validateEtherTx = ({ amount, receiver, gas, gasPrice }: EtherTxParams): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let signer = await getDefaultSigner(getState);

      let tx = {
        gasLimit: gas || 0,
        gasPrice: gasPrice || 2 * 10e9,
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
      let signer = await getDefaultSigner(getState);

      let rawTx = {
        gasLimit: gas || 0,
        gasPrice: gasPrice || 2 * 10e9,
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
