import { Contract, utils } from 'ethers';
import { ERC20 } from '../../../config/abis'
import * as signerService from '../signer';
import * as providerService from './index.js';

jest.mock('ethers');
jest.mock('../signer');

describe('queryEtherBalance', () => {
  let getBalance;
  let providerMock;
  let address;

  beforeEach(() => {
    jest.clearAllMocks()

    getBalance = jest.fn().mockReturnValue('test getBalance');
    providerMock = { getBalance };
    signerService.getProvider = jest.fn(() => providerMock);
    utils.formatEther.mockReturnValue('1.0');
    address = '0x1';

    window.provider = providerMock
  });

  it('the provider returns the current ether balance', async () => {
    await providerService.queryEtherBalance(address);

    expect(getBalance).toHaveBeenCalledTimes(1);
    expect(getBalance).toHaveBeenCalledWith('0x1');
  });

  it('returns the formatted ether balance', async () => {
    let result = await providerService.queryEtherBalance(address);

    expect(utils.formatEther).toHaveBeenCalledTimes(1);
    expect(utils.formatEther).toHaveBeenCalledWith('test getBalance');
    expect(result).toEqual({ symbol: 'ETH', balance: '1.0' });
  });
});

describe('queryBalances', () => {
  let balanceOf;
  let providerMock, contractMock;
  let tokens, address;

  beforeEach(() => {
    jest.clearAllMocks()

    balanceOf = jest.fn(() => Promise.resolve('balance'));
    contractMock = jest.fn(() => ({ balanceOf }));
    providerMock = { 
      getBalance: jest.fn().mockReturnValue('test getBalance'),
      on: jest.fn()
    };
    signerService.getProvider = jest.fn(() => providerMock);
    Contract.mockImplementation(contractMock);

    address = '0x1';
    tokens = [
      { symbol: 'REQ', address: '0x2' },
      { symbol: 'WETH', address: '0x3' },
    ];
  });

  it('the provider returns the current ether balance', async () => {
    await providerService.queryTokenBalances(address, tokens);

    expect(contractMock).toHaveBeenCalledTimes(2);
    expect(contractMock.mock.calls[0][0]).toEqual('0x2');
    expect(contractMock.mock.calls[0][1]).toEqual(ERC20);
    // expect(contractMock.mock.calls[0][2]).toEqual(providerMock);

    expect(balanceOf).toHaveBeenCalledTimes(2);
    expect(contractMock.mock.calls[1][0]).toEqual('0x3');
    expect(contractMock.mock.calls[1][1]).toEqual(ERC20);
    // expect(contractMock.mock.calls[1][2]).toEqual(providerMock);
  });

  it('returns the formatted token balances', async () => {
    balanceOf.mockReturnValueOnce(Promise.resolve('test REQ balance'));
    balanceOf.mockReturnValueOnce(Promise.resolve('test WETH balance'));
    utils.formatUnits.mockReturnValueOnce(1000);
    utils.formatUnits.mockReturnValueOnce(2000);

    let result = await providerService.queryTokenBalances(address, tokens);

    expect(utils.formatUnits).toHaveBeenCalledTimes(2);
    expect(utils.formatUnits.mock.calls[0][0]).toEqual('test REQ balance');
    expect(utils.formatUnits.mock.calls[1][0]).toEqual('test WETH balance');

    expect(contractMock).toHaveBeenCalledTimes(2);
    expect(contractMock.mock.calls[0][0]).toEqual('0x2');
    expect(contractMock.mock.calls[0][1]).toEqual(ERC20);
    // expect(contractMock.mock.calls[0][2]).toEqual(providerMock);

    expect(result).toEqual({"errors": [], "tokenBalances": [{"balance": 1000, "symbol": "REQ"}, {"balance": 2000, "symbol": "WETH"}]});
  });
});

