// @flow
import type { OrderBookState } from '../../types/orderBook';

const initialState: OrderBookState = {
  sellOrderList: [{ price: 0, amount: 0 }],
  buyOrderList: [{ price: 0, amount: 0 }],
  quoteToken: '',
  baseToken: '',
};

export const initialized = () => {
  const event = (state: OrderBookState = initialState) => state;
  return event;
};

export const dataSaved = (data: OrderBookState) => {
  console.log('OrderBook data: ', data);
  const event = (state: OrderBookState) => ({
    ...state,
    sellOrderList: data.sellOrderList,
    buyOrderList: data.buyOrderList,
    quoteToken: data.quoteToken,
    baseToken: data.baseToken,
  });
  return event;
};

export default function model(state: OrderBookState) {
  return {
    getState: () => state,
    getSellOrderList: () => state.sellOrderList,
    getBuyOrderList: () => state.buyOrderList,
    getQuoteToken: () => state.quoteToken,
    getBaseToken: () => state.baseToken,
  };
}
