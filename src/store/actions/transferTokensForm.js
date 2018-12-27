//@flow
import type {
  ConfirmTxAction,
  TxErrorAction,
  TxStatus,
  InvalidateTxAction,
  RevertTxAction,
  SendTxAction,
  TxReceipt,
  ValidateTxAction,
} from '../../types/transferTokensForm';

const actionTypes = {
  txError: 'transferTokensForm/ERROR',
  validateTx: 'transferTokensForm/VALIDATE',
  invalidateTx: 'transferTokensForm/INVALIDATE',
  sendTx: 'transferTokensForm/SEND',
  confirmTx: 'transferTokensForm/CONFIRM',
  revertTx: 'transferTokensForm/REVERT',
};

export function txError(status: TxStatus, statusMessage: string): TxErrorAction {
  return {
    type: actionTypes.txError,
    payload: { status, statusMessage },
  };
}

export function invalidateTx(statusMessage: string): InvalidateTxAction {
  return {
    type: actionTypes.invalidateTx,
    payload: { statusMessage },
  };
}

export function validateTx(statusMessage: string, gas: number): ValidateTxAction {
  return {
    type: actionTypes.validateTx,
    payload: { statusMessage, gas },
  };
}

export function sendTx(tx: Tx): SendTxAction {
  return {
    type: actionTypes.sendTx,
    payload: { hash: tx.hash, transactions: [ tx ] },
  };
}

export function revertTx(tx: Tx, message: string): RevertTxAction {
  return {
    type: actionTypes.revertTx,
    payload: { receipt: tx.receipt, transactions: [ tx ], message },
  };
}

export function confirmTx(tx: Tx, message: string): ConfirmTxAction {
  return {
    type: actionTypes.confirmTx,
    payload: { receipt: tx.receipt, transactions: [ tx ], message },
  };
}

export default actionTypes;
