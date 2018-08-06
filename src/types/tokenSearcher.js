// @flow
import type { Orders } from './orders';
import type { Trades } from './trades';

export type UpdateOrdersTableAction = {
  type: 'tokenSearcher/UPDATE_ORDERS_TABLE',
  payload: { orders: Orders },
};

export type UpdateTradesTableAction = {
  type: 'tokenSearcher/UPDATE_TRADES_TABLE',
  payload: { trades: Trades },
};

export type UpdateOrderBookAction = {
  type: 'tokenSearcher/UPDATE_ORDERBOOK_ACTION',
  payload: { bids: any, asks: any },
};

export type UpdateCurrentPairAction = {
  type: 'tokenSearcher/UPDATE_CURRENT_PAIR',
  payload: { pair: string },
};

export type TokenSearcherAction =
  | UpdateOrdersTableAction
  | UpdateTradesTableAction
  | UpdateOrderBookAction
  | UpdateCurrentPairAction;
