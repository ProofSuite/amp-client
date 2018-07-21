// @flow
import type { TradeHistoryState } from '../../types/tradeHistory';

const initialState: TradeHistoryState = {
  tradeHistory: [{}],
  loading: true,
  decimals: 7,
  loggedIn: false,
};

export const initialized = () => {
  const event = (state: TradeHistoryState = initialState) => state;
  return event;
};

export const saveData = (data: TradeHistoryState) => {
  const event = (state: TradeHistoryState) => ({
    ...state,
    loading: false,
    decimals: data.decimals,
    tradeHistory: data.tradeHistory,
    loggedIn: data.loggedIn,
  });
  return event;
};

export default function model(state: TradeHistoryState) {
  return {
    getState: () => state,
  };
}
