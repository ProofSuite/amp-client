// @flow
import type { OrderBookState } from '../../types/orderBook';

const initialState: OrderBookState = {
  orderList: [{ price: 0, amount: 0, type: '' }],
  quoteToken: '',
  baseToken: '',
  bookName: '',
};

export const initialized = () => {
  const event = (state: OrderBookState = initialState) => state;
  return event;
};

export const dataSaved = (data: OrderBookState) => {
  const event = (state: OrderBookState) => ({
    ...state,
    orderList: data.orderList,
    quoteToken: data.quoteToken,
    baseToken: data.baseToken,
    bookName: data.bookName,
  });
  return event;
};

export default function model(state: OrderBookState) {
  return {
    getState: () => state,
    getOrderList: () => state.orderList,
    getQuoteToken: () => state.quoteToken,
    getBaseToken: () => state.baseToken,
    getBookName: () => state.bookName,
  };
}
