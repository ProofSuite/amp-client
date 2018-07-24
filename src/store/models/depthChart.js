// @flow
import DepthChartModel from '../domains/depthChart';
import type { State, ThunkAction } from '../../types';

export default function getDepthChartModel(state: State) {
  return DepthChartModel(state.depthChart);
}

export const defaultFunction = (): ThunkAction => {
  return async (dispatch, getState) => {};
};
