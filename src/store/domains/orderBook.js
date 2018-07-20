// @flow
import type { OrderBookState } from '../../types/orderBook';

const initialState: OrderBookState = {
  loading: false,
  decimals: 0,
  sellOrderList: [{}],
  buyOrderList: [{}],
  quoteToken: '',
  baseToken: '',
};

export const initialized = () => {
  const event = (state: OrderBookState = initialState) => state;
  return event;
};

export const saveData = (data: OrderBookState) => {
  console.log('OrderBook data: ', data);
  const event = (state: OrderBookState) => ({
    ...state,
    loading: false,
    decimals: data.decimals,
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
  };
}
