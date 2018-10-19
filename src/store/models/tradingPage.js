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
      socket.unsubscribeChart()
      socket.unsubscribeOrderBook()
      socket.unsubscribeTrades()

      let state = getState()
      let signer = getSigner()
      let pairDomain = getTokenPairsDomain(state)

      let userAddress = await signer.getAddress()
      let currentPair = pairDomain.getCurrentPair()

      let tokenPairData = await api.getTokenPairData()

      dispatch(actionCreators.updateTokenPairData(tokenPairData))

      let orders = await api.getOrders(userAddress)
      dispatch(actionCreators.initOrdersTable(orders))

      socket.subscribeTrades(currentPair)
      socket.subscribeOrderBook(currentPair)
      socket.subscribeChart(currentPair)
    } catch (e) {
      console.log(e)
    }
  }
}

// eslint-disable-next-line
export const updateCurrentPair = (pair: string): ThunkAction => {
  return async (dispatch, getState, { api, socket }) => {
    try {
      socket.unsubscribeChart()
      socket.unsubscribeOrderBook()
      socket.unsubscribeTrades()

      let state = getState()
      let pairDomain = getTokenPairsDomain(state)

      dispatch(actionCreators.updateCurrentPair(pair))
      let tokenPair = pairDomain.getPair(pair)

      socket.subscribeTrades(tokenPair)
      socket.subscribeOrderBook(tokenPair)
      socket.subscribeChart(tokenPair)
    } catch (e) {
      console.log(e)
    }
  }
}
