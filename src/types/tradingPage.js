//@flow
import type { TokenPairDataMap } from './tokens'
import type { Orders } from './orders'
import type { Trades } from './trades'

export type UpdateTokenPairDataAction = {
  type: 'tradingPage/UPDATE_TOKEN_PAIR_DATA',
  payload: { tokenPairData: TokenPairDataMap }
}

export type UpdateCurrentPairAction = {
  type: 'tradingPage/UPDATE_CURRENT_PAIR',
  payload: { pair: string }
}

export type UpdateOrderBookAction = {
  type: 'tradingPage/UPDATE_ORDERBOOK',
  payload: { bids: any, asks: any }
}

export type UpdateTradesTableAction = {
  type: 'tradingPage/UPDATE_TRADES_TABLE',
  payload: { trades: Trades }
}

export type UpdateOrdersTableAction = {
  type: 'tradingPage/UPDATE_ORDERS_TABLE',
  payload: { orders: Orders }
}

export type SingleOrderTypes = {
  order: Object,
  index: number,
  decimals: number
}

export type TradingPageAction =
  | UpdateTokenPairDataAction
  | UpdateCurrentPairAction
  | UpdateTradesTableAction
  | UpdateOrderBookAction
  | UpdateOrdersTableAction
