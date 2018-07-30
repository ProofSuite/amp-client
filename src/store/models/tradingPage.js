// @flow
import TradingPageModel from '../domains/tradingPage';
import type { LoadDataParams } from '../../types/tradingPage';
import type { State, ThunkAction } from '../../types';
import { getData } from '../services/homePage';
import { getTokenPairData } from '../services/api';

import * as tradingPageActionCreators from '../actions/tradingPage';

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

export default function getTradingPageModel(state: State) {
  return TradingPageModel(state.tradingPage);
}

const orderBookData = {
  orderList: orderList.list,
  baseToken: 'ETH',
  quoteToken: 'USDT',
};

const tradeHistoryData = {
  userTradeHistory: tradeHistory.list,
  marketTradeHistory: tradeHistory.list,
};

const orderHistoryData = {
  orderHistory: orderHistory.list,
  userOrderHistory: orderHistory.list,
};

const depthChartData = {
  data: bidAsk.list,
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
};

export const loadData = ({ tokenId }: LoadDataParams): ThunkAction => {
  return async (dispatch, getState) => {
    let ohlcvData = await getData();
    dispatch(ohlcvActionCreators.saveData(ohlcvData));

    let tokenPairData = await getTokenPairData();
    dispatch(tradingPageActionCreators.updateTokenPairData(tokenPairData));

    dispatch(orderBookActionCreators.saveData(orderBookData));
    dispatch(tradeHistoryActionCreators.saveData(tradeHistoryData));
    dispatch(orderHistoryActionCreators.saveData(orderHistoryData));
    dispatch(depthChartActionCreators.saveData(depthChartData));
    dispatch(orderFormActionCreators.saveData(orderFormData));
  };
};
