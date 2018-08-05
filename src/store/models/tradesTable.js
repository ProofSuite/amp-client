// @flow
import { getTradesDomain, getTokenPairsDomain } from '../domains';
import type { State } from '../../types';

export default function tradesTableSelector(state: State) {
  return {
    trades: () => getTradesDomain(state).lastTrades(50),
    currentPair: () => getTokenPairsDomain(state).getCurrentPair(),
  };
}
