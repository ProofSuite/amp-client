//@flow
import type { TxReceipt } from '../../types/common';

const actionTypes = {
  confirm: 'convertTokensForm/CONFIRM',
  sendConvertTx: 'convertTokensForm/SEND_CONVERT_TX',
  revertConvertTx: 'convertTokensForm/REVERT_CONVERT_TX',
  confirmConvertTx: 'convertTokensForm/CONFIRM_CONVERT_TX',
  sendAllowTx: 'convertTokensForm/SEND_ALLOW_TX',
  revertAllowTx: 'convertTokensForm/REVERT_ALLOW_TX',
  confirmAllowTx: 'convertTokensForm/CONFIRM_ALLOW_TX'
};

export function confirm(tokenSymbol: string) {
  return {
    type: actionTypes.confirm,
    payload: { tokenSymbol }
  };
}

export function sendConvertTx(tokenSymbol: string, hash: string) {
  return {
    type: actionTypes.sendConvertTx,
    payload: { tokenSymbol, hash },
  };
}

export function revertConvertTx(tokenSymbol: string, receipt: TxReceipt) {
  return {
    type: actionTypes.revertConvertTx,
    payload: { tokenSymbol, receipt },
  };
}

export function confirmConvertTx(tokenSymbol: string, receipt: TxReceipt) {
  return {
    type: actionTypes.confirmConvertTx,
    payload: { tokenSymbol, receipt },
  };
}

export function sendAllowTx(tokenSymbol: string, hash: string) {
  return {
    type: actionTypes.sendAllowTx,
    payload: { tokenSymbol, hash },
  };
}

export function revertAllowTx(tokenSymbol: string, receipt: TxReceipt) {
  return {
    type: actionTypes.revertAllowTx,
    payload: { tokenSymbol, receipt },
  };
}

export function confirmAllowTx(tokenSymbol: string, receipt: TxReceipt) {
  return {
    type: actionTypes.confirmAllowTx,
    payload: { tokenSymbol, receipt },
  };
}

export default actionTypes;
