// @flow
import { sortTable } from '../../utils/helpers'

import type { Trade, Trades, TradesState } from '../../types/trades'

const initialState = {
  byHash: {}
}

export const initialized = () => {
  const event = (state: TradesState = initialState) => state
  return event
}

export const tradesUpdated = (trades: Trades) => {
  const event = (state: TradesState) => {
    let newState = trades.reduce((result, item) => {
      result[item.hash] = {
        ...state[item.hash],
        ...item
      }
      return result
    }, {})

    return {
      ...state,
      byHash: {
        ...state.byHash,
        ...newState
      }
    }
  }

  return event
}

export const tradesDeleted = (trades: Trades) => {
  const event = (state: TradesState) => ({
    ...state,
    byHash: Object.keys(state.byHash)
      .filter(key => trades.indexOf(key) === -1)
      .reduce((result, current) => {
        result[current] = state.byHash[current]
        return result
      }, {})
  })

  return event
}

export const tradesInitialized = (trades: Trades) => {
  const event = (state: TradesState) => {
    let newState = trades.reduce((result, item) => {
      result[item.hash] = {
        ...state[item.hash],
        ...item
      }
      return result
    }, {})

    return { byHash: newState }
  }

  return event
}

export const tradesReset = () => {
  const event = (state: TradesState) => {
    return {
      ...state,
      byHash: {}
    }
  }

  return event
}


export default function tradesDomain(state: TradesState) {
  return {
    byTimeStamp: () => state.byHash,
    all: () => Object.values(state.byHash),

    userTrades: (address) => {
      let trades = Object.values(state.byHash)
      let isUserTrade = (trade: Trade) => (trade.taker === address || trade.maker === address)
      let userTrades = trades.filter(trade => isUserTrade(trade))
      userTrades = sortTable(trades, 'time', 'desc')
      return userTrades
    },

    lastTrades: (n: number) => {
      let trades = Object.values(state.byHash)
      let sortedTrades = sortTable(trades, 'time', 'desc')
      let lastTrades = (sortedTrades: Trades).slice(0, n)
      return lastTrades
    },
  }
}
