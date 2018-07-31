// @flow
import type { Trades, TradesState } from '../../types/trades';

const initialState = {
  byTimestamp: {},
};

export const initialized = () => {
  const event = (state: TradesState = initialState) => state;
  return event;
};

export const tradesUpdated = (trades: Trades) => {
  const event = (state: TradesState) => {
    let newState = trades.reduce((result, item) => {
      result[item.time] = {
        ...state[item.time],
        ...item,
      };
      return result;
    }, {});

    return {
      ...state,
      byTimestamp: {
        ...state.byTimestamp,
        ...newState,
      },
    };
  };

  return event;
};

export const tradesDeleted = (trades: Trades) => {
  const event = (state: TradesState) => ({
    ...state,
    byTimestamp: Object.keys(state.byTimestamp)
      .filter(key => trades.indexOf(key) === -1)
      .reduce((result, current) => {
        result[current] = state.byTimestamp[current];
        return result;
      }, {}),
  });

  return event;
};

export default function tradesDomain(state: TradesState) {
  return {
    byTimestamp: () => state.byTimestamp,

    all: () => Object.values(state.byTimestamp),

    lastTrades: (n: number) => {
      let trades = Object.values(state.byTimestamp);
      let last = (trades: Trades).slice(Math.max(trades.length - n, 1));
      return last;
    },
  };
}
