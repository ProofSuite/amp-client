import { Contract, utils } from 'ethers';
import { ERC20Token } from 'proof-contracts-interfaces';
import * as signerService from './signer';
import * as accountBalancesService from './accountBalances';

jest.mock('ethers');
jest.mock('proof-contracts-interfaces', () => ({
  ERC20Token: { abi: 'test ERC20Token abi' },
}));
jest.mock('./signer');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('queryEtherBalance', () => {
  let getBalance;
  let providerMock;
  let address;

  beforeEach(() => {
    getBalance = jest.fn().mockReturnValue('test getBalance');
    providerMock = { getBalance };
    signerService.getProvider = jest.fn(() => providerMock);
    utils.formatEther.mockReturnValue(1000);
    address = '0x4dc5790733b997f3db7fc49118ab013182d6ba9b';
  });

  it('loads the current provider', async () => {
    await accountBalancesService.queryEtherBalance(address);
    expect(signerService.getProvider).toHaveBeenCalledTimes(1);
  });

  it('the provider returns the current ether balance', async () => {
    await accountBalancesService.queryEtherBalance(address);

    expect(getBalance).toHaveBeenCalledTimes(1);
    expect(getBalance).toHaveBeenCalledWith('0x4dc5790733b997f3db7fc49118ab013182d6ba9b');
  });

  it('returns the formatted ether balance', async () => {
    let result = await accountBalancesService.queryEtherBalance(address);

    expect(utils.formatEther).toHaveBeenCalledTimes(1);
    expect(utils.formatEther).toHaveBeenCalledWith('test getBalance');
    expect(result).toEqual({ symbol: 'ETH', balance: 1000 });
  });
});

describe('queryBalances', () => {
  let balanceOf;
  let providerMock, contractMock;
  let tokens, address;

  beforeEach(() => {
    balanceOf = jest.fn();
    contractMock = jest.fn(() => ({ balanceOf }));
    providerMock = 'test provider';
    signerService.getProvider.mockImplementation(() => providerMock);
    Contract.mockImplementation(contractMock);

    address = '0x4dc5790733b997f3db7fc49118ab013182d6ba9b';
    tokens = [
      { symbol: 'REQ', address: '0x6e9a406696617ec5105f9382d33ba3360fcfabcc' },
      { symbol: 'WETH', address: '0x44809695706c252435531029b1e9d7d0355d475f' },
    ];
  });

  it('loads the current provider', async () => {
    await accountBalancesService.queryTokenBalances(address, tokens);
    expect(signerService.getProvider).toHaveBeenCalledTimes(1);
  });

  it('the provider returns the current ether balance', async () => {
    await accountBalancesService.queryTokenBalances(address, tokens);

    expect(contractMock).toHaveBeenCalledTimes(2);
    expect(contractMock.mock.calls[0][0]).toEqual('0x6e9a406696617ec5105f9382d33ba3360fcfabcc');
    expect(contractMock.mock.calls[0][1]).toEqual('test ERC20Token abi');
    expect(contractMock.mock.calls[0][2]).toEqual(providerMock);

    expect(balanceOf).toHaveBeenCalledTimes(2);
    expect(contractMock.mock.calls[1][0]).toEqual('0x44809695706c252435531029b1e9d7d0355d475f');
    expect(contractMock.mock.calls[1][1]).toEqual('test ERC20Token abi');
    expect(contractMock.mock.calls[1][2]).toEqual(providerMock);
  });

  it('returns the formatted token balances', async () => {
    balanceOf.mockReturnValueOnce(Promise.resolve('test REQ balance'));
    balanceOf.mockReturnValueOnce(Promise.resolve('test WETH balance'));
    utils.formatEther.mockReturnValueOnce(1000);
    utils.formatEther.mockReturnValueOnce(2000);

    let result = await accountBalancesService.queryTokenBalances(address, tokens);

    expect(utils.formatEther).toHaveBeenCalledTimes(2);
    expect(utils.formatEther.mock.calls[0][0]).toEqual('test REQ balance');
    expect(utils.formatEther.mock.calls[1][0]).toEqual('test WETH balance');

    expect(contractMock).toHaveBeenCalledTimes(2);
    expect(contractMock.mock.calls[0][0]).toEqual('0x6e9a406696617ec5105f9382d33ba3360fcfabcc');
    expect(contractMock.mock.calls[0][1]).toEqual('test ERC20Token abi');
    expect(contractMock.mock.calls[0][2]).toEqual(providerMock);

    expect(result).toEqual([{ symbol: 'REQ', balance: 1000 }, { symbol: 'WETH', balance: 2000 }]);
  });
});

