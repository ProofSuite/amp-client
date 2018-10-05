import type { WebsocketMessage, WebsocketEvent } from '../../../types/websocket'
const addMonths = require('date-fns/add_months')

export const subscribeChart = (pair: TokenPair, from: number, to: number, duration: number, units: string) => {
  if (!window.socket) throw new Error('Socket connection not established')

  let message: WebsocketMessage
  let now = Date.now()
  duration = duration || 1
  units = units || 'hour'
  from = from || Math.floor(addMonths(new Date(now), -2).getTime() / 1000)
  to = to || Math.floor(new Date(now).getTime() / 1000)

  message = JSON.stringify({
    channel: 'ohlcv',
    event: {
      type: 'SUBSCRIBE',
      payload: {
        name: pair.pair,
        baseToken: pair.baseTokenAddress,
        quoteToken: pair.quoteTokenAddress,
        from: from,
        to: to,
        units: units,
        duration: duration,
      }
    }
  })

  window.socket.send(message)
  return () => unsubscribeChart(pair)
}

export const unsubscribeChart = () => {
  if (!window.socket) throw new Error('Socket connection not established')

  let message: WebsocketMessage

  message = JSON.stringify({
    channel: 'ohlcv',
    event: {
      type: 'UNSUBSCRIBE',
    }
  })

  window.socket.send(message)
}

export const subscribeOrderBook = (pair: TokenPair) => {
  if (!window.socket) throw new Error('Socket connection not established')

  let message: WebsocketMessage = JSON.stringify({
    channel: 'orderbook',
    event: {
      type: 'SUBSCRIBE',
      payload: {
        name: pair.pair,
        baseToken: pair.baseTokenAddress,
        quoteToken: pair.quoteTokenAddress
      }
    }
  })

  window.socket.send(message)
  return () => unsubscribeOrderBook(pair)
}

export const unsubscribeOrderBook = () => {
  if (!window.socket) throw new Error('Socket connection not established')
  let message: WebsocketMessage

  message = JSON.stringify({
    channel: 'orderbook',
    event: { type: 'UNSUBSCRIBE' }
  })

  window.socket.send(message)
}

export const subscribeTrades = (pair: TokenPair) => {
  if (!window.socket) throw new Error('Socket connection not established')
  let message: WebsocketMessage

  message = JSON.stringify({
    channel: 'trades',
    event: {
      type: 'SUBSCRIBE',
      payload: {
        name: pair.pair,
        baseToken: pair.baseTokenAddress,
        quoteToken: pair.quoteTokenAddress
      }
    }
  })

  window.socket.send(message)
  return () => unsubscribeTrades(pair)
}

export const unsubscribeTrades = (pair: TokenPair) => {
  if (!window.socket) throw new Error('Socket connection not established')
  let message: WebsocketMessage

  message = JSON.stringify({
    channel: 'trades',
    event: { type: 'UNSUBSCRIBE' }
  })

  window.socket.send(message)
}
