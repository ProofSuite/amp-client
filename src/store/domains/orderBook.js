// @flow
import type { OrderBookState } from '../../types/orderBook';
import SortedArray from 'sorted-array';
import { round } from '../../utils/helpers';

const initialState: OrderBookState = {
  bids: {},
  asks: {},
  sortedBids: [],
  sortedAsks: [],
  quoteToken: '',
  baseToken: '',
};

export const initialized = () => {
  const event = (state: OrderBookState = initialState) => state;
  return event;
};

export const orderBookUpdated = (bids: Array<Object>, asks: Array<Object>) => {
  const event = (state: OrderBookState) => {
    let newBids = bids.reduce((result, item) => {
      result[item.price] = {
        ...state[item.price],
        ...item,
      };
      return result;
    }, {});

    let newAsks = asks.reduce((result, item) => {
      result[item.price] = {
        ...state[item.price],
        ...item,
      };
      return result;
    }, {});

    let newSortedBids = new SortedArray(state.sortedBids, (a, b) => {
      return b - a;
    });
    let newSortedAsks = new SortedArray(state.sortedAsks);

    for (let bid in newBids) {
      newSortedBids.insert(bid);
    }
    for (let ask in newAsks) {
      newSortedAsks.insert(ask);
    }

    return {
      ...state,
      bids: {
        ...state.bids,
        ...newBids,
      },
      asks: {
        ...state.asks,
        ...newAsks,
      },
      sortedBids: newSortedBids.array,
      sortedAsks: newSortedAsks.array,
    };
  };

  return event;
};

export default function domain(state: OrderBookState) {
  return {
    getState: () => state,
    getAsks: () => state.asks,
    getBids: () => state.bids,
    getOrderedBids: () => state.sortedBids.map(price => state.bids[price]),
    getOrderedAsks: () => state.sortedAsks.map(price => state.asks[price]),
    getOrderBookData: (ln: number) => {
      let bids = state.sortedBids
        .slice(0, ln)
        .map(price => state.bids[price])
        .reduce((result, item) => {
          result.push({
            price: item.price,
            amount: item.amount,
            total: result.length > 0 ? round(result[result.length - 1].total + item.amount) : round(item.amount),
          });

          return result;
        }, []);

      let asks = state.sortedAsks
        .slice(0, ln)
        .map(price => state.asks[price])
        .reduce((result, item) => {
          result.push({
            price: item.price,
            amount: item.amount,
            total: result.length > 0 ? round(result[result.length - 1].total + item.amount) : round(item.amount),
          });

          return result;
        }, []);

      let max;
      bids.length > 1 && asks.length > 1
        ? (max = Math.max(bids[bids.length - 1].total, asks[asks.length - 1].total))
        : (max = 0);

      bids = bids.map(item => ({
        ...item,
        relativeTotal: item.total / max,
      }));

      asks = asks.map(item => ({
        ...item,
        relativeTotal: item.total / max,
      }));

      return { asks, bids };
    },

    getQuoteToken: () => state.quoteToken,
    getBaseToken: () => state.baseToken,
  };
}
