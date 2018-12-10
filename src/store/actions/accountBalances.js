// @flow
import type {
  AccountAllowances,
  AccountBalances,
  ClearAccountBalancesAction,
  SubscribeAccountBalanceAction,
  UnsubscribeAccountBalanceAction,
  UpdateAccountAllowanceAction,
  UpdateAccountAllowancesAction,
  UpdateAccountBalanceAction,
  UpdateAccountBalancesAction,
} from '../../types/accountBalances';

const actionTypes = {
  subscribeBalance: 'accountBalances/SUBSCRIBE_BALANCE',
  updateBalance: 'accountBalances/UPDATE_BALANCE',
  updateAllowance: 'accountBalances/UPDATE_ALLOWANCE',
  updateBalances: 'accountBalances/UPDATE_BALANCES',
  updateAllowances: 'accountBalances/UPDATE_ALLOWANCES',
  unsubscribeBalance: 'accountBalances/UNSUBSCRIBE_BALANCE',
  clearBalances: 'accountBalances/CLEAR_BALANCES',
};

export function subscribeBalance(symbol: string): SubscribeAccountBalanceAction {
  return {
    type: actionTypes.subscribeBalance,
    payload: { symbol },
  };
}

export function updateBalance(symbol: string, balance: string): UpdateAccountBalanceAction {
  return {
    type: actionTypes.updateBalance,
    payload: { symbol, balance },
  };
}

export function updateBalances(balances: AccountBalances): UpdateAccountBalancesAction {
  return {
    type: actionTypes.updateBalances,
    payload: { balances },
  };
}

export function updateAllowance(symbol: string, allowance: string): UpdateAccountAllowanceAction {
  return {
    type: actionTypes.updateAllowance,
    payload: { symbol, allowance },
  };
}

export function updateAllowances(allowances: AccountAllowances): UpdateAccountAllowancesAction {
  return {
    type: actionTypes.updateAllowances,
    payload: { allowances },
  };
}

export function unsubscribeBalance(symbol: string): UnsubscribeAccountBalanceAction {
  return {
    type: actionTypes.unsubscribeBalance,
    payload: { symbol },
  };
}

export function clearBalances(): ClearAccountBalancesAction {
  return {
    type: actionTypes.clearBalances,
  };
}

export default actionTypes;
