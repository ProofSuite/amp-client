import { createStore } from '../../store';
import * as provider from '../services/provider';
import ethers from 'ethers';
import providerModel, * as actionCreators from './provider';

jest.mock('ethers');

let model;

it('returns default provider state', () => {
  const store = createStore();

  model = providerModel(store.getState());
  expect(model.getType()).toEqual('local');
  expect(model.getNetworkId()).toEqual(8888);
  expect(model.getUrl()).toEqual('http://127.0.0.1:8545');
});

it('handles setProvider (metamask) properly', async () => {
  ethers.providers.Web3Provider.mockReturnValue('some provider instance');
  const store = createStore();
  window.web3 = { currentProvider: 'some provider object' };
  await store.dispatch(actionCreators.setProvider({ provider: 'metamask' }));
  model = providerModel(store.getState());

  expect(ethers.providers.Web3Provider.mock.calls.length).toBe(1);
  expect(ethers.providers.Web3Provider.mock.calls[0][0]).toBe('some provider object');
  // expect(ethers.providers.Web3Provider.mock.results[0].value).toBe('some provider instance')  //TODO make this work ?
  expect(model.getType()).toEqual('metamask');
  expect(model.getNetworkId()).toEqual(8888);
});

it('handles setProvider (local) properly', async () => {
  ethers.providers.JsonRpcProvider.mockReturnValue('some provider instance');
  const expected = { type: 'local', url: 'http://127.0.0.1:8545', networkId: 8888 };
  const store = createStore();

  await store.dispatch(actionCreators.setProvider({ provider: 'local' }));
  model = providerModel(store.getState());

  expect(ethers.providers.JsonRpcProvider.mock.calls.length).toBe(1);
  expect(ethers.providers.JsonRpcProvider.mock.calls[0][0]).toBe(expected.url);
  expect(ethers.providers.JsonRpcProvider.mock.calls[0][1]).toEqual({
    chainId: expected.networkId,
    name: 'unspecified',
  });
  expect(model.getType()).toEqual(expected.type);
  expect(model.getNetworkId()).toEqual(expected.networkId);
  expect(model.getUrl()).toEqual(expected.url);
});

it('handles setProvider (wallet) properly', async () => {
  ethers.providers.InfuraProvider.mockReturnValue('some provider instance');
  const expected = { type: 'wallet', url: 'wss://mainnet.infura.io/ws', networkId: 1 };
  const store = createStore();

  await store.dispatch(actionCreators.setProvider({ provider: 'wallet' }));
  model = providerModel(store.getState());

  expect(ethers.providers.InfuraProvider.mock.calls.length).toBe(1);
  expect(ethers.providers.InfuraProvider.mock.calls[0][0]).toBe('homestead');
  expect(model.getType()).toEqual('wallet');
  expect(model.getNetworkId()).toEqual(1);
  expect(model.getUrl()).toEqual('wss://mainnet.infura.io/ws');
});

it('handles setProvider (wallet-rinkeby) properly', async () => {
  ethers.providers.InfuraProvider.mockReturnValue('some provider instance');
  const store = createStore();
  await store.dispatch(actionCreators.setProvider({ provider: 'wallet (rinkeby)' }));
  model = providerModel(store.getState());

  //TODO Currently this inspects the second call, the first mock call was done in the previous test
  //TODO How do i 'reset' the mocked function without using a beforeEach ?
  expect(ethers.providers.InfuraProvider.mock.calls.length).toBe(2);
  expect(ethers.providers.InfuraProvider.mock.calls[1][0]).toBe('rinkeby');
  expect(model.getType()).toEqual('wallet');
  expect(model.getNetworkId()).toEqual(4);
  expect(model.getUrl()).toEqual('wss://rinkeby.infura.io/_ws');
});

it('handles custom provider actions properly', async () => {
  const customProviderOptions = {
    provider: 'custom',
    type: 'wallet',
    url: 'https://my.node.com:8545',
    networkId: 2,
  };
  const store = createStore();
  await store.dispatch(actionCreators.setProvider(customProviderOptions));

  model = providerModel(store.getState());
  expect(model.getType()).toEqual('wallet');
  expect(model.getNetworkId()).toEqual(2);
  expect(model.getUrl()).toEqual('https://my.node.com:8545');
});

it('handles setProvider throwing an error properly', async () => {
  ethers.providers.Web3Provider.mockImplementation(() => {
    throw new Error('Could not find provider');
  });
  const store = createStore();

  await store.dispatch(actionCreators.setProvider({ provider: 'metamask' }));
  model = providerModel(store.getState());
  expect(model.getError()).toEqual('Could not find provider');
});
