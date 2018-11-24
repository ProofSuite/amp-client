import createStore from '../../store/configureStore';
import * as accountBalancesService from '../services/accountBalances';
import * as signerService from '../services/signer';
import * as walletService from '../services/wallet';
import { utils, Contract } from 'ethers';
import { quoteTokens } from '../../config/quotes';

import { getAccountBalancesDomain, getAccountDomain, getTokenDomain, getNotificationsDomain } from '../domains';
import * as actionCreators from './walletPage';

// file.only
jest.mock('../services/accountBalances');
jest.mock('../services/signer');
jest.mock('../services/wallet');
jest.mock('../services/index.js')
jest.mock('../services/api/index.js');
jest.mock('../services/socket');
jest.mock('./signerSettings');
jest.mock('../domains');
jest.mock('ethers');

utils.bigNumberify.mockImplementationOnce(require.requireActual('ethers').utils.bigNumberify);

let model, tokenModel, accountBalancesDomain;
const { store } = createStore();

const testAddress = '0x7a9f3cd060ab180f36c17fe6bdf9974f577d77aa';

const ether = {
  address: '0x0',
  symbol: 'ETH',
  balance: 1000,
};

const req = {
  address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144',
  symbol: 'REQ',
  balance: 2000,
};

const zrx = {
  address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab145',
  symbol: 'ZRX',
  balance: 121,
};

beforeEach(() => {
  jest.resetAllMocks();

  accountBalancesService.queryEtherBalance.mockReturnValue({ symbol: 'ETH', balance: 1000 });

  accountBalancesService.queryTokenBalances.mockReturnValue([
    { symbol: 'REQ', balance: 2000 },
    { symbol: 'ZRX', balance: 2000 },
  ]);

  accountBalancesService.queryExchangeTokenAllowances.mockReturnValue([
    { symbol: 'REQ', allowance: 0 },
    { symbol: 'ZRX', allowance: 0 },
    { symbol: 'ETH', allowance: 0 },
  ]);

  accountBalancesService.updateAllowance.mockReturnValue(Promise.resolve({ allowance: 1000 }));
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
  tokenModel = getTokenDomain(store.getState());

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
  const getNotificationsDomainMock = jest.fn(() => ({
    last: () => {
      id: 1;
    },
  }));
  const chainId = jest.fn().mockReturnValue(8888);
  const getBlock = jest.fn().mockReturnValue(938);
  const providerMock = { chainId, getBlock };
  const quotes = quoteTokens;
  signerService.getProvider = jest.fn(() => providerMock);

  getTokenDomain.mockImplementation(getTokenDomainMock);
  getAccountDomain.mockImplementation(getAccountDomainMock);
  getNotificationsDomain.mockImplementation(getNotificationsDomainMock);

  accountBalancesDomain = getAccountBalancesDomain(store.getState());
  tokenModel = getTokenDomain(store.getState());

  expect(accountBalancesDomain.get(req.symbol)).toEqual(null);
  expect(accountBalancesDomain.isAllowed(req.symbol)).toEqual(false);
  expect(accountBalancesDomain.isSubscribed(req.symbol)).toEqual(false);

  await store.dispatch(actionCreators.queryAccountData());

  expect(accountBalancesService.queryEtherBalance).toHaveBeenCalledTimes(1);
  expect(accountBalancesService.queryEtherBalance).toHaveBeenCalledWith(testAddress);
  expect(walletService.getCurrentBlock).toHaveBeenCalledTimes(1);
  expect(accountBalancesService.queryTokenBalances).toHaveBeenCalledTimes(1);
  expect(accountBalancesService.queryTokenBalances).toHaveBeenCalledWith(testAddress, [...quotes, ...[zrx, req]]);
  expect(accountBalancesService.queryExchangeTokenAllowances).toHaveBeenCalledTimes(1);
  expect(accountBalancesService.queryExchangeTokenAllowances).toHaveBeenCalledWith(testAddress, [
    ...quotes,
    ...[zrx, req],
  ]);

  accountBalancesDomain = getAccountBalancesDomain(store.getState());
  expect(accountBalancesDomain.isSubscribed('ETH')).toEqual(false);
  expect(accountBalancesDomain.isAllowed('ETH')).toEqual(false);
  expect(accountBalancesDomain.get('ETH')).toEqual(1000);
  expect(accountBalancesDomain.get('REQ')).toEqual(2000);
  expect(accountBalancesDomain.isSubscribed('REQ')).toEqual(false);
  expect(accountBalancesDomain.isAllowed('REQ')).toEqual(false);
});
