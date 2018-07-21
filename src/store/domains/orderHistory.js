// @flow
import type { OrderHistoryState } from '../../types/orderHistory';

const initialState: OrderHistoryState = {
  orderHistory: [{}],
  userOrderHistory: [{}],
  loading: true,
  decimals: 7,
  authenticated: false,
};

export const initialized = () => {
  const event = (state: OrderHistoryState = initialState) => state;
  return event;
};

export const saveData = (data: OrderHistoryState) => {
  const event = (state: OrderHistoryState) => ({
    ...state,
    loading: data.loading,
    decimals: data.decimals,
    orderHistory: data.orderHistory,
    userOrderHistory: data.userOrderHistory,
    authenticated: data.authenticated,
  });
  return event;
};

export default function model(state: OrderHistoryState) {
  return {
    getState: () => state,
  };
}
