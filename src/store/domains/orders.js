// @flow
import type { Orders, OrdersState } from '../../types/orders'
import { formatNumber } from 'accounting-js'

const initialState = {
  byHash: {}
}

// file.only

export const initialized = () => {
  const event = (state: OrdersState = initialState) => state
  return event
}

export function ordersInitialized(orders: Orders) {
  const event = (state: OrdersState) => {
    let newState = orders.reduce((result, item) => {
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

export const ordersDeleted = (timestamps: Array<number>) => {
  const event = (state: OrdersState) => ({
    ...state,
    byHash: Object.keys(state.byHash)
      .filter(key => timestamps.indexOf(key) === -1)
      .reduce((result, current) => {
        result[current] = state.byHash[current]
        return result
      }, {})
  })

  return event
}

export default function ordersDomain(state: OrdersState) {
  return {
    byTimestamp: () => state.byHash,
    all: () => Object.values(state.byHash),

    lastOrders: (n: number) => {
      let orders = Object.values(state.byHash)
      orders = (orders: Orders).slice(Math.max(orders.length - n, 1))
      orders = (orders: Orders).map(order => {
        order.amount = formatNumber(order.amount, { precision: 2 })
        order.price = formatNumber(order.price, { precision: 2 })
        return order
      })

      return orders
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
