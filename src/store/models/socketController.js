//@flow
import { utils } from 'ethers'

import * as appActionCreators from '../actions/app'
import * as actionCreators from '../actions/socketController'
import { getAccountDomain, getTokenPairsDomain } from '../domains'
import { getSigner } from '../services/signer'
import { parseOrder, parseTrade, parseTrades, parseOrderBookData, parseOHLCV } from '../../utils/parsers'

import type { State, ThunkAction } from '../../types/'
import type { WebsocketEvent, WebsocketMessage } from '../../types/websocket'

export default function socketControllerSelector(state: State) {
  let { authenticated } = getAccountDomain(state)

  return {
    authenticated,
    pairs: getTokenPairsDomain(state).getPairsByCode()
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
          return handleWebsocketOpenMessage(dispatch, event)
        default:
          break
      }
    })

    socket.onMessage((message: WebsocketMessage) => {
      let { channel, event } = message
      switch (channel) {
        case 'orders':
          return handleOrderMessage(dispatch, event)
        case 'orderbook':
          return dispatch(handleOrderBookMessage(event))
        case 'trades':
          return dispatch(handleTradesMessage(event))
        case 'ohlcv':
          return dispatch(handleOHLCVMessage(event))
        default:
          console.log(channel, event)
          break
      }
    })

    return () => {
      //TODO currently, i believe the unsubscription is only used by SocketController/componentDidMount function
      //TODO This causes a notification to appear while we do not want to display a 'Connection lost' notification when logging out.
      //TODO Therefore i currently do not close the connection gracefully to avoid this problem. Looking for a workaround
      closeConnection()
    }
  }
}

const handleWebsocketOpenMessage = (dispatch, event) => {
  dispatch(actionCreators.openConnection())
}

const handleWebsocketCloseMessage = (dispatch, event, closeConnection) => {
  dispatch(actionCreators.closeConnection())
  dispatch(appActionCreators.addErrorNotification({ message: 'Connection lost' }))
  setTimeout(() => dispatch(openConnection()), 5000)
}

const handleWebsocketErrorMessage = (dispatch, event, closeConnection) => {
  dispatch(actionCreators.connectionError())
  console.log(event)
}

const handleOrderMessage = (dispatch, event: WebsocketEvent) => {
  const { type } = event

  switch (type) {
    case 'ORDER_ADDED':
      return dispatch(handleOrderAdded(event))
    case 'ORDER_CANCELLED':
      return dispatch(handleOrderCancelled(event))
    case 'ORDER_MATCHED':
      return dispatch(handleOrderMatched(event))
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
      let state = getState()
      let { pairs } = socketControllerSelector(state)
      let order = event.payload
      let pairInfo = pairs[order.pairName]
      order = parseOrder(order, pairInfo)

      dispatch(appActionCreators.addOrderAddedNotification())
      dispatch(actionCreators.updateOrdersTable([order]))
    } catch (e) {
      console.log(e)
      dispatch(appActionCreators.addErrorNotification({ message: e.message }))
    }

  }
}

function handleOrderCancelled(event: WebsocketEvent): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    try {
      let state = getState()
      let  { pairs } = socketControllerSelector(state)
      let order = event.payload
      let pairInfo = pairs[order.pairName]
      
      order = parseOrder(order, pairInfo)

      dispatch(appActionCreators.addOrderCancelledNotification())
      dispatch(actionCreators.updateOrdersTable([order]))
    } catch (e) {
      console.log(e)
      dispatch(appActionCreators.addErrorNotification({ message: e.message }))
    }
  }
}

function handleOrderMatched(event: WebsocketEvent): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    try {
      let state = getState()
      let { pairs } = socketControllerSelector(state)
      let { matches } = event.payload
      let takerOrder = matches.takerOrder
      let pairInfo = pairs[takerOrder.pairName]

      let order = parseOrder(takerOrder, pairInfo)

      dispatch(appActionCreators.addOrderMatchedNotification())
      dispatch(actionCreators.updateOrdersTable([order]))
    } catch (e) {
      console.log(e)
      dispatch(appActionCreators.addErrorNotification({ message: e.message }))
    }
  }
}

function handleOrderSuccess(event: WebsocketEvent): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    try {
      let state = getState()
      let { pairs } = socketControllerSelector(state)
      let signer = getSigner()
      let signerAddress = await signer.getAddress()
      let matches = event.payload.matches
      let trades = matches.trades
      let txHash = trades[0].txHash
      let pairName = trades[0].pairName
      let userOrders = []
      let userTrades = []
      let userIsTaker = utils.getAddress(matches.takerOrder.userAddress) === signerAddress
      let pairInfo = pairs[pairName]

      if (userIsTaker) {
        let parsedOrder = parseOrder(matches.takerOrder, pairInfo)
        userOrders = [ parsedOrder ]

        userTrades = matches.trades.map(trade => parseTrade(trade, pairInfo))
        let { price, amount, side, filled, pair } = parsedOrder
        dispatch(appActionCreators.addOrderSuccessNotification({ txHash, pair, price, amount, filled, side }))


      } else {
        matches.makerOrders.forEach(order => {
          if (utils.getAddress(order.userAddress) === signerAddress) {
            let parsedOrder = parseOrder(order, pairInfo)
            userOrders.push(parsedOrder)
            let { price, amount, filled, side, pair } = parsedOrder
            dispatch(appActionCreators.addOrderSuccessNotification({ txHash, pair, price, amount, filled, side }))
          }
        })

        matches.trades.forEach(trade => {
          if (utils.getAddress(trade.maker) === signerAddress || utils.getAddress(trade.maker) === signerAddress) {
            userTrades.push(parseTrade(trade, pairInfo))
          }
        })
      }


      if (userOrders.length > 0) dispatch(actionCreators.updateOrdersTable(userOrders))
      if (userTrades.length > 0) dispatch(actionCreators.updateTradesTable(userTrades))
    } catch(e) {
      console.log(e)
      dispatch(appActionCreators.addErrorNotification({ message: e.message }))
    }
  }
}

