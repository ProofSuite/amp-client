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
} from '../../types/sendEtherForm';

const actionTypes = {
  txError: 'sendEtherForm/ERROR',
  validateTx: 'sendEtherForm/VALIDATE',
  invalidateTx: 'sendEtherForm/INVALIDATE',
  sendTx: 'sendEtherForm/SEND',
  confirmTx: 'sendEtherForm/CONFIRM',
  revertTx: 'sendEtherForm/REVERT',
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

export function sendTx(hash: string): SendTxAction {
  return {
    type: actionTypes.sendTx,
    payload: { hash },
  };
}

export function revertTx(statusMessage: string, receipt: TxReceipt): RevertTxAction {
  return {
    type: actionTypes.revertTx,
    payload: { statusMessage, receipt },
  };
}

export function confirmTx(receipt: TxReceipt): ConfirmTxAction {
  return {
    type: actionTypes.confirmTx,
    payload: { receipt },
  };
}

export default actionTypes;
