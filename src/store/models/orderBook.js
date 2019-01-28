// @flow
import { getOrderBookDomain, getTokenPairsDomain } from '../domains';
import type { State } from '../../types';

export default function orderBookSelector(state: State) {
  let { bids, asks } = getOrderBookDomain(state).getOrderBookData(25);
  let currentPair = getTokenPairsDomain(state).getCurrentPair();

  let midMarketPrice, spread

  if (bids[0] && asks[0]) {
    midMarketPrice = (bids[0].price + asks[0].price) / 2
    spread = (asks[0].price - bids[0].price) / asks[0].price  
  }

  return {
    bids,
    asks,
    currentPair,
    midMarketPrice,
    spread
  };
}
