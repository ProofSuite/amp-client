//@flow
export type TradeListContainerTypes = {
  decimalPoints: number,
  loading: boolean,
  tradeHistory: Array<Object>,
};
export type TradeListTypes = {
  decimalPoints: number,
  tradeHistory: Array<Object>,
};

export type ListRow = {
  order: Object,
  index: number,
  decimals: number,
};
