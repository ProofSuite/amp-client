// @flow
import { getTradesDomain, getTokenPairsDomain, getAccountDomain } from '../domains';
import type { State } from '../../types';

export default function tradesTableSelector(state: State) {
  let accountDomain = getAccountDomain(state)
  let userAddress = accountDomain.address()

  return {
    trades: () => getTradesDomain(state).lastTrades(50),
    userTrades: () => getTradesDomain(state).userTrades(userAddress),
    currentPair: () => getTokenPairsDomain(state).getCurrentPair(),
  };
}
