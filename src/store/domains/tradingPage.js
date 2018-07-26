// @flow
import type { TradingState } from '../../types/tradingPage';

const initialState: TradingState = {};
//
export const initialized = () => {
  const event = (state: TradingState = initialState) => state;
  return event;
};

export default function model(state: TradingState) {
  return {
    getState: () => state,
  };
}