describe('queryTokenAllowances', () => {
  let allowance;
  let providerMock
  let contractMock
  let exchangeAddress = '0x4'
  let tokens, address;

  beforeEach(() => {
    jest.clearAllMocks()

    allowance = jest.fn();
    contractMock = jest.fn(() => ({ allowance }));
    
    providerMock = { 
      getBalance: jest.fn().mockReturnValue('test getBalance'),
      on: jest.fn()
    };

    signerService.getProvider.mockImplementation(() => providerMock);
    Contract.mockImplementation(contractMock);

    address = '0x1';
    tokens = [
      { symbol: 'REQ', address: '0x2' },
      { symbol: 'WETH', address: '0x3' },
    ];
  });

  it('the provider returns the current ether balance', async () => {
    await providerService.queryTokenAllowances(address, exchangeAddress, tokens);

    expect(contractMock).toHaveBeenCalledTimes(2);
    expect(contractMock.mock.calls[0][0]).toEqual('0x2');
    expect(contractMock.mock.calls[0][1]).toEqual(ERC20);

    expect(allowance).toHaveBeenCalledTimes(2);
    expect(contractMock.mock.calls[1][0]).toEqual('0x3');
    expect(contractMock.mock.calls[1][1]).toEqual(ERC20);
  });

  it('returns the formatted token balances', async () => {
    allowance.mockReturnValueOnce(Promise.resolve('test REQ balance'));
    allowance.mockReturnValueOnce(Promise.resolve('test WETH balance'));
    utils.formatUnits.mockReturnValueOnce(1000);
    utils.formatUnits.mockReturnValueOnce(2000);

    let result = await providerService.queryTokenAllowances(address, exchangeAddress, tokens);

    expect(utils.formatUnits).toHaveBeenCalledTimes(2);
    expect(utils.formatUnits.mock.calls[0][0]).toEqual('test REQ balance');
    expect(utils.formatUnits.mock.calls[1][0]).toEqual('test WETH balance');

    expect(contractMock).toHaveBeenCalledTimes(2);
    expect(contractMock.mock.calls[0][0]).toEqual('0x2');
    expect(contractMock.mock.calls[0][1]).toEqual(ERC20);

    expect(result).toEqual([{ symbol: 'REQ', allowance: 1000 }, { symbol: 'WETH', allowance: 2000 }]);
  });
});

describe('subscribeEtherBalance(address, callback', () => {
  let on, getBalance, removeListener;
  let providerMock;

  beforeEach(() => {
    jest.clearAllMocks() 

    removeListener = jest.fn();
    getBalance = jest.fn();
    on = jest.fn()

    providerMock = { 
      getBalance: jest.fn().mockReturnValue('test getBalance'),
      on,
      removeListener,
    };

    window.provider = providerMock

    utils.formatEther.mockReturnValue(1000);
  });

  it('subscribe to the provided address, unsubscribes it when calling the return function', async () => {
    const address = 'test address';
    const callback = jest.fn();
    const unsubscribe = await providerService.subscribeEtherBalance(address, callback);

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

    await providerService.subscribeEtherBalance(address, callback);

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
    address = '0x1';
    token = { symbol: 'REQ', address: '0x2' };

    on = jest.fn();
    removeListener = jest.fn();
    balanceOf = jest.fn();
    contractMock = jest.fn(() => ({ balanceOf, on }));
    providerMock = { removeListener };
    Contract.mockImplementation(contractMock);
    utils.formatUnits.mockReturnValue(1000);

    window.provider = providerMock
  });

  it('subscribe to the provided token balance, unsubscribes it when calling the return function', async () => {
    const callback = jest.fn();
    const unsubscribe = await providerService.subscribeTokenBalance(address, token, callback);

    expect(balanceOf).toHaveBeenCalledTimes(1);
    expect(balanceOf).toHaveBeenCalledWith(address);

    expect(Contract).toHaveBeenCalledTimes(1);
    expect(Contract.mock.calls[0][0]).toEqual(token.address);
    expect(contractMock.mock.calls[0][1]).toEqual(ERC20);

    unsubscribe();
    expect(removeListener).toHaveBeenCalledTimes(1);
    expect(removeListener.mock.calls[0][0]).toEqual(address);
  });
});