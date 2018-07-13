import accountBalancesModel from '../domains/accountBalances';

import getAccountModel from './account';
import getTokenModel from './tokens';

import * as actionCreators from '../actions/accountBalances';
import * as accountBalancesService from '../services/accountBalances';

export default function getAccountBalancesModel(state) {
  return accountBalancesModel(state.accountBalances);
}

export function subscribeBalance(token) {
  return async (dispatch, getState) => {
    try {
      let unsubscribe;
      const { symbol } = token;
      const state = getState();

      const accountAddress = getAccountModel(state).address();
      const tokenSymbols = getTokenModel(state).symbols();
      const tokenIsSubscribed = getAccountBalancesModel(state).isSubscribed(symbol);
      const updateEventHandler = balance => {
        dispatch(actionCreators.updateBalance(symbol, balance));
      };
      if (tokenIsSubscribed) return;
      if (!accountAddress) throw new Error('Account address is not set');
      if (tokenSymbols.indexOf(symbol) === -1) throw new Error('Token is not subscribed');

      dispatch(actionCreators.subscribeBalance(symbol));

      if (token.address === '0x0') {
        console.log('checking eth');
        unsubscribe = await accountBalancesService.subscribeEtherBalance(accountAddress, updateEventHandler);
      } else {
        unsubscribe = await accountBalancesService.subscribeTokenBalance(accountAddress, token, updateEventHandler);
      }

      return () => {
        unsubscribe();
        dispatch(actionCreators.unsubscribeBalance(symbol));
      };
    } catch (error) {
      console.log(error.message);
    }
  };
}
