//@flow

export type OrderBookState = {
  +quoteToken: string,
  +baseToken: string,
  +bids: Object,
  +asks: Object,
  +sortedBids: Array<number>,
  +sortedAsks: Array<number>,
};

export type OrderListPropsTypes = {
  orderList: Array<Object>,
  bookName: string,
  baseToken: string,
  quoteToken: string,
  decimals: number,
};

export type SingleOrderPropsTypes = {
  order: Object,
  index: number,
  decimals: number,
};
