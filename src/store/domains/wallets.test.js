import getWalletDomain from './wallets';
import * as eventCreators from './wallets';
import { mockSerializedWallet, mockSerializedWalletAddress } from '../../mockData';

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);

  return getWalletDomain(state);
}

it('handles initialized event properly', () => {
  const walletsDomain = getDomain([eventCreators.initialized()]);

  expect(walletsDomain.addresses).toEqual([]);
  expect(walletsDomain.byAddress).toEqual({});
});

it('handles wallet added event properly', () => {
  const walletsDomain = getDomain([
    eventCreators.initialized(),
    eventCreators.walletAdded(mockSerializedWalletAddress, mockSerializedWallet),
  ]);

  expect(walletsDomain.addresses).toEqual([mockSerializedWalletAddress]);
  expect(walletsDomain.byAddress).toEqual({
    [mockSerializedWalletAddress]: {
      address: mockSerializedWalletAddress,
      encryptedWallet: mockSerializedWallet,
    },
  });
});

it('handles wallet removed event properly', () => {
  const walletsDomain = getDomain([
    eventCreators.initialized(),
    eventCreators.walletAdded(mockSerializedWalletAddress, mockSerializedWallet),
    eventCreators.walletRemoved(mockSerializedWalletAddress),
  ]);

  expect(walletsDomain.addresses).toEqual([]);
  expect(walletsDomain.byAddress).toEqual({});
});
