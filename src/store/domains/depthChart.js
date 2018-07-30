// @flow
import type { DepthChartState } from '../../types/depthChart';

const initialState: DepthChartState = {
  data: [{}],
  title: '',
};

export const initialized = () => {
  const event = (state: DepthChartState = initialState) => state;
  return event;
};

export const saveData = (data: DepthChartState) => {
  const event = (state: DepthChartState) => ({
    ...state,
    data: data.data,
    title: data.title,
  });
  return event;
};

export default function model(state: DepthChartState) {
  return {
    getState: () => state,
  };
}
