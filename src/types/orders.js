export type NewOrderParams = {
  userAddress: string,
  exchangeAddress: string,
  pair: TokenPair,
  amount: number,
  price: number,
  side: 'BUY' | 'SELL'
}

export type RawOrder = {
  userAddress: string,
  exchangeAddress: string,
  buyTokenAddress: string,
  sellTokenAddress: string,
  buyAmount: string,
  sellAmount: string,
  hash: string,
  signature: {
    r: string,
    s: string,
    v: string
  },
  nonce: string,
  expires: string,
  makeFee: string,
  takeFee: string
}

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
  status: 'NEW' | 'OPEN' | 'CANCELLED' | 'FILLED' | 'PARTIALLY_FILLED'
}

// eslint-disable-next-line
type Orders = Array<Order>

// eslint-disable-next-line
type OrdersState = {
  byHash: { number: Order }
}
