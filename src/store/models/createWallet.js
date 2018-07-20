// @flow
import walletModel from '../domains/wallets';
import * as actionCreators from '../actions/createWallet';
import { saveEncryptedWalletInLocalStorage, savePrivateKeyInSessionStorage } from '../services/wallet';

import type { State, ThunkAction } from '../../types';

type CreateWalletParams = {
  address: string,
  serialized: string,
  password: string,
  storeWallet: boolean,
  storePrivateKey: boolean,
};

export default function getWalletModel(state: State) {
  return walletModel(state.wallets);
}

export function createWallet(params: CreateWalletParams): ThunkAction {
  return async dispatch => {
    try {
      let { address, serialized, password, storeWallet, storePrivateKey } = params;
      dispatch(actionCreators.createWallet(address, serialized));

      if (storeWallet) saveEncryptedWalletInLocalStorage(address, serialized);
      if (storePrivateKey) await savePrivateKeyInSessionStorage(address, password, serialized);
    } catch (e) {
      console.log(e);
    }
  };
}
