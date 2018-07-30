//@flow
export type TradeHistoryState = {
  +userTradeHistory: Array<Object>,
  +marketTradeHistory: Array<Object>,
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
