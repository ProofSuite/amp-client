//@flow
export type OrderListContainerTypes = {
  decimals: number,
  loading: boolean,
  tradeHistory: Array<Object>,
};
export type OrderListTypes = {
  decimals: number,
  tradeHistory: Array<Object>,
};

export type ListRow = {
  order: Object,
  index: number,
  decimals: number,
};

export type Order = {
  time: number,
  type: string,
  amount: number,
  price: number,
};
