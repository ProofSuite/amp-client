// @flow
import HomePageModel from '../domains/homePage';
import type { LoadDataParams } from '../../types/homePage';
import type { State, ThunkAction } from '../../types';
import { getData } from '../services/homePage';
import * as ohlcvActionCreators from '../actions/ohlcv';

export default function getHomePageModel(state: State) {
  return HomePageModel(state.homePage);
}

export const loadData = ({ tokenId }: LoadDataParams): ThunkAction => {
  return async (dispatch, getState) => {
    let ohlcvData = await getData();
    dispatch(ohlcvActionCreators.saveData(ohlcvData));
  };
};
