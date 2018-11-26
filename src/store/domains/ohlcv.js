// @flow
import type { OHLCVState } from '../../types/ohlcv';

const initialState: OHLCVState = {
  ohlcvData: null,
  noOfCandles: 150,
  currentTimeSpan: { name: '1 Hour', label: '1h' },
  currentDuration: { name: '1 Year', label: '1Y' },
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
    ohlcvData: null,
  });
  return event;
};

export const savedDuration = (currentDuration: Object) => {
  const event = (state: OHLCVState) => ({
    ...state,
    currentDuration: currentDuration,
    ohlcvData: null,
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
    ohlcvData: null,
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
