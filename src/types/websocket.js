export type WebsocketMessage = {
  channel: 'orders' | 'order_book' | 'trades' | 'ohlcv',
  event: WebsocketEvent
}

export type WebsocketEvent = {
  type: string,
  hash: ?string,
  payload: Object
}
