// @flow
import type { TokenPairDataMap } from '../../types/tokens';
import type { Orders } from '../../types/orders';
import type { Trades } from '../../types/trades';
import type {
  UpdateTokenPairDataAction,
  UpdateOrdersTableAction,
  UpdateTradesTableAction,
} from '../../types/tradingPage';

const actionTypes = {
  closeConnection: 'tradingPage/CLOSE_CONNECTION',
  connectionError: 'tradingPage/CONNECTION_ERROR',
  startConnection: 'tradingPage/START_CONNECTION',
  openConnection: 'tradingPage/OPEN_CONNECTION',

  updateTokenPairData: 'tradingPage/UPDATE_TOKEN_PAIR_DATA',
  updateTradesTable: 'tradingPage/UPDATE_TRADES_TABLE',
  updateOrdersTable: 'tradingPage/UPDATE_ORDERS_TABLE',

  subscribeChart: 'tradingPage/SUBSCRIBE_CHART',
  unsubscribeChart: 'tradingPage/UNSUBSCRIBE_CHART',
  subscribeOrderbook: 'tradingPage/SUBSCRIBE_ORDERBOOK',
  unsubscribeOrderbook: 'tradingPage/UNSUBSCRIBE_ORDERBOOK',
  initializeOrderBook: 'tradingPage/INITIALIZE_ORDERBOOK',
  updateOrderBook: 'tradingPage/UPDATE_ORDERBOOK',
  initializeChart: 'tradingPage/INITIALIZE_CHART',
  updateChart: 'tradingPage/UPDATE_CHART',
};

export function updateTokenPairData(tokenPairData: TokenPairDataMap): UpdateTokenPairDataAction {
  return {
    type: actionTypes.updateTokenPairData,
    payload: { tokenPairData },
  };
}

export function updateOrderTable(orders: Orders): UpdateOrdersTableAction {
  return {
    type: actionTypes.updateOrdersTable,
    payload: { orders },
  };
}

export function updateTradesTable(trades: Trades): UpdateTradesTableAction {
  return {
    type: actionTypes.updateTradesTable,
    payload: { trades },
  };
}

export function startConnection() {
  return {
    types: actionTypes.startConnection,
  };
}

export function connectionError() {
  return {
    types: actionTypes.connectionError,
  };
}

export function openConnection() {
  return {
    types: actionTypes.openConnection,
  };
}

export function closeConnection() {
  return {
    types: actionTypes.closeConnection,
  };
}

export function subscribeChart(pair: string) {
  return {
    type: actionTypes.subscribeChart,
    payload: { pair },
  };
}

export function unsubscribeChart(pair: string) {
  return {
    type: actionTypes.unsubscribeChart,
    payload: { pair },
  };
}

export function subscribeOrderBook(pair: string) {
  return {
    type: actionTypes.subscribeOrderbook,
    payload: { pair },
  };
}

export function unsubscribeOrderBook(pair: string) {
  return {
    type: actionTypes.unsubscribeOrderbook,
    payload: { pair },
  };
}

export function initializeChart(data: Object) {
  return {
    types: actionTypes.initializeChart,
    payload: { data },
  };
}

export function updateChart(data: Object) {
  return {
    types: actionTypes.updateChart,
    payload: { data },
  };
}

export function initializeOrderBook(data: Object) {
  return {
    types: actionTypes.initializeOrderBook,
    payload: { data },
  };
}

export function updateOrderBook(data: Object) {
  return {
    types: actionTypes.updateOrderBook,
    payload: { data },
  };
}

export default actionTypes;
