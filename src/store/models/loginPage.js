// @flow
import * as actionCreators from '../actions/loginPage';
import * as notifierActionCreators from '../actions/app';
import { getAccountDomain, getLoginPageDomain } from '../domains';
import { saveEncryptedWalletInLocalStorage, savePrivateKeyInSessionStorage } from '../services/wallet';
import { createLocalWalletSigner, createMetamaskSigner } from '../services/signer';

import type { State, ThunkAction } from '../../types';

//TODO: -> Line 84 Test is Failing

type CreateWalletParams = {
  wallet: Object,
  encryptedWallet: string,
  storeWallet: boolean,
  storePrivateKey: boolean,
};

export default function loginPageSelector(state: State) {
  return {
    authenticated: getAccountDomain(state).authenticated(),
    loading: getLoginPageDomain(state).isLoading(),
    error: getLoginPageDomain(state).getError(),
  };
}

export function loginWithMetamask(): ThunkAction {
  return async (dispatch, getState) => {
    try {
      dispatch(actionCreators.requestLogin());
      if (typeof window.web3 === 'undefined') throw new Error('Metamask not installed');
      if (typeof window.web3.eth.defaultAccount === 'undefined') throw new Error('Metamask account locked');

      try {
        let address = await createMetamaskSigner();
        console.log('loginWithMetamask');
        dispatch(
          notifierActionCreators.addNotification({ id: 1, intent: 'success', message: 'Logged In Successfully!' })
        );
        dispatch(actionCreators.loginWithMetamask(address));
      } catch (e) {
        return dispatch(actionCreators.loginError('Metamask account locked'));
      }
    } catch (e) {
      dispatch(actionCreators.loginError(e.message));
    }
  };
}

export function loginWithWallet(params: CreateWalletParams): ThunkAction {
  return async dispatch => {
    try {
      dispatch(actionCreators.requestLogin());
      let { wallet, encryptedWallet, storeWallet, storePrivateKey } = params;
      let { address, privateKey } = wallet;

      try {
        if (storeWallet) saveEncryptedWalletInLocalStorage(address, encryptedWallet);
        if (storePrivateKey) await savePrivateKeyInSessionStorage({ address, privateKey });

        await createLocalWalletSigner(wallet);
        dispatch(actionCreators.createWallet(wallet.address, encryptedWallet));
        console.log('loginWithWallet');
        dispatch(
          notifierActionCreators.addNotification({ id: 1, intent: 'success', message: 'Logged In Successfully!' })
        );
        return dispatch(actionCreators.loginWithWallet(address));
      } catch (e) {
        return dispatch(actionCreators.loginError('Could not authenticate wallet'));
      }
    } catch (e) {
      dispatch(actionCreators.loginError(e.message));
    }
  };
}
