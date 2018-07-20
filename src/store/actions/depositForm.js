//@flow
import type {
  DepositAction,
  ConfirmAction,
  SendConvertTxAction,
  RevertConvertTxAction,
  ConfirmConvertTxAction,
  SendAllowTxAction,
  RevertAllowTxAction,
  ConfirmAllowTxAction,
  SubscribeBalanceAction,
  UpdateBalanceAction,
  UpdateBalancesAction,
  UpdateAllowanceAction,
  UpdateAllowancesAction,
  UnsubscribeBalanceAction,
} from '../../types/depositForm';

import type { TxReceipt } from '../../types/common';
import type { AccountBalances, AccountAllowances } from '../../types/accountBalances';

const actionTypes = {
  deposit: 'depositForm/DEPOSIT',
  confirm: 'depositForm/CONFIRM',
  sendConvertTx: 'depositForm/SEND_CONVERT_TX',
  revertConvertTx: 'depositForm/REVERT_CONVERT_TX',
  confirmConvertTx: 'depositForm/CONFIRM_CONVERT_TX',
  sendAllowTx: 'depositForm/SEND_ALLOW_TX',
  revertAllowTx: 'depositForm/REVERT_ALLOW_TX',
  confirmAllowTx: 'depositForm/CONFIRM_ALLOW_TX',
  subscribeBalance: 'depositForm/SUBSCRIBE_BALANCE',
  updateBalance: 'depositForm/UPDATE_BALANCE',
  updateAllowance: 'depositForm/UPDATE_ALLOWANCE',
  updateBalances: 'depositForm/UPDATE_BALANCES',
  updateAllowances: 'depositForm/UPDATE_ALLOWANCES',
  unsubscribeBalance: 'depositForm/UNSUBSCRIBE_BALANCE',
};

export function deposit(): DepositAction {
  return {
    type: actionTypes.deposit,
  };
}

export function confirm(): ConfirmAction {
  return {
    type: actionTypes.confirm,
  };
}

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

export function sendAllowTx(hash: string): SendAllowTxAction {
  return {
    type: actionTypes.sendAllowTx,
    payload: { hash },
  };
}

export function revertAllowTx(receipt: TxReceipt): RevertAllowTxAction {
  return {
    type: actionTypes.revertAllowTx,
    payload: { receipt },
  };
}

export function confirmAllowTx(receipt: TxReceipt): ConfirmAllowTxAction {
  return {
    type: actionTypes.confirmAllowTx,
    payload: { receipt },
  };
}

export function subscribeBalance(symbol: string): SubscribeBalanceAction {
  return {
    type: actionTypes.subscribeBalance,
    payload: { symbol },
  };
}

export function updateBalance(symbol: string, balance: number): UpdateBalanceAction {
  return {
    type: actionTypes.updateBalance,
    payload: { symbol, balance },
  };
}

export function updateBalances(balances: AccountBalances): UpdateBalancesAction {
  return {
    type: actionTypes.updateBalances,
    payload: { balances },
  };
}

export function updateAllowance(symbol: string, allowed: boolean): UpdateAllowanceAction {
  return {
    type: actionTypes.updateAllowance,
    payload: { symbol, allowed },
  };
}

export function updateAllowances(allowances: AccountAllowances): UpdateAllowancesAction {
  return {
    type: actionTypes.updateAllowances,
    payload: { allowances },
  };
}

export function unsubscribeBalance(symbol: string): UnsubscribeBalanceAction {
  return {
    type: actionTypes.unsubscribeBalance,
    payload: { symbol },
  };
}

export default actionTypes;
