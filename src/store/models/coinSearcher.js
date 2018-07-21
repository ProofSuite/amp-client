// @flow
import CoinSearcherModel from '../domains/coinSearcher';
import type { State, ThunkAction } from '../../types';
import * as actionCreators from '../actions/coinSearcher';
import { getObjectFromProperty } from '../../utils/helpers';

export default function getCoinSearcherModel(state: State) {
  return CoinSearcherModel(state.coinSearcher);
}

export const defaultFunction = (): ThunkAction => {
  return async (dispatch, getState) => {
    console.log(getCoinSearcherModel(getState()).getState());
  };
};

export const toggleStar = (data: Object): ThunkAction => {
  return async (dispatch, getState) => {
    const getCoinsList = getCoinSearcherModel(getState()).getCoinsList();
    let coin = getObjectFromProperty(getCoinsList.btc, 'name', data);
    coin.starred = !coin.starred;
    return dispatch(actionCreators.toggleStar(getCoinsList));
  };
};
