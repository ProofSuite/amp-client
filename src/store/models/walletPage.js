// @flow
import { push } from 'connected-react-router'
import * as actionCreators from '../actions/walletPage'
import * as notifierActionCreators from '../actions/app'

import { 
  getAccountBalancesDomain, 
  getAccountDomain, 
  getTokenDomain
} from '../domains'

import { quoteTokens } from '../../config/quotes'
import { getCurrentBlock } from '../services/wallet'
import { ALLOWANCE_THRESHOLD } from '../../utils/constants'
import { parseQueryAccountDataError } from '../../config/errors'

import type { State, ThunkAction } from '../../types'

export default function walletPageSelector(state: State) {
  let accountBalancesDomain = getAccountBalancesDomain(state)
  let accountDomain = getAccountDomain(state)
  let tokenDomain = getTokenDomain(state)

  let tokens = tokenDomain.tokens()
  let quoteTokens = tokenDomain.quoteTokens()
  let baseTokens = tokenDomain.baseTokens()
  let currency = accountDomain.referenceCurrency()
  let tokenData = accountBalancesDomain.getBalancesAndAllowances(tokens, currency)

  return {
    balancesLoading: accountBalancesDomain.loading(),
    WETHBalance: accountBalancesDomain.tokenBalance('WETH'),
    WETHAllowance: accountBalancesDomain.tokenAllowance('WETH'),
    tokenData: tokenData,
    quoteTokens: quoteTokens,
    baseTokens: baseTokens,
    authenticated: accountDomain.authenticated(),
    currentBlock: accountDomain.currentBlock(),
    showHelpModal: accountDomain.showHelpModal(),
    connected: true,
    referenceCurrency: currency.symbol
  }
}

export function queryAccountData(): ThunkAction {
  return async (dispatch, getState, { api, provider }) => {
    const state = getState()

    const accountAddress = getAccountDomain(state).address()
    const savedTokens = getTokenDomain(state).tokens()


    let balances = []
    let allowances = []

    try {
      let [
        currentBlock,
        tokens,
        pairs,
        exchangeAddress
      ] = await Promise.all([
        getCurrentBlock(),
        api.getTokens(),
        api.fetchPairs(),
        api.getExchangeAddress()
      ])

      if (!currentBlock) throw new Error('')

      tokens = [ ...new Set([ ...tokens, ...savedTokens ])]
      let tokenSymbols = tokens.map(token => token.symbol)
    
      let currencySymbols = ['USD', 'EUR', 'JPY']
      let exchangeRates = await api.fetchExchangeRates(tokenSymbols, currencySymbols)

      tokens = tokens.map(token => {
        return {
          ...token,
          USDRate: exchangeRates[token.symbol] ? exchangeRates[token.symbol].USD : 0,
          EURRate: exchangeRates[token.symbol] ? exchangeRates[token.symbol].EUR : 0,
          JPYRate: exchangeRates[token.symbol] ? exchangeRates[token.symbol].JPY : 0,
        }
      })

      dispatch(actionCreators.updateWalletPageData(currentBlock, tokens, pairs, exchangeAddress))

      //we remove the ETH 'token' because the process to obtain balances for ETH and others tokens is different
      tokens = tokens.filter(token => token.symbol !== 'ETH')

      let [
        etherBalance,
        tokenBalanceResult,
        tokenAllowanceResult
      ] = await Promise.all([
        provider.queryEtherBalance(accountAddress),
        provider.queryTokenBalances(accountAddress, tokens),
        provider.queryExchangeTokenAllowances(accountAddress, tokens)
      ])

      balances.push(etherBalance)

      let { errors: tokenBalanceErrors, tokenBalances } = tokenBalanceResult
      balances.concat(tokenBalances)
      let { errors: tokenAllowanceErrors, tokenAllowances } = tokenAllowanceResult
      allowances = tokenAllowances
      balances = [etherBalance].concat(tokenBalances)
      
      // TODO handle unsubscriptions
      provider.subscribeTokenBalances(accountAddress, tokens, balance =>
        dispatch(actionCreators.updateBalance(balance)))
      provider.subscribeEtherBalance(accountAddress, balance =>
        dispatch(actionCreators.updateBalance({ symbol: 'ETH', balance: balance })))
      provider.subscribeTokenAllowances(accountAddress, tokens, allowance => {
        dispatch(actionCreators.updateAllowance(allowance))})

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
    let quoteTokenSymbols = quoteTokens.map(token => token.symbol)
    let quoteTokenIndex = quoteTokenSymbols.indexOf(symbol)
    let baseTokenSymbol, quoteTokenSymbol

    if (quoteTokenIndex === 0) {
      quoteTokenSymbol = quoteTokens[0].symbol
      baseTokenSymbol = quoteTokens[1].symbol
    } else {
      quoteTokenSymbol = quoteTokens[0].symbol
      baseTokenSymbol = symbol      
    }

    let pair = `${baseTokenSymbol}/${quoteTokenSymbol}`

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

      const lockTxSentHandler = (txHash) => {
        dispatch(notifierActionCreators.addUnlockTokenPendingNotification({ txHash, symbol }))
        dispatch(actionCreators.updateAllowancePending(symbol))
      }

      const unlockTxSentHandler = (txHash) => {
        dispatch(notifierActionCreators.addLockTokenPendingNotification({ txHash, symbol }))
        dispatch(actionCreators.updateAllowancePending(symbol))
      }

      const lockTxConfirmedHandler = (txConfirmed, txHash) => {
        txConfirmed
          ? dispatch(notifierActionCreators.addUnlockTokenConfirmedNotification({ symbol, txHash }))
          : dispatch(notifierActionCreators.addErrorNotification({ message: `${symbol} Approval Failed. Please try again.` }))
      }

      const unlockTxConfirmedHandler = (txConfirmed, txHash) => {
        txConfirmed
          ? dispatch(notifierActionCreators.addLockTokenConfirmedNotification({ symbol, txHash }))
          : dispatch(notifierActionCreators.addErrorNotification({ message: `${symbol} Allowance Removal Failed. Please try again.` }))
      }

      if (isAllowed) {
        await txProvider.updateExchangeAllowance(tokenContractAddress, 0, unlockTxConfirmedHandler, lockTxSentHandler)
      } else {
        await txProvider.updateExchangeAllowance(tokenContractAddress, ALLOWANCE_THRESHOLD, lockTxConfirmedHandler, unlockTxSentHandler)
      }
      
    } catch (e) {
      console.log(e)
      if (e.message === 'Trading approval pending') {
        dispatch(notifierActionCreators.addErrorNotification({ message: 'Trading approval pending' }))
      }
    }
  }
}
