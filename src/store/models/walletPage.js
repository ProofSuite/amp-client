// @flow
import { getAccountBalancesDomain, getAccountDomain, getTokenDomain, getWalletsDomain } from '../domains';
import * as actionCreators from '../actions/walletPage';
import * as notifierActionCreators from '../actions/app';
import * as accountBalancesService from '../services/accountBalances';
import * as walletServices from '../services/wallet';

import type { Token } from '../../types/common';
import type { State, ThunkAction } from '../../types';

export default function walletPageSelector(state: State) {
  let val = {
    depositTableData: getAccountBalancesDomain(state).balancesArray(),
    accountAddress: getAccountDomain(state).address(),
    tokens: getTokenDomain(state).tokens(),
    currentBlock: getWalletsDomain(state).getCurrentBlock(),
  };
  return val;
}

export function queryAccountData(): ThunkAction {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const accountAddress = getAccountDomain(state).address();
      let tokens = getTokenDomain(state).tokens();
      tokens = tokens.filter((token: Token) => token.symbol !== 'ETH');
      if (!accountAddress) throw new Error('Account address is not set');

      const etherBalance = await accountBalancesService.queryEtherBalance(accountAddress);
      const tokenBalances = await accountBalancesService.queryTokenBalances(accountAddress, tokens);
      const currentBlock = await walletServices.getCurrentBlock();
      const balances = [etherBalance].concat(tokenBalances);

      // const allowances = await accountBalancesService.queryTokenAllowances(accountAddress, tokens);
      console.log(balances);
      dispatch(actionCreators.updateBalances(balances));
      // dispatch(actionCreators.updateAllowances(allowances));
      dispatch(actionCreators.updateCurrentBlock(currentBlock));
    } catch (error) {
      dispatch(
        notifierActionCreators.addNotification({
          id: 2,
          intent: 'danger',
          message: 'Some error occurred in retrieving Tokens!',
        })
      );
      console.log('queryBalances', error.message, error.stack);
    }
  };
}
