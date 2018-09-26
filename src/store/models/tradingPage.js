// @flow
import * as actionCreators from '../actions/tradingPage'
import * as ohlcvActionCreators from '../actions/ohlcv'
import * as orderFormActionCreators from '../actions/orderForm'
import type { State, ThunkAction } from '../../types'

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
      let tokenPairData = await api.getTokenPairData()
      dispatch(actionCreators.updateTokenPairData(tokenPairData))

      let ohlcv = await api.getData()
      setTimeout(function() {
        dispatch(ohlcvActionCreators.saveData(ohlcv))
      }, 2000)

      let orders = await api.getOrders()
      dispatch(actionCreators.updateOrdersTable(orders))

      let { bids, asks, trades } = await api.getOrderBookData()
      dispatch(actionCreators.updateOrderBook(bids, asks))
      dispatch(actionCreators.updateTradesTable(trades))

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
      dispatch(actionCreators.updateCurrentPair(pair))

      let ohlcv = await api.getData()
      dispatch(ohlcvActionCreators.saveData(ohlcv))

      let { bids, asks, trades } = await api.getOrderBookData()
      dispatch(actionCreators.updateOrderBook(bids, asks))
      dispatch(actionCreators.updateTradesTable(trades))

      dispatch(orderFormActionCreators.saveData(orderFormData))
    } catch (e) {
      console.log(e)
    }
  }
}
