import createStore from '../../store/configureStore';

import createWalletModalSelector from './createWalletModal';
import * as actionCreators from './createWalletModal';
import * as walletService from '../services/wallet';



jest.mock('../services/wallet');

let selector;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('create Wallet', () => {
  walletService.saveEncryptedWalletInLocalStorage = jest.fn();
  walletService.savePrivateKeyInSessionStorage = jest.fn();

  it('handles create wallet properly (no wallet storage)', async () => {
    const { store } = createStore();
    const params = {
      address: 'test address',
      encryptedWallet: 'test encryptedWallet',
      password: 'test password',
      storeWallet: false,
      storePrivateKey: false,
    };

    await store.dispatch(actionCreators.createWallet(params));

    expect(walletService.saveEncryptedWalletInLocalStorage).toHaveBeenCalledTimes(0);
    expect(walletService.savePrivateKeyInSessionStorage).toHaveBeenCalledTimes(0);

    selector = createWalletModalSelector(store.getState());

    expect(selector.addresses()).toEqual(['test address']);
    expect(selector.byAddress()).toEqual({
      'test address': {
        address: 'test address',
        encryptedWallet: 'test encryptedWallet',
      },
    });
  });

  it('handles create wallet properly (store wallet in local storage)', async () => {
    const { store } = createStore();
    const params = {
      address: 'test address',
      encryptedWallet: 'test encryptedWallet',
      password: 'test password',
      storeWallet: true,
      storePrivateKey: false,
    };

    await store.dispatch(actionCreators.createWallet(params));

    expect(walletService.saveEncryptedWalletInLocalStorage).toHaveBeenCalledTimes(1);
    expect(walletService.saveEncryptedWalletInLocalStorage).toHaveBeenCalledWith(
      'test address',
      'test encryptedWallet'
    );
    expect(walletService.savePrivateKeyInSessionStorage).toHaveBeenCalledTimes(0);

    selector = createWalletModalSelector(store.getState());

    expect(selector.addresses()).toEqual(['test address']);
    expect(selector.byAddress()).toEqual({
      'test address': {
        address: 'test address',
        encryptedWallet: 'test encryptedWallet',
      },
    });
  });

  it('handles create wallet properly (store wallet and key)', async () => {
    const { store } = createStore();
    const params = {
      address: 'test address',
      encryptedWallet: 'test encryptedWallet',
      password: 'test password',
      storeWallet: true,
      storePrivateKey: true,
    };

    await store.dispatch(actionCreators.createWallet(params));

    expect(walletService.saveEncryptedWalletInLocalStorage).toHaveBeenCalledTimes(1);
    expect(walletService.saveEncryptedWalletInLocalStorage).toHaveBeenCalledWith(
      'test address',
      'test encryptedWallet'
    );
    expect(walletService.savePrivateKeyInSessionStorage).toHaveBeenCalledTimes(1);
    expect(walletService.savePrivateKeyInSessionStorage).toHaveBeenCalledWith({
      address: 'test address',
      password: 'test password',
      encryptedWallet: 'test encryptedWallet',
    });

    selector = createWalletModalSelector(store.getState());

    expect(selector.addresses()).toEqual(['test address']);
    expect(selector.byAddress()).toEqual({
      'test address': {
        address: 'test address',
        encryptedWallet: 'test encryptedWallet',
      },
    });
  });
});
