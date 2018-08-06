import { UpdateCurrentPairAction, UpdateTradesTableAction, UpdateOrderBookAction } from '../../types/tokenSearcher';

const actionTypes = {
  updateFavorite: 'tokenSearcher/UPDATE_FAVORITE',
  updateCurrentPair: 'tokenSearcher/UPDATE_CURRENT_PAIR',
  updateTradesTable: 'tokenSearcher/UPDATE_TRADES_TABLE',
  updateOrderBook: 'tokenSearcher/UPDATE_ORDERBOOK',
};

export function updateFavorite(code: string, favorite: boolean) {
  return {
    type: actionTypes.updateFavorite,
    payload: { code, favorite },
  };
}

export function updateCurrentPair(pair: string): UpdateCurrentPairAction {
  return {
    type: actionTypes.updateCurrentPair,
    payload: { pair },
  };
}

export function updateTradesTable(trades: Trades): UpdateTradesTableAction {
  return {
    type: actionTypes.updateTradesTable,
    payload: { trades },
  };
}

export function updateOrderBook(bids: Array<Object>, asks: Array<Object>): UpdateOrderBookAction {
  return {
    type: actionTypes.updateOrderBook,
    payload: { bids, asks },
  };
}

export default actionTypes;
