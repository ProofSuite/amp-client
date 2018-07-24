import type { OrderHistoryState } from '../../types/orderHistory';

const initialState: OrderHistoryState = {
  orderHistory: [{}],
  userOrderHistory: [{}],
  authenticated: false,
};

export const initialized = () => {
  const event = (state: OrderHistoryState = initialState) => state;
  return event;
};

export const dataSaved = (data: OrderHistoryState) => {
  const event = (state: OrderHistoryState) => ({
    ...state,
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
