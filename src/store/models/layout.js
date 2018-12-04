import {
  getAccountDomain,
  getAccountBalancesDomain
 } from '../domains'

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


export function createProvider(): ThunkAction {
  return async (dispatch, getState, { provider }) => {
    provider.createConnection()
  }
}