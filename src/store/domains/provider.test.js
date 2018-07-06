import model, * as eventCreators from './provider';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);

  return model(state);
}

it('handles initialized event properly', () => {
  const options = {
    type: 'local',
    url: 'http://127.0.0.1:8545',
    networkId: 8888,
  };
  const provider = getModel([eventCreators.initialized()]);

  expect(provider.getType()).toEqual('local');
  expect(provider.getUrl()).toEqual('http://127.0.0.1:8545');
  expect(provider.getNetworkId()).toEqual(8888);
});

it('handles setProvider event properly', () => {
  const options = {
    type: 'metamask',
    url: 'http://127.0.0.1:8545',
    networkId: 3,
  };
  const provider = getModel([eventCreators.setProvider(options)]);

  expect(provider.getType()).toEqual('metamask');
  expect(provider.getUrl()).toEqual('http://127.0.0.1:8545');
  expect(provider.getNetworkId()).toEqual(3);
});
