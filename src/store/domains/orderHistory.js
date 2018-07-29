import type { OrderHistoryState } from '../../types/orderHistory';

const initialState: Props = {
  orderHistory: [{}],
  userOrderHistory: [{}],
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
  });
  return event;
};

export default function model(state: OrderHistoryState) {
  return {
    getState: () => state,
    getOrderHistory: () => state.orderHistory,
    getUserOrderHistory: () => state.userOrderHistory,
  };
}
