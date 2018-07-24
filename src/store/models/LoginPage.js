// @flow
import * as actionCreators from '../actions/loginPage';
import getAccountDomain from '../domains/account';
import getLoginPageDomain from '../domains/loginPage';
import { saveEncryptedWalletInLocalStorage, savePrivateKeyInSessionStorage } from '../services/wallet';

import type { State, ThunkAction } from '../../types';

type CreateWalletParams = {
  wallet: Object,
  encryptedWallet: string,
  storeWallet: boolean,
  storePrivateKey: boolean,
};

export default function loginPageSelector(state: State) {
  return {
    authenticated: getAccountDomain(state.account).authenticated(),
    loading: getLoginPageDomain(state.loginPage).isLoading(),
    error: getLoginPageDomain(state.loginPage).getError(),
  };
}

export function connectWithMetamask(): ThunkAction {
  return async (dispatch, getState, { web3: Object }) => {
    declare var web3: Object;

    try {
      dispatch(actionCreators.requestLogin());
      if (typeof web3 === 'undefined') throw new Error('Metamask not found');

      try {
        let address = web3.eth.defaultAccount;
        dispatch(actionCreators.login(address));
      } catch (e) {
        return dispatch(actionCreators.loginError('Metamask account locked'));
      }
    } catch (e) {
      dispatch(actionCreators.loginError(e.message));
    }
  };
}

export function connectWithWallet(params: CreateWalletParams): ThunkAction {
  return async dispatch => {
    try {
      dispatch(actionCreators.requestLogin());
      let { wallet, encryptedWallet, storeWallet, storePrivateKey } = params;
      let { address, privateKey } = wallet;

      dispatch(actionCreators.createWallet(wallet.address, encryptedWallet));

      if (storeWallet) saveEncryptedWalletInLocalStorage(address, encryptedWallet);
      if (storePrivateKey) await savePrivateKeyInSessionStorage({ address, privateKey });

      dispatch(actionCreators.login(address));
    } catch (e) {
      dispatch(actionCreators.loginError(e.message));
    }
  };
}
