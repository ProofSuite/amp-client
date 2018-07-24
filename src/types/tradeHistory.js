//@flow
export type TradeHistoryState = {
  +tradeHistory: Array<Object>,
};
export type TradeListContainerTypes = {
  tradeHistory: Array<Object>,
};
export type TradeListTypes = {
  decimals: number,
  tradeHistory: Array<Object>,
};

export type ListRow = {
  trade: Object,
  index: number,
  decimals: number,
};
