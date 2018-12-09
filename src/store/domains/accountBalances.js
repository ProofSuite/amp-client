// @flow
import type { AccountAllowances, AccountBalances, AccountBalancesState } from '../../types/accountBalances'
import { round } from '../../utils/helpers'
import { utils } from 'ethers'
import { ALLOWANCE_MINIMUM } from '../../utils/constants'
import { formatNumber } from 'accounting-js'
// eslint-disable-next-line
const initialState = {}


export function initialized() {
  const initialState = {}
  const event = (state: AccountBalancesState = initialState) => state

  return event
}

export function subscribed(symbol: string) {
  const event = (state: AccountBalancesState) => ({
    ...state,
    [symbol]: {
      balance: state[symbol] ? state[symbol].balance : null,
      symbol: symbol,
      subscribed: true
    }
  })
  return event
}

export function updated(accountBalances: AccountBalances) {
  const event = (state: AccountBalancesState) => {
    let newState = accountBalances.reduce((result, item) => {
      result[item.symbol] = {
        ...state[item.symbol],
        symbol: item.symbol,
        balance: item.balance,
        subscribed: state[item.symbol] ? state[item.symbol].subscribed : false
      }
      return result
    }, {})

    return {
      ...state,
      ...newState
    }
  }

  return event
}

export function allowancesUpdated(allowances: AccountAllowances) {
  const event = (state: AccountBalancesState) => {
    let newState = allowances.reduce((result, item) => {
      result[item.symbol] = {
        ...state[item.symbol],
        symbol: item.symbol,
        allowance: item.allowance,
        allowancePending: false,
      }
      return result
    }, {})
    return {
      ...state,
      ...newState
    }
  }

  return event
}


export function allowancesPendingUpdated(symbols: string[]) {
  const event = (state: AccountBalancesState) => {
    let newState = symbols.reduce((result, symbol) => {
      result[symbol] = {
        ...state[symbol],
        symbol: symbol,
        allowancePending: true
      }

      return result
    }, {})

    return {
      ...state,
      ...newState
    }
  }

  return event
}


export function unsubscribed(symbol: string) {
  const event = (state: AccountBalancesState) => ({
    ...state,
    [symbol]: {
      ...state[symbol],
      subscribed: false
    }
  })

  return event
}

export function cleared() {
  const event = (state: AccountBalancesState) => {}
  return event
}

export default function accountBalancesDomain(state: AccountBalancesState) {
  return {
    balances(): AccountBalancesState {
      return state
    },
    // we assume that account balances are loading as long as we have no ETH and no WETH state.
    loading(): boolean {
      return (state['ETH'] && state['WETH']) ? false : true
    },
    formattedBalances(): * {
      let keys = Object.keys(state)
      let formattedBalances = {}

      keys.forEach(key => {
        formattedBalances[key] = formatNumber(state[key].balance, { precision: 2 })
      })

      return formattedBalances
    },
    tokenChartBalances(): * {
      let keys = Object.keys(state)
      let numericBalances = []

      keys.forEach(key => {
        let value = round(state[key].balance)
        if (value !== 0) numericBalances.push({symbol: key, value })
      })

      return numericBalances
    },
    etherBalance(): ?string {
      return state['ETH'] ? state['ETH'].balance : null
    },
    formattedEtherBalance(): ?string {
      return state['ETH'] ? formatNumber(state['ETH'].balance, { precision: 2 }) : null
    },
    tokenBalance(symbol: string): ?string {
      return state[symbol] ? state[symbol].balance : null
    },
    tokenAllowance(symbol: string): ?string {
      return state[symbol] ? state[symbol].allowance : null
    },
    numericTokenBalance(symbol: string): ?number {
      return state[symbol] ? Number(state[symbol].balance) : null
    },
    numericTokenAllowance(symbol: string): ?number {
      return state[symbol] ? Number(state[symbol].allowance) : null
    },
    formattedTokenBalance(symbol: string) {
      return state[symbol] ? formatNumber(state[symbol].balance, { precision: 2 }) : null
    },
    getBigNumberBalance(symbol: string) {
      if (!state[symbol]) return null
      //The precision multiplier allows for rounding a decimal balance to a "point" number that
      //can be converted into a bignumber. After the bignumber balance is computed, we divide by
      //the precisionMultiplier to offset the initial multiplication by the precision multiplier
      let precisionMultiplier = 1e4
      let numericBalance = Number(state[symbol].balance)
      let balancePoints = round(numericBalance * precisionMultiplier, 0)

      let etherMultiplier = utils.bigNumberify('1000000000000000000')
      let balance = utils
        .bigNumberify(balancePoints)
        .mul(etherMultiplier)
        .div(utils.bigNumberify(precisionMultiplier))

      return balance
    },
    get(symbol: string): ?string {
      return state[symbol] ? state[symbol].balance : null
    },
    isSubscribed(symbol: string): boolean {
      return state[symbol] ? state[symbol].subscribed : false
    },
    isAllowed(symbol: string): boolean {
      return state[symbol] ? state[symbol].allowance >= state[symbol].balance : false
    },
    isAllowancePending(symbol: string): boolean {
      return state[symbol] ? state[symbol].allowance === 'pending' : false
    },
    //To simply UX, we suppose that a trader is "allowing" the exchange smart contract to trade tokens if the
    //allowance value is set to a very large number. If the allowance is above ALLOWANCE_MINIMUM, the tokens is
    //is considered tradeable on the frontend app.
    getBalancesAndAllowances(tokens: Array<Object>) {
      return (tokens: any).map(token => {        
        if (!state[token.symbol]) {
          return {
            ...token,
            balance: null,
            allowed: null,
            allowancePending: null
          }
        }

        let balance = state[token.symbol].balance
        let allowance = state[token.symbol].allowance
        let allowed = Number(allowance) >= Number(balance)
        
        return {
          ...token,
          balance: balance,
          allowed: allowed,
          allowancePending: state[token.symbol].allowancePending
          
        }
      })
    },
    getBalancesAndAllowancesBySymbol(symbols: Array<string>) {
      return (symbols: any).map(symbol => {        
        if (!state[symbol]) {
          return {
            balance: null,
            allowed: null,
            allowancePending: null
          }
        }

        let balance = state[symbol].balance
        let allowance = state[symbol].allowance
        let allowed = Number(allowance) >= Number(balance)
        
        return {
          balance: balance,
          allowed: allowed,
          allowancePending: state[symbol].allowancePending
          
        }
      })
    },
    balancesArray() {
      return (Object.values(state): any).map(item => {
        return {
          symbol: item.symbol,
          balance: formatNumber(item.balance, { precision: 2 }),
          allowed: item.allowance >= item.balance
        }
      })
    }
  }
}
