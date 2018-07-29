//@flow
type Props = {
  +tradeHistory: Array<Object>,
};
export default Props;
export type TradeHistoryProps = {
  +tradeHistory: Array<Object>,
};
export type TradeListProps = {
  decimals: number,
  tradeHistory: Array<Object>,
};

export type TradeProps = {
  trade: Object,
  index: number,
  decimals: number,
};
