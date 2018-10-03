// @flow
import { sortTable } from '../../utils/helpers'

import type { Trade, Trades, TradesState } from '../../types/trades'
import { formatNumber } from 'accounting-js'

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

export default function tradesDomain(state: TradesState) {
  return {
    byHash: () => state.byHash,
    all: () => Object.values(state.byHash),

    userTrades: (address: string) => {
      let trades = Object.values(state.byHash)
      let isUserTrade = (trade: Trade) => trade.taker === address || trade.maker === address
      let userTrades = trades.filter(trade => isUserTrade(trade))
      let sortedTrades = sortTable(userTrades, 'time', 'desc')

      let formattedTrades = sortedTrades.map(trade => {
        trade.price = formatNumber(trade.price, { precision: 2 })
        trade.amount = formatNumber(trade.amount, { precision: 2 })

        return trade
      })

      return formattedTrades
    },

    lastTrades: (n: number) => {
      let trades = Object.values(state.byHash)
      let sortedTrades = sortTable(trades, 'time', 'desc')
      let lastTrades = (sortedTrades: Trades).slice(0, n)

      lastTrades = lastTrades.map((trade, index) => {
        let change = (trades[index + 1] && trade.price >= trades[index + 1].price) ? 'positive' : 'negative'
        trade.change = change
        trade.price = formatNumber(trade.price, { precision: 2 })
        trade.amount = formatNumber(trade.amount, { precision: 2 })

        return trade
      })

      return lastTrades
    }
  }
}
