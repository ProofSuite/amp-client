//@flow
import type {
  ConfirmApproveTxAction,
  ConfirmConvertTxAction,
  RevertApproveTxAction,
  RevertConvertTxAction,
  SendApproveTxAction,
  SendConvertTxAction,
} from '../../types/getStartedModal';

import type { TxReceipt } from '../../types/common';

const actionTypes = {
  deposit: 'getStartedModal/DEPOSIT',
  confirm: 'getStartedModal/CONFIRM',
  sendConvertTx: 'getStartedModal/SEND_CONVERT_TX',
  revertConvertTx: 'getStartedModal/REVERT_CONVERT_TX',
  confirmConvertTx: 'getStartedModal/CONFIRM_CONVERT_TX',
  sendApproveTx: 'getStartedModal/SEND_APPROVE_TX',
  revertApproveTx: 'getStartedModal/REVERT_APPROVE_TX',
  confirmApproveTx: 'getStartedModal/CONFIRM_APPROVE_TX',
};

export function sendConvertTx(hash: string): SendConvertTxAction {
  return {
    type: actionTypes.sendConvertTx,
    payload: { hash },
  };
}

export function revertConvertTx(receipt: TxReceipt): RevertConvertTxAction {
  return {
    type: actionTypes.revertConvertTx,
    payload: { receipt },
  };
}

export function confirmConvertTx(receipt: TxReceipt): ConfirmConvertTxAction {
  return {
    type: actionTypes.confirmConvertTx,
    payload: { receipt },
  };
}

export function sendApproveTx(hash: string): SendApproveTxAction {
  return {
    type: actionTypes.sendApproveTx,
    payload: { hash },
  };
}

export function revertApproveTx(receipt: TxReceipt): RevertApproveTxAction {
  return {
    type: actionTypes.revertApproveTx,
    payload: { receipt },
  };
}

export function confirmApproveTx(receipt: TxReceipt): ConfirmApproveTxAction {
  return {
    type: actionTypes.confirmApproveTx,
    payload: { receipt },
  };
}

export default actionTypes;
