// @flow
import { getAccountBalancesDomain, getAccountDomain, getTokenDomain } from '../domains';
import * as actionCreators from '../actions/walletPage';
import * as accountBalancesService from '../services/accountBalances';

import type { Token } from '../../types/common';
import type { State, ThunkAction } from '../../types';

//@flow
export default function walletPageSelector(state: State) {
  return {
    depositTableData: getAccountBalancesDomain(state).balancesArray(),
    accountAddress: getAccountDomain(state).address(),
    tokens: getTokenDomain(state).tokens(),
  };
}

export function queryAccountData(): ThunkAction {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const accountAddress = getAccountDomain(state).address();
      let tokens = getTokenDomain(state).tokens();
      tokens = tokens.filter((token: Token) => token.symbol != 'ETH');

      if (!accountAddress) throw new Error('Account address is not set');

      const etherBalance = await accountBalancesService.queryEtherBalance(accountAddress);
      const tokenBalances = await accountBalancesService.queryTokenBalances(accountAddress, tokens);
      const balances = [etherBalance].concat(tokenBalances);

      // console.log('balances: ', balances);
      const allowances = await accountBalancesService.queryTokenAllowances(accountAddress, tokens);

      dispatch(actionCreators.updateBalances(balances));
      dispatch(actionCreators.updateAllowances(allowances));
    } catch (error) {
      console.log('queryBalances', error.message, error.stack);
    }
  };
}
