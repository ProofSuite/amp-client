// @flow
import type { ProviderState, ProviderOptions } from '../../types/provider';

const initialState = {
  type: 'local',
  url: 'http://127.0.0.1:8545',
  networkId: 8888,
};

export const initialized = () => {
  const event = (state: ProviderState = initialState) => state;
  return event;
};

export const setProvider = ({ type, url, networkId }: ProviderOptions) => {
  const event = (state: ProviderState) => ({
    ...state,
    type: type || state.type,
    url: url || state.url,
    networkId: networkId || state.networkId,
  });

  return event;
};

export default function model(state: ProviderState) {
  return {
    getType: () => state.type,
    getUrl: () => state.url,
    getNetworkId: () => state.networkId,
  };
}

// const localRPCProvider = {
//   type: 'local',
//   url: 'http://127.0.0.1:8545',
//   networkID: 8888,
//   networkName: ''
// }

// const localWebsocketRPCProvider = {
//   type: 'local',
//   url: 'ws://127.0.0.1:8546',
//   networkID: 8888,
//   networkName: ''
// }

// const rinkebyInfuraWebsocketProvider = {
//   type: 'infura',
//   url: 'wss://rinkeby.infura.io/_ws',
//   networkID: 4,
//   networkName: 'rinkeby'
// }

// const testingMetamaskProvider = {
//   type: 'metamask',
//   networkID: 8888,
//   networkName: ''
// }

// const rinkebyMetamaskProvider = {
//   type: 'metamask',
//   networkID: 4,
//   networkName: 'rinkeby'
// }
