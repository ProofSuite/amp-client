// @flow
import type { AccountAllowances, AccountBalances, AccountBalancesState } from '../../types/accountBalances';
// eslint-disable-next-line
const initialState = {};
const MAX_ALLOWANCE = '115792089237316195423570985008687907853269984665640564039457.584007913129639935';

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

export default function accountBalancesDomain(state: AccountBalancesState) {
  return {
    balances() {
      return state;
    },
    etherBalance() {
      return state['ETH'] ? state['ETH'].balance : null;
    },
    tokenBalance(symbol: string) {
      return state[symbol] ? state[symbol].balance : null;
    },
    get(symbol: string) {
      return state[symbol] ? state[symbol].balance : null;
    },
    isSubscribed(symbol: string) {
      return state[symbol] ? state[symbol].subscribed : false;
    },
    isAllowed(symbol: string) {
      return state[symbol] ? state[symbol].allowance === MAX_ALLOWANCE : false;
    },
    isAllowancePending(symbol: string) {
      return state[symbol] ? state[symbol].allowance === 'pending' : false;
    },
    getBalancesAndAllowances(tokens: Array<Object>) {
      return (tokens: any).map(token => {
        return {
          ...token,
          balance: state[token.symbol] ? state[token.symbol].balance : null,
          allowed: state[token.symbol] && state[token.symbol].allowance === MAX_ALLOWANCE,
          allowancePending: state[token.symbol] && state[token.symbol].allowance === 'pending',
        };
      });
    },
    depositTableData() {
      return (Object.values(state): any).map(item => {
        return {
          symbol: item.symbol,
          balance: item.balance,
          allowed: item.allowance === MAX_ALLOWANCE,
          allowancePending: item.allowance === 'pending',
        };
      });
    },
    balancesArray() {
      return (Object.values(state): any).map(item => {
        return {
          symbol: item.symbol,
          balance: item.balance,
          allowed: parseFloat(item.allowance) > 0,
        };
      });
    },
  };
}
