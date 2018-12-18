import { getAccountBalancesDomain, getTokenDomain, getAccountDomain } from '../domains'

import type { State } from '../../types'

import { round, getExchangeRate } from '../../utils/helpers'



export default function tokenBalanceChartSelector(state: State) {
  let tokenBalancesDomain = getAccountBalancesDomain(state)

  let tokenBalances = tokenBalancesDomain.balances()
  let tokens = getTokenDomain(state).bySymbol()
  let currency = getAccountDomain(state).referenceCurrencyName()

  let chartData = Object.keys(tokenBalances).map((symbol) => {
    let token = tokens[symbol]
    let rate = getExchangeRate(currency, token)
    let balance = rate * round(tokenBalances[symbol].balance)

    return {
      symbol: symbol,
      value: balance,
    }
  })

  return {
    balancesLoading: tokenBalancesDomain.loading(),
    tokenBalances: chartData,
    tokens: tokens,
  }
}