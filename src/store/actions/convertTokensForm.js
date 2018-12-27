//@flow
import type { TxReceipt } from '../../types/common';

const actionTypes = {
  confirm: 'convertTokensForm/CONFIRM',
  reset: 'convertTokensForm/RESET',
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

export function reset(tokenSymbol: string) {
  return {
    type: actionTypes.reset,
    payload: { tokenSymbol }
  };
}

export function sendConvertTx(tokenSymbol: string, tx: Tx) {
  return {
    type: actionTypes.sendConvertTx,
    payload: { tokenSymbol, hash: tx.hash, transactions: [ tx ] },
  };
}

export function revertConvertTx(tokenSymbol: string, tx: Tx) {
  return {
    type: actionTypes.revertConvertTx,
    payload: { tokenSymbol, receipt: tx.receipt, transactions: [ tx ] },
  };
}

export function confirmConvertTx(tokenSymbol: string, tx: Tx) {
  return {
    type: actionTypes.confirmConvertTx,
    payload: { tokenSymbol, receipt: tx.receipt, transactions: [ tx ] },
  };
}

export function sendAllowTx(tokenSymbol: string, tx: Tx ) {
  return {
    type: actionTypes.sendAllowTx,
    payload: { tokenSymbol, hash: tx.hash, transactions: [ tx ] },
  };
}

export function revertAllowTx(tokenSymbol: string, tx: Tx, message: string) {
  return {
    type: actionTypes.revertAllowTx,
    payload: { tokenSymbol, receipt: tx.receipt, transactions: [ tx ], message },
  };
}

export function confirmAllowTx(tokenSymbol: string, tx: Tx, message: string) {
  return {
    type: actionTypes.confirmAllowTx,
    payload: { tokenSymbol, receipt: tx.receipt, transactions: [ tx ], message },
  };
}

export default actionTypes;
