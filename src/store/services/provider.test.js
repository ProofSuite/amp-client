import { providers } from 'ethers';
import * as provider from './provider';

jest.mock('ethers');

describe('createProvider', () => {
  let providerMock;
  let listAccounts;
  let getBlockNumber;

  beforeEach(() => {
    jest.clearAllMocks();

    getBlockNumber = jest.fn(() => Promise.resolve('test blockNumber'));
    listAccounts = jest.fn(() => Promise.resolve(['test address']));
    providerMock = { getBlockNumber, listAccounts };

    providers.getDefaultProvider.mockReturnValue(providerMock);
    providers.InfuraProvider.mockImplementation(() => providerMock);
    providers.JsonRpcProvider.mockImplementation(() => providerMock);
    providers.Web3Provider.mockImplementation(() => providerMock);
  });

  it('creates default provider', async () => {
    let providerOptions = {};
    let { address, options } = await provider.createProvider(providerOptions);

    expect(options).toEqual({ type: 'wallet', url: 'wss://mainnet.infura.io/ws', networkId: 1 });
    expect(address).toEqual(undefined);
    expect(providers.getDefaultProvider).toHaveBeenCalledTimes(1);
    expect(window.provider.provider).toBe(providerMock);
  });

  it('create metamask provider', async () => {
    window.web3 = { currentProvider: 'web3' };
    let providerOptions = { provider: 'metamask' };
    let { address, options } = await provider.createProvider(providerOptions);

    expect(options).toEqual({ type: 'metamask' });
    expect(address).toEqual(undefined);
    expect(providers.Web3Provider).toHaveBeenCalledTimes(1);
    expect(window.provider.provider).toBe(providerMock);
    expect(window.provider.type).toEqual('metamask');
  });

  it('creates local provider', async () => {
    let providerOptions = { provider: 'local' };
    let { address, options } = await provider.createProvider(providerOptions);

    expect(address).toEqual('test address');
    expect(options).toEqual({ type: 'local', url: 'http://127.0.0.1:8545', networkId: 8888 });
    expect(providers.JsonRpcProvider).toHaveBeenCalledTimes(1);
    expect(providers.JsonRpcProvider).toHaveBeenCalledWith('http://127.0.0.1:8545', {
      chainId: 8888,
      name: 'unspecified',
    });
    expect(window.provider.provider).toBe(providerMock);
    expect(window.provider.type).toEqual('local');
  });

  it('creates wallet provider', async () => {
    let providerOptions = { provider: 'wallet' };
    let { options } = await provider.createProvider(providerOptions);

    expect(options).toEqual({ type: 'wallet', url: 'http://127.0.0.1:8545', networkId: 8888 });
    expect(providers.JsonRpcProvider).toHaveBeenCalledTimes(1);
    expect(providers.JsonRpcProvider).toHaveBeenCalledWith('http://127.0.0.1:8545', {
      chainId: 8888,
      name: 'unspecified',
    });
    expect(window.provider.provider).toBe(providerMock);
    expect(window.provider.type).toEqual('wallet');
  });

  it('creates wallet provider (on rinkeby network)', async () => {
    let providerOptions = { provider: 'wallet (rinkeby)' };
    let { options } = await provider.createProvider(providerOptions);

    expect(options).toEqual({ type: 'wallet', url: 'wss://rinkeby.infura.io/_ws', networkId: 4 });
    expect(providers.InfuraProvider).toHaveBeenCalledTimes(1);
    expect(providers.InfuraProvider).toHaveBeenCalledWith('rinkeby');
    expect(window.provider.provider).toBe(providerMock);
    expect(window.provider.type).toEqual('wallet');
  });

  it('creates custom provider', async () => {
    let providerOptions = { provider: 'custom', type: 'wallet', url: 'test url', networkId: 'test networkId' };
    let { address, options } = await provider.createProvider(providerOptions);

    expect(options).toEqual({ type: 'wallet', url: 'test url', networkId: 'test networkId' });
    expect(address).toEqual('test address');
    expect(providers.JsonRpcProvider).toHaveBeenCalledTimes(1);
    expect(providers.JsonRpcProvider).toHaveBeenCalledWith('test url', {
      chainId: 'test networkId',
      name: 'unspecified',
    });
    expect(window.provider.provider).toBe(providerMock);
    expect(window.provider.type).toEqual('local');
  });
});
