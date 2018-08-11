export type Order = {
  time: number,
  amount: number,
  filled: number,
  price: number,
  price: number,
  hash: string,
  side: 'BUY' | 'SELL',
  pair: string,
  type: 'MARKET' | 'LIMIT',
  status: 'NEW' | 'OPEN' | 'CANCELLED' | 'FILLED' | 'PARTIALLY_FILLED',
};

// eslint-disable-next-line
type Orders = Array<Order>;

// eslint-disable-next-line
type OrdersState = {
  byTimestamp: { number: Order },
};
