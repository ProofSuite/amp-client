// @flow
import * as appActionCreators from '../actions/app'
import { getTokenPairsDomain, getOrderBookDomain, getAccountBalancesDomain } from '../domains/'
import * as orderService from '../services/orders'

import { utils } from 'ethers'
import type { State, ThunkAction } from '../../types'
import { getSigner } from '../services/signer'
import errors from '../../config/errors'

export default function getOrderFormSelector(state: State) {
  let tokenPairDomain = getTokenPairsDomain(state)
  let orderBookDomain = getOrderBookDomain(state)
  let accountBalancesDomain = getAccountBalancesDomain(state)

  let currentPair = tokenPairDomain.getCurrentPair()
  let baseToken = currentPair.baseTokenSymbol
  let quoteToken = currentPair.quoteTokenSymbol
  let baseTokenBalance = accountBalancesDomain.get(baseToken)
  let quoteTokenBalance = accountBalancesDomain.get(quoteToken)
  let askPrice = orderBookDomain.getAskPrice()
  let bidPrice = orderBookDomain.getBidPrice()

  return {
    currentPair,
    baseToken,
    quoteToken,
    baseTokenBalance,
    quoteTokenBalance,
    askPrice,
    bidPrice
  }
}

export const defaultFunction = (): ThunkAction => {
  return async (dispatch, getState) => {}
}

export const sendNewOrder = (side: string, amount: number, price: number): ThunkAction => {
  return async (dispatch, getState, { socket }) => {
    try {
      let state = getState()
      let tokenPairDomain = getTokenPairsDomain(state)
      let accountBalancesDomain = getAccountBalancesDomain(state)
      let pair = tokenPairDomain.getCurrentPair()

      let signer = getSigner()
      let userAddress = await signer.getAddress()

      let makeFee = '0'
      let takeFee = '0'

      let params = {
        side,
        userAddress,
        pair,
        amount,
        price,
        makeFee,
        takeFee
      }

      let order = await signer.createRawOrder(params)

      let buyTokenSymbol = pair.baseTokenAddress === order.buyToken ? pair.baseTokenSymbol : pair.quoteTokenSymbol
      let sellTokenSymbol = pair.baseTokenAddress === order.sellToken ? pair.baseTokenSymbol : pair.quoteTokenSymbol

      let WETHBalance = accountBalancesDomain.getBigNumberBalance('WETH')
      let buyTokenBalance = accountBalancesDomain.getBigNumberBalance(buyTokenSymbol)
      let sellTokenBalance = accountBalancesDomain.getBigNumberBalance(sellTokenSymbol)

      let buyAmount = utils.bigNumberify(order.buyAmount)
      let sellAmount = utils.bigNumberify(order.sellAmount)
      let fee = utils.bigNumberify(makeFee)

      if (buyTokenBalance.lt(buyAmount)) {
        return dispatch(
          appActionCreators.addDangerNotification({
            message: `Insufficient ${buyTokenSymbol} balance`
          })
        )
      }

      if (sellTokenBalance.lt(sellAmount)) {
        return dispatch(
          appActionCreators.addDangerNotification({
            message: `Insufficient ${sellTokenSymbol} balance`
          })
        )
      }

      //TODO include the case where WETH is the token balance
      if (WETHBalance.lt(fee)) {
        return dispatch(
          appActionCreators.addDangerNotification({
            message: 'Insufficient WETH Balance'
          })
        )
      }

      dispatch(appActionCreators.addSuccessNotification({ message: `Order valid` }))

      socket.sendNewOrderMessage(order)
    } catch (e) {
      console.log(e)

      if (e.message === errors.invalidJSON) {
        return dispatch(appActionCreators.addDangerNotification({ message: 'Connection error' }))
      }

      return dispatch(appActionCreators.addDangerNotification({ message: 'Unknown error' }))
    }
  }
}
