// @flow
import getAccountModel from './account';
import getTokenModel from './tokens';
import getAccountBalancesModel from '../domains/accountBalances';

import * as actionCreators from '../actions/walletPage';
import * as accountBalancesService from '../services/accountBalances';

import type { Token } from '../../types/common';
import type { State, ThunkAction } from '../../types';

//@flow
export default function createSelector(state: State) {
  let accountBalancesModel = getAccountBalancesModel(state.accountBalances);

  return accountBalancesModel;
}

export function queryAccountData(): ThunkAction {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const accountAddress = getAccountModel(state).address();
      let tokens = getTokenModel(state).tokens();
      tokens = tokens.filter((token: Token) => token.symbol != 'ETH');

      if (!accountAddress) throw new Error('Account address is not set');

      const etherBalance = await accountBalancesService.queryEtherBalance(accountAddress);
      const tokenBalances = await accountBalancesService.queryTokenBalances(accountAddress, tokens);
      const balances = [etherBalance].concat(tokenBalances);

      const allowances = await accountBalancesService.queryTokenAllowances(accountAddress, tokens);

      dispatch(actionCreators.updateBalances(balances));
      dispatch(actionCreators.updateAllowances(allowances));
    } catch (error) {
      console.log('queryBalances', error.message, error.stack);
    }
  };
}
