//@flow
export type Symbol = string;

export type Token = {
  address: string,
  symbol: string,
  decimals: number,
};

export type RankedToken = {
  address: string,
  symbol: string,
  decimals: number,
  rank: number,
}

export type TokenPair = {
  +pair: string,
  +baseTokenSymbol: string,
  +quoteTokenSymbol: string,
  +baseTokenAddress: string,
  +baseTokenDecimals: number,
  +quoteTokenDecimals: number,
  +quoteTokenAddress: string,
  +decimalsMultiplier: number,
  +pricepointMultiplier: number,
};

export type TokenPairState = {
  +byPair: {
    +[string]: {
      +pair: string,
      +baseTokenSymbol: string,
      +quoteTokenSymbol: string,
      +baseTokenAddress: string,
      +quoteTokenAddress: string,
      +baseTokenDecimals: number,
      +quoteTokenDecimals: number,
      +decimalsMultiplier: number,
      +pricepointMultiplier: number,
    },
  },
  +data: {
    +[string]: {
      +pair: string,
      +lastPrice: string,
      +change: string,
      +high: string,
      +low: string,
      +volume: string,
    },
  },
  +favorites: Array<string>,
  +currentPair: string,
};

export type TokenData = {
  address: string,
  symbol: string,
  balance: string,
  allowance: string,
};

export type TokenPairData = {
  pair: string,
  lastPrice: string,
  change: string,
  high: string,
  open: string,
  low: string,
  volume: string,
  base: ?string,
  quote: ?string,
  favorited: ?string,
};

export type TokenPairDataArray = Array<TokenPairData>;
export type TokenPairDataMap = { [string]: TokenPairData };

export type TokenState = {
  +symbols: Array<Symbol>,
  +bySymbol: { [Symbol]: Token },
};

export type TokenEvent = any => TokenState => TokenState;
export type TokenPairEvent = any => TokenPairState => TokenPairState;
