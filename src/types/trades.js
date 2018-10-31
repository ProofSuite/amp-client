type TradesState = {
  byHash: { number: Order }
}

type Trade = {
  time: number,
  price: number,
  amount: number,
  hash: string,
  orderHash: string,
  takerOrderHash: string,
  status: 'SUCCESS' | 'ERROR' | 'PENDING',
  type: 'MARKET' | 'LIMIT',
  side: 'BUY' | 'SELL',
  pair: string,
  maker: string,
  taker: string
}

type Trades = Array<Trade>
