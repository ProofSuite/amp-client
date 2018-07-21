//@flow
export type TradeHistoryState = {
  +tradeHistory: Array<Object>,
  +loading: boolean,
  +decimals?: number,
  +loggedIn: boolean,
};
export type TradeListContainerTypes = {
  decimals: number,
  loading: boolean,
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
