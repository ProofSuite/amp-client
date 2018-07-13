// @flow
import { objectWithoutKey } from '../../helpers/utils';

import type { AccountBalancesState } from '../../types/accountBalances';

const initialState = {};

export function initialized() {
  const initialState = {};
  const event = (state: AccountBalancesState = initialState) => state;

  return event;
}

export function subscribed(symbol: string) {
  const event = (state: AccountBalancesState) => ({
    ...state,
    [symbol]: null,
  });
  return event;
}

export function updated(symbol: string, balance: number) {
  const event = (state: AccountBalancesState) => ({
    ...state,
    [symbol]: balance,
  });

  return event;
}

export function unsubscribed(symbol: string) {
  const event = (state: AccountBalancesState) => objectWithoutKey(state, symbol);
  return event;
}

export function cleared() {
  const event = (state: AccountBalancesState) => {};
  return event;
}

export default function model(state: AccountBalancesState) {
  return {
    balances() {
      return state;
    },
    get(symbol: string) {
      if (!this.isSubscribed(symbol)) return null;
      return state[symbol];
    },
    isSubscribed(symbol: string) {
      return typeof state[symbol] !== 'undefined';
    },
  };
}
