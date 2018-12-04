// @flow
import * as appActionCreators from '../actions/app'

import { 
  getTokenPairsDomain, 
  getOrderBookDomain, 
  getAccountBalancesDomain, 
  getAccountDomain
} from '../domains/'

import { utils } from 'ethers'
import type { State, ThunkAction } from '../../types'
import { getSigner } from '../services/signer'
import { parseNewOrderError } from '../../config/errors'
import { max, minOrderAmount } from '../../utils/helpers'

export default function getOrderFormSelector(state: State) {
  let tokenPairDomain = getTokenPairsDomain(state)
  let orderBookDomain = getOrderBookDomain(state)
  let accountBalancesDomain = getAccountBalancesDomain(state)

  let currentPair = tokenPairDomain.getCurrentPair()
  let baseToken = currentPair.baseTokenSymbol
  let quoteToken = currentPair.quoteTokenSymbol
  let makeFee = currentPair.makeFee
  let takeFee = currentPair.takeFee
  let baseTokenDecimals = currentPair.baseTokenDecimals
  let quoteTokenDecimals = currentPair.quoteTokenDecimals
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
    baseTokenDecimals,
    quoteTokenDecimals,
    askPrice,
    bidPrice,
    makeFee,
    takeFee,
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
      let accountDomain = getAccountDomain(state)

      let pair = tokenPairDomain.getCurrentPair()
      let exchangeAddress = accountDomain.exchangeAddress()

      let {
        baseTokenSymbol,
        quoteTokenSymbol,
        baseTokenDecimals,
        quoteTokenDecimals,
        makeFee,
        takeFee,
      } = pair

      let signer = getSigner()
      let userAddress = await signer.getAddress()

      //TODO replace by the makeFee and takerFee from redux state
      let params = {
        side,
        exchangeAddress,
        userAddress,
        pair,
        amount,
        price,
        makeFee,
        takeFee
      }
    
      let pairMultiplier = utils.bigNumberify(10).pow(18 + baseTokenDecimals)
      let order = await signer.createRawOrder(params)
      let sellTokenSymbol, totalSellAmount
      let fee = max(makeFee, takeFee)

      order.side === 'BUY'
        ? sellTokenSymbol = quoteTokenSymbol
        : sellTokenSymbol = baseTokenSymbol

      let sellTokenBalance = accountBalancesDomain.getBigNumberBalance(sellTokenSymbol)
      let baseAmount = utils.bigNumberify(order.amount)
      let quoteAmount = (utils.bigNumberify(order.amount).mul(utils.bigNumberify(order.pricepoint))).div(pairMultiplier)
      let minQuoteAmount = minOrderAmount(makeFee, takeFee)
      let formattedMinQuoteAmount = utils.formatUnits(minQuoteAmount, quoteTokenDecimals)

      //In case the order is a sell, the fee is subtracted from the received amount of quote token so there is no requirement
      order.side === 'BUY'
        ? totalSellAmount = quoteAmount.add(fee)
        : totalSellAmount = baseAmount

      if (quoteAmount.lt(minQuoteAmount)) {
        return dispatch(
          appActionCreators.addErrorNotification({ message: `Order value should be higher than ${formattedMinQuoteAmount} ${quoteTokenSymbol}`})
        )
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
