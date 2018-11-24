//@flow

export type OHLCVState = {
  +ohlcvData: ?Array<Object>,
  +currentTimeSpan: Object,
  +currentDuration: Object,
  +noOfCandles: number,
};