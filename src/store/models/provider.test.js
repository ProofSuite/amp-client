import { createStore } from '../../store';
import providerModel, * as actionCreators from './provider';

let model;

//TODO: separate into several tests ?
it('handle setProvider properly', () => {
  const options = {
    type: 'metamask',
    url: 'https://localhost:8545',
    networkId: 3,
  };

  const store = createStore();

  model = providerModel(store.getState());
  expect(model.getType()).toEqual('local');
  expect(model.getNetworkId()).toEqual(8888);
  expect(model.getUrl()).toEqual('http://127.0.0.1:8545');

  store.dispatch(actionCreators.setProvider({ provider: 'metamask' }));

  model = providerModel(store.getState());
  expect(model.getType()).toEqual('metamask');
  expect(model.getNetworkId()).toEqual(8888);

  store.dispatch(actionCreators.setProvider({ provider: 'local' }));

  model = providerModel(store.getState());
  expect(model.getType()).toEqual('local');
  expect(model.getNetworkId()).toEqual(8888);
  expect(model.getUrl()).toEqual('http://127.0.0.1:8545');

  store.dispatch(actionCreators.setProvider({ provider: 'wallet' }));

  model = providerModel(store.getState());
  expect(model.getType()).toEqual('wallet');
  expect(model.getNetworkId()).toEqual(1);
  expect(model.getUrl()).toEqual('wss://mainnet.infura.io/ws');

  store.dispatch(actionCreators.setProvider({ provider: 'wallet (rinkeby)' }));

  model = providerModel(store.getState());
  expect(model.getType()).toEqual('wallet');
  expect(model.getNetworkId()).toEqual(4);
  expect(model.getUrl()).toEqual('wss://rinkeby.infura.io/_ws');

  const customProviderOptions = {
    provider: 'custom',
    type: 'wallet',
    url: 'https://my.node.com:8545',
    networkId: 2,
  };

  store.dispatch(actionCreators.setProvider(customProviderOptions));

  model = providerModel(store.getState());
  expect(model.getType()).toEqual('wallet');
  expect(model.getNetworkId()).toEqual(2);
  expect(model.getUrl()).toEqual('https://my.node.com:8545');
});
