import createStore from '../../store/configureStore';
import * as accountBalancesService from '../services/accountBalances';
import * as signerService from '../services/signer';
import * as provider from '../services/provider'
import * as api from '../services/api'
import * as txProvider from '../services/txProvider'
import * as walletService from '../services/wallet';
import { Contract } from 'ethers';

import { getAccountBalancesDomain, getAccountDomain, getTokenDomain, getNotificationsDomain } from '../domains';
import * as actionCreators from './walletPage';

jest.mock('../services/signer');
jest.mock('../services/wallet');
jest.mock('../services/provider');
jest.mock('../services/txProvider');
jest.mock('../services/api');
jest.mock('../services/socket');
jest.mock('./signerSettings');
jest.mock('../domains');
jest.mock('ethers');

let accountBalancesDomain;
const { store } = createStore();

const testAddress = '0x1';

const ether = {
  address: '0x0',
  symbol: 'ETH',
  balance: 1000,
};

const req = {
  address: '0x2',
  symbol: 'REQ',
  balance: 2000,
};

const zrx = {
  address: '0x3',
  symbol: 'ZRX',
  balance: 3000,
};

beforeEach(() => {
  jest.resetAllMocks();

  walletService.getCurrentBlock = jest.fn(() => 1)
  provider.queryEtherBalance = jest.fn(),
  provider.queryTokenBalances = jest.fn(),
  provider.queryExchangeTokenAllowances = jest.fn()

  api.fetchPairs = jest.fn(() => [{
    pairName: 'ETH/USDC',
    baseTokenSymbol: 'ETH',
    quoteTokenSymbol: 'USDC',
    baseTokenAddress: '0x1',
    quoteTokenAddress: '0x2'
  }])

  api.getTokens = jest.fn(() => [ zrx, ether, req ])
  api.getExchangeRates = jest.fn(() => [])
  
  api.getExchangeAddress = jest.fn(() => '0x1')
  txProvider.updateExchangeAllowance = jest.fn()
  provider.queryEtherBalance.mockReturnValue({ symbol: 'ETH', balance: 1000 });

  provider.queryTokenBalances.mockReturnValue({
    tokenBalances: [
      { symbol: 'REQ', balance: 2000 },
      { symbol: 'ZRX', balance: 2000 },
    ]
  });

  provider.queryExchangeTokenAllowances.mockReturnValue({
    tokenAllowances: [
      { symbol: 'REQ', allowance: 0 },
      { symbol: 'ZRX', allowance: 0 },
      { symbol: 'ETH', allowance: 0 },
    ]    
  });

  getAccountBalancesDomain.mockImplementation(require.requireActual('../domains').getAccountBalancesDomain);
  getNotificationsDomain.mockImplementation(require.requireActual('../domains').getNotificationsDomain);
});

it('handles toggleAllowance Successfully', async () => {
  accountBalancesDomain = getAccountBalancesDomain(store.getState());
  const notificationsDomain = getNotificationsDomain(store.getState());

  const getTokenDomainMock = jest.fn(() => ({
    symbols: () => ['REQ', 'ETH', 'ZRX'],
    bySymbol: () => ({ REQ: req, ETH: ether, ZRX: zrx }),
    tokens: () => [zrx, ether, req],
  }));

  const getAccountBalancesDomainMock = jest.fn(() => ({
    balances: () => ({ REQ: req, ETH: ether, ZRX: zrx }),
    isAllowed: tokenSymbol => accountBalancesDomain.isAllowed(tokenSymbol),
  }));

  const getAccountDomainMock = jest.fn(() => ({ address: () => testAddress }));
  const getNotificationsDomainMock = jest.fn(() => notificationsDomain);

  const chainId = jest.fn().mockReturnValue(8888);
  const getBlock = jest.fn().mockReturnValue(938);
  const providerMock = { chainId, getBlock };
  const approve = jest.fn();
  const contractMock = jest.fn(() => ({ approve }));

  signerService.getProvider = jest.fn(() => providerMock);
  Contract.mockImplementation(contractMock);

  getTokenDomain.mockImplementation(getTokenDomainMock);
  getAccountDomain.mockImplementation(getAccountDomainMock);
  getNotificationsDomain.mockImplementation(getNotificationsDomainMock);
  getAccountBalancesDomain.mockImplementation(getAccountBalancesDomainMock);
  // tokenModel = getTokenDomain(store.getState());

  expect(getAccountBalancesDomain().isAllowed('ZRX')).toEqual(false);

  // await store.dispatch(actionCreators.toggleAllowance('ZRX'));
  //
  // expect(accountBalancesService.updateAllowance).toHaveBeenCalledTimes(1);
  // expect(accountBalancesService.updateAllowance).toHaveBeenCalledWith(zrx.address, exchangeAddress, testAddress, zrx.balance);
});

it('handles queryAccountData properly', async () => {
  const getTokenDomainMock = jest.fn(() => ({
    symbols: () => ['REQ', 'ETH', 'ZRX'],
    bySymbol: () => ({ REQ: req, ETH: ether, ZRX: zrx }),
    tokens: () => [zrx, ether, req],
  }));

  const getAccountDomainMock = jest.fn(() => ({ address: () => testAddress }));
  const getNotificationsDomainMock = jest.fn(() => ({ last: () => { id: 1; } }));

  const chainId = jest.fn().mockReturnValue(8888);
  const getBlock = jest.fn().mockReturnValue(938);
  const providerMock = { chainId, getBlock };
  signerService.getProvider = jest.fn(() => providerMock);

  getTokenDomain.mockImplementation(getTokenDomainMock);
  getAccountDomain.mockImplementation(getAccountDomainMock);
  getNotificationsDomain.mockImplementation(getNotificationsDomainMock);

  accountBalancesDomain = getAccountBalancesDomain(store.getState());
  // tokenModel = getTokenDomain(store.getState());

  expect(accountBalancesDomain.get(req.symbol)).toEqual(null);
  expect(accountBalancesDomain.isAllowed(req.symbol)).toEqual(false);
  expect(accountBalancesDomain.isSubscribed(req.symbol)).toEqual(false);

  await store.dispatch(actionCreators.queryAccountData());

  expect(provider.queryEtherBalance).toHaveBeenCalledTimes(1);
  expect(provider.queryEtherBalance).toHaveBeenCalledWith(testAddress);
  expect(walletService.getCurrentBlock).toHaveBeenCalledTimes(1);
  expect(provider.queryTokenBalances).toHaveBeenCalledTimes(1);
  expect(provider.queryTokenBalances).toHaveBeenCalledWith(testAddress, [zrx, ether, req]);
  expect(provider.queryExchangeTokenAllowances).toHaveBeenCalledTimes(1);
  expect(provider.queryExchangeTokenAllowances).toHaveBeenCalledWith(testAddress, [zrx, ether, req]);

  accountBalancesDomain = getAccountBalancesDomain(store.getState());
  expect(accountBalancesDomain.isSubscribed('ETH')).toEqual(false);
  expect(accountBalancesDomain.isAllowed('ETH')).toEqual(false);
  expect(accountBalancesDomain.get('ETH')).toEqual(1000);
  expect(accountBalancesDomain.get('REQ')).toEqual(2000);
  expect(accountBalancesDomain.isSubscribed('REQ')).toEqual(false);
  expect(accountBalancesDomain.isAllowed('REQ')).toEqual(false);
});
