import { createStore } from '../../store';

import * as actionCreators from './createWallet';
import * as walletService from '../services/wallet';
import getCreateWalletModel from './createWallet';

jest.mock('../services/wallet');

let model;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('create Wallet', () => {
  walletService.saveEncryptedWalletInLocalStorage = jest.fn();
  walletService.savePrivateKeyInSessionStorage = jest.fn();

  it('handles create wallet properly (no wallet storage)', async () => {
    const store = createStore();
    const params = {
      address: 'test address',
      serialized: 'test serialized',
      password: 'test password',
      storeWallet: false,
      storePrivateKey: false,
    };

    await store.dispatch(actionCreators.createWallet(params));

    expect(walletService.saveEncryptedWalletInLocalStorage).toHaveBeenCalledTimes(0);
    expect(walletService.savePrivateKeyInSessionStorage).toHaveBeenCalledTimes(0);

    model = getCreateWalletModel(store.getState());

    expect(model.addresses()).toEqual(['test address']);
    expect(model.byAddress()).toEqual({
      'test address': {
        address: 'test address',
        serialized: 'test serialized',
      },
    });
  });

  it('handles create wallet properly (store wallet in local storage)', async () => {
    const store = createStore();
    const params = {
      address: 'test address',
      serialized: 'test serialized',
      password: 'test password',
      storeWallet: true,
      storePrivateKey: false,
    };

    await store.dispatch(actionCreators.createWallet(params));

    expect(walletService.saveEncryptedWalletInLocalStorage).toHaveBeenCalledTimes(1);
    expect(walletService.saveEncryptedWalletInLocalStorage).toHaveBeenCalledWith('test address', 'test serialized');
    expect(walletService.savePrivateKeyInSessionStorage).toHaveBeenCalledTimes(0);

    model = getCreateWalletModel(store.getState());

    expect(model.addresses()).toEqual(['test address']);
    expect(model.byAddress()).toEqual({
      'test address': {
        address: 'test address',
        serialized: 'test serialized',
      },
    });
  });

  it('handles create wallet properly (store wallet and key)', async () => {
    const store = createStore();
    const params = {
      address: 'test address',
      serialized: 'test serialized',
      password: 'test password',
      storeWallet: true,
      storePrivateKey: true,
    };

    await store.dispatch(actionCreators.createWallet(params));

    expect(walletService.saveEncryptedWalletInLocalStorage).toHaveBeenCalledTimes(1);
    expect(walletService.saveEncryptedWalletInLocalStorage).toHaveBeenCalledWith('test address', 'test serialized');
    expect(walletService.savePrivateKeyInSessionStorage).toHaveBeenCalledTimes(1);
    expect(walletService.savePrivateKeyInSessionStorage).toHaveBeenCalledWith(
      'test address',
      'test password',
      'test serialized'
    );

    model = getCreateWalletModel(store.getState());

    expect(model.addresses()).toEqual(['test address']);
    expect(model.byAddress()).toEqual({
      'test address': {
        address: 'test address',
        serialized: 'test serialized',
      },
    });
  });
});
