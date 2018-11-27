//@flow
import type { Orders } from './orders'
import type { Trades } from './trades'

export type CreateConnectionAction = {
  type: 'socketController/CREATE_CONNECTION'
}

export type OpenConnectionAction = {
  type: 'socketController/OPEN_CONNECTION'
}

export type CloseConnectionAction = {
  type: 'socketController/CLOSE_CONNECTION'
}

export type ConnectionErrorAction = {
  type: 'socketController/CONNECTION_ERROR'
}

// ORDER TABLE ACTIONS
// TODO need subscribtions ?

export type InitOrdersTableAction = {
  type: 'socketController/INIT_ORDERS_TABLE',
  payload: { orders: Orders }
}

export type UpdateOrdersTableAction = {
  type: 'socketController/UPDATE_ORDERS_TABLE',
  payload: { orders: Orders }
}

// TRADE TABLE ACTIONS
// TODO need subscribtions ?

//Note: not sure if needed
export type InitTradesTableAction = {
  type: 'socketController/INIT_TRADES_TABLE',
  payload: { trades: Trades }
}

export type UpdateTradesTableAction = {
  type: 'socketController/UPDATE_TRADES_TABLE',
  payload: { trades: Trades }
}

// OHLCV ACTIONS

export type SubscribeOHLCVAction = {
  type: 'socketController/SUBSCRIBE_OHLCV',
  payload: { pair: any }
}

export type UnsubscribeOHLCVAction = {
  type: 'socketController/UNSUBSCRIBE_OHLCV',
  payload: { pair: any }
}

export type InitOHLCVAction = {
  type: 'socketController/INIT_OHLCV',
  payload: { data: Array<Object> }
}

export type UpdateOHLCVAction = {
  type: 'socketController/UPDATE_OHLCV',
  payload: { data: Array<Object> }
}

// ORDERBOOK ACTIONS

//Note: not sure if needed
export type InitOrderBookAction = {
  type: 'socketController/INIT_ORDERBOOK',
  payload: { bids: any, asks: any }
}

export type UpdateOrderBookAction = {
  type: 'socketController/UPDATE_ORDERBOOK',
  payload: { bids: any, asks: any }
}

export type SubscribeOrderBookAction = {
  type: 'socketController/SUBSCRIBE_ORDERBOOK',
  payload: { pair: any }
}

export type UnsubscribeOrderBookAction = {
  type: 'socketController/UNSUBSCRIBE_ORDERBOOK',
  payload: { pair: any }
}

export type socketControllerAction =
  | CreateConnectionAction
  | OpenConnectionAction
  | CloseConnectionAction
  | ConnectionErrorAction
  | InitOrdersTableAction
  | UpdateOrdersTableAction
  | InitTradesTableAction
  | UpdateTradesTableAction
  | SubscribeOHLCVAction
  | UnsubscribeOHLCVAction
  | InitOHLCVAction
  | UpdateOHLCVAction
  | InitOrderBookAction
  | UpdateOrderBookAction
  | SubscribeOrderBookAction
  | UnsubscribeOrderBookAction
