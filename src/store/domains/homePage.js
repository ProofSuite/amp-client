// @flow
import type { HomeState } from '../../types/homePage';

const initialState: HomeState = {};
//
export const initialized = () => {
  const event = (state: HomeState = initialState) => state;
  return event;
};

export default function model(state: HomeState) {
  return {
    getState: () => state,
  };
}