describe('queryTokenAllowances', () => {
  let allowance;
  let providerMock, contractMock;
  let tokens, address;

  beforeEach(() => {
    allowance = jest.fn();
    contractMock = jest.fn(() => ({ allowance }));
    providerMock = 'test provider';
    signerService.getProvider.mockImplementation(() => providerMock);
    Contract.mockImplementation(contractMock);

    address = '0x4dc5790733b997f3db7fc49118ab013182d6ba9b';
    tokens = [
      { symbol: 'REQ', address: '0x6e9a406696617ec5105f9382d33ba3360fcfabcc' },
      { symbol: 'WETH', address: '0x44809695706c252435531029b1e9d7d0355d475f' },
    ];
  });

  it('loads the current provider', async () => {
    await accountBalancesService.queryTokenAllowances(address, tokens);
    expect(signerService.getProvider).toHaveBeenCalledTimes(1);
  });

  it('the provider returns the current ether balance', async () => {
    await accountBalancesService.queryTokenAllowances(address, tokens);

    expect(contractMock).toHaveBeenCalledTimes(2);
    expect(contractMock.mock.calls[0][0]).toEqual('0x6e9a406696617ec5105f9382d33ba3360fcfabcc');
    expect(contractMock.mock.calls[0][1]).toEqual('test ERC20Token abi');
    expect(contractMock.mock.calls[0][2]).toEqual(providerMock);

    expect(allowance).toHaveBeenCalledTimes(2);
    expect(contractMock.mock.calls[1][0]).toEqual('0x44809695706c252435531029b1e9d7d0355d475f');
    expect(contractMock.mock.calls[1][1]).toEqual('test ERC20Token abi');
    expect(contractMock.mock.calls[1][2]).toEqual(providerMock);
  });

  it('returns the formatted token balances', async () => {
    allowance.mockReturnValueOnce(Promise.resolve('test REQ balance'));
    allowance.mockReturnValueOnce(Promise.resolve('test WETH balance'));
    utils.formatEther.mockReturnValueOnce(1000);
    utils.formatEther.mockReturnValueOnce(2000);

    let result = await accountBalancesService.queryTokenAllowances(address, tokens);

    expect(utils.formatEther).toHaveBeenCalledTimes(2);
    expect(utils.formatEther.mock.calls[0][0]).toEqual('test REQ balance');
    expect(utils.formatEther.mock.calls[1][0]).toEqual('test WETH balance');

    expect(contractMock).toHaveBeenCalledTimes(2);
    expect(contractMock.mock.calls[0][0]).toEqual('0x6e9a406696617ec5105f9382d33ba3360fcfabcc');
    expect(contractMock.mock.calls[0][1]).toEqual('test ERC20Token abi');
    expect(contractMock.mock.calls[0][2]).toEqual(providerMock);

    expect(result).toEqual([{ symbol: 'REQ', allowance: 1000 }, { symbol: 'WETH', allowance: 2000 }]);
  });
});

describe('subscribeEtherBalance(address, callback', () => {
  let on, getBalance, removeListener;
  let providerMock;

  beforeEach(() => {
    on = jest.fn();
    removeListener = jest.fn();
    getBalance = jest.fn();
    providerMock = { on, removeListener, getBalance };
    signerService.getProvider.mockImplementation(() => providerMock);
    utils.formatEther.mockReturnValue(1000);
  });

  it('loads the current provider', async () => {
    const address = 'test address';
    const callback = jest.fn();

    await accountBalancesService.subscribeEtherBalance(address, callback);
    expect(signerService.getProvider).toHaveBeenCalledTimes(1);
  });

  it('subscribe to the provided address, unsubscribes it when calling the return function', async () => {
    const address = 'test address';
    const callback = jest.fn();
    const unsubscribe = await accountBalancesService.subscribeEtherBalance(address, callback);

    expect(on).toHaveBeenCalledTimes(1);
    expect(on.mock.calls[0][0]).toEqual(address);

    unsubscribe();
    expect(removeListener).toHaveBeenCalledTimes(1);
    expect(removeListener.mock.calls[0][0]).toEqual(address);
    expect(removeListener.mock.calls[0]).toEqual(on.mock.calls[0]);
  });

  it('formats the balance with utils.formatEther before triggering the callback', async () => {
    utils.formatEther.mockReturnValue('test formatEther');
    const address = 'test address';
    const callback = jest.fn();

    await accountBalancesService.subscribeEtherBalance(address, callback);

    on.mock.calls[0][1]('test balance');

    expect(callback).toBeCalledWith('test formatEther');
    expect(utils.formatEther).toBeCalledWith('test balance');
  });
});

describe('subscribeTokenBalance(address, callback)', () => {
  let on, removeListener, balanceOf;
  let providerMock, contractMock;
  let token, address;

  beforeEach(() => {
    on = jest.fn();
    removeListener = jest.fn();
    balanceOf = jest.fn();
    contractMock = jest.fn(() => ({ balanceOf }));
    providerMock = { on, removeListener };
    signerService.getProvider.mockImplementation(() => providerMock);
    Contract.mockImplementation(contractMock);
    utils.formatEther.mockReturnValue(1000);

    address = '0x4dc5790733b997f3db7fc49118ab013182d6ba9b';
    token = { symbol: 'REQ', address: '0x6e9a406696617ec5105f9382d33ba3360fcfabcc' };
  });

  it('loads the current provider', async () => {
    const callback = jest.fn();
    await accountBalancesService.subscribeTokenBalance(address, token, callback);
    expect(signerService.getProvider).toHaveBeenCalledTimes(1);
  });

  it('subscribe to the provided token balance, unsubscribes it when calling the return function', async () => {
    const callback = jest.fn();
    const unsubscribe = await accountBalancesService.subscribeTokenBalance(address, token, callback);

    expect(signerService.getProvider).toHaveBeenCalledTimes(1);

    expect(balanceOf).toHaveBeenCalledTimes(1);
    expect(balanceOf).toHaveBeenCalledWith(address);

    expect(Contract).toHaveBeenCalledTimes(1);
    expect(Contract.mock.calls[0][0]).toEqual(token.address);
    expect(contractMock.mock.calls[0][1]).toEqual(ERC20Token.abi);
    expect(contractMock.mock.calls[0][2]).toEqual(providerMock);

    unsubscribe();
    expect(removeListener).toHaveBeenCalledTimes(1);
    expect(removeListener.mock.calls[0][0]).toEqual(address);
  });
});
