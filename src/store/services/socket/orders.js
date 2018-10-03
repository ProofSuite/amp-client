export const sendNewOrderMessage = async orderPayload => {
  if (!window.socket) throw new Error('Socket connection not established')

  let message = JSON.stringify({
    channel: 'orders',
    event: {
      type: 'NEW_ORDER',
      hash: orderPayload.hash,
      payload: orderPayload
    }
  })

  window.socket.send(message)
}

export const sendNewOrderCancelMessage = orderCancelPayload => {
  if (!window.socket) throw new Error('Socket connection not established')

  let message = JSON.stringify({
    channel: 'orders',
    event: {
      type: 'CANCEL_ORDER',
      hash: orderCancelPayload.hash,
      payload: orderCancelPayload
    }
  })

  window.socket.send(message)
}

export const sendNewSubmitSignatureMessage = (hash, matches, order) => {
  if (!window.socket) throw new Error('Socket connection not established')

  let message = JSON.stringify({
    channel: 'orders',
    event: {
      type: 'SUBMIT_SIGNATURE',
      hash: hash,
      payload: { order, matches }
    }
  })

  window.socket.send(message)
}
