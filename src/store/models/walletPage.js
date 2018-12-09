// @flow
import { push } from 'connected-react-router'

import { getAccountBalancesDomain, getAccountDomain, getTokenDomain, getTransferTokensFormDomain, getPairsDomain } from '../domains'
import * as actionCreators from '../actions/walletPage'
import * as notifierActionCreators from '../actions/app'
import * as accountActionTypes from '../actions/account'
import { quoteTokens, quoteTokenSymbols } from '../../config/quotes'
import { getCurrentBlock } from '../services/wallet'
import { ALLOWANCE_THRESHOLD } from '../../utils/constants'
import { parseQueryAccountDataError } from '../../config/errors'

import type { Token } from '../../types/common'
import type { State, ThunkAction } from '../../types'

export default function walletPageSelector(state: State) {
  let accountBalancesDomain = getAccountBalancesDomain(state)
  let accountDomain = getAccountDomain(state)
  let tokenDomain = getTokenDomain(state)
  let tokenPairsDomain = getTokenPairsDomain(state)
  let transferTokensFormDomain = getTransferTokensFormDomain(state)

  // ETH is not a token so we add it to the list to display in the deposit table
  let ETH = { symbol: 'ETH', address: '0x0' }
  let tokens = tokenDomain.tokens()
  let tokenPairs = pairsDomain.getPairsByCode()
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
  return async (dispatch, getState, { api, provider }) => {
    const state = getState()
    const accountAddress = getAccountDomain(state).address()

    let balances = []
    let allowances = []

    try {
      let tokens = getTokenDomain(state).tokens()
      let quotes = quoteTokens

      tokens = quotes.concat(tokens).filter((token: Token) => token.symbol !== 'ETH')
      if (!accountAddress) throw new Error('Account address is not set')

      const currentBlock = await getCurrentBlock()
      if (!currentBlock) throw new Error('')
      dispatch(accountActionTypes.updateCurrentBlock(currentBlock))

      let pairs = await api.fetchPairs()
      dispatch(actionCreators.updateTokenPairs(pairs))

      let exchangeAddress = await api.getExchangeAddress()
      dispatch(actionCreators.updateExchangeAddress(exchangeAddress))

      let etherBalance = await provider.queryEtherBalance(accountAddress)
      balances.push(etherBalance)

      let { errors: tokenBalanceErrors, tokenBalances } = await provider.queryTokenBalances(accountAddress, tokens)
      balances.concat(tokenBalances)

      let { errors: tokenAllowanceErrors, tokenAllowances } = await provider.queryExchangeTokenAllowances(accountAddress, tokens)
      allowances = tokenAllowances

      balances = [etherBalance].concat(tokenBalances)
      console.log(tokenBalanceErrors)
      console.log(tokenAllowanceErrors)
      
      await provider.subscribeTokenBalances(accountAddress, tokens, balance =>
        dispatch(actionCreators.updateBalance(balance))
      )

      await provider.subscribeEtherBalance(accountAddress, balance =>
        dispatch(actionCreators.updateBalance({ symbol: 'ETH', balance: balance })))

      await provider.subscribeTokenAllowances(accountAddress, tokens, allowance => {
        return dispatch(actionCreators.updateAllowance(allowance))
      })

    } catch (e) {
      console.log(e)
      let message = parseQueryAccountDataError(e)
      dispatch(notifierActionCreators.addErrorNotification({ message }))
    } finally {
      dispatch(actionCreators.updateBalances(balances))
      dispatch(actionCreators.updateAllowances(allowances))
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
  return async (dispatch, getState, { txProvider }) => {
    try {
      const state = getState()
      const tokens = getTokenDomain(state).bySymbol()
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
        txProvider.updateExchangeAllowance(tokenContractAddress, 0, approvalRemovedHandler)
        dispatch(notifierActionCreators.addSuccessNotification({ message: `Locking ${symbol}. You will not be able to trade ${symbol} after the transaction is confirmed` }))
      } else {
        txProvider.updateExchangeAllowance(tokenContractAddress, ALLOWANCE_THRESHOLD, approvalConfirmedHandler)
        dispatch(notifierActionCreators.addSuccessNotification({ message: `Unlocking ${symbol}. You will be able to trade  ${symbol} after the transaction is confirmed.` }))
      }

      dispatch(actionCreators.updateAllowancePending(symbol))
    } catch (e) {
      console.log(e)
      if (e.message === 'Trading approval pending') {
        dispatch(notifierActionCreators.addErrorNotification({ message: 'Trading approval pending' }))
      }
    }
  }
}
