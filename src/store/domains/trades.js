// @flow
import { sortTable } from '../../utils/helpers'

import type { Trades, TradesState } from '../../types/trades'

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

export const tradesReset = () => {
  const event = (state: TradesState) => ({
    ...state,
    byTimeStamp: {}
  })

  return event
}

export default function tradesDomain(state: TradesState) {
  return {
    byTimeStamp: () => state.byHash,
    all: () => Object.values(state.byHash),

    lastTrades: (n: number) => {
      let trades = Object.values(state.byHash)
      let sortedTrades = sortTable(trades, 'time', 'asc')
      let lastTrades = (trades: Trades).slice(Math.max(sortedTrades.length - n, 1))

      return lastTrades
    }
  }
}
