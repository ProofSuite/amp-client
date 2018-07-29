// @flow
import type { State } from '../../types';
import { getTokenPairsDomain } from '../domains';
import { getQuoteToken, getBaseToken } from '../../utils/tokens';
import { quoteTokenSymbols as quotes } from '../../config/quotes';

export default function tokenSearcherSelector(state: State) {
  let domain = getTokenPairsDomain(state);

  let tokenPairs = domain.getTokenPairsDataArray();
  let favoriteTokenPairs = domain.getFavoritePairs();
  let tokenPairsByQuoteToken = {};

  for (let quote of quotes) {
    tokenPairsByQuoteToken[quote] = tokenPairs
      .filter(({ pair }) => getQuoteToken(pair) === quote)
      .map(tokenPair => ({
        ...tokenPair,
        base: getBaseToken(tokenPair.pair),
        quote: getQuoteToken(tokenPair.pair),
      }))
      .map(tokenPair => ({
        ...tokenPair,
        favorited: favoriteTokenPairs.indexOf(tokenPair.pair) > -1,
      }));
  }

  return {
    tokenPairsByQuoteToken,
  };
}
