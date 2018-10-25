import createStore from '../../store/configureStore';
import * as signerService from '../services/signer';

import getSignerSettingsSelector from './signerSettings';
import * as actionCreators from './signerSettings';
import { getAccountDomain } from '../domains';

jest.mock('../services/signer');

let selector;
let accountSelector;

it('returns default provider state', () => {
  const { store } = createStore();

  selector = getSignerSettingsSelector(store.getState());
  expect(selector.getType()).toEqual('rpc');
  expect(selector.getNetworkID()).toEqual(8888);
  expect(selector.getUrl()).toEqual('http://127.0.0.1:8545');
});

it('handles setProvider (metamask) properly', async () => {
  signerService.createSigner.mockReturnValue(
    Promise.resolve({
      address: 'test address',
      settings: { type: 'metamask' },
    })
  );

  const { store } = createStore();
  await store.dispatch(actionCreators.updateSigner('test signerParams'));

  selector = getSignerSettingsSelector(store.getState());
  accountSelector = getAccountDomain(store.getState());
  expect(signerService.createSigner).toHaveBeenCalledTimes(1);
  expect(signerService.createSigner).toHaveBeenCalledWith('test signerParams');
  expect(selector.getType()).toEqual('metamask');
  expect(accountSelector.address()).toEqual('test address');
});
