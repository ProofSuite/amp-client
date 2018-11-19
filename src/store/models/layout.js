import {
  getAccountDomain,
  getAccountBalancesDomain,
  getTokenDomain,
 } from '../domains'

 import { quoteTokens } from '../../config/quotes'


 import * as accountBalancesService from '../services/accountBalances'
 import * as actionCreators from '../actions/walletPage'
 import * as notifierActionCreators from '../actions/app'

export default function createSelector(state) {
  let accountDomain = getAccountDomain(state)
  let accountBalancesDomain = getAccountBalancesDomain(state)

  let ETHBalance = accountBalancesDomain.etherBalance()
  let WETHBalance = accountBalancesDomain.tokenBalance('WETH')
  let WETHAllowance = accountBalancesDomain.tokenAllowance('WETH')
  let authenticated = accountDomain.authenticated()
  let address = accountDomain.address()
  let currentBlock = accountDomain.currentBlock()
  let accountLoading = !(ETHBalance && WETHBalance && WETHAllowance)


  return {
    ETHBalance,
    WETHBalance,
    WETHAllowance,
    authenticated,
    address,
    accountLoading,
    currentBlock
  };
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
      const tokenBalances = await accountBalancesService.queryTokenBalances(accountAddress, tokens)
      const allowances = await accountBalancesService.queryExchangeTokenAllowances(accountAddress, tokens)
      const balances = [etherBalance].concat(tokenBalances)


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