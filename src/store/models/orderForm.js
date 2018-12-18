// @flow
import * as appActionCreators from '../actions/app'
import * as notifierActionCreators from '../actions/app'

import { 
  getTokenPairsDomain, 
  getOrderBookDomain, 
  getAccountBalancesDomain, 
  getAccountDomain,
  getTokenDomain
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

  let { 
    baseTokenSymbol,
    quoteTokenSymbol,
    makeFee,
    takeFee,
    baseTokenDecimals,
    quoteTokenDecimals
  } = currentPair

  let askPrice = orderBookDomain.getAskPrice()
  let bidPrice = orderBookDomain.getBidPrice()
  let selectedOrder = orderBookDomain.getSelectedOrder()
  let [ baseToken, quoteToken ] = accountBalancesDomain.getBalancesAndAllowancesBySymbol([baseTokenSymbol, quoteTokenSymbol])
  
  let {
    balance: baseTokenBalance,
    allowed: baseTokenIsAllowed,
  } = baseToken

  let {
    balance: quoteTokenBalance,
    allowed: quoteTokenIsAllowed
  } = quoteToken

  let pairIsAllowed = baseTokenIsAllowed && quoteTokenIsAllowed

  return {
    selectedOrder,
    currentPair,
    baseTokenSymbol,
    quoteTokenSymbol,
    baseTokenBalance,
    baseTokenIsAllowed,
    quoteTokenBalance,
    quoteTokenIsAllowed,
    baseTokenDecimals,
    quoteTokenDecimals,
    askPrice,
    bidPrice,
    makeFee,
    takeFee,
    pairIsAllowed
  }
}

export const defaultFunction = (): ThunkAction => {
  return async (dispatch, getState) => {}
}

export const sendNewOrder = (side: string, amount: number, price: number): ThunkAction => {
  return async (dispatch, getState, { socket, mixpanel }) => {
    mixpanel.track('send-new-order');

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

      console.log(pair)

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

      console.log(params)
    
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

      console.log(order)

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


export function unlockPair(baseTokenSymbol: string, quoteTokenSymbol: string): ThunkAction {
  return async (dispatch, getState, { txProvider }) => {
    try {
      const state = getState()
      const tokens = getTokenDomain(state).bySymbol()
      const baseTokenAddress = tokens[baseTokenSymbol].address
      const quoteTokenAddress = tokens[quoteTokenSymbol].address
      
      const txConfirmHandler = (txConfirmed) => {
        txConfirmed
          ? dispatch(notifierActionCreators.addSuccessNotification({ message: `Approval Successful. You can now start trading!` }))
          : dispatch(notifierActionCreators.addErrorNotification({ message: `Approval Failed. Please try again.` }))
      }

      txProvider.updatePairAllowances(baseTokenAddress, quoteTokenAddress, txConfirmHandler)
      dispatch(notifierActionCreators.addSuccessNotification({ message: `Unlocking ${baseTokenSymbol}/${quoteTokenSymbol} trading. Your transaction should be approved within a few minutes`}))
  
    } catch (e) {
      console.log(e)
      dispatch(notifierActionCreators.addErrorNotification({ message: e.message }))
    }
  }
}