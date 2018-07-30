// @flow
import type { OHLCVState } from '../../types/ohlcv';

const initialState: OHLCVState = {
  ohlcvData: [],
  pair: '',
  pairId: '',
};

export const initialized = () => {
  const event = (state: OHLCVState = initialState) => state;
  return event;
};

export const savedOHLCVData = (ohlcv: Array<Array<Object>>) => {
  const event = (state: OHLCVState) => ({
    ...state,
    ohlcvData: ohlcv,
  });
  return event;
};

export default function model(state: OHLCVState) {
  return {
    getState: () => state,
    getOHLCVData: () => state.ohlcvData,
    pair: () => state.pair,
    pairId: () => state.pairId,
  };
}
