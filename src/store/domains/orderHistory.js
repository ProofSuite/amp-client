import type Props from '../../types/orderHistory';

const initialState: Props = {
  orderHistory: [{}],
  userOrderHistory: [{}],
  authenticated: false,
};

export const initialized = () => {
  const event = (state: Props = initialState) => state;
  return event;
};

export const dataSaved = (data: Props) => {
  const event = (state: Props) => ({
    ...state,
    orderHistory: data.orderHistory,
    userOrderHistory: data.userOrderHistory,
    authenticated: data.authenticated,
  });
  return event;
};

export default function model(state: Props) {
  return {
    getState: () => state,
  };
}
