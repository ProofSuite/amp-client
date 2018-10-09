import { ENGINE_WS_URL } from '../../../config/urls'

export const createConnection = () => {
  let socket

  try {
    window.socket = new WebSocket(`${ENGINE_WS_URL}/socket`)
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