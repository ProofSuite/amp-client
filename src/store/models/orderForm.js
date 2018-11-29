// @flow
import * as appActionCreators from '../actions/app'
import { getTokenPairsDomain, getOrderBookDomain, getAccountBalancesDomain } from '../domains/'

import { utils } from 'ethers'
import type { State, ThunkAction } from '../../types'
import { getSigner } from '../services/signer'
import { parseNewOrderError } from '../../config/errors'
import { max } from '../../utils/helpers'

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
  let selectedOrder = orderBookDomain.getSelectedOrder()

  return {
    selectedOrder,
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

      let {
        baseTokenSymbol,
        quoteTokenSymbol,
        baseTokenDecimals,
        makeFee,
        takeFee,
      } = pair

      let signer = getSigner()
      let userAddress = await signer.getAddress()

      //TODO replace by the makeFee and takerFee from redux state
      let params = {
        side,
        userAddress,
        pair,
        amount,
        price,
        makeFee,
        takeFee
      }
    
      let pairMultiplier = utils.bigNumberify(10).pow(18 + baseTokenDecimals)
      let order = await signer.createRawOrder(params)
      let sellTokenSymbol, sellAmount, totalSellAmount
      let fee = max(makeFee, takeFee)

      order.side === 'BUY'
        ? sellTokenSymbol = quoteTokenSymbol
        : sellTokenSymbol = baseTokenSymbol

      let sellTokenBalance = accountBalancesDomain.getBigNumberBalance(sellTokenSymbol)

      //In case the order is a sell, the fee is subtracted from the received amount of quote token so there is no requirement
      if (order.side === 'BUY') {
        sellAmount = (utils.bigNumberify(order.amount).mul(utils.bigNumberify(order.pricepoint))).div(pairMultiplier)
        totalSellAmount = sellAmount.add(fee)
      } else {
        totalSellAmount = utils.bigNumberify(order.amount)
      }
  
      if (sellTokenBalance.lt(totalSellAmount)) {
        return dispatch(
          appActionCreators.addErrorNotification({ message: `Insufficient ${sellTokenSymbol} balance` })
        )
      }

      socket.sendNewOrderMessage(order)
    } catch (e) {
      console.log(e)
      let message = parseNewOrderError(e)
      return dispatch(appActionCreators.addErrorNotification({ message }))
    }
  }
}
