//@flow
export type StatsState = {
  +totalOrders: number,
  +totalTrades: number,
  +totalSellOrders: number,
  +totalBuyOrders: number,
  +totalBuyAmount: number,
  +totalSellAmount: number,
  +totalVolume: number,
  +totalOrderAmount: number,
  +mostTradedToken: string,
  +mostTradedPair: string,
  +tradeSuccessRatio: number
};

export type TradingStats = {
  totalOrders: number,
  totalTrades: number,
  totalSellOrders: number,
  totalBuyOrders: number,
  totalBuyAmount: number,
  totalSellAmount: number,
  totalVolume: number,
  totalOrderAmount: number,
  mostTradedToken: string,
  mostTradedPair: string,
  tradeSuccessRatio: number
}

export type StatsEvents = any => StatsState => StatsState;
