//@flow
export type Order = {
  time: number,
  type: string,
  amount: number,
  price: number,
};

export type OrderHistoryState = {
  orderHistory: Array<Object>,
  userOrderHistory: Array<Object>,
  authenticated: boolean,
};
