export const createConnection = () => {
  let socket

  try {
    window.socket = new WebSocket('ws://127.0.0.1:8081/socket')
    return socket
  } catch (error) {
    console.log(error)
  }
}

export const openConnection = (listener: Listener) => {
  if (window.socket == null) throw new Error('Connection not established')

  window.socket.onerror = event => listener(event)
  window.socket.onopen = event => listener(event)
  window.socket.onclose = event => listener(event)

  return () => {
    window.socket && window.socket.close()
  }
}

export const onMessage = (listener: Listener) => {
  if (!window.socket) throw new Error('Socket connection not established')

  window.socket.onmessage = message => {
    let { channel, event } = JSON.parse(message.data)
    return listener({ channel, event })
  }
}

// export const parseOrderMessages = (payload: Payload, listener: Listener) => {
//   let { msgType, data } = payload

//   switch (msgType) {
//     case 'ORDER_ADDED':
//       return listener(msgType, data)
//     case 'ORDER_CANCELED':
//       return listener(msgType, data)
//     case 'REQUEST_SIGNATURE':
//       return listener(msgType, data)
//     case 'ORDER_SUCCESS':
//       return listener(msgType, data)
//     case 'ORDER_PENDING':
//       return listener(msgType, data)
//     case 'ORDER_ERROR':
//       return listener(msgType, data)
//     default:
//       return
//   }
// }

// export const parseOrderBookMessage = (payload: Payload, listener: Listener) => {
//   let { msgType, data } = payload

//   switch (msgType) {
//     case 'INIT':
//       return listener(msgType, data)
//     case 'UPDATE':
//       return listener(msgType, data)
//     default:
//       return
//   }
// }

// export const parseTradesMessage = (payload: Payload, listener: Listener) => {
//   let { msgType, data } = payload

//   switch (msgType) {
//     case 'INIT':
//       return listener(msgType, data)
//     case 'UPDATE':
//       return listener(msgType, data)
//     default:
//       return
//   }
// }
