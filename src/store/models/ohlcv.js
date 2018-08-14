// @flow
import OHLCVModel from '../domains/ohlcv';
import * as actionCreators from '../actions/ohlcv';
import { getData } from '../services/trading';
import type { SendTimelineParams } from '../../types/ohlcv';
import type { State, ThunkAction } from '../../types';

export default function getOHLCVModel(state: State) {
  return OHLCVModel(state.ohlcv);
}
export const updateTimeLine = ({ duration, time }: SendTimelineParams): ThunkAction => {
  return async (dispatch, getState) => {
    let candles = getNoOfCandles(duration) / timeToMinutes(time);
    let ohlcvData = await getData();

    return dispatch(actionCreators.saveData(ohlcvData.slice(ohlcvData.length - candles)));
  };
};
function timeToMinutes(time) {
  switch (time) {
    case '1m':
      return 1;

    case '5m':
      return 5;

    case '15m':
      return 15;

    case '30m':
      return 20;

    case '1h':
      return 60;

    case '4h':
      return 240;

    case '12h':
      return 720;

    case '1d':
      return 1440;

    case '7d':
      return 10080;

    case '1M':
      return 44640;

    default:
      return 0;
  }
}
function getNoOfCandles(duration) {
  switch (duration) {
    case '1h':
      return 60;

    case '4h':
      return 240;

    case '12h':
      return 720;

    case '1d':
      return 1440;

    case '3d':
      return 4320;

    case '7d':
      return 10080;

    case '1M':
      return 44640;

    case '3M':
      return 133920;

    case '6M':
      return 267840;

    case '1Y':
      return 535680;

    default:
      return 0;
  }
}
