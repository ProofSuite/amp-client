import {
  getAccountDomain,
  getAccountBalancesDomain
 } from '../domains'

import { fiatCurrencies } from '../../config'

export default function createSelector(state) {
  let accountDomain = getAccountDomain(state)
  let accountBalancesDomain = getAccountBalancesDomain(state)

  let ETHBalance = accountBalancesDomain.etherBalance()
  let WETHBalance = accountBalancesDomain.tokenBalance('WETH')
  let WETHAllowance = accountBalancesDomain.tokenAllowance('WETH')
  let authenticated = accountDomain.authenticated()
  let address = accountDomain.address()
  let currentBlock = accountDomain.currentBlock()
  let referenceCurrency = accountDomain.referenceCurrency()
  let accountLoading = !(ETHBalance && WETHBalance && WETHAllowance)

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
    referenceCurrencies
  };
}


export function createProvider(): ThunkAction {
  return async (dispatch, getState, { provider }) => {
    provider.createConnection()
  }
}