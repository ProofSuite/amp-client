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
  SubscribeOrderBookAction,
  UnsubscribeOrderBookAction,
  SubscribeOHLCVAction,
  UnsubscribeOHLCVAction,
  InitOHLCVAction,
  UpdateOHLCVAction,
  InitOrderBookAction,
  UpdateOrderBookAction
} from '../../types/socketController'

const actionTypes = {
  createConnection: 'socketController/CREATE_CONNECTION',
  closeConnection: 'socketController/CLOSE_CONNECTION',
  connectionError: 'socketController/CONNECTION_ERROR',
  openConnection: 'socketController/OPEN_CONNECTION',

  initTradesTable: 'socketController/INIT_TRADES_TABLE',
  updateTradesTable: 'socketController/UPDATE_TRADES_TABLE',
  initOrdersTable: 'socketController/INIT_ORDERS_TABLE',
  updateOrdersTable: 'socketController/UPDATE_ORDERS_TABLE',

  subscribeOHLCV: 'socketController/SUBSCRIBE_OHLCV',
  unsubscribeOHLCV: 'socketController/UNSUBSCRIBE_OHLCV',
  initOHLCV: 'socketController/INIT_OHLCV',
  updateOHLCV: 'socketController/UPDATE_OHLCV',

  subscribeOrderbook: 'socketController/SUBSCRIBE_ORDERBOOK',
  unsubscribeOrderbook: 'socketController/UNSUBSCRIBE_ORDERBOOK',
  initOrderBook: 'socketController/INIT_ORDERBOOK',
  updateOrderBook: 'socketController/UPDATE_ORDERBOOK'
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
