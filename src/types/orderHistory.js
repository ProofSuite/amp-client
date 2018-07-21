//@flow
export type Order = {
  time: number,
  type: string,
  amount: number,
  price: number,
};

export type OrderHistoryState = {
  orderHistory: Array<Order>,
  userOrderHistory: Array<Order>,
  loading: boolean,
  decimals: number,
  authenticated: boolean,
};
