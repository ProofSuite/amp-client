// @flow
import type { TokenPairDataMap } from '../../types/tokens'
import type { Orders } from '../../types/orders'
import type { Trades } from '../../types/trades'
import type {
  UpdateOrderBookAction,
  UpdateTokenPairDataAction,
  UpdateCurrentPairAction,
  UpdateOrdersTableAction,
  UpdateTradesTableAction
} from '../../types/tradingPage'

const actionTypes = {
  updateCurrentPair: 'tradingPage/UPDATE_CURRENT_PAIR',
  updateTokenPairData: 'tradingPage/UPDATE_TOKEN_PAIR_DATA',
  updateOrdersTable: 'tradingPage/UPDATE_ORDERS_TABLE',
  updateOrderBook: 'tradingPage/UPDATE_ORDERBOOK',
  updateTradesTable: 'tradingPage/UPDATE_TRADES_TABLE'
}

export function updateOrdersTable(orders: Orders): UpdateOrdersTableAction {
  return {
    type: actionTypes.updateOrdersTable,
    payload: { orders }
  }
}

export function updateCurrentPair(pair: string): UpdateCurrentPairAction {
  return {
    type: actionTypes.updateCurrentPair,
    payload: { pair }
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

export function updateTokenPairData(tokenPairData: TokenPairDataMap): UpdateTokenPairDataAction {
  return {
    type: actionTypes.updateTokenPairData,
    payload: { tokenPairData }
  }
}

export default actionTypes
