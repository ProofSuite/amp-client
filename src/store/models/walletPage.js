// @flow
import { getAccountBalancesDomain, getAccountDomain, getTokenDomain, getTransferTokensFormDomain } from '../domains'

import * as actionCreators from '../actions/walletPage'
import * as notifierActionCreators from '../actions/app'
import * as accountActionTypes from '../actions/account'
import * as accountBalancesService from '../services/accountBalances'
import { quoteTokens, quoteTokenSymbols } from '../../config/quotes'
import { getCurrentBlock } from '../services/wallet'
import { push } from 'connected-react-router'
import type { Token } from '../../types/common'
import type { State, ThunkAction } from '../../types'
import { ALLOWANCE_THRESHOLD } from '../../utils/constants'

export default function walletPageSelector(state: State) {
  let accountBalancesDomain = getAccountBalancesDomain(state)
  let accountDomain = getAccountDomain(state)
  let tokenDomain = getTokenDomain(state)
  let transferTokensFormDomain = getTransferTokensFormDomain(state)

  // ETH is not a token so we add it to the list to display in the deposit table
  let ETH = { symbol: 'ETH', address: '0x0' }
  let tokens = tokenDomain.tokens()
  let quoteTokens = quoteTokenSymbols
  let baseTokens = tokenDomain.symbols().filter(symbol => quoteTokens.indexOf(symbol) !== -1)
  let tokenData = accountBalancesDomain.getBalancesAndAllowances([ ETH ].concat(tokens))

  return {
    etherBalance: accountBalancesDomain.formattedEtherBalance(),
    balancesLoading: accountBalancesDomain.loading(),
    WETHBalance: accountBalancesDomain.tokenBalance('WETH'),
    WETHAllowance: accountBalancesDomain.tokenAllowance('WETH'),
    tokenData: tokenData,
    quoteTokens: quoteTokens,
    baseTokens: baseTokens,
    accountAddress: accountDomain.address(),
    authenticated: accountDomain.authenticated(),
    currentBlock: accountDomain.currentBlock(),
    showHelpModal: accountDomain.showHelpModal(),
    connected: true,
    gas: transferTokensFormDomain.getGas(),
    gasPrice: transferTokensFormDomain.getGasPrice()
  }
}

export function queryAccountData(): ThunkAction {
  return async (dispatch, getState) => {
    const state = getState()
    const accountAddress = getAccountDomain(state).address()

    try {
      let tokens = getTokenDomain(state).tokens()
      let quotes = quoteTokens

      tokens = quotes.concat(tokens).filter((token: Token) => token.symbol !== 'ETH')
      if (!accountAddress) throw new Error('Account address is not set')

      const etherBalance = await accountBalancesService.queryEtherBalance(accountAddress)

      console.log(tokens)
      const tokenBalances = await accountBalancesService.queryTokenBalances(accountAddress, tokens)

      console.log(tokenBalances)
      const allowances = await accountBalancesService.queryExchangeTokenAllowances(accountAddress, tokens)
      const balances = [etherBalance].concat(tokenBalances)
      const currentBlock = await getCurrentBlock()

      dispatch(accountActionTypes.updateCurrentBlock(currentBlock))
      dispatch(actionCreators.updateBalances(balances))
      dispatch(actionCreators.updateAllowances(allowances))

      await accountBalancesService.subscribeTokenBalances(accountAddress, tokens, balance =>
        dispatch(actionCreators.updateBalance(balance))
      )

      await accountBalancesService.subscribeEtherBalance(accountAddress, balance =>
        dispatch(actionCreators.updateBalance({ symbol: 'ETH', balance: balance })))

      await accountBalancesService.subscribeTokenAllowances(accountAddress, tokens, allowance => {
        return dispatch(actionCreators.updateAllowance(allowance))
      })
    } catch (e) {
      dispatch(notifierActionCreators.addErrorNotification({ message: 'Could not connect to Ethereum network' }))
      console.log(e)
    }
  }
}

export function redirectToTradingPage(symbol: string): ThunkAction {
  return async (dispatch, getState) => {
    let defaultQuoteToken = quoteTokens[0]
    let pair = `${symbol}/${defaultQuoteToken.symbol}`

    dispatch(actionCreators.updateCurrentPair(pair))
    dispatch(push('/trade'))
  }
}

export function toggleAllowance(symbol: string): ThunkAction {
  return async (dispatch, getState) => {
    try {
      const state = getState()
      const tokens = getTokenDomain(state).bySymbol()
      const accountAddress = getAccountDomain(state).address()
      const isAllowed = getAccountBalancesDomain(state).isAllowed(symbol)
      const isPending = getAccountBalancesDomain(state).isAllowancePending(symbol)
      const tokenContractAddress = tokens[symbol].address

      if (isPending) throw new Error('Trading approval pending')

      const approvalConfirmedHandler = (txConfirmed) => {
        txConfirmed
          ? dispatch(notifierActionCreators.addSuccessNotification({ message: `${symbol} Approval Successful. You can now start trading!` }))
          : dispatch(notifierActionCreators.addErrorNotification({ message: `${symbol} Approval Failed. Please try again.` }))
      }

      const approvalRemovedHandler = (txConfirmed) => {
        txConfirmed
          ? dispatch(notifierActionCreators.addSuccessNotification({ message: `${symbol} Allowance Removal Successful.` }))
          : dispatch(notifierActionCreators.addErrorNotification({ message: `${symbol} Allowance Removal Failed. Please try again.` }))
      }

      if (isAllowed) {
        accountBalancesService.updateExchangeAllowance(tokenContractAddress, accountAddress, 0, approvalRemovedHandler)
        dispatch(notifierActionCreators.addSuccessNotification({ message: `Locking ${symbol}. You will not be able to trade ${symbol} after the transaction is confirmed` }))
      } else {
        accountBalancesService.updateExchangeAllowance(tokenContractAddress, accountAddress, ALLOWANCE_THRESHOLD, approvalConfirmedHandler)
        dispatch(notifierActionCreators.addSuccessNotification({ message: `Unlocking ${symbol}. You will be able to trade  ${symbol} after the transaction is confirmed.` }))
      }

      dispatch(actionCreators.updateAllowance({ symbol, allowance: 'pending' }))
    } catch (e) {
      console.log(e)
      if (e.message === 'Trading approval pending') {
        dispatch(notifierActionCreators.addErrorNotification({ message: 'Trading approval pending' }))
      }
    }
  }
}
