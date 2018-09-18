// @flow

import type { AccountAllowance, AccountAllowances, AccountBalance, AccountBalances } from './accountBalances';

export type UpdateAccountBalanceAction = {
  type: 'walletPage/UPDATE_BALANCE',
  payload: AccountBalance,
};

export type UnsubscribeAccountBalanceAction = {
  type: 'walletPage/UNSUBSCRIBE_BALANCE',
  payload: { symbol: string },
};

export type UpdateAccountBalancesAction = {
  type: 'walletPage/UPDATE_BALANCES',
  payload: { balances: AccountBalances },
};

export type UpdateAccountAllowanceAction = {
  type: 'walletPage/UPDATE_ALLOWANCE',
  payload: AccountAllowance,
};

export type UpdateAccountAllowancesAction = {
  type: 'walletPage/UPDATE_ALLOWANCES',
  payload: { allowances: AccountAllowances },
};
export type UpdateSingleAllowanceAction = {
  type: 'walletPage/UPDATE_SINGLE_ALLOWANCE',
  payload: { allowance: string, tokenSymbol: string },
};

export type ClearAccountBalancesAction = {
  type: 'walletPage/CLEAR_BALANCES',
};

export type WalletPageActions =
  | UpdateAccountBalanceAction
  | UpdateAccountBalancesAction
  | UpdateAccountAllowanceAction
  | UpdateAccountAllowancesAction
  | UpdateSingleAllowanceAction
  | UnsubscribeAccountBalanceAction;
