// @flow
import OHLCVModel from '../domains/ohlcv';
import type { SendTimelineParams } from '../../types/ohlcv';
import type { State, ThunkAction } from '../../types';

export default function getOHLCVModel(state: State) {
  return OHLCVModel(state.ohlcv);
}
export const updateTimeLine = ({ pair, pairId, duration, time }: SendTimelineParams): ThunkAction => {
  return async (dispatch, getState) => {
    console.log(pair, pairId, duration, time);
  };
};
