//@flow

export type OHLCVState = {
  +ohlcvData: Array<Object>,
  +currentTimeSpan: Object,
  +currentDuration: Object,
  +noOfCandles: number,
};

export type SendTimelineParams = {
  duration: string,
  time: string,
};

export type SingleOrderTypes = {
  order: Object,
  index: number,
  decimals: number,
};
