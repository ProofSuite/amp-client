// @flow
import * as actionCreators from '../actions/loginPage';

import * as notifierActionCreators from '../actions/app';
import { getAccountDomain, getLoginPageDomain } from '../domains';
import { saveEncryptedWalletInLocalStorage, savePrivateKeyInSessionStorage } from '../services/wallet';
import { createDefaultWalletSigner, createMetamaskSigner } from '../services/signer';

import type { State, ThunkAction } from '../../types';

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
  return async (dispatch, getState, { socket, mixpanel }) => {
    mixpanel.track('login-with-metamask');

    try {
      dispatch(actionCreators.requestLogin());

      const { Web3, ethereum } = window;

      if (ethereum) {
        window.web3 = new Web3(ethereum);
        await ethereum.enable();
      }

      if (typeof window.web3 === 'undefined') throw new Error('Metamask not installed');
      if (typeof window.web3.eth.defaultAccount === 'undefined') throw new Error('Metamask account locked');

      let { address } = await createMetamaskSigner();
      dispatch(actionCreators.loginWithMetamask(address));
      dispatch(notifierActionCreators.addSuccessNotification({ message: 'Signed in with Metamask' }));
    } catch (e) {
      if (e.message === 'Metamask account locked') return dispatch(actionCreators.loginError('Metamask account locked'));
      if (e.message === 'Metamask not installed') return dispatch(actionCreators.loginError('Metamask not installed'));

      dispatch(notifierActionCreators.addNotification({ message: 'Login error ' }));
      dispatch(actionCreators.loginError(e.message));
    }
  };
}

export function loginWithWallet(params: CreateWalletParams): ThunkAction {
  return async (dispatch, getState, { mixpanel }) => {
    mixpanel.track('login-with-wallet');

    try {
      console.log(params)
      dispatch(actionCreators.requestLogin());
      let { wallet, encryptedWallet, storeWallet, storePrivateKey } = params;
      let { address, privateKey } = wallet;

      if (storeWallet && encryptedWallet) saveEncryptedWalletInLocalStorage(address, encryptedWallet);
      if (storePrivateKey) await savePrivateKeyInSessionStorage({ address, privateKey });

      await createDefaultWalletSigner(wallet);
      dispatch(actionCreators.createWallet(wallet.address, encryptedWallet));
      dispatch(actionCreators.loginWithWallet(address, privateKey));
      dispatch(notifierActionCreators.addSuccessNotification({ message: `Signed in with ${address}` }));
    } catch (e) {
      console.log(e);
      dispatch(notifierActionCreators.addNotification({ message: 'Login Error' }));
      dispatch(actionCreators.loginError(e.message));
    }
  };
}
