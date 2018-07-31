type TradesState = {
  byTimestamp: { number: Order },
};

type Trade = {
  time: number,
  price: number,
  amount: number,
  hash: string,
  orderHash: string,
  type: 'MARKET' | 'LIMIT',
  side: 'BUY' | 'SELL',
  pair: string,
  maker: string,
  taker: string,
};

type Trades = Array<Trade>;
