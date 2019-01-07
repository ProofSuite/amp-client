// @flow
import type { 
  State, 
  ThunkAction 
} from '../../types'

import { 
  getTokenPairsDomain, 
  getAccountBalancesDomain,
  getOrdersDomain
} from '../domains'

import * as actionCreators from '../actions/tokenSearcher'

import { getQuoteToken, getBaseToken } from '../../utils/tokens'
import { quoteTokenSymbols as quotes } from '../../config/quotes'

export default function tokenSearcherSelector(state: State) {
  let domain = getTokenPairsDomain(state)
  let accountBalancesDomain = getAccountBalancesDomain(state)
  let ordersDomain = getOrdersDomain(state)
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
  let baseTokenLockedBalance = ordersDomain.lockedBalanceByToken(currentPair.baseTokenSymbol)
  let quoteTokenLockedBalance = ordersDomain.lockedBalanceByToken(currentPair.quoteTokenSymbol)
  let baseTokenBalance = accountBalancesDomain.get(currentPair.baseTokenSymbol)
  let quoteTokenBalance = accountBalancesDomain.get(currentPair.quoteTokenSymbol)
  let baseTokenAvailableBalance = baseTokenBalance - baseTokenLockedBalance
  let quoteTokenAvailableBalance = quoteTokenBalance - quoteTokenLockedBalance

  return {
    tokenPairsByQuoteToken,
    currentPair,
    baseTokenBalance,
    quoteTokenBalance,
    baseTokenAvailableBalance,
    quoteTokenAvailableBalance
  }
}

export const updateCurrentPair = (pair: string): ThunkAction => {
  return async (dispatch, getState, { socket, mixpanel }) => {
    mixpanel.track('trading-page/update-current-pair')

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
      socket.subscribeChart(newPair, state.ohlcv.currentTimeSpan.label, state.ohlcv.currentDuration.label)
    } catch (e) {
      console.log(e)
    }
  }
}
