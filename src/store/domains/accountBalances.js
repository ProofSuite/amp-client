// @flow
import type { AccountAllowances, AccountBalancesMap, AccountBalances, AccountBalancesState } from '../../types/accountBalances'
import { round } from '../../utils/helpers'
import { utils } from 'ethers'
import { ALLOWANCE_MINIMUM } from '../../utils/constants'
import { formatNumber } from 'accounting-js'
import { elementIsOrContains } from '@blueprintjs/core/lib/esm/common/utils';
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
        allowance: item.allowance
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
    balances() {
      return state
    },
    formattedBalances() {
      let keys = Object.keys(state)
      let formattedBalances = {}

      keys.map(key => {
        formattedBalances[key] = formatNumber(state[key].balance, { precision: 2 })
      })

      return formattedBalances
    },
    etherBalance() {
      return state['ETH'] ? state['ETH'].balance : null
    },
    formattedEtherBalance() {
      return state['ETH'] ? formatNumber(state['ETH'].balance, { precision: 2 }) : null
    },
    tokenBalance(symbol: string) {
      return state[symbol] ? state[symbol].balance : null
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
      let balancePoints = round(state[symbol].balance * precisionMultiplier, 0)

      let etherMultiplier = utils.bigNumberify('1000000000000000000')
      let balance = utils
        .bigNumberify(balancePoints)
        .mul(etherMultiplier)
        .div(utils.bigNumberify(precisionMultiplier))

      return balance
    },
    get(symbol: string) {
      return state[symbol] ? state[symbol].balance : null
    },
    isSubscribed(symbol: string) {
      return state[symbol] ? state[symbol].subscribed : false
    },
    isAllowed(symbol: string) {
      return state[symbol] ? state[symbol].allowance > ALLOWANCE_MINIMUM : false
    },
    isAllowancePending(symbol: string) {
      return state[symbol] ? state[symbol].allowance === 'pending' : false
    },
    getBalancesAndAllowances(tokens: Array<Object>) {
      return (tokens: any).map(token => {
        return {
          ...token,
          balance: state[token.symbol] ? formatNumber(state[token.symbol].balance, { precision: 2 }) : null,
          allowed: state[token.symbol] && state[token.symbol].allowance > ALLOWANCE_MINIMUM,
          allowancePending: state[token.symbol] && state[token.symbol].allowance === 'pending'
        }
      })
    },
    depositTableData() {
      return (Object.values(state): any).map(item => {
        return {
          symbol: item.symbol,
          balance: formatNumber(item.balance, { precision: 2 }),
          allowed: item.allowance > ALLOWANCE_MINIMUM,
          allowancePending: item.allowance === 'pending'
        }
      })
    },
    balancesArray() {
      return (Object.values(state): any).map(item => {
        return {
          symbol: item.symbol,
          balance: formatNumber(item.balance, { precision: 2}),
          allowed: item.allowance > ALLOWANCE_MINIMUM
        }
      })
    }
  }
}
