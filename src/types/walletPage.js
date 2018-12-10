// @flow

import type { AccountAllowance, AccountAllowances, AccountBalance, AccountBalances } from './accountBalances';
import type { TokenPair } from './tokens'

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

export type UpdateAllowancePendingAction = {
  type: 'walletPage/UPDATE_ALLOWANCE_PENDING',
  payload: { symbol: string },
}

export type UpdateAccountAllowancesAction = {
  type: 'walletPage/UPDATE_ALLOWANCES',
  payload: { allowances: AccountAllowances },
};

export type UpdateCurrentPairAction = {
  type: 'walletPage/UPDATE_CURRENT_PAIR',
  payload: { pair: string },
};

export type UpdateTokenPairsAction = {
  type: 'walletPage/UPDATE_TOKEN_PAIRS',
  payload: { pairs: Array<TokenPair> }
}

export type ClearAccountBalancesAction = {
  type: 'walletPage/CLEAR_BALANCES',
};

export type UpdateExchangeAddressAction = {
  type: 'walletPage/UPDATE_EXCHANGE_ADDRESS',
  payload: { exchangeAddress: string }
}

export type WalletPageActions =
  | UpdateCurrentPairAction
  | UpdateAccountBalanceAction
  | UpdateAccountBalancesAction
  | UpdateAccountAllowanceAction
  | UpdateAccountAllowancesAction
  | UnsubscribeAccountBalanceAction
  | UpdateTokenPairsAction
  | UpdateExchangeAddressAction
  | UpdateAllowancePendingAction
