//@flow
import type { Orders } from './orders'
import type { Trades } from './trades'

export type CreateConnectionAction = {
  type: 'socketManager/CREATE_CONNECTION'
}

export type OpenConnectionAction = {
  type: 'socketManager/OPEN_CONNECTION'
}

export type CloseConnectionAction = {
  type: 'socketManager/CLOSE_CONNECTION'
}

export type ConnectionErrorAction = {
  type: 'socketManager/CONNECTION_ERROR'
}

// ORDER TABLE ACTIONS
// TODO need subscribtions ?

export type InitOrdersTableAction = {
  type: 'socketManager/INIT_ORDERS_TABLE',
  payload: { orders: Orders }
}

export type UpdateOrdersTableAction = {
  type: 'socketManager/UPDATE_ORDERS_TABLE',
  payload: { orders: Orders }
}

// TRADE TABLE ACTIONS
// TODO need subscribtions ?

//Note: not sure if needed
export type InitTradesTableAction = {
  type: 'socketManager/INIT_TRADES_TABLE',
  payload: { trades: Trades }
}

export type UpdateTradesTableAction = {
  type: 'socketManager/UPDATE_TRADES_TABLE',
  payload: { trades: Trades }
}

// CHART ACTIONS

export type SubscribeChartAction = {
  type: 'socketManager/SUBSCRIBE_CHART',
  payload: { pair: any }
}

export type UnsubscribeChartAction = {
  type: 'socketManager/UNSUBSCRIBE_CHART',
  payload: { pair: any }
}

export type InitChartAction = {
  type: 'socketManager/INIT_CHART',
  payload: { data: Object }
}

export type UpdateChartAction = {
  type: 'socketManager/UPDATE_CHART',
  payload: { data: Object }
}

// ORDERBOOK ACTIONS

//Note: not sure if needed
export type InitOrderBookAction = {
  type: 'socketManager/INIT_ORDERBOOK',
  payload: { data: Object }
}

export type UpdateOrderBookAction = {
  type: 'socketManager/UPDATE_ORDERBOOK',
  payload: { bids: any, asks: any }
}

export type SubscribeOrderBookAction = {
  type: 'socketManager/SUBSCRIBE_ORDERBOOK',
  payload: { pair: any }
}

export type UnsubscribeOrderBookAction = {
  type: 'socketManager/UNSUBSCRIBE_ORDERBOOK',
  payload: { pair: any }
}

export type SocketManagerAction =
  | CreateConnectionAction
  | OpenConnectionAction
  | CloseConnectionAction
  | ConnectionErrorAction
  | InitOrdersTableAction
  | UpdateOrdersTableAction
  | InitTradesTableAction
  | UpdateTradesTableAction
  | SubscribeChartAction
  | UnsubscribeChartAction
  | InitChartAction
  | UpdateChartAction
  | InitOrderBookAction
  | UpdateOrderBookAction
  | SubscribeOrderBookAction
  | UnsubscribeOrderBookAction
