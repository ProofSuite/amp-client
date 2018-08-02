export function createWebsocketConnection() {
  let socket;

  try {
    socket = new WebSocket('wss://localhost');
    return socket;
  } catch (error) {
    console.log(error);
  }
}

window.socket = createWebsocketConnection();
