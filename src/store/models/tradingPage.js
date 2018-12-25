// @flow
import { getTokenPairsDomain, getAccountDomain, getTokenDomain, getAccountBalancesDomain, getConnectionDomain } from '../domains'
import * as actionCreators from '../actions/tradingPage'
import * as notifierActionCreators from '../actions/app'

import type { State, ThunkAction } from '../../types'
import { getSigner } from '../services/signer'
import { parseOrders, parseTokenPairsData } from '../../utils/parsers'

// eslint-disable-next-line
export default function tradingPageSelector(state: State) {
  let accountDomain = getAccountDomain(state)
  let accountBalancesDomain = getAccountBalancesDomain(state)
  let pairDomain = getTokenPairsDomain(state)
  let { isInitiated, isConnected } = getConnectionDomain(state);

  let authenticated = accountDomain.authenticated()

  let {
    pair,
    makeFee,
    takeFee,
    baseTokenSymbol,
    quoteTokenSymbol,
  } = pairDomain.getCurrentPair()

  let [ baseToken, quoteToken ] = accountBalancesDomain.getBalancesAndAllowancesBySymbol([baseTokenSymbol, quoteTokenSymbol])
  
  let {
    balance: baseTokenBalance,
    allowance: baseTokenAllowance,
    allowed: baseTokenIsAllowed
  } = baseToken

  let {
    balance: quoteTokenBalance,
    allowance: quoteTokenAllowance,
    allowed: quoteTokenIsAllowed
  } = quoteToken

  let pairIsAllowed = baseTokenIsAllowed && quoteTokenIsAllowed

  return {
    makeFee,
    takeFee,
    authenticated,
    baseTokenAllowance,
    baseTokenBalance,
    baseTokenSymbol,
    isConnected,
    isInitiated,
    pairIsAllowed,
    quoteTokenAllowance,
    quoteTokenBalance,
    quoteTokenSymbol,
    pairName: pair
  }
}

export const queryTradingPageData = (): ThunkAction => {
  return async (dispatch, getState, { api, socket }) => {
    try {
      socket.unsubscribeChart()
      socket.unsubscribeOrderBook()
      socket.unsubscribeTrades()

      let state = getState()
      let signer = getSigner()
      let pairDomain = getTokenPairsDomain(state)
      let currentPair = pairDomain.getCurrentPair()
      let pairs = pairDomain.getPairsByCode()

      let userAddress = await signer.getAddress()

      let [
        tokenPairData,
        orders
      ] = await Promise.all([
        api.fetchTokenPairData(),
        api.fetchOrders(userAddress)
      ])
  
      tokenPairData = parseTokenPairsData(tokenPairData, pairs)
      orders = parseOrders(orders, pairs)

      dispatch(actionCreators.updateTradingPageData(tokenPairData, orders))

      socket.subscribeTrades(currentPair)
      socket.subscribeOrderBook(currentPair)
      socket.subscribeChart(currentPair, state.ohlcv.currentTimeSpan.label, state.ohlcv.currentDuration.label)
    } catch (e) {
      console.log(e)
    }
  }
}

export function toggleAllowances(baseTokenSymbol: string, quoteTokenSymbol: string): ThunkAction {
  return async (dispatch, getState, { txProvider }) => {
    try {
      const state = getState()
      const tokens = getTokenDomain(state).bySymbol()
      const baseTokenAddress = tokens[baseTokenSymbol].address
      const quoteTokenAddress = tokens[quoteTokenSymbol].address
      
      const txConfirmHandler = (txConfirmed) => {
        txConfirmed
          ? dispatch(notifierActionCreators.addSuccessNotification({ message: `Approval Successful. You can now start trading!` }))
          : dispatch(notifierActionCreators.addErrorNotification({ message: `Approval Failed. Please try again.` }))
      }

      txProvider.updatePairAllowances(baseTokenAddress, quoteTokenAddress, txConfirmHandler)
      dispatch(notifierActionCreators.addSuccessNotification({ message: `Unlocking ${baseTokenSymbol}/${quoteTokenSymbol} trading. Your transaction should be approved within a few minutes`}))
  
    } catch (e) {
      console.log(e)
      dispatch(notifierActionCreators.addErrorNotification({ message: e.message }))
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
      socket.subscribeChart(tokenPair, state.ohlcv.currentTimeSpan.label, state.ohlcv.currentDuration.label)
    } catch (e) {
      console.log(e)
    }

  }
}