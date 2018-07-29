//@flow
export type Symbol = string;

export type Token = {
  address: string,
  symbol: string,
};

export type TokenPairState = {
  +byPair: {
    +[string]: {
      +pair: string,
      +baseTokenSymbol: string,
      +quoteTokenSymbol: string,
      +baseTokenAddress: string,
      +quoteTokenAddress: string,
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
};

export type TokenPairData = {
  pair: string,
  lastPrice: string,
  change: string,
  high: string,
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

export type UpdateTokensAction = {
  type: 'tokens/UPDATE_TOKENS',
  payload: Token,
};

export type RemoveTokensAction = {
  type: 'tokens/REMOVE_TOKENS',
  payload: { [Symbol]: Symbol },
};

export type TokenEvent = any => TokenState => TokenState;
export type TokenPairEvent = any => TokenPairState => TokenPairState;
export type TokenAction = UpdateTokensAction | RemoveTokensAction;
