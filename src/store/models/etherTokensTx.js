// @flow
import { Contract } from 'ethers';
import etherTxModel from '../domains/etherTx';
import * as actionCreators from '../actions/etherTx';
import { getDefaultSigner } from '../services/signer';
import { ERC20Token } from 'proof-contracts-interfaces';

import type { TransferTokensTxParams } from '../../types/etherTx';
import type { State, ThunkAction } from '../../types';

export default function getEtherTokensTxModel(state: State) {
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
      let signer = await getDefaultSigner(getState);
      let token = new Contract(tokenAddress, ERC20Token.abi, signer);

      let txOpts = {
        gasLimit: gas || 0,
        gasPrice: gasPrice || 2 * 10e9,
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
