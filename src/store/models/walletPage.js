// @flow
import { getAccountBalancesDomain, getAccountDomain, getTokenDomain, getWalletsDomain } from '../domains';
import * as actionCreators from '../actions/walletPage';
import * as notifierActionCreators from '../actions/app';
import * as accountActionTypes from '../actions/account';
import * as accountBalancesService from '../services/accountBalances';
import { getProvider } from '../services/signer';
import { getCurrentBlock } from '../services/wallet';
import { sortTable } from '../../utils/helpers';

import type { Token } from '../../types/common';
import type { State, ThunkAction } from '../../types';

export default function walletPageSelector(state: State) {
  let val = {
    depositTableData: getAccountBalancesDomain(state).balancesArray(),
    accountAddress: getAccountDomain(state).address(),
    accountPrivateKey: getAccountDomain(state).privateKey(),
    tokens: getTokenDomain(state).tokens(),
    currentBlock: getAccountDomain(state).currentBlock(),
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
      const balances = [etherBalance].concat(sortTable(tokenBalances, 'symbol'));

      // const allowances = await accountBalancesService.queryTokenAllowances(accountAddress, tokens);
      dispatch(actionCreators.updateBalances(balances));
      // dispatch(actionCreators.updateAllowances(allowances));
      const currentBlock = await getCurrentBlock();
      dispatch(accountActionTypes.updateCurrentBlock(currentBlock));
    } catch (error) {
      dispatch(
        notifierActionCreators.addNotification({
          id: 2,
          intent: 'danger',
          message: 'Not connected with Blockchain!',
        })
      );
      console.log('queryBalances', error.message, error.stack);
    }
  };
}
