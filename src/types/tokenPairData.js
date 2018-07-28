//@flow
export type TokenPairDataState = {
  +[string]: {
    +pair: string,
    +lastPrice: string,
    +change: string,
    +high: string,
    +low: string,
    +volume: string,
  },
};

export type TokenPairData = {
  pair: string,
  lastPrice: string,
  change: string,
  high: string,
  low: string,
  volume: string,
};

export type TokenPairDataArray = Array<TokenPairData>;
export type TokenPairDataMap = { [string]: TokenPairData };
export type TokenPairDataEvent = any => TokenPairDataState => TokenPairDataState;
