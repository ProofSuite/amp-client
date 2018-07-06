// @flow
import providerModel from '../domains/provider';
import * as actionCreators from '../actions/provider';

import type { ProviderOptions } from '../../types/provider';
import type { State, ThunkAction } from '../../types/';

export default function getModel(state: State) {
  return providerModel(state.provider);
}

export function setProvider(providerOptions: ProviderOptions): ThunkAction {
  return dispatch => {
    try {
      let options;
      switch (providerOptions.provider) {
        case 'metamask':
          options = {
            type: 'metamask',
            networkId: 8888, // not sure if necessary
          };
          return dispatch(actionCreators.setProvider(options));
        case 'local':
          options = {
            type: 'local',
            url: 'http://127.0.0.1:8545',
            networkId: 8888,
          };
          return dispatch(actionCreators.setProvider(options));
        case 'wallet':
          options = {
            type: 'wallet',
            url: 'wss://mainnet.infura.io/ws',
            networkId: 1,
          };
          return dispatch(actionCreators.setProvider(options));
        case 'wallet (rinkeby)':
          options = {
            type: 'wallet',
            url: 'wss://rinkeby.infura.io/_ws',
            networkId: 4,
          };
          return dispatch(actionCreators.setProvider(options));
        case 'custom':
          options = {
            type: providerOptions.type,
            url: providerOptions.url,
            networkId: providerOptions.networkId,
          };
          return dispatch(actionCreators.setProvider(options));
        default:
          return;
      }
    } catch (error) {
      console.log(error);
    }
  };
}
