//@flow
export type Order = {
  time: number,
  type: string,
  amount: number,
  price: number,
};

export type OrderHistoryState = {
  +userOrderHistory: Array<Object>,
  +marketOrderHistory: Array<Object>,
};
