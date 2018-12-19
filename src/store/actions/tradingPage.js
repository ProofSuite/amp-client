// @flow
import { actionTypes } from '../../types/tradingPage'
import type { TokenPairDataMap } from '../../types/tokens'
import type { Orders } from '../../types/orders'
import type { Trades } from '../../types/trades'

import type {
  UpdateTradingPageDataAction,
  UpdateCurrentPairAction,
  UpdateOrderBookAction,
  UpdateOrdersTableAction,
  UpdateTradesTableAction,
  InitOrderBookAction,
  InitOrdersTableAction,
  InitTradesTableAction
} from '../../types/tradingPage'

export function updateCurrentPair(pair: string): UpdateCurrentPairAction {
  return {
    type: actionTypes.updateCurrentPair,
    payload: { pair }
  }
}

export function updateTradingPageData(tokenPairData: TokenPairDataMap, orders: Orders): UpdateTradingPageDataAction {
  return {
    type: actionTypes.updateTradingPageData,
    payload: { tokenPairData, orders }
  }
}

export function updateOrdersTable(orders: Orders): UpdateOrdersTableAction {
  return {
    type: actionTypes.updateOrdersTable,
    payload: { orders }
  }
}

export function updateTradesTable(trades: Trades): UpdateTradesTableAction {
  return {
    type: actionTypes.updateTradesTable,
    payload: { trades }
  }
}

export function updateOrderBook(bids: Array<Object>, asks: Array<Object>): UpdateOrderBookAction {
  return {
    type: actionTypes.updateOrderBook,
    payload: { bids, asks }
  }
}

export function initOrdersTable(orders: Orders): InitOrdersTableAction {
  return {
    type: actionTypes.initOrdersTable,
    payload: { orders }
  }
}

export function initTradesTable(trades: Trades): InitTradesTableAction {
  return {
    type: actionTypes.initTradesTable,
    payload: { trades }
  }
}

export function initOrderBook(bids: Array<Object>, asks: Array<Object>): InitOrderBookAction {
  return {
    type: actionTypes.initOrderBook,
    payload: { bids, asks }
  }
}

export default actionTypes
