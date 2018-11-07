//@flow
import { utils } from 'ethers'

import * as appActionCreators from '../actions/app'
import * as actionCreators from '../actions/socketController'
import { getAccountDomain } from '../domains'
import { getSigner } from '../services/signer'
import { parseOrder, parseTrade, parseTrades, parseOrderBookData, parseOHLCV } from '../../utils/parsers'

import type { State, ThunkAction } from '../../types/'
import type { WebsocketEvent, WebsocketMessage } from '../../types/websocket'

export default function socketControllerSelector(state: State) {
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
    case 'ERROR':
      return dispatch(handleOrderError(event))
    default:
      console.log('Unknown', event)
      return
  }
}

function handleOrderAdded(event: WebsocketEvent): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    try {
      let order = parseOrder(event.payload)

      dispatch(appActionCreators.addOrderAddedNotification())
      dispatch(actionCreators.updateOrdersTable([order]))
    } catch (e) {
      console.log(e)
      dispatch(appActionCreators.addDangerNotification({ message: e.message }))
    }

  }
}

function handleOrderCancelled(event: WebsocketEvent): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    try {
      let order = parseOrder(event.payload)

      dispatch(appActionCreators.addOrderCancelledNotification())
      dispatch(actionCreators.updateOrdersTable([order]))
    } catch (e) {
      console.log(e)
      dispatch(appActionCreators.addDangerNotification({ message: e.message }))
    }
  }
}

function handleOrderSuccess(event: WebsocketEvent): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    try {
      let signer = getSigner()
      let signerAddress = await signer.getAddress()
      let matches = event.payload.matches
      let trades = matches.trades
      let txHash = trades[0].txHash
      let userOrders = []
      let userTrades = []
      let userIsTaker = utils.getAddress(matches.takerOrder.userAddress) === signerAddress

      if (userIsTaker) {
        let parsedOrder = parseOrder(matches.takerOrder)
        userOrders = [ parsedOrder ]
        userTrades = matches.trades.map(trade => parseTrade(trade))
        let { price, amount, side, filled, pair } = parsedOrder
        dispatch(appActionCreators.addOrderSuccessNotification({ txHash, pair, price, amount, filled, side }))


      } else {
        matches.makerOrders.forEach(order => {
          if (utils.getAddress(order.userAddress) === signerAddress) {
            let parsedOrder = parseOrder(order)
            userOrders.push(parsedOrder)
            let { price, amount, filled, side, pair } = parsedOrder
            dispatch(appActionCreators.addOrderSuccessNotification({ txHash, pair, price, amount, filled, side }))
          }
        })

        matches.trades.forEach(trade => {
          if (utils.getAddress(trade.maker) === signerAddress || utils.getAddress(trade.maker) === signerAddress) {
            userTrades.push(parseTrade(trade))
          }
        })
      }


      if (userOrders.length > 0) dispatch(actionCreators.updateOrdersTable(userOrders))
      if (userTrades.length > 0) dispatch(actionCreators.updateTradesTable(userTrades))
    } catch(e) {
      console.log(e)
      dispatch(appActionCreators.addDangerNotification({ message: e.message }))
    }
  }
}

function handleOrderPending(event: WebsocketEvent): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    try {
      let signer = getSigner()
      let signerAddress = await signer.getAddress()
      let matches = event.payload.matches
      let trades = matches.trades
      let txHash = trades[0].txHash
      let userOrders = []
      let userTrades = []
      let userIsTaker = utils.getAddress(matches.takerOrder.userAddress) === signerAddress

      if (userIsTaker) {
        let parsedOrder = parseOrder(matches.takerOrder)
        userOrders = [ parsedOrder ]
        userTrades = matches.trades.map(trade => parseTrade(trade))
        let { price, amount, side, filled, pair } = parsedOrder
        dispatch(appActionCreators.addOrderPendingNotification({ txHash, pair, price, amount, filled, side }))


      } else {
        matches.makerOrders.forEach(order => {
          if (utils.getAddress(order.userAddress) === signerAddress) {
            let parsedOrder = parseOrder(order)
            userOrders.push(parsedOrder)
            let { price, amount, filled, side, pair } = parsedOrder
            dispatch(appActionCreators.addOrderPendingNotification({ txHash, pair, price, amount, filled, side }))
          }
        })

        matches.trades.forEach(trade => {
          if (utils.getAddress(trade.maker) === signerAddress || utils.getAddress(trade.maker) === signerAddress) {
            userTrades.push(parseTrade(trade))
          }
        })
      }

      if (userOrders.length > 0) dispatch(actionCreators.updateOrdersTable(userOrders))
      if (userTrades.length > 0) dispatch(actionCreators.updateTradesTable(userTrades))
    } catch (e) {
      console.log(e)
      dispatch(appActionCreators.addDangerNotification({ message: e.message }))
    }
  }
}

function handleOrderError(event: WebsocketEvent): ThunkAction {
  return async dispatch => {
    dispatch(appActionCreators.addDangerNotification({ message: `Error: ${event.payload}` }))
  }
}

const handleOrderBookMessage = (dispatch, event: WebsocketMessage) => {
  var bids, asks

  try {
    switch (event.type) {
      case 'INIT':
        if (!event.payload) return
        if (event.payload === []) return
        // eslint-disable-next-line
        var { bids, asks } = parseOrderBookData(event.payload)
        dispatch(actionCreators.initOrderBook(bids, asks))
        break;
      case 'UPDATE':
        if (!event.payload) return
        if (event.payload === []) return
        // eslint-disable-next-line
        var { bids, asks } = parseOrderBookData(event.payload)
        dispatch(actionCreators.updateOrderBook(bids, asks))
        break;
      default:
        return
    }
  } catch (e) {
    dispatch(appActionCreators.addDangerNotification({ message: e.message }))
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
    dispatch(appActionCreators.addDangerNotification({ message: e.message }))
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
    dispatch(appActionCreators.addDangerNotification({ message: e.message }))
    console.log(e)
  }
}
