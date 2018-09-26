export const subscribeChart = (from: number, to: number, pair: string, increment: string) => {
  if (!window.socket) throw new Error('Socket connection not established')

  let payload = JSON.stringify({
    channel: 'trades',
    message: {
      event: 'subscribe',
      pair: pair,
      params: {
        from: from,
        to: to,
        duration: 30,
        units: increment
      }
    }
  })

  window.socket.send(payload)
}

export const unsubscribeChart = (pair: string) => {
  if (!window.socket) throw new Error('Socket connection not established')

  let payload = JSON.stringify({
    channnel: 'trades',
    message: {
      event: 'unsubscribe',
      pair: pair
    }
  })

  window.socket.send(payload)
}

export const subscribeOrderBook = (pair: string) => {
  if (!window.socket) throw new Error('Socket connection not established')

  let payload = JSON.stringify({
    channel: 'order_book',
    message: {
      event: 'subscribe',
      key: pair
    }
  })

  window.socket.send(payload)
}

export const unsubscribeOrderBook = (pair: string) => {
  if (!window.socket) throw new Error('Socket connection not established')

  let payload = JSON.stringify({
    channel: 'order_book',
    message: {
      event: 'unsubscribe',
      key: pair
    }
  })

  window.socket.send(payload)
}
