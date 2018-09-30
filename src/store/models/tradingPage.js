// @flow
import { getTokenPairsDomain } from '../domains'
import * as actionCreators from '../actions/tradingPage'
import * as ohlcvActionCreators from '../actions/ohlcv'
import * as orderFormActionCreators from '../actions/orderForm'
import type { State, ThunkAction } from '../../types'
import { getSigner } from '../services/signer'

// eslint-disable-next-line
export default function getTradingPageModel(state: State) {
  return {}
}

const orderFormData = {
  askPrice: 0.25,
  bidPrice: 0.1,
  totalQuoteBalance: 100,
  totalBaseBalance: 1000,
  formName: 'Sell',
  quoteToken: 'ETH',
  baseToken: 'USD'
}

export const queryDefaultData = (): ThunkAction => {
  return async (dispatch, getState, { api }) => {
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
      dispatch(actionCreators.updateOrdersTable(orders))

      let trades = await api.getTrades(baseTokenAddress, quoteTokenAddress)
      dispatch(actionCreators.updateTradesTable(trades))

      let { asks, bids } = await api.getOrderBookData(baseTokenAddress, quoteTokenAddress)
      dispatch(actionCreators.updateOrderBook(bids, asks))

      dispatch(orderFormActionCreators.saveData(orderFormData))
    } catch (e) {
      console.log(e)
    }
  }
}

// eslint-disable-next-line
export const updateCurrentPair = (pair: string): ThunkAction => {
  return async (dispatch, getState, { api }) => {
    try {
      let state = getState()
      dispatch(actionCreators.updateCurrentPair(pair))

      let pairDomain = getTokenPairsDomain(state)
      let { baseTokenAddress, quoteTokenAddress } = pairDomain.getPair(pair)

      let ohlcv = await api.getOHLCV(baseTokenAddress, quoteTokenAddress)
      dispatch(ohlcvActionCreators.saveData(ohlcv))

      let { bids, asks } = await api.getOrderBookData()
      dispatch(actionCreators.updateOrderBook(bids, asks))

      let trades = await api.getTrades(baseTokenAddress, quoteTokenAddress)
      dispatch(actionCreators.updateTradesTable(trades))

      dispatch(orderFormActionCreators.saveData(orderFormData))
    } catch (e) {
      console.log(e)
    }
  }
}
