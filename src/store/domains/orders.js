// @flow
import type { Orders, OrdersState } from '../../types/orders'
import { getBaseToken, getQuoteToken } from '../../utils/tokens'
import { parseWETHPair } from '../../utils/helpers'

const initialState = {
  byHash: {}
}

export const initialized = () => {
  const event = (state: OrdersState = initialState) => state
  return event
}

export function ordersInitialized(orders: Orders) {
  const event = (state: OrdersState) => {
    let newState = orders.reduce((result, item) => {
      result[item.hash] = {
        ...item
      }

      return result
    }, {})

    return { byHash: newState }
  }

  return event
}

export function ordersUpdated(orders: Orders) {
  const event = (state: OrdersState) => {

    let newState = orders.reduce((result, item) => {
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

export const ordersDeleted = (hashes: Array<number>) => {
  const event = (state: OrdersState) => ({
    ...state,
    byHash: Object.keys(state.byHash)
      .filter(key => hashes.indexOf(key) === -1)
      .reduce((result, current) => {
        result[current] = state.byHash[current]
        return result
      }, {})
  })

  return event
}

export default function ordersDomain(state: OrdersState) {
  return {
    byHash: () => state.byHash,
    all: () => Object.values(state.byHash),

    lastOrders: (n: number) => {
      let orders = Object.values(state.byHash)

      let lastOrders = (orders: Orders).slice(Math.max(orders.length - n, 0))
      lastOrders = (lastOrders: Orders).map(rawOrder => {
        let cancelleable = (rawOrder.status === 'OPEN' || rawOrder.status === 'PARTIAL_FILLED')
        let pair = parseWETHPair(rawOrder.pair)

        return { ...rawOrder, cancelleable, pair }
      })
      
      return lastOrders
    },

    currentPositionsByToken: (symbol: string) => {
      let orders = Object.values(state.byHash)
    
      return orders.filter(order => {
        if (symbol !== getBaseToken(order.pair) && symbol !== getQuoteToken(order.pair)) return false
        if (['NEW', 'OPEN', 'PARTIALLY_FILLED'].indexOf(order.status) === -1) return false

        return true
      })
    },

    lockedBalanceByToken: (symbol: string, address:string) => {
      let orders = Object.values(state.byHash)
      let lockedBalance = 0

      orders.forEach(order => {
        if (symbol === getBaseToken(order.pair) && order.side === 'SELL') {
          if (['NEW', 'OPEN', 'PARTIALLY_FILLED'].indexOf(order.status) !== -1) {
            lockedBalance = lockedBalance + (order.amount - order.filled)
          }
        }

        if (symbol === getQuoteToken(order.pair) && order.side === 'BUY') {
          if (['NEW', 'OPEN', 'PARTIALLY_FILLED'].indexOf(order.status) !== -1) {
            lockedBalance = lockedBalance + (order.amount - order.filled) * order.price
          }
        }
      })
    
      return lockedBalance
    },


    history: () => {
      let orders = Object.values(state.byHash)
      let history = (orders: Orders).filter(
        order => ['CANCELLED', 'FILLED', 'PARTIALLY_FILLED'].indexOf(order.status) === -1
      )
      return history
    },

    current: () => {
      let orders = Object.values(state.byHash)
      let current = (orders: Orders).filter(order => ['NEW', 'OPEN'].indexOf(order.status) === -1)
      return current
    }
  }
}
