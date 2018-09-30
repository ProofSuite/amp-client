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
  SubscribeChartAction,
  UnsubscribeChartAction,
  InitChartAction,
  UpdateChartAction,
  InitOrderBookAction,
  UpdateOrderBookAction
} from '../../types/socketManager'

const actionTypes = {
  createConnection: 'socketManager/CREATE_CONNECTION',
  closeConnection: 'socketManager/CLOSE_CONNECTION',
  connectionError: 'socketManager/CONNECTION_ERROR',
  openConnection: 'socketManager/OPEN_CONNECTION',

  initializeTradesTable: 'socketManager/INIT_TRADES_TABLE',
  updateTradesTable: 'socketManager/UPDATE_TRADES_TABLE',
  initializeOrdersTable: 'socketManager/INIT_ORDERS_TABLE',
  updateOrdersTable: 'socketManager/UPDATE_ORDERS_TABLE',

  subscribeChart: 'socketManager/SUBSCRIBE_CHART',
  unsubscribeChart: 'socketManager/UNSUBSCRIBE_CHART',
  initializeChart: 'socketManager/INIT_CHART',
  updateChart: 'socketManager/UPDATE_CHART',

  subscribeOrderbook: 'socketManager/SUBSCRIBE_ORDERBOOK',
  unsubscribeOrderbook: 'socketManager/UNSUBSCRIBE_ORDERBOOK',
  initializeOrderBook: 'socketManager/INIT_ORDERBOOK',
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
export function initializeOrdersTable(orders: Orders): InitOrdersTableAction {
  return {
    type: actionTypes.initializeOrdersTable,
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
export function initializeTradesTable(trades: Trades): InitTradesTableAction {
  return {
    type: actionTypes.initializeTradesTable,
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
export function subscribeChart(pair: string): SubscribeChartAction {
  return {
    type: actionTypes.subscribeChart,
    payload: { pair }
  }
}

export function unsubscribeChart(pair: string): UnsubscribeChartAction {
  return {
    type: actionTypes.unsubscribeChart,
    payload: { pair }
  }
}

export function initializeChart(data: Object): InitChartAction {
  return {
    type: actionTypes.initializeChart,
    payload: { data }
  }
}

export function updateChart(data: Object): UpdateChartAction {
  return {
    type: actionTypes.updateChart,
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

export function initializeOrderBook(data: Object): InitOrderBookAction {
  return {
    type: actionTypes.initializeOrderBook,
    payload: { data }
  }
}

export function updateOrderBook(bids: Array<Object>, asks: Array<Object>): UpdateOrderBookAction {
  return {
    type: actionTypes.updateOrderBook,
    payload: { bids, asks }
  }
}

export default actionTypes
