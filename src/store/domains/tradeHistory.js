// @flow
import type { TradeHistoryState } from '../../types/tradeHistory';

const initialState: TradeHistoryState = {
  tradeHistory: [{}],
};

export const initialized = () => {
  const event = (state: TradeHistoryState = initialState) => state;
  return event;
};

export const dataSaved = (data: TradeHistoryState) => {
  const event = (state: TradeHistoryState) => ({
    ...state,
    tradeHistory: data.tradeHistory,
  });
  return event;
};

export default function model(state: TradeHistoryState) {
  return {
    getState: () => state,
    getTradeHistory: () => state.tradeHistory,
  };
}
