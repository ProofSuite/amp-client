// @flow
export type AccountBalancesState = { +[string]: string };

export type SubscribeAccountBalanceAction = {
  type: 'accountBalances/SUBSCRIBE_BALANCE',
  payload: { symbol: string },
};

export type UpdateAccountBalanceAction = {
  type: 'accountBalances/UPDATE_BALANCE',
  payload: { symbol: string, balance: string },
};

export type UnsubscribeAccountBalanceAction = {
  type: 'accountBalances/UNSUBSCRIBE_BALANCE',
  payload: { symbol: string },
};

export type AccountBalancesEvent = any => AccountBalancesState => AccountBalancesState;
export type AccountBalancesAction =
  | SubscribeAccountBalanceAction
  | UpdateAccountBalanceAction
  | UnsubscribeAccountBalanceAction;