function handleOrderPending(event: WebsocketEvent): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    try {
      let signer = getSigner()
      let state = getState()
      let { pairs } = socketControllerSelector(state)
      let signerAddress = await signer.getAddress()
      let matches = event.payload.matches
      let trades = matches.trades
      let txHash = trades[0].txHash
      let pairName = trades[0].pairName
      let userOrders = []
      let userTrades = []
      let userIsTaker = utils.getAddress(matches.takerOrder.userAddress) === signerAddress
      let pairInfo = pairs[pairName]

      if (userIsTaker) {
        let parsedOrder = parseOrder(matches.takerOrder, pairInfo)
        userOrders = [ parsedOrder ]
        userTrades = matches.trades.map(trade => parseTrade(trade, pairInfo))
        let { price, amount, side, filled, pair } = parsedOrder
        dispatch(appActionCreators.addOrderPendingNotification({ txHash, pair, price, amount, filled, side }))


      } else {
        matches.makerOrders.forEach(order => {
          if (utils.getAddress(order.userAddress) === signerAddress) {
            let parsedOrder = parseOrder(order, pairInfo)

            userOrders.push(parsedOrder)
            let { price, amount, filled, side, pair } = parsedOrder
            dispatch(appActionCreators.addOrderPendingNotification({ txHash, pair, price, amount, filled, side }))
          }
        })

        matches.trades.forEach(trade => {
          if (utils.getAddress(trade.maker) === signerAddress || utils.getAddress(trade.maker) === signerAddress) {
            userTrades.push(parseTrade(trade, pairInfo))
          }
        })
      }

      if (userOrders.length > 0) dispatch(actionCreators.updateOrdersTable(userOrders))
      if (userTrades.length > 0) dispatch(actionCreators.updateTradesTable(userTrades))
    } catch (e) {
      console.log(e)
      dispatch(appActionCreators.addErrorNotification({ message: e.message }))
    }
  }
}

function handleOrderError(event: WebsocketEvent): ThunkAction {
  return async dispatch => {
    let { message } = event.payload
    dispatch(appActionCreators.addErrorNotification({ message: `Error: ${message}` }))
  }
}

const handleOrderBookMessage = (event: WebsocketMessage): ThunkAction => {
  return async (dispatch, getState, { socket }) => {
    let state = getState()
    let { pairs } = socketControllerSelector(state)

    if (event.type === 'ERROR' || !event.payload) return
    // if (event.payload.length === 0) return

    let { pairName } = event.payload
    let pairInfo = pairs[pairName]

    try {
      switch(event.type) {
        case 'INIT':
          var { bids, asks } = parseOrderBookData(event.payload, pairInfo)
          dispatch(actionCreators.initOrderBook(bids, asks))
          break;

        case 'UPDATE':
          var { bids, asks } = parseOrderBookData(event.payload, pairInfo)
          dispatch(actionCreators.updateOrderBook(bids, asks))
          break;

        default:
          return
        }
      } catch (e) {
        dispatch(appActionCreators.addErrorNotification({ message: e.message }))
        console.log(e)
      }
    }
  }


const handleTradesMessage = (event: WebsocketMessage): ThunkAction => {
  return async (dispatch, getState, { socket }) => {
    let state = getState()
    let { pairs } = socketControllerSelector(state)

    if (event.type === 'ERROR' || !event.payload) return
    if (event.payload.length === 0) return

    let trades = event.payload
    let { pairName } = trades[0]
    let pair = pairs[pairName]

    try {
      switch(event.type) {
        case 'INIT':
          trades = parseTrades(trades, pair)
          dispatch(actionCreators.initTradesTable(trades))
          break
        case 'UPDATE':
          trades = parseTrades(trades, pair)
          dispatch(actionCreators.updateTradesTable(trades))
          break
        default:
          return
      }
    } catch (e) {
      dispatch(appActionCreators.addErrorNotification({ message: e.message }))
      console.log(e)
    }
  }
}

const handleOHLCVMessage = (event: WebsocketMessage): ThunkAction => {
  return async (dispatch, getState, { socket }) => {
    let state = getState()
    let { pairs } = socketControllerSelector(state)

    if (event.type === 'ERROR' || !event.payload) return
    if (event.payload.length === 0) {
      dispatch(actionCreators.initOHLCV([]))
      return
    }
  
    let ohlcv = event.payload
    let { pairName } = ohlcv[0].pair
    let pair = pairs[pairName]

    try {
      switch(event.type) {
        case 'INIT':
          ohlcv = parseOHLCV(ohlcv, pair)
          dispatch(actionCreators.initOHLCV(ohlcv))
          break
        case 'UPDATE':
          ohlcv = parseOHLCV(ohlcv, pair)
          dispatch(actionCreators.updateOHLCV(ohlcv))
          break
        default:
          return
      }
    } catch (e) {
      console.log(e)
      dispatch(appActionCreators.addErrorNotification({ message: e.message }))
    }
  }
}