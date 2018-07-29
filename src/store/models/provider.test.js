import createStore from '../../store/configureStore';
import * as providerService from '../services/provider';

import getProviderModel from './provider';
import * as actionCreators from './provider';
import getAccountModel from './account';

jest.mock('../services/provider');

let providerModel;
let accountModel;

it('returns default provider state', () => {
  const { store } = createStore();

  providerModel = getProviderModel(store.getState());
  expect(providerModel.getType()).toEqual('local');
  expect(providerModel.getNetworkId()).toEqual(8888);
  expect(providerModel.getUrl()).toEqual('http://127.0.0.1:8545');
});

it('handles setProvider (metamask) properly', async () => {
  providerService.createProvider.mockReturnValue(
    Promise.resolve({
      address: 'test address',
      options: { type: 'metamask' },
    })
  );

  const { store } = createStore();
  await store.dispatch(actionCreators.setProvider('test providerOptions'));

  providerModel = getProviderModel(store.getState());
  accountModel = getAccountModel(store.getState());
  expect(providerService.createProvider).toHaveBeenCalledTimes(1);
  expect(providerService.createProvider).toHaveBeenCalledWith('test providerOptions');
  expect(providerModel.getType()).toEqual('metamask');
  expect(accountModel.address()).toEqual('test address');
});
