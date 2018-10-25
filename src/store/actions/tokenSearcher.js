// @flow
import { actionTypes } from '../../types/tokenSearcher'
import type { Orders } from '../../types/orders'
import type { Trades } from '../../types/trades'
import type {
  UpdateCurrentPairAction,
  UpdateFavoritePairAction,
  UpdateTradesTableAction,
  UpdateOrdersTableAction,
  UpdateOrderBookAction,
  InitTradesTableAction,
  InitOrdersTableAction,
  InitOrderBookAction } from '../../types/tokenSearcher';

export function updateFavorite(code: string, favorite: boolean): UpdateFavoritePairAction {
  return {
    type: actionTypes.updateFavorite,
    payload: { code, favorite },
  };
}

export function updateCurrentPair(pair: string): UpdateCurrentPairAction {
  return {
    type: actionTypes.updateCurrentPair,
    payload: { pair },
  };
}

export function initTradesTable(trades: Trades): InitTradesTableAction {
  return {
    type: actionTypes.initTradesTable,
    payload: { trades },
  };
}


export function initOrderBook(bids: Array<Object>, asks: Array<Object>): InitOrderBookAction {
  return {
    type: actionTypes.initOrderBook,
    payload: { bids, asks },
  };
}

export function initOrdersTable(orders: Orders): InitOrdersTableAction {
  return {
    type: actionTypes.initOrdersTable,
    payload: { orders }
  }
}

export function updateTradesTable(trades: Trades): UpdateTradesTableAction {
  return {
    type: actionTypes.updateTradesTable,
    payload: { trades },
  };
}

export function updateOrderBook(bids: Array<Object>, asks: Array<Object>): UpdateOrderBookAction {
  return {
    type: actionTypes.updateOrderBook,
    payload: { bids, asks },
  };
}

export function updateOrdersTable(orders: Orders): UpdateOrdersTableAction {
  return {
    type: actionTypes.updateOrdersTable,
    payload: { orders }
  }
}

export default actionTypes
