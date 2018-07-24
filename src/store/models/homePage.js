// @flow
import HomePageModel from '../domains/homePage';
import type { LoadDataParams } from '../../types/homePage';
import type { State, ThunkAction } from '../../types';
import { getData } from '../services/homePage';
import * as ohlcvActionCreators from '../actions/ohlcv';
import * as orderBookActionCreators from '../actions/orderBook';
import * as tradeHistoryActionCreators from '../actions/tradeHistory';

import * as orderList from '../../jsons/ordersList.json';
import * as tradeHistory from '../../jsons/tradeHistory.json';

export default function getHomePageModel(state: State) {
  return HomePageModel(state.homePage);
}

const orderBookData = {
  buyOrderList: orderList.list,
  sellOrderList: orderList.list,
  baseToken: 'ETH',
  quoteToken: 'USDT',
  loading: false,
  decimals: 7,
};
const tradeHistoryData = {
  tradeHistory: tradeHistory.list,
};

export const loadData = ({ tokenId }: LoadDataParams): ThunkAction => {
  return async (dispatch, getState) => {
    let ohlcvData = await getData();
    dispatch(ohlcvActionCreators.saveData(ohlcvData));

    dispatch(orderBookActionCreators.saveData(orderBookData));
    dispatch(tradeHistoryActionCreators.saveData(tradeHistoryData));
  };
};
