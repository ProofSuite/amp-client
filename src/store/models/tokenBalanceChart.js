import { getAccountBalancesDomain, getTokenDomain, getAccountDomain } from '../domains'

import type { State } from '../../types'

import { round, getExchangeRate } from '../../utils/helpers'



export default function tokenBalanceChartSelector(state: State) {
  let accountBalancesDomain = getAccountBalancesDomain(state)
  let tokenBalances = accountBalancesDomain.balances()
  let tokens = getTokenDomain(state).bySymbol()
  let currency = getAccountDomain(state).referenceCurrency
  let chartData = []

  Object.keys(tokenBalances).forEach(symbol => {
    let token = tokens[symbol]
    //The case of WETH and ETH are treated separately below. See comment
    if (symbol === 'WETH' || symbol === "ETH") return

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

  //We consider that both ETH and WETH (or ETH wallet balance and WETH trading balance represent the same thing on the frontend 
  //So we treat the case of ETH/WETH in a different by adding both balances. 
  //The exchange rate of WETH and ETH are the same
  let ETHExchangeRate = getExchangeRate(currency.name, tokens["ETH"])
  let ETHBalance = round(round(tokenBalances["ETH"].balance, 4) + round(tokenBalances["WETH"].balance, 4), 4)
  let ETHValue = round(ETHExchangeRate * ETHBalance)

  if (ETHValue !== 0) {
    chartData.push({
      symbol: "ETH",
      balance: ETHBalance, 
      value: ETHValue,
      currency: currency.symbol
    })
  }

  console.log(chartData)

  return {
    balancesLoading: accountBalancesDomain.loading(),
    tokenBalances: chartData,
    tokens: tokens
  }
}