import type { WebsocketMessage, WebsocketEvent } from '../../../types/websocket'

export const subscribeChart = (pair: TokenPair, from: number, to: number, increment: string) => {
  if (!window.socket) throw new Error('Socket connection not established')

  let message: WebsocketMessage

  message = JSON.stringify({
    channel: 'trades',
    event: {
      type: 'SUBSCRIBE',
      payload: {
        name: pair.pair,
        baseToken: pair.baseTokenAddress,
        quoteToken: pair.quoteTokenAddress,
        from: from,
        to: to,
        duration: 30,
        units: increment
      }
    }
  })

  window.socket.send(message)
  return () => unsubscribeChart(pair)
}

export const unsubscribeChart = (pair: TokenPair) => {
  if (!window.socket) throw new Error('Socket connection not established')

  let message: WebsocketMessage

  message = JSON.stringify({
    channnel: 'trades',
    event: {
      type: 'UNSUBSCRIBE',
      payload: {
        name: pair.pair,
        baseToken: pair.baseTokenAddress,
        quoteToken: pair.quoteTokenAddress
      }
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

export const unsubscribeOrderBook = (pair: TokenPair) => {
  if (!window.socket) throw new Error('Socket connection not established')
  let message: WebsocketMessage

  message = JSON.stringify({
    channel: 'order_book',
    event: {
      type: 'UNSUBSCRIBE',
      payload: {
        name: pair.pair,
        baseToken: pair.baseTokenAddress,
        quoteToken: pair.quoteTokenAddress
      }
    }
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
    event: {
      type: 'UNSUBSCRIBE',
      payload: {
        name: pair.pair,
        baseToken: pair.baseTokenAddress,
        quoteToken: pair.quoteTokenAddress
      }
    }
  })

  window.socket.send(message)
}
