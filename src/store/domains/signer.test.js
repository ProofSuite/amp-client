import getSignerDomain from './signer';
import * as eventCreators from './signer';



function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return getSignerDomain(state);
}

it('handles initialized event properly', () => {
  const signerDomain = getDomain([eventCreators.initialized()]);

  expect(signerDomain.isLoading()).toEqual(false);
  expect(signerDomain.getType()).toEqual('rpc');
  expect(signerDomain.getUrl()).toEqual('http://127.0.0.1:8545');
  expect(signerDomain.getNetworkId()).toEqual(8888);
});

it('handles signerRequested event properly', () => {
  const signerDomain = getDomain([eventCreators.initialized(), eventCreators.signerRequested()]);

  expect(signerDomain.isLoading()).toEqual(true);
  expect(signerDomain.getType()).toEqual('rpc');
  expect(signerDomain.getUrl()).toEqual('http://127.0.0.1:8545');
  expect(signerDomain.getNetworkId()).toEqual(8888);
});

it('handles signerSet event properly', () => {
  const settings = {
    type: 'metamask',
    url: 'http://127.0.0.1:8545',
    networkId: 3,
  };
  const signerDomain = getDomain([
    eventCreators.initialized(),
    eventCreators.signerRequested(),
    eventCreators.signerUpdated(settings),
  ]);

  expect(signerDomain.isLoading()).toEqual(false);
  expect(signerDomain.getType()).toEqual('metamask');
  expect(signerDomain.getUrl()).toEqual('http://127.0.0.1:8545');
  expect(signerDomain.getNetworkId()).toEqual(3);
});

it('handles signerError event properly', () => {
  const signerDomain = getDomain([
    eventCreators.initialized(),
    eventCreators.signerRequested(),
    eventCreators.signerError('Could not find signer'),
  ]);

  expect(signerDomain.getError()).toEqual('Could not find signer');
  expect(signerDomain.isLoading()).toEqual(false);
});
