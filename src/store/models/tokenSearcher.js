// @flow
import type { State, ThunkAction } from '../../types'
import { getTokenPairsDomain, getAccountBalancesDomain } from '../domains'
import * as actionCreators from '../actions/tokenSearcher'

import { getQuoteToken, getBaseToken } from '../../utils/tokens'
import { quoteTokenSymbols as quotes } from '../../config/quotes'

export default function tokenSearcherSelector(state: State) {
  let domain = getTokenPairsDomain(state)
  let accountBalancesDomain = getAccountBalancesDomain(state)
  let tokenPairs = domain.getTokenPairsDataArray()
  let favoriteTokenPairs = domain.getFavoritePairs()
  let tokenPairsByQuoteToken = {}

  for (let quote of quotes) {
    tokenPairsByQuoteToken[quote] = tokenPairs
      .filter(({ pair }) => getQuoteToken(pair) === quote)
      .map(tokenPair => ({
        ...tokenPair,
        base: getBaseToken(tokenPair.pair),
        quote: getQuoteToken(tokenPair.pair)
      }))
      .map(tokenPair => ({
        ...tokenPair,
        favorited: favoriteTokenPairs.indexOf(tokenPair.pair) > -1
      }))
  }

  let currentPair = domain.getCurrentPair()
  let baseTokenBalance = accountBalancesDomain.formattedTokenBalance(currentPair.baseTokenSymbol)
  let quoteTokenBalance = accountBalancesDomain.formattedTokenBalance(currentPair.quoteTokenSymbol)

  return {
    tokenPairsByQuoteToken,
    currentPair,
    baseTokenBalance,
    quoteTokenBalance
  }
}

export const updateCurrentPair = (pair: string): ThunkAction => {
  return async (dispatch, getState, { socket }) => {
    try {
      socket.unsubscribeChart()
      socket.unsubscribeOrderBook()
      socket.unsubscribeTrades()

      let state = getState()
      dispatch(actionCreators.updateCurrentPair(pair))

      let pairDomain = getTokenPairsDomain(state)
      let newPair = pairDomain.getPair(pair)

      socket.subscribeTrades(newPair)
      socket.subscribeOrderBook(newPair)
      socket.subscribeChart(newPair)
    } catch (e) {
      console.log(e)
    }
  }
}