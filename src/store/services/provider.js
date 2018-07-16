// @flow
import { providers } from 'ethers';
import type { ProviderOptions } from '../../types/provider';

export const createProvider = async (providerOptions: ProviderOptions) => {
  let options, address;
  switch (providerOptions.provider) {
    case 'metamask':
      options = { type: 'metamask' };
      await createMetamaskProvider();
      break;
    case 'local':
      options = { type: 'local', url: 'http://127.0.0.1:8545', networkId: 8888 };
      address = await createJsonRpcProvider(options.url, options.networkId);
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
      address = await createJsonRpcProvider(options.url, options.networkId);
      break;
    default:
      options = { type: 'wallet', url: 'wss://mainnet.infura.io/ws', networkId: 1 };
      await createDefaultProvider();
  }
  return { options, address };
};

const createDefaultProvider = async () => {
  let provider = providers.getDefaultProvider();
  window.provider = { provider: provider, type: 'wallet' };
};

const createInfuraProvider = async (networkName: string) => {
  let provider = new providers.InfuraProvider(networkName);
  window.provider = { provider: provider, type: 'wallet' };
};

const createJsonRpcProvider = async (url: ?string, networkId: ?number) => {
  let provider = new providers.JsonRpcProvider(url, { chainId: networkId, name: 'unspecified' });
  let accountAddresses = await provider.listAccounts();
  window.provider = { provider: provider, type: 'local' };

  return accountAddresses[0];
};

const createMetamaskProvider = async () => {
  let provider = new providers.Web3Provider(window.web3.currentProvider);
  let accountAddresses = await provider.listAccounts();
  window.provider = { provider: provider, type: 'metamask' };

  return accountAddresses[0];
};

export const getProvider = () => window.provider;

// let blockNumber = await provider.getBlockNumber(); //TODO check on block number
