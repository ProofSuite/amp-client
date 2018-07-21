// @flow
import OrderBookModel from '../domains/orderBook';
import type { State, ThunkAction } from '../../types';

export default function getOrderBookModel(state: State) {
  return OrderBookModel(state.orderBook);
}

export const defaultFunction = (): ThunkAction => {
  return async (dispatch, getState) => {};
};
