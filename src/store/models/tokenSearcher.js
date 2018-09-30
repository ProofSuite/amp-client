// @flow
import type { State, ThunkAction } from '../../types'
import { getTokenPairsDomain, getAccountBalancesDomain } from '../domains'
import * as actionCreators from '../actions/tokenSearcher'
import * as ohlcvActionCreators from '../actions/ohlcv'

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
  let baseTokenBalance = accountBalancesDomain.tokenBalance(currentPair.baseTokenSymbol)
  let quoteTokenBalance = accountBalancesDomain.tokenBalance(currentPair.quoteTokenSymbol)

  return {
    tokenPairsByQuoteToken,
    currentPair,
    baseTokenBalance,
    quoteTokenBalance
  }
}

export const updateCurrentPair = (pair: string): ThunkAction => {
  return async (dispatch, getState, { api, trading }) => {
    try {
      let state = getState()
      dispatch(actionCreators.updateCurrentPair(pair))

      let pairDomain = getTokenPairsDomain(state)
      let { baseTokenAddress, quoteTokenAddress } = pairDomain.getPair(pair)

      let ohlcv = await api.getOHLCV(baseTokenAddress, quoteTokenAddress)
      dispatch(ohlcvActionCreators.saveData(ohlcv))

      let { bids, asks } = await api.getOrderBookData(baseTokenAddress, quoteTokenAddress)
      dispatch(actionCreators.updateOrderBook(bids, asks))

      let trades = await api.getTrades(baseTokenAddress, quoteTokenAddress)
      dispatch(actionCreators.updateTradesTable(trades))
    } catch (e) {
      console.log(e)
    }
  }
}
