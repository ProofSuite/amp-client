// @flow
import {
  getAccountBalancesDomain,
  getAccountDomain,
  getNotificationsDomain,
  getTokenDomain,
  getEtherTxDomain,
} from '../domains';

import * as actionCreators from '../actions/walletPage';
import * as notifierActionCreators from '../actions/app';
import * as accountActionTypes from '../actions/account';
import * as accountBalancesService from '../services/accountBalances';
import { EXCHANGE_ADDRESS } from '../../config/contracts';
import { getCurrentBlock } from '../services/wallet';
import { sortTable } from '../../utils/helpers';

import type { Token } from '../../types/common';
import type { State, ThunkAction } from '../../types';

export default function walletPageSelector(state: State) {
  let val = {
    etherBalance: getAccountBalancesDomain(state).etherBalance(),
    depositTableData: getAccountBalancesDomain(state)
      .balancesArray()
      .filter((token: Token) => token.symbol !== 'ETH'),
    accountAddress: getAccountDomain(state).address(),
    accountPrivateKey: getAccountDomain(state).privateKey(),
    tokens: getTokenDomain(state).tokens(),
    currentBlock: getAccountDomain(state).currentBlock(),
    provider: 'Provider type',
    gas: getEtherTxDomain(state).getGas(),
    gasPrice: getEtherTxDomain(state).getGasPrice(),
  };
  return val;
}

export function queryAccountData(): ThunkAction {
  return async (dispatch, getState) => {
    const state = getState();
    const accountAddress = getAccountDomain(state).address();
    const lastNotification = getNotificationsDomain(state).last();

    try {
      let tokens = getTokenDomain(state).tokens();
      tokens = tokens.filter((token: Token) => token.symbol !== 'ETH');
      if (!accountAddress) throw new Error('Account address is not set');

      const etherBalance = await accountBalancesService.queryEtherBalance(accountAddress);
      const tokenBalances = await accountBalancesService.queryTokenBalances(accountAddress, tokens);
      const allowances = await accountBalancesService.queryExchangeTokenAllowances(accountAddress, tokens);
      const balances = [etherBalance].concat(sortTable(tokenBalances, 'symbol'));

      const currentBlock = await getCurrentBlock();

      dispatch(accountActionTypes.updateCurrentBlock(currentBlock));
      dispatch(actionCreators.updateBalances(balances));
      dispatch(actionCreators.updateAllowances(allowances));
    } catch (e) {
      //TODO I rewrote this part because it was too specific to testing environment (if network = 8888).
      //TODO It should working with whatever networkID from now on but i have not been
      //TODO able to catch all possible exeptions. Instead nested try/catch, let's check
      //TODO for error messages here and dispatch/console.log appropriate action/error message
      dispatch(
        notifierActionCreators.addNotification({
          id: lastNotification ? lastNotification.id++ : 1,
          intent: 'danger',
          message: 'Could not connect to Ethereum Network',
        })
      );
      console.log(e);
    }
  };
}

export function toggleAllowance(tokenSymbol: string): ThunkAction {
  return async (dispatch, getState) => {
    const state = getState();
    const tokens = getTokenDomain(state).bySymbol();
    const lastNotification = getNotificationsDomain(state).last();
    const tokenContractAddress = tokens[tokenSymbol].address;
    const accountAddress = getAccountDomain(state).address();
    const balances = getAccountBalancesDomain(state).balances();
    const isAllowed = getAccountBalancesDomain(state).isAllowed(tokenSymbol);
    let tokenBalance = balances[tokenSymbol].balance;
    if (isAllowed) {
      tokenBalance = '0';
    }
    const { allowance } = await accountBalancesService.updateAllowance(
      tokenContractAddress,
      EXCHANGE_ADDRESS['1000'].toString(),
      accountAddress,
      tokenBalance
    );

    dispatch(
      notifierActionCreators.addNotification({
        id: lastNotification ? lastNotification.id++ : 1,
        intent: 'success',
        message: 'Allowed successfully. You can trade now with this Token.',
      })
    );
    dispatch(actionCreators.updateSingleAllowance(allowance, tokenSymbol));
  };
}
