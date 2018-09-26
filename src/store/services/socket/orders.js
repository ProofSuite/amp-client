export const sendNewOrderMessage = async orderPayload => {
  if (!window.socket) throw new Error('Socket connection not established')

  let message = JSON.stringify({
    channel: 'orders',
    payload: {
      type: 'NEW_ORDER',
      hash: orderPayload.hash,
      data: orderPayload
    }
  })

  window.socket.send(message)
}

export const sendNewOrderCancelMessage = orderCancelPayload => {
  if (!window.socket) throw new Error('Socket connection not established')

  let message = JSON.stringify({
    channel: 'orders',
    payload: {
      type: 'CANCEL_ORDER',
      hash: orderCancelPayload.hash,
      data: orderCancelPayload
    }
  })

  window.socket.send(message)
}

export const sendNewSubmitSignatureMessage = (hash, matches, order) => {
  if (!window.socket) throw new Error('Socket connection not established')

  let message = JSON.stringify({
    channel: 'orders',
    payload: {
      type: 'SUBMIT_SIGNATURE',
      hash: hash,
      data: { order, matches }
    }
  })

  console.log(message)

  window.socket.send(message)
}
