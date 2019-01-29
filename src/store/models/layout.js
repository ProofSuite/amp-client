import * as actionCreators from '../actions/layout'
import * as notifierActionCreators from '../actions/app'

import {
  getAccountDomain,
  getAccountBalancesDomain
 } from '../domains'

import { fiatCurrencies, pricedTokens } from '../../config'

export default function createSelector(state) {
  let { authenticated, address, currentBlock, referenceCurrency } = getAccountDomain(state)
  let accountBalancesDomain = getAccountBalancesDomain(state)

  let ETHBalance = accountBalancesDomain.etherBalance()
  let WETHBalance = accountBalancesDomain.tokenBalance('WETH')
  let WETHAllowance = accountBalancesDomain.tokenAllowance('WETH')
  let accountLoading = !(ETHBalance && WETHBalance && WETHAllowance)
  let location = state.router.location.pathname

  let referenceCurrencies = fiatCurrencies.map((currency, i) => {
    return {
      rank: i,
      name: currency.name,
      symbol: currency.symbol
    }
  })

  let currentReferenceCurrency = referenceCurrencies.filter(currency => currency.name === referenceCurrency.name)[0]

  return {
    ETHBalance,
    WETHBalance,
    WETHAllowance,
    authenticated,
    address,
    accountLoading,
    currentBlock,
    currentReferenceCurrency,
    referenceCurrencies,
    location
  };
}


export function queryAppData(): ThunkAction {
  return async (dispatch, getState, { api, provider }) => {
    try {    
    let [ tokens, pairs ] = await Promise.all([
      api.getTokens(),
      api.fetchPairs()
    ])

    let tokenSymbols = pricedTokens
    let currencySymbols = ['USD', 'EUR', 'JPY']
    let exchangeRates = await api.fetchExchangeRates(tokenSymbols, currencySymbols)

    tokens = tokens.map(token => {
      return {
        ...token,
        USDRate: exchangeRates[token.symbol] ? exchangeRates[token.symbol].USD : 0,
        EURRate: exchangeRates[token.symbol] ? exchangeRates[token.symbol].EUR : 0,
        JPYRate: exchangeRates[token.symbol] ? exchangeRates[token.symbol].JPY : 0,
      }
    })

    dispatch(actionCreators.updateAppData(tokens, pairs))
  } catch (e) {
    console.log(e)
    dispatch(notifierActionCreators.addErrorNotification({ message: e.message }))
  }
}
}

export function createProvider(): ThunkAction {
  return async (dispatch, getState, { provider }) => {
    provider.createConnection()
  }
}