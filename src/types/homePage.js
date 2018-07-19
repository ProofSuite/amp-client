//@flow

export type HomeState = {
  +loading: boolean,
  +decimals: number,
  +quoteToken: string,
  +baseToken: string,
  +sellOrderList: Array<Object>,
  +buyOrderList: Array<Object>,
  +ohlcvData: Array<Object>,
  +orderHistory: Array<Object>,
  +tradeHistory: Array<Object>,
};

export type LoadDataParams = {
  tokenId: string,
};

export type SingleOrderTypes = {
  order: Object,
  index: number,
  decimals: number,
};
