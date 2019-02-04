//@flow
export type Symbol = string;

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
      +makeFee: string,
      +takeFee: string,
      +listed: bool,
      +active: bool,
      +rank: number,
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
  +sortedPairs: Array<string>
};


// Token is the structure representing an ERC20 token that is stored in the redux store
export type Token = {
  address: string,
  symbol: string,
  decimals: number,
  quote?: ?bool,
  registered?: ?bool,
  listed?: ?bool,
  USDRate?: ?number,
  EURRate?: ?number,
  JPYRate?: ?number,
  rank?: ?number,
};

// APIToken is the structure representing an ERC20 token that is fetched from an external API
export type APIToken = {
  address: string, 
  symbol: string,
  decimals: number,
  quote?: ?bool,
  registered?: ?bool,
  listed?: ?bool,
  active?: ?bool,
  rank?: ?number,
}

export type Tokens = Array<Token>
export type APITokens = Array<APIToken>

// TokenPair is the structure representing a pair of ERC20 token stored in the redux store
export type TokenPair = {
  +pair: string,
  +baseTokenSymbol: string,
  +quoteTokenSymbol: string,
  +baseTokenAddress: string,
  +baseTokenDecimals: number,
  +quoteTokenDecimals: number,
  +quoteTokenAddress: string,
  +makeFee: string,
  +takeFee: string,
  +listed: bool,
  +active: bool,
  +rank: number,
};

// TokenPairData is the structure representing a pair of ERC20 token data (price, volume, etc.) stored
// in the redux store.
export type TokenPairData = {
  pair: string,
  lastPrice: string,
  price: number,
  change: string,
  high: string,
  open: string,
  low: string,
  volume: string,
  base: ?string,
  quote: ?string,
  favorited: ?string,
  orderCount: string, 
  orderVolume: string,
  active: boolean,
  averageOrderAmount: number,
  averageTradeAmount: number,
};


export type TokenData = {
  address: string,
  symbol: string,
  balance: string,
  allowance: string, 
};

// TokenRate is an object containing the different exchange rates between the 'symbol' token and the main 
// fiat quote currencies: USD, EUR, JPY
export type TokenRate = {
  symbol: string,
  USD: number,
  EUR: number,
  JPY: number,
}

export type TokenPairs = Array<TokenPair>

export type TokenRates = Array<TokenRate>

export type TokenPairDataArray = Array<TokenPairData>;
export type TokenPairDataMap = { [string]: TokenPairData };

export type TokenState = {
  +bySymbol: { [Symbol]: Token },
};

export type TokenEvent = any => TokenState => TokenState;
export type TokenPairEvent = any => TokenPairState => TokenPairState;


export type RankedToken = {
  address: string,
  symbol: string,
  decimals: number,
  rank: number,
  registered?: bool,
  listed?: bool,
}