// @flow
import OrderHistoryModel from '../domains/orderHistory';
import type { State, ThunkAction } from '../../types';

export default function getOrderHistoryModel(state: State) {
  return OrderHistoryModel(state.orderHistory);
}

export const defaultFunction = (): ThunkAction => {
  return async (dispatch, getState) => {};
};
