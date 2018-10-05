// @flow
import type { TokenPairDataMap } from '../../types/tokens'
import type { Orders } from '../../types/orders'
import type { Trades } from '../../types/trades'
import type {
  CreateConnectionAction,
  OpenConnectionAction,
  CloseConnectionAction,
  ConnectionErrorAction,
  InitOrdersTableAction,
  UpdateOrdersTableAction,
  InitTradesTableAction,
  UpdateTradesTableAction,
  SubscribeOHLCVAction,
  UnsubscribeOHLCVAction,
  InitOHLCVAction,
  UpdateOHLCVAction,
  InitOrderBookAction,
  UpdateOrderBookAction
} from '../../types/socketManager'

const actionTypes = {
  createConnection: 'socketManager/CREATE_CONNECTION',
  closeConnection: 'socketManager/CLOSE_CONNECTION',
  connectionError: 'socketManager/CONNECTION_ERROR',
  openConnection: 'socketManager/OPEN_CONNECTION',

  initTradesTable: 'socketManager/INIT_TRADES_TABLE',
  updateTradesTable: 'socketManager/UPDATE_TRADES_TABLE',
  initOrdersTable: 'socketManager/INIT_ORDERS_TABLE',
  updateOrdersTable: 'socketManager/UPDATE_ORDERS_TABLE',

  subscribeOHLCV: 'socketManager/SUBSCRIBE_OHLCV',
  unsubscribeOHLCV: 'socketManager/UNSUBSCRIBE_OHLCV',
  initOHLCV: 'socketManager/INIT_OHLCV',
  updateOHLCV: 'socketManager/UPDATE_OHLCV',

  subscribeOrderbook: 'socketManager/SUBSCRIBE_ORDERBOOK',
  unsubscribeOrderbook: 'socketManager/UNSUBSCRIBE_ORDERBOOK',
  initOrderBook: 'socketManager/INIT_ORDERBOOK',
  updateOrderBook: 'socketManager/UPDATE_ORDERBOOK'
}

export function createConnection(): CreateConnectionAction {
  return {
    type: actionTypes.createConnection
  }
}

export function connectionError(): ConnectionErrorAction {
  return {
    type: actionTypes.connectionError
  }
}

export function openConnection(): OpenConnectionAction {
  return {
    type: actionTypes.openConnection
  }
}

export function closeConnection(): CloseConnectionAction {
  return {
    type: actionTypes.closeConnection
  }
}

// ORDERS TABLE ACTIONS
// TODO add subscribtions ?
export function initOrdersTable(orders: Orders): InitOrdersTableAction {
  return {
    type: actionTypes.initOrdersTable,
    payload: { orders }
  }
}

export function updateOrdersTable(orders: Orders): UpdateOrdersTableAction {
  return {
    type: actionTypes.updateOrdersTable,
    payload: { orders }
  }
}

// TRADES TABLE ACTIONS
// TODO add subscribtions ?
export function initTradesTable(trades: Trades): InitTradesTableAction {
  return {
    type: actionTypes.initTradesTable,
    payload: { trades }
  }
}

export function updateTradesTable(trades: Trades): UpdateTradesTableAction {
  return {
    type: actionTypes.updateTradesTable,
    payload: { trades }
  }
}

// CHART ACTIONS
export function subscribeOHLCV(pair: string): SubscribeOHLCVAction {
  return {
    type: actionTypes.subscribeOHLCV,
    payload: { pair }
  }
}

export function unsubscribeOHLCV(pair: string): UnsubscribeOHLCVAction {
  return {
    type: actionTypes.unsubscribeOHLCV,
    payload: { pair }
  }
}

export function initOHLCV(data: Object): InitOHLCVAction {
  return {
    type: actionTypes.initOHLCV,
    payload: { data }
  }
}

export function updateOHLCV(data: Object): UpdateOHLCVAction {
  return {
    type: actionTypes.updateOHLCV,
    payload: { data }
  }
}

// ORDERBOOK ACTIONS
export function subscribeOrderBook(pair: string): SubscribeOrderBookAction {
  return {
    type: actionTypes.subscribeOrderbook,
    payload: { pair }
  }
}

export function unsubscribeOrderBook(pair: string): UnsubscribeOrderBookAction {
  return {
    type: actionTypes.unsubscribeOrderbook,
    payload: { pair }
  }
}

export function initOrderBook(bids: Array<Object>, asks: Array<Object>): InitOrderBookAction {
  return {
    type: actionTypes.initOrderBook,
    payload: { bids, asks }
  }
}

export function updateOrderBook(bids: Array<Object>, asks: Array<Object>): UpdateOrderBookAction {
  return {
    type: actionTypes.updateOrderBook,
    payload: { bids, asks }
  }
}

export default actionTypes
