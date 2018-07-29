//@flow

type Props = {
  +sellOrderList: Array<Object>,
  +buyOrderList: Array<Object>,
  +quoteToken: string,
  +baseToken: string,
};
export type OrderBookProps = {
  +sellOrderList: Array<Object>,
  +buyOrderList: Array<Object>,
  +quoteToken: string,
  +baseToken: string,
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
