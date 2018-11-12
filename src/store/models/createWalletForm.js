// @flow
import { getWalletsDomain } from '../domains';
import * as actionCreators from '../actions/createWallet';
import { saveEncryptedWalletInLocalStorage, savePrivateKeyInSessionStorage } from '../services/wallet';

import type { State, ThunkAction } from '../../types';

type CreateWalletParams = {
  address: string,
  encryptedWallet: string,
  password: string,
  storeWallet: boolean,
  storePrivateKey: boolean,
};

export default function createWalletFormSelector(state: State) {
  return getWalletsDomain(state);
}

export function createWallet(params: CreateWalletParams): ThunkAction {
  return async dispatch => {
    try {
      let { address, encryptedWallet, password, storeWallet, storePrivateKey } = params;
      dispatch(actionCreators.createWallet(address, encryptedWallet));

      if (storeWallet) saveEncryptedWalletInLocalStorage(address, encryptedWallet);
      if (storePrivateKey) await savePrivateKeyInSessionStorage({ address, password, encryptedWallet });
    } catch (error) {
      console.log(error.message);
    }
  };
}
