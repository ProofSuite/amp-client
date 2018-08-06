// @flow
import { getOrderBookDomain, getTokenPairsDomain } from '../domains';
import type { State } from '../../types';

export default function orderBookSelector(state: State) {
  let { bids, asks } = getOrderBookDomain(state).getOrderBookData(25);
  let currentPair = getTokenPairsDomain(state).getCurrentPair();

  return {
    bids,
    asks,
    currentPair,
  };
}
