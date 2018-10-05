import * as appActionCreators from '../actions/app'
//@flow
import * as actionCreators from '../actions/socketManager'
import { getAccountDomain } from '../domains'
import { getSigner } from '../services/signer'
import { getRandomNonce } from '../../utils/crypto'
import { parseOrder, parseTrades, parseOrderBookData, parseOHLCV } from '../../utils/parsers'

import type { State, ThunkAction } from '../../types/'
import type { WebsocketEvent, WebsocketMessage } from '../../types/websocket'

export default function socketManagerSelector(state: State) {
  return {
    authenticated: getAccountDomain(state).authenticated()
  }
}

// eslint-disable-next-line
export function openConnection(): ThunkAction {
  return (dispatch, getState, { socket }) => {
    socket.createConnection()

    dispatch(actionCreators.createConnection())

    const closeConnection = socket.openConnection(event => {
      switch (event.type) {
        case 'close':
          return handleWebsocketCloseMessage(dispatch, event, closeConnection)
        case 'error':
          return handleWebsocketErrorMessage(dispatch, event, closeConnection)
        case 'open':
          return dispatch(appActionCreators.addSuccessNotification({ message: 'Reconnected' }))
        default:
          break
      }
    })

    socket.onMessage((message: WebsocketMessage) => {
      let { channel, event } = message

      console.log(channel, event)

      switch (channel) {
        case 'orders':
          return handleOrderMessage(dispatch, event)
        case 'orderbook':
          return handleOrderBookMessage(dispatch, event)
        case 'trades':
          return handleTradesMessage(dispatch, event)
        case 'ohlcv':
          return handleOHLCVMessage(dispatch, event)
        default:
          console.log(channel, event)
          break
      }
    })

    return () => {
      closeConnection()
      dispatch(actionCreators.closeConnection())
    }
  }
}

const handleWebsocketCloseMessage = (dispatch, event, closeConnection) => {
  // dispatch(actionCreators.closeConnection())/
  dispatch(appActionCreators.addDangerNotification({ message: 'Connection lost' }))
  setTimeout(() => dispatch(openConnection()), 5000)
}

const handleWebsocketErrorMessage = (dispatch, event, closeConnection) => {
  // closeConnection()
  console.log(event)
}

const handleOrderMessage = (dispatch, event: WebsocketEvent) => {
  const { type } = event

  switch (type) {
    case 'ORDER_ADDED':
      return dispatch(handleOrderAdded(event))
    case 'ORDER_CANCELLED':
      return dispatch(handleOrderCancelled(event))
    case 'ORDER_SUCCESS':
      return dispatch(handleOrderSuccess(event))
    case 'ORDER_PENDING':
      return dispatch(handleOrderPending(event))
    case 'REQUEST_SIGNATURE':
      return dispatch(handleRequestSignature(event))
    case 'ORDER_ERROR':
      return dispatch(handleOrderError(event))
    default:
      console.log('Unknown', event)
      return
  }
}

function handleOrderAdded(event: WebsocketEvent): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    let order = parseOrder(event.payload)

    dispatch(appActionCreators.addSuccessNotification({ message: 'Order added' }))
    dispatch(actionCreators.updateOrdersTable([order]))
  }
}

function handleOrderCancelled(event: WebsocketEvent): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    let order = parseOrder(event.payload)

    dispatch(appActionCreators.addSuccessNotification({ message: 'Order cancelled' }))
    dispatch(actionCreators.updateOrdersTable([order]))
  }
}

function handleOrderSuccess(event: WebsocketEvent): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    try {
      let order = parseOrder(event.payload.order)

      dispatch(appActionCreators.addSuccessNotification({ message: 'Order success' }))
      dispatch(actionCreators.updateOrdersTable([order]))
    } catch(e) {
      console.log(e)
      dispatch(appActionCreators.addDangerNotification({ message: 'Unknown error' }))
    }
  }
}

function handleOrderPending(event: WebsocketEvent): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    try {
      let order = parseOrder(event.payload.order)
      dispatch(appActionCreators.addSuccessNotification({ message: 'Order pending' }))
      dispatch(actionCreators.updateOrdersTable([order]))

    } catch (e) {
      console.log(e)
      dispatch(appActionCreators.addDangerNotification({ message: 'Unknown error '}))
    }
  }
}

function handleOrderError(event: WebsocketEvent): ThunkAction {
  return async dispatch => {
    // let order = parseOrder(event.payload)

    dispatch(appActionCreators.addSuccessNotification({ message: 'Order error' }))
    // return dispatch(actionCreators.updateOrdersTable([order]))
  }
}

function handleRequestSignature(event: WebsocketEvent): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    try {
      let { payload, hash } = event
      let signer = getSigner()

      // signed every individual trade
      if (payload.matches != null) {
        payload.matches.map(match => (match.trade.tradeNonce = getRandomNonce()))
        let promises = payload.matches.map(match => signer.signTrade(match.trade))
        await Promise.all(promises)
      }

      // sign the remaining order in case the taker order was partially filled
      if (payload.order != null) {
        payload.order.nonce = getRandomNonce()
        signer.signOrder(payload.order)
      }

      dispatch(appActionCreators.addSuccessNotification({ message: 'Signing trade' }))
      socket.sendNewSubmitSignatureMessage(hash, payload.matches, payload.order)
    } catch (e) {
      console.log(e)
    }
  }
}

const handleOrderBookMessage = (dispatch, event: WebsocketMessage) => {
  var bids, asks

  try {
    switch (event.type) {
      case 'INIT':
        if (!event.payload) return
        if (event.payload === []) return
        var { bids, asks } = parseOrderBookData(event.payload)
        dispatch(actionCreators.initOrderBook(bids, asks))
        break;
      case 'UPDATE':
        if (!event.payload) return
        if (event.payload === []) return
        var { bids, asks } = parseOrderBookData(event.payload)
        dispatch(actionCreators.updateOrderBook(bids, asks))
        break;
      default:
        return
    }
  } catch (e) {
    console.log(e)
  }
}

const handleTradesMessage = (dispatch, event: WebsocketMessage) => {
  let trades

  try {
    switch(event.type) {
      case 'INIT':
        if (!event.payload) return
        if (event.payload === []) return
        trades = parseTrades(event.payload)
        dispatch(actionCreators.initTradesTable(trades))
        break;
      case 'UPDATE':
        if (!event.payload) return
        if (event.payload === []) return
        trades = parseTrades(event.payload)
        dispatch(actionCreators.updateTradesTable(trades))
        break;
      default:
        return
    }
  } catch (e) {
    console.log(e)
  }
}

const handleOHLCVMessage = (dispatch, event: WebsocketMessage) => {
  let ohlcv

  try {
    switch(event.type) {
      case 'INIT':
        if (!event.payload) return
        if (event.payload === []) return
        ohlcv = parseOHLCV(event.payload)
        dispatch(actionCreators.initOHLCV(ohlcv))
        break
      case 'UPDATE':
        if (!event.payload) return
        if (event.payload === []) return
        ohlcv = parseOHLCV(event.payload)
        dispatch(actionCreators.updateOHLCV(ohlcv))
        break
        // return dispatch()
      default:
        return
    }
  } catch (e) {
    console.log(e)
  }
}


const handleRawOrdersMessage = (dispatch, event: WebsocketMessage) => {
  console.log('Receiving raw order message', event)
}
