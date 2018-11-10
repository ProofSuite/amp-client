// @flow
export type AccountBalanceState = {
  symbol: string,
  balance: string,
  subscribed: boolean,
  allowance: string,
};

export type AccountBalancesState = { +[string]: AccountBalanceState };

export type AccountBalance = {
  symbol: string,
  balance: string,
  allowance: string,
};

export type AccountAllowance = {
  symbol: string,
  allowance: string | 'pending',
};

export type AccountAllowances = Array<AccountAllowance>;
export type AccountBalances = Array<AccountBalance>;
export type AccountBalancesMap = { [string]: AccountBalance }

export type SubscribeAccountBalanceAction = {
  type: 'accountBalances/SUBSCRIBE_BALANCE',
  payload: { symbol: string },
};

export type UpdateAccountBalanceAction = {
  type: 'accountBalances/UPDATE_BALANCE',
  payload: AccountBalance,
};

export type UnsubscribeAccountBalanceAction = {
  type: 'accountBalances/UNSUBSCRIBE_BALANCE',
  payload: { symbol: string },
};

export type UpdateAccountBalancesAction = {
  type: 'accountBalances/UPDATE_BALANCES',
  payload: { balances: AccountBalances },
};

export type UpdateAccountAllowanceAction = {
  type: 'accountBalances/UPDATE_ALLOWANCE',
  payload: AccountAllowance,
};

export type UpdateAccountAllowancesAction = {
  type: 'accountBalances/UPDATE_ALLOWANCES',
  payload: { allowances: AccountAllowances },
};

export type ClearAccountBalancesAction = {
  type: 'accountBalances/CLEAR_BALANCES',
};

export type AccountBalancesEvent = any => AccountBalancesState => AccountBalancesState;

export type AccountBalancesAction =
  | SubscribeAccountBalanceAction
  | UpdateAccountBalanceAction
  | UpdateAccountBalancesAction
  | UpdateAccountAllowanceAction
  | UpdateAccountAllowancesAction
  | UnsubscribeAccountBalanceAction;
