// @flow
import { getAccountBalancesDomain, getAccountDomain, getTokenDomain } from '../domains';
import * as actionCreators from '../actions/walletPage';
import * as notifierActionCreators from '../actions/app';
import * as accountActionTypes from '../actions/account';
import * as accountBalancesService from '../services/accountBalances';
import { getProvider } from '../services/signer';
import { EXCHANGE_ADDRESS } from '../../config/contracts';
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
    provider: getAccountDomain(state).provider(),
  };
  return val;
}

export function queryAccountData(): ThunkAction {
  return async (dispatch, getState) => {
    const state = getState();
    const accountAddress = getAccountDomain(state).address();

    let tokens = getTokenDomain(state).tokens();
    dispatch(actionCreators.updateBalances(tokens.map(token => ({ ...token, balance: 0.0 }))));

    try {
      tokens = tokens.filter((token: Token) => token.symbol !== 'ETH');

      if (!accountAddress) throw new Error('Account address is not set');

      const etherBalance = await accountBalancesService.queryEtherBalance(accountAddress);
      const tokenBalances = await accountBalancesService.queryTokenBalances(accountAddress, tokens);

      const balances = [etherBalance].concat(sortTable(tokenBalances, 'symbol'));
      dispatch(actionCreators.updateBalances(balances));

      const currentBlock = await getCurrentBlock();
      dispatch(accountActionTypes.updateCurrentBlock(currentBlock));

      try {
        const provider = getProvider();
        if (provider.chainId === 8888) {
          dispatch(accountActionTypes.updateCurrentProvider('Private Network: 8888'));
        } else {
          dispatch(accountActionTypes.updateCurrentProvider('MetaMask'));
        }

        const allowances = await accountBalancesService.queryTokenAllowances(
          accountAddress,
          EXCHANGE_ADDRESS[provider.chainId].toString(),
          tokens
        );
        dispatch(actionCreators.updateAllowances(allowances));
      } catch (e) {
        console.log('Provider Err: ', e.message);
      }
    } catch (error) {
      try {
        const provider = getProvider();
        if (provider.chainId === 8888) {
          dispatch(
            notifierActionCreators.addNotification({
              id: 2,
              intent: 'danger',
              message: 'Not connected with Ethereum Network.',
            })
          );
        } else {
        }
      } catch (e) {
        console.log('Provider Err: ', e.message);
      }
      console.log('queryBalances', error.message, error.stack);
    }
  };
}
