//@flow

export type OrderBookState = {
  +orderList: Array<Object>,
  +quoteToken: string,
  +baseToken: string,
  +bookName: string,
};

export type OrderListPropsTypes = {
  orderList: Array<Object>,
  bookName: string,
  loading: boolean,
  baseToken: string,
  quoteToken: string,
  decimals: number,
};

export type SingleOrderPropsTypes = {
  order: Object,
  index: number,
  decimals: number,
};

export default Props;
