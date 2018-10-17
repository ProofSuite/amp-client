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

  console.log(quotes)
  console.log(tokenPairs)

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
  return async (dispatch, getState, { api, socket }) => {
    try {
      socket.unsubscribeChart()
      socket.unsubscribeOrderBook()
      socket.unsubscribeTrades()

      let state = getState()
      dispatch(actionCreators.updateCurrentPair(pair))

      let pairDomain = getTokenPairsDomain(state)
      let newPair = pairDomain.getPair(pair)
      let { baseTokenAddress, quoteTokenAddress } = newPair

      socket.subscribeTrades(newPair)
      socket.subscribeOrderBook(newPair)
      socket.subscribeChart(newPair)
    } catch (e) {
      console.log(e)
    }
  }
}



// let { bids, asks } = await api.getOrderBookData(baseTokenAddress, quoteTokenAddress)
//       dispatch(actionCreators.initOrderBook(bids, asks))

//       let trades = await api.getTrades(baseTokenAddress, quoteTokenAddress)
//       dispatch(actionCreators.initTradesTable(trades))