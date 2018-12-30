import { getAccountBalancesDomain, getTokenDomain, getAccountDomain } from '../domains'

import type { State } from '../../types'

import { round, getExchangeRate } from '../../utils/helpers'



export default function tokenBalanceChartSelector(state: State) {
  let accountBalancesDomain = getAccountBalancesDomain(state)
  let tokenBalances = accountBalancesDomain.balances()
  let tokens = getTokenDomain(state).bySymbol()
  let currency = getAccountDomain(state).referenceCurrency()

  let chartData = []

  Object.keys(tokenBalances).forEach(symbol => {
    let token = tokens[symbol]
    if (symbol === 'WETH') token = tokens['ETH']

    let rate = getExchangeRate(currency.name, token)
    let balance = round(tokenBalances[symbol].balance, 4)
    let value = round(rate * balance)

    if (value !== 0) {
      chartData.push({
        symbol,
        balance,
        value, 
        currency: currency.symbol
      })
    }
  })

  return {
    balancesLoading: accountBalancesDomain.loading(),
    tokenBalances: chartData,
    tokens: tokens
  }
}