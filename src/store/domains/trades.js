// @flow
import { sortTable } from '../../utils/helpers'
import { formatNumber } from 'accounting-js'
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
    byHash: () => state.byHash,
    all: () => Object.values(state.byHash),

    userTrades: (address: string) => {
      let trades = Object.values(state.byHash)
      let isUserTrade = (trade: Trade) => (trade.taker === address || trade.maker === address)

      trades = trades.filter(trade => isUserTrade(trade))
      trades = sortTable(trades, 'time', 'desc')
      trades = trades.map(trade => {
        return {
          ...trade,
          amount: formatNumber(trade.amount, { precision: 2 }),
          price: formatNumber(trade.price, { precision: 2 })
        }
      })

      return trades
    },

    marketTrades: (n: number) => {
      let trades = Object.values(state.byHash)
      trades = sortTable(trades, 'time', 'desc')
      trades = trades.map((trade, index) => {
        let change

        (index === trades.length-1)
          ? change = 'positive'
          : (trade.price > trades[index+1].price)
            ? change = 'positive'
            : change = 'negative'

        return {
          ...trade,
          amount: formatNumber(trade.amount, { precision: 2 }),
          price: formatNumber(trade.price, { precision: 2 }),
          change
        }
      })

      trades = (trades: Trades).slice(0, n)
      return trades
    },

    lastTrades: (n: number) => {
      let trades = Object.values(state.byHash)
      let sortedTrades = sortTable(trades, 'time', 'desc')
      let lastTrades = (sortedTrades: Trades).slice(0, n)
      return lastTrades
    },
  }
}
