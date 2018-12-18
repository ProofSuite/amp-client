//@flow
import type { TokenPairDataMap } from './tokens'
import type { Orders } from './orders'
import type { Trades } from './trades'

export const actionTypes = {
  updateTradingPageData: 'tradingPage/UPDATE_TRADING_PAGE_DATA',
  updateCurrentPair: 'tradingPage/UPDATE_CURRENT_PAIR',
  updateTokenPairData: 'tradingPage/UPDATE_TOKEN_PAIR_DATA',
  initOrdersTable: 'tradingPage/INIT_ORDERS_TABLE',
  updateOrdersTable: 'tradingPage/UPDATE_ORDERS_TABLE',
  initOrderBook: 'tradingPage/INIT_ORDERBOOK',
  updateOrderBook: 'tradingPage/UPDATE_ORDERBOOK',
  initTradesTable: 'tradingPage/INIT_TRADES_TABLE',
  updateTradesTable: 'tradingPage/UPDATE_TRADES_TABLE'
}

export type UpdateTradingPageDataAction = {
  type: 'tradingPage/UPDATE_TRADING_PAGE_DATA',
  payload: { tokenPairData: TokenPairDataMap, orders: Orders }
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

export type InitOrderBookAction = {
  type: 'tradingPage/INIT_ORDERBOOK',
  payload: { bids: any, asks: any }
}

export type InitTradesTableAction = {
  type: 'tradingPage/INIT_TRADES_TABLE',
  payload: { trades: Trades }
}

export type InitOrdersTableAction = {
  type: 'tradingPage/INIT_ORDERS_TABLE',
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
  | InitTradesTableAction
  | InitOrderBookAction
  | InitOrdersTableAction
  | UpdateTradingPageDataAction
