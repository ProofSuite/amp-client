import type { WebsocketMessage } from '../../../types/websocket'

export const subscribeChart = (pair: TokenPair, timespan: string, duration: string) => {
  if (!window.socket) throw new Error('Socket connection not established')

  const now = Date.now()
  const lengthByDurationUnit = {
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
    M: 30 * 24 * 60 * 60 * 1000,
    Y: 12 * 30 * 24 * 60 * 60 * 1000,
  };
  const nameByTimespanUnit = {
    m: 'minute',
    h: 'hour',
    d: 'day',
    M: 'month',
  };

  let message: WebsocketMessage = JSON.stringify({
    channel: 'ohlcv',
    event: {
      type: 'SUBSCRIBE',
      payload: {
        name: pair.pair,
        baseToken: pair.baseTokenAddress,
        quoteToken: pair.quoteTokenAddress,
        from: duration === 'Full' ? 0 : Math.floor((now - Number(duration.slice(0, -1)) * lengthByDurationUnit[duration.slice(-1)]) / 1000),
        to: Math.floor(now / 1000),
        units: nameByTimespanUnit[timespan.slice(-1)],
        duration: Number(timespan.slice(0, -1)),
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
