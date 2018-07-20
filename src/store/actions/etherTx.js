//@flow
import type {
  ConfirmEtherTxAction,
  EtherTxErrorAction,
  EtherTxStatus,
  InvalidateEtherTxAction,
  RevertEtherTxAction,
  SendEtherTxAction,
  TxReceipt,
  ValidateEtherTxAction,
} from '../../types/etherTx';

const actionTypes = {
  etherTxError: 'etherTx/ERROR',
  validateEtherTx: 'etherTx/VALIDATE',
  invalidateEtherTx: 'etherTx/INVALIDATE',
  sendEtherTx: 'etherTx/SEND',
  confirmEtherTx: 'etherTx/CONFIRM',
  revertEtherTx: 'etherTx/REVERT',
};

export function etherTxError(status: EtherTxStatus, statusMessage: string): EtherTxErrorAction {
  return {
    type: actionTypes.etherTxError,
    payload: { status, statusMessage },
  };
}

export function invalidateEtherTx(statusMessage: string): InvalidateEtherTxAction {
  return {
    type: actionTypes.invalidateEtherTx,
    payload: { statusMessage },
  };
}

export function validateEtherTx(statusMessage: string, gas: number): ValidateEtherTxAction {
  return {
    type: actionTypes.validateEtherTx,
    payload: { statusMessage, gas },
  };
}

export function sendEtherTx(hash: string): SendEtherTxAction {
  return {
    type: actionTypes.sendEtherTx,
    payload: { hash },
  };
}

export function revertEtherTx(statusMessage: string, receipt: TxReceipt): RevertEtherTxAction {
  return {
    type: actionTypes.revertEtherTx,
    payload: { statusMessage, receipt },
  };
}

export function confirmEtherTx(receipt: TxReceipt): ConfirmEtherTxAction {
  return {
    type: actionTypes.confirmEtherTx,
    payload: { receipt },
  };
}

export default actionTypes;
