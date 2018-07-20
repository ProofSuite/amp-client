import model from './provider';
import * as eventCreators from './provider';

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

  expect(provider.isLoading()).toEqual(false);
  expect(provider.getType()).toEqual('local');
  expect(provider.getUrl()).toEqual('http://127.0.0.1:8545');
  expect(provider.getNetworkId()).toEqual(8888);
});

it('handles providerRequested event properly', () => {
  const provider = getModel([eventCreators.initialized(), eventCreators.providerRequested()]);

  expect(provider.isLoading()).toEqual(true);
  expect(provider.getType()).toEqual('local');
  expect(provider.getUrl()).toEqual('http://127.0.0.1:8545');
  expect(provider.getNetworkId()).toEqual(8888);
});

it('handles providerSet event properly', () => {
  const options = {
    type: 'metamask',
    url: 'http://127.0.0.1:8545',
    networkId: 3,
  };
  const provider = getModel([
    eventCreators.initialized(),
    eventCreators.providerRequested(),
    eventCreators.providerSet(options),
  ]);

  expect(provider.isLoading()).toEqual(false);
  expect(provider.getType()).toEqual('metamask');
  expect(provider.getUrl()).toEqual('http://127.0.0.1:8545');
  expect(provider.getNetworkId()).toEqual(3);
});

it('handles providerError event properly', () => {
  const provider = getModel([
    eventCreators.initialized(),
    eventCreators.providerRequested(),
    eventCreators.providerError('Could not find provider'),
  ]);

  expect(provider.getError()).toEqual('Could not find provider');
  expect(provider.isLoading()).toEqual(false);
});
