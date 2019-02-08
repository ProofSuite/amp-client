// @flow
import * as notifierActionCreators from '../actions/app'
import * as actionCreators from '../actions/orderForm'

import { 
  getTokenPairsDomain, 
  getOrderBookDomain, 
  getAccountBalancesDomain, 
  getAccountDomain,
  getTokenDomain,
  getOrdersDomain,
} from '../domains/'

import { utils } from 'ethers'
import type { State, ThunkAction } from '../../types'
import { getSigner } from '../services/signer'
import { parseNewOrderError } from '../../config/errors'
import { max, minOrderAmount, parseWETHToken } from '../../utils/helpers'

export default function getOrderFormSelector(state: State) {
  let tokenPairDomain = getTokenPairsDomain(state)
  let orderBookDomain = getOrderBookDomain(state)
  let orderDomain = getOrdersDomain(state)
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

  let { authenticated, address } = getAccountDomain(state)

  let askPrice = orderBookDomain.getAskPrice()
  let bidPrice = orderBookDomain.getBidPrice()
  let selectedOrder = orderBookDomain.getSelectedOrder()
  
  let [ baseToken, quoteToken ] = accountBalancesDomain.getBalancesAndAllowancesBySymbol([baseTokenSymbol, quoteTokenSymbol])

  let baseTokenLockedBalance = orderDomain.lockedBalanceByToken(baseTokenSymbol, address)
  let quoteTokenLockedBalance = orderDomain.lockedBalanceByToken(quoteTokenSymbol, address)
  let baseTokenBalance = baseToken.balance - baseTokenLockedBalance
  let quoteTokenBalance = quoteToken.balance - quoteTokenLockedBalance
  let pairIsAllowed = baseToken.allowed && quoteToken.allowed
  let pairAllowanceIsPending = baseToken.allowancePending || quoteToken.allowancePending

  //we replace WETH by ETH
  baseTokenSymbol = parseWETHToken(baseTokenSymbol)
  quoteTokenSymbol = parseWETHToken(quoteTokenSymbol)

  return {
    selectedOrder,
    currentPair,
    baseTokenSymbol,
    quoteTokenSymbol,
    baseTokenBalance,
    quoteTokenBalance,
    baseTokenDecimals,
    quoteTokenDecimals,
    askPrice,
    bidPrice,
    makeFee,
    takeFee,
    pairIsAllowed,
    pairAllowanceIsPending,
    authenticated
  }
}

export const defaultFunction = (): ThunkAction => {
  return async (dispatch, getState) => {}
}

export const sendNewOrder = (side: string, amount: number, price: number): ThunkAction => {
  return async (dispatch, getState, { socket, mixpanel }) => {
    mixpanel.track('trading-page/send-new-order');

    try {
      let state = getState()
      let tokenPairDomain = getTokenPairsDomain(state)
      let accountBalancesDomain = getAccountBalancesDomain(state)
      let { exchangeAddress } = getAccountDomain(state)
      let pair = tokenPairDomain.getCurrentPair()

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
          notifierActionCreators.addErrorNotification({ message: `Order value should be higher than ${formattedMinQuoteAmount} ${quoteTokenSymbol}`})
        )
      }
  
      if (sellTokenBalance.lt(totalSellAmount)) {
        return dispatch(
          notifierActionCreators.addErrorNotification({ message: `Insufficient ${sellTokenSymbol} balance` })
        )
      }
      
      socket.sendNewOrderMessage(order)
    } catch (e) {
      console.log(e)
      let message = parseNewOrderError(e)
      return dispatch(notifierActionCreators.addErrorNotification({ message }))
    }
  }
}


export function unlockPair(baseTokenSymbol: string, quoteTokenSymbol: string): ThunkAction {
  return async (dispatch, getState, { txProvider, mixpanel }) => {
    mixpanel.track('trading-page/unlock-pair');

    try {
      const state = getState()
      const tokens = getTokenDomain(state).bySymbol()
      const baseTokenAddress = tokens[baseTokenSymbol].address
      const quoteTokenAddress = tokens[quoteTokenSymbol].address

      const txSentHandler = (txHash1, txHash2) => {
        let tx1 = { type: 'Token Unlocked', hash: txHash1, time: Date.now(), status: 'PENDING'}
        let tx2 = { type: 'Token Unlocked', hash: txHash2, time: Date.now(), status: 'PENDING'}

        dispatch(actionCreators.unlockPair(baseTokenSymbol, quoteTokenSymbol, tx1, tx2 ))
      }

      const txConfirmHandler = (txConfirmed, txHash1, txHash2) => {
        let tx1 = { type: 'Token Unlocked', hash: txHash1, time: Date.now(), status: 'CONFIRMED' }
        let tx2 = { type: 'Token Unlocked', hash: txHash2, time: Date.now(), status: 'CONFIRMED' }
        let errorMessage = `Approval failed. Please try again`

        txConfirmed
          ? dispatch(actionCreators.confirmUnlockPair(baseTokenSymbol, quoteTokenSymbol, tx1, tx2))
          : dispatch(actionCreators.errorUnlockPair(baseTokenSymbol, quoteTokenSymbol, tx1, tx2, errorMessage))
      }

      txProvider.updatePairAllowances(baseTokenAddress, quoteTokenAddress, txConfirmHandler, txSentHandler)
    } catch (e) {
      console.log(e)
      dispatch(notifierActionCreators.addErrorNotification({ message: e.message }))
    }
  }
}