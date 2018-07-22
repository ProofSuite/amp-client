// @flow
import HomePageModel from '../domains/homePage';
import type { LoadDataParams } from '../../types/homePage';
import type { State, ThunkAction } from '../../types';
import { getData } from '../services/homePage';

import * as ohlcvActionCreators from '../actions/ohlcv';
import * as orderBookActionCreators from '../actions/orderBook';
import * as tradeHistoryActionCreators from '../actions/tradeHistory';
import * as orderHistoryActionCreators from '../actions/orderHistory';
import * as depthChartActionCreators from '../actions/depthChart';
import * as orderFormActionCreators from '../actions/orderForm';

import * as orderList from '../../jsons/ordersList.json';
import * as tradeHistory from '../../jsons/tradeHistory.json';
import * as orderHistory from '../../jsons/orderHistory.json';
import * as bidAsk from '../../jsons/bidAsk.json';

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
  loading: false,
  decimals: 7,
  loggedIn: true,
};
const orderHistoryData = {
  orderHistory: orderHistory.list,
  userOrderHistory: orderHistory.list,
  loading: false,
  decimals: 7,
  authenticated: true,
};
const depthChartData = {
  data: bidAsk.list,
  loading: false,
  title: 'ETJ/BTC',
};
const orderFormData = {
  askPrice: 0.25,
  bidPrice: 0.1,
  totalQuoteBalance: 100,
  totalBaseBalance: 1000,
  formName: 'Sell',
  quoteToken: 'ETH',
  baseToken: 'USD',
  decimals: 7,
  loggedIn: false,
};

export const loadData = ({ tokenId }: LoadDataParams): ThunkAction => {
  return async (dispatch, getState) => {
    let ohlcvData = await getData();
    dispatch(ohlcvActionCreators.saveData(ohlcvData));

    dispatch(orderBookActionCreators.saveData(orderBookData));
    dispatch(tradeHistoryActionCreators.saveData(tradeHistoryData));
    dispatch(orderHistoryActionCreators.saveData(orderHistoryData));
    dispatch(depthChartActionCreators.saveData(depthChartData));
    dispatch(orderFormActionCreators.saveData(orderFormData));
  };
};
