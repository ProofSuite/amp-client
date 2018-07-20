// @flow

import type { AccountBalancesState, AccountBalances, AccountAllowances } from '../../types/accountBalances';

const initialState = {};

export function initialized() {
  const initialState = {};
  const event = (state: AccountBalancesState = initialState) => state;

  return event;
}

export function subscribed(symbol: string) {
  const event = (state: AccountBalancesState) => ({
    ...state,
    [symbol]: {
      balance: state[symbol] ? state[symbol].balance : null,
      symbol: symbol,
      subscribed: true,
    },
  });
  return event;
}

export function updated(accountBalances: AccountBalances) {
  const event = (state: AccountBalancesState) => {
    let newState = accountBalances.reduce((result, item) => {
      result[item.symbol] = {
        ...state[item.symbol],
        symbol: item.symbol,
        balance: item.balance,
        subscribed: state[item.symbol] ? state[item.symbol].subscribed : false,
      };
      return result;
    }, {});

    return {
      ...state,
      ...newState,
    };
  };

  return event;
}

export function allowancesUpdated(allowances: AccountAllowances) {
  const event = (state: AccountBalancesState) => {
    let newState = allowances.reduce((result, item) => {
      result[item.symbol] = {
        ...state[item.symbol],
        symbol: item.symbol,
        allowance: item.allowance,
      };
      return result;
    }, {});

    return {
      ...state,
      ...newState,
    };
  };

  return event;
}

export function unsubscribed(symbol: string) {
  const event = (state: AccountBalancesState) => ({
    ...state,
    [symbol]: {
      ...state[symbol],
      subscribed: false,
    },
  });

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
      return state[symbol] ? state[symbol].balance : null;
    },
    isSubscribed(symbol: string) {
      return state[symbol] ? state[symbol].subscribed : false;
    },
    isAllowed(symbol: string) {
      return state[symbol] ? state[symbol].allowance === -1 : false;
    },
    balancesArray() {
      return Object.values(state).map(item => {
        return {
          symbol: item.symbol,
          balance: item.balance,
          allowed: item.allowance ? item.allowance === -1 : false,
        };
      });
    },
  };
}
