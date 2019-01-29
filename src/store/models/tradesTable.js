// @flow
import { getTradesDomain, getTokenPairsDomain, getAccountDomain } from '../domains';
import type { State } from '../../types';

export default function tradesTableSelector(state: State) {
  let accountDomain = getAccountDomain(state)
  let tokenPairsDomain = getTokenPairsDomain(state)
  let tradesDomain = getTradesDomain(state)
  
  let { address } = accountDomain

  return {
    trades: () => tradesDomain.marketTrades(50),
    userTrades: () => tradesDomain.userTrades(address),
    currentPair: () => tokenPairsDomain.getCurrentPair(),
  };
}
