// @flow
import type { OHLCVState } from '../../types/ohlcv';

const initialState: OHLCVState = {
  ohlcvData: [],
  noOfCandles: 150,
  currentTimeSpan: { name: '1 min', label: '1m' },
  currentDuration: { name: '1 Hour', label: '1h' },
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

export const savedTimeSpan = (currentTimeSpan: Object) => {
  const event = (state: OHLCVState) => ({
    ...state,
    currentTimeSpan: currentTimeSpan,
  });
  return event;
};

export const savedDuration = (currentDuration: Object) => {
  const event = (state: OHLCVState) => ({
    ...state,
    currentDuration: currentDuration,
  });
  return event;
};

export const savedNoOfCandles = (noOfCandles: Object) => {
  const event = (state: OHLCVState) => ({
    ...state,
    noOfCandles: noOfCandles,
  });
  return event;
};

export const ohlcvReset = () => {
  const event = (state: OHLCVState) => ({
    ...state,
    ohlcvData: [],
  });

  return event;
};

export default function model(state: OHLCVState) {
  return {
    getState: () => state,
    getNoOfCandles: () => state.noOfCandles,
    getOHLCVData: () => state.ohlcvData,
  };
}
