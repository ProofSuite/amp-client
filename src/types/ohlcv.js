//@flow

export type OHLCVState = {
  +pair: string,
  +pairId: string,
  +ohlcvData: Array<Object>
};

export type SendTimelineParams = {
  pair: string,
  pairId: string,
  duration: string,
  time: string,
};

export type SingleOrderTypes = {
  order: Object,
  index: number,
  decimals: number,
};
