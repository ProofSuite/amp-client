// @flow
import type { HomeState } from '../../types/homePage';

const initialState: HomeState = {
  loading: false,
  decimals: 0,
  quoteToken: '',
  baseToken: '',
  sellOrderList: [],
  buyOrderList: [],
  ohlcvData: [],
  orderHistory: [],
  tradeHistory: [],
};
//
export const initialized = () => {
  const event = (state: HomeState = initialState) => state;
  return event;
};

export default function model(state: HomeState) {
  return {
    getState: () => state,
    isLoading: () => state.loading,
    getDecimals: () => state.decimals,
    getQuoteToken: () => state.quoteToken,
    getBaseToken: () => state.baseToken,
    getSellOrderList: () => state.sellOrderList,
    getBuyOrderList: () => state.buyOrderList,
    getOhlcvData: () => state.ohlcvData,
    getOrderHistory: () => state.orderHistory,
    getTradeHistory: () => state.tradeHistory,
  };
}
