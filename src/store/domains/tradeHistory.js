// @flow
import type { TradeHistoryState } from '../../types/tradeHistory';

const initialState: TradeHistoryState = {
  marketTradeHistory: [{}],
  userTradeHistory: [{}],
};

export const initialized = () => {
  const event = (state: TradeHistoryState = initialState) => state;
  return event;
};

export const dataSaved = (data: TradeHistoryState) => {
  const event = (state: TradeHistoryState) => ({
    ...state,
    marketTradeHistory: data.marketTradeHistory,
    userTradeHistory: data.userTradeHistory,
  });
  return event;
};

export default function model(state: TradeHistoryState) {
  return {
    getState: () => state,
    getMarketTradeHistory: () => state.marketTradeHistory,
    getUserTradeHistory: () => state.userTradeHistory,
  };
}
