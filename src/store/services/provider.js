// @flow
import { providers } from 'ethers';
import type { ProviderOptions } from '../../types/provider';

export const createProvider = async (providerOptions: ProviderOptions) => {
  let options;
  switch (providerOptions.provider) {
    case 'metamask':
      options = { type: 'metamask' };
      await createMetamaskProvider();
      break;
    case 'local':
      options = { type: 'local', url: 'http://127.0.0.1:8545', networkId: 8888 };
      await createJsonRpcProvider(options.url, options.networkId);
      break;
    case 'wallet':
      options = { type: 'wallet', url: 'wss://mainnet.infura.io/ws', networkId: 1 };
      await createInfuraProvider('homestead');
      break;
    case 'wallet (rinkeby)':
      options = { type: 'wallet', url: 'wss://rinkeby.infura.io/_ws', networkId: 4 };
      await createInfuraProvider('rinkeby');
      break;
    case 'custom':
      options = { type: providerOptions.type, url: providerOptions.url, networkId: providerOptions.networkId };
      await createJsonRpcProvider(options.url, options.networkId);
      break;
    default:
      options = { type: 'wallet', url: 'wss://mainnet.infura.io/ws', networkId: 1 };
      await createDefaultProvider();
  }
  return options;
};

export const createDefaultProvider = async () => {
  let provider = new providers.getDefaultProvider();
  let blockNumber = await provider.getBlockNumber();
  window.provider = { provider: provider, type: 'wallet' };
};

export const createInfuraProvider = async (networkName: string) => {
  let provider = new providers.InfuraProvider(networkName);
  let blockNumber = await provider.getBlockNumber(); //TODO check on block number
  window.provider = { provider: provider, type: 'wallet' };
};

export const createJsonRpcProvider = async (url: ?string, networkId: ?number) => {
  let provider = new providers.JsonRpcProvider(url, { chainId: networkId, name: 'unspecified' });
  let blockNumber = await provider.getBlockNumber(); //TODO check on block number
  window.provider = { provider: provider, type: 'local' };
};

export const createMetamaskProvider = async () => {
  let provider = new providers.Web3Provider(window.web3.currentProvider);
  let blockNumber = await provider.getBlockNumber(); //TODO check on block number
  window.provider = { provider: provider, type: 'metamask' };
};

export const getProvider = () => window.provider;
