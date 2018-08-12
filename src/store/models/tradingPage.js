// @flow
import * as actionCreators from '../actions/tradingPage';
import * as ohlcvActionCreators from '../actions/ohlcv';
import * as orderFormActionCreators from '../actions/orderForm';
import type { State, ThunkAction } from '../../types';

// eslint-disable-next-line
export default function getTradingPageModel(state: State) {
  return {};
}

const orderFormData = {
  askPrice: 0.25,
  bidPrice: 0.1,
  totalQuoteBalance: 100,
  totalBaseBalance: 1000,
  formName: 'Sell',
  quoteToken: 'ETH',
  baseToken: 'USD',
};

export const queryDefaultData = (): ThunkAction => {
  return async (dispatch, getState, { api, trading }) => {
    try {
      let tokenPairData = await api.getTokenPairData();
      dispatch(actionCreators.updateTokenPairData(tokenPairData));

      let ohlcv = await trading.getData();
      dispatch(ohlcvActionCreators.saveData(ohlcv));

      let orders = await api.getOrders();
      dispatch(actionCreators.updateOrderTable(orders));

      let { bids, asks, trades } = await api.getOrderBookData();
      dispatch(actionCreators.updateOrderBook(bids, asks));
      dispatch(actionCreators.updateTradesTable(trades));

      dispatch(orderFormActionCreators.saveData(orderFormData));
    } catch (e) {
      console.log(e);
    }
  };
};

// eslint-disable-next-line
export const updateCurrentPair = (pair: string): ThunkAction => {
  return async (dispatch, getState, { api, trading }) => {
    try {
      dispatch(actionCreators.updateCurrentPair(pair));

      let ohlcv = await trading.getData();
      dispatch(ohlcvActionCreators.saveData(ohlcv));

      let { bids, asks, trades } = await api.getOrderBookData();
      dispatch(actionCreators.updateOrderBook(bids, asks));
      dispatch(actionCreators.updateTradesTable(trades));

      dispatch(orderFormActionCreators.saveData(orderFormData));
    } catch (e) {
      console.log(e);
    }
  };
};

// eslint-disable-next-line
export function subscribeChart(pair: string, increment: number): ThunkAction {
  return (dispatch, getState, { trading }) => {
    dispatch(actionCreators.subscribeChart(pair));

    //add something to verify if the subscribtion is needed
    const unsubscribe = trading.subscribeChart(pair, increment);

    return () => {
      dispatch(actionCreators.unsubscribeChart(pair));
      unsubscribe();
    };
  };
}

export function subscribeOrderBook(pair: string): ThunkAction {
  return (dispatch, getState, { trading }) => {
    dispatch(actionCreators.subscribeOrderBook(pair));

    const unsubscribe = trading.subscribeOrderBook(pair);

    return () => {
      dispatch(actionCreators.unsubscribeOrderBook(pair));
      unsubscribe();
    };
  };
}

// eslint-disable-next-line
export function openConnection(): ThunkAction {
  return (dispatch, getState, { trading }) => {
    dispatch(actionCreators.startConnection());

    const closeConnection = trading.openConnection(error => {
      error ? actionCreators.connectionError() : actionCreators.openConnection();
    });

    trading.onMessage((type, data) => {
      switch (type) {
        case 'orderbook_init':
          return actionCreators.initializeOrderBook({ data });
        case 'orderbook_added':
          return actionCreators.updateOrderBook(data.bids, data.asks);
        case 'orderbook_pending':
          return actionCreators.updateOrderBook(data.bids, data.asks);
        case 'orderbook_executed':
          return actionCreators.updateOrderBook(data.bids, data.asks);
        case 'orderbook_canceled':
          return actionCreators.updateOrderBook(data.bids, data.asks);
        case 'trades_added':
          actionCreators.updateTradesTable({ data });
          return actionCreators.updateChart({ data });
        case 'trades_removed':
          actionCreators.updateTradesTable({ data });
          return actionCreators.updateChart({ data });
        case 'trade_canceled':
          actionCreators.updateTradesTable({ data });
          return actionCreators.updateChart({ data });
        default:
          break;
      }

      return () => {
        closeConnection();
        dispatch(actionCreators.closeConnection());
      };
    });
  };
}
