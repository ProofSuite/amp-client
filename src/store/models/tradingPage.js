// @flow
import { getTokenPairsDomain, getAccountDomain } from '../domains'
import * as actionCreators from '../actions/tradingPage'
import * as ohlcvActionCreators from '../actions/ohlcv'
import type { State, ThunkAction } from '../../types'
import { getSigner } from '../services/signer'

// eslint-disable-next-line
export default function tradingPageSelector(state: State) {
  let accountDomain = getAccountDomain(state)

  return {
    authenticated: accountDomain.authenticated()
  }
}

export const queryDefaultData = (): ThunkAction => {
  return async (dispatch, getState, { api, socket }) => {
    try {
      let state = getState()
      let signer = getSigner()
      let pairDomain = getTokenPairsDomain(state)

      let userAddress = await signer.getAddress()
      let currentPair = pairDomain.getCurrentPair()
      let { baseTokenAddress, quoteTokenAddress } = currentPair

      let tokenPairData = await api.getTokenPairData()
      dispatch(actionCreators.updateTokenPairData(tokenPairData))

      let ohlcv = await api.getOHLCV(baseTokenAddress, quoteTokenAddress)
      dispatch(ohlcvActionCreators.saveData(ohlcv))

      let orders = await api.getOrders(userAddress)
      dispatch(actionCreators.initOrdersTable(orders))

      let trades = await api.getTrades(baseTokenAddress, quoteTokenAddress)
      dispatch(actionCreators.initTradesTable(trades))

      let { asks, bids } = await api.getOrderBookData(baseTokenAddress, quoteTokenAddress)
      dispatch(actionCreators.initOrderBook(bids, asks))

      let unsubscribeTrades = await socket.subscribeTrades(currentPair)
      let unsubscribeOrderBook = await socket.subscribeOrderBook(currentPair)
      // let unsubscribeOrderBook = await socket.subscribeOrderBook(currentPair)
      // let unsubscribeChart = await socket.subscribeChart(currentPair)
    } catch (e) {
      console.log(e)
    }
  }
}

// eslint-disable-next-line
export const updateCurrentPair = (pair: string): ThunkAction => {
  return async (dispatch, getState, { api, socket }) => {
    try {
      let state = getState()
      let pairDomain = getTokenPairsDomain(state)

      dispatch(actionCreators.updateCurrentPair(pair))
      let tokenPair = pairDomain.getPair(pair)
      let { baseTokenAddress, quoteTokenAddress } = tokenPair

      let ohlcv = await api.getOHLCV(baseTokenAddress, quoteTokenAddress)
      dispatch(ohlcvActionCreators.saveData(ohlcv))

      let { bids, asks } = await api.getOrderBookData(baseTokenAddress, quoteTokenAddress)
      dispatch(actionCreators.initOrderBook(bids, asks))

      let trades = await api.getTrades(baseTokenAddress, quoteTokenAddress)
      dispatch(actionCreators.initTradesTable(trades))

      let unsubscribeTrades = await socket.subscribeTrades(tokenPair)
      let unsubscribeOrderBook = await socket.subscribeOrderBook(tokenPair)
    } catch (e) {
      console.log(e)
    }
  }
}
