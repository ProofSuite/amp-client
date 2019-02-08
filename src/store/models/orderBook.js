// @flow
import { getOrderBookDomain, getTokenPairsDomain } from '../domains';
import type { State } from '../../types';

import { parseWETHPair } from '../../utils/helpers'

export default function orderBookSelector(state: State) {
  let { bids, asks } = getOrderBookDomain(state).getOrderBookData(25);
  let rawPair = getTokenPairsDomain(state).getCurrentPair();

  //we display WETH as ETH on the frontend
  let currentPairName = parseWETHPair(rawPair.pair)
  let baseTokenSymbol = (rawPair.baseTokenSymbol === "WETH") ? "ETH" : rawPair.baseTokenSymbol
  let quoteTokenSymbol = (rawPair.quoteTokenSymbol === "WETH") ? "ETH" : rawPair.quoteTokenSymbol
  let currentPair = { ...rawPair, pair: currentPairName, baseTokenSymbol, quoteTokenSymbol }

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
