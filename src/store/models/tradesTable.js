// @flow
import { getTradesDomain, getTokenPairsDomain, getAccountDomain } from '../domains';
import type { State } from '../../types';

import { parseWETHPair } from '../../utils/helpers'

export default function tradesTableSelector(state: State) {
  let accountDomain = getAccountDomain(state)
  let tokenPairsDomain = getTokenPairsDomain(state)
  let tradesDomain = getTradesDomain(state)
  
  let { address, authenticated } = accountDomain

  let trades = tradesDomain.marketTrades(50)
  let userTrades = tradesDomain.userTrades(address)
  
  let rawPair = tokenPairsDomain.getCurrentPair()
  let currentPairName = parseWETHPair(rawPair.pair)
  let baseTokenSymbol = (rawPair.baseTokenSymbol === "WETH") ? "ETH" : rawPair.baseTokenSymbol
  let quoteTokenSymbol = (rawPair.quoteTokenSymbol === "WETH") ? "ETH" : rawPair.quoteTokenSymbol
  let currentPair = { ...rawPair, pair: currentPairName, baseTokenSymbol, quoteTokenSymbol }

  return {
    authenticated,
    trades,
    userTrades,
    currentPair
  };
}
