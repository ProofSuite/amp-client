// @flow
import type { Orders } from './orders'
import type { Trades } from './trades'

export const actionTypes = {
  updateFavorite: 'tokenSearcher/UPDATE_FAVORITE_PAIR',
  updateCurrentPair: 'tokenSearcher/UPDATE_CURRENT_PAIR',
  initTradesTable: 'tokenSearcher/INIT_TRADES_TABLE',
  initOrdersTable: 'tokenSearcher/INIT_ORDERS_TABLE',
  initOrderBook: 'tokenSearcher/INIT_ORDERBOOK',
  updateTradesTable: 'tokenSearcher/UPDATE_TRADES_TABLE',
  updateOrdersTable: 'tokenSearcher/UPDATE_ORDERS_TABLE',
  updateOrderBook: 'tokenSearcher/UPDATE_ORDERBOOK'
}

export type UpdateFavoritePairAction = {
  type: 'tokenSearcher/UPDATE_FAVORITE_PAIR',
  payload: { code: string, favorite: boolean }
}

export type InitOrdersTableAction = {
  type: 'tokenSearcher/INIT_ORDERS_TABLE',
  payload: { orders: Orders }
}

export type InitTradesTableAction = {
  type: 'tokenSearcher/INIT_TRADES_TABLE',
  payload: { trades: Trades }
}

export type InitOrderBookAction = {
  type: 'tokenSearcher/INIT_ORDERBOOK',
  payload: { bids: any, asks: any }
}

export type UpdateOrdersTableAction = {
  type: 'tokenSearcher/UPDATE_ORDERS_TABLE',
  payload: { orders: Orders }
}

export type UpdateTradesTableAction = {
  type: 'tokenSearcher/UPDATE_TRADES_TABLE',
  payload: { trades: Trades }
}

export type UpdateOrderBookAction = {
  type: 'tokenSearcher/UPDATE_ORDERBOOK',
  payload: { bids: any, asks: any }
}

export type UpdateCurrentPairAction = {
  type: 'tokenSearcher/UPDATE_CURRENT_PAIR',
  payload: { pair: string }
}

export type TokenSearcherAction =
  | InitOrdersTableAction
  | InitTradesTableAction
  | InitOrderBookAction
  | UpdateOrdersTableAction
  | UpdateOrderBookAction
  | UpdateTradesTableAction
  | UpdateFavoritePairAction
  | UpdateCurrentPairAction
