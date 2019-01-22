// @flow
import type { TokenPair } from './tokens'
import type { TradingStats } from './stats'

export type UpdateMarketPageDataAction = {
  type: 'marketsPage/UPDATE_MARKET_PAGE_DATA',
  payload: { tokenPairData: Array<TokenPair>, tradingStats: TradingStats }
}

export type MarketsPageActions = 
  | UpdateMarketPageDataAction