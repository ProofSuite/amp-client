//@flow

export type OrderListTypes = {
  orderList: Array<Object>,
  bookName: string,
  loading: boolean,
  baseToken: string,
  quoteToken: string,
  decimals: number,
};

export type SingleOrderTypes = {
  order: Object,
  index: number,
  decimals: number,
};
