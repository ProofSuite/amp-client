import type { OrderHistoryState } from '../../types/orderHistory';

const initialState: OrderHistoryState = {
  marketOrderHistory: [{}],
  userOrderHistory: [{}],
};

export const initialized = () => {
  const event = (state: OrderHistoryState = initialState) => state;
  return event;
};

export const dataSaved = (data: OrderHistoryState) => {
  const event = (state: OrderHistoryState) => ({
    ...state,
    marketOrderHistory: data.marketOrderHistory,
    userOrderHistory: data.userOrderHistory,
  });
  return event;
};

export default function model(state: OrderHistoryState) {
  return {
    getState: () => state,
    getMarketOrderHistory: () => state.marketOrderHistory,
    getUserOrderHistory: () => state.userOrderHistory,
  };
}
