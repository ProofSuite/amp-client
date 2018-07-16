//@flow
import type { DepositAction } from '../../types/depositForm';
import type { TxReceipt } from '../../types/common';

const actionTypes = {
  deposit: 'depositForm/DEPOSIT',
  confirm: 'depositForm/CONFIRM',
  sendConvertTx: 'depositForm/SEND_CONVERT_TX',
  revertConvertTx: 'depositForm/REVERT_CONVERT_TX',
  confirmConvertTx: 'depositForm/CONFIRM_CONVERT_TX',
  sendAllowTx: 'depositForm/SEND_ALLOW_TX',
  revertAllowTx: 'depositForm/REVERT_ALLOW_TX',
  confirmAllowTx: 'depositForm/CONFIRM_ALLOW_TX',
};

export function deposit(): DepositAction {
  return {
    type: actionTypes.deposit,
  };
}

export function confirm() {
  return {
    type: actionTypes.confirm,
  };
}

export function sendConvertTx(hash: string) {
  return {
    type: actionTypes.sendConvertTx,
    payload: { hash },
  };
}

export function revertConvertTx(receipt: TxReceipt) {
  return {
    type: actionTypes.revertConvertTx,
    payload: { receipt },
  };
}

export function confirmConvertTx(receipt: TxReceipt) {
  return {
    type: actionTypes.confirmConvertTx,
    payload: { receipt },
  };
}

export function sendAllowTx(hash: string) {
  return {
    types: actionTypes.sendAllowTx,
    payload: { hash },
  };
}

export function revertAllowTx(receipt: TxReceipt) {
  return {
    types: actionTypes.revertAllowTx,
    payload: { receipt },
  };
}

export function confirmAllowTx(receipt: TxReceipt) {
  return {
    types: actionTypes.confirmAllowTx,
    payload: { receipt },
  };
}

export default actionTypes;
