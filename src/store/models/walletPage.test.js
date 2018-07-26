import createStore from '../../store/configureStore';
import * as accountBalancesService from '../services/accountBalances';

import { getAccountBalancesDomain, getAccountDomain, getTokenDomain } from '../domains';
import walletPageSelector, * as actionCreators from './walletPage';

jest.mock('../services/accountBalances');
jest.mock('../services/signer');
jest.mock('./signerSettings');
jest.mock('../domains');
jest.mock('ethers');

let model, tokenModel, accountBalancesDomain;

beforeEach(() => {
  jest.resetAllMocks();
  accountBalancesService.queryEtherBalance.mockReturnValue({ symbol: 'ETH', balance: 1000 });
  accountBalancesService.queryTokenBalances.mockReturnValue([
    { symbol: 'REQ', balance: 2000 },
    { symbol: 'ZRX', balance: 2000 },
  ]);
  accountBalancesService.queryTokenAllowances.mockReturnValue([
    { symbol: 'REQ', allowance: -1 },
    { symbol: 'ZRX', allowance: -1 },
  ]);
});

it('handles queryAccountData properly', async () => {
  getAccountBalancesDomain.mockImplementation(require.requireActual('../domains').getAccountBalancesDomain);

  const testAddress = '0x7a9f3cd060ab180f36c17fe6bdf9974f577d77aa';
  const { store } = createStore();
  const ether = {
    address: '0x0',
    symbol: 'ETH',
  };
  const req = {
    address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144',
    symbol: 'REQ',
  };

  const zrx = {
    address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab145',
    symbol: 'ZRX',
  };

  const getTokenDomainMock = jest.fn(() => ({
    symbols: () => ['REQ', 'ETH', 'ZRX'],
    bySymbol: () => ({ REQ: req, ETH: ether, ZRX: zrx }),
    tokens: () => [zrx, ether, req],
  }));

  const getAccountDomainMock = jest.fn(() => ({ address: () => testAddress }));
  getTokenDomain.mockImplementation(getTokenDomainMock);
  getAccountDomain.mockImplementation(getAccountDomainMock);

  accountBalancesDomain = getAccountBalancesDomain(store.getState());
  tokenModel = getTokenDomain(store.getState());

  expect(accountBalancesDomain.get(req.symbol)).toEqual(null);
  expect(accountBalancesDomain.isAllowed(req.symbol)).toEqual(false);
  expect(accountBalancesDomain.isSubscribed(req.symbol)).toEqual(false);

  await store.dispatch(actionCreators.queryAccountData());

  accountBalancesDomain = getAccountBalancesDomain(store.getState());
  expect(accountBalancesService.queryEtherBalance).toHaveBeenCalledTimes(1);
  expect(accountBalancesService.queryEtherBalance).toHaveBeenCalledWith(testAddress);

  expect(accountBalancesService.queryTokenBalances).toHaveBeenCalledTimes(1);
  expect(accountBalancesService.queryTokenBalances).toHaveBeenCalledWith(testAddress, [zrx, req]);
  expect(accountBalancesService.queryTokenAllowances).toHaveBeenCalledTimes(1);
  expect(accountBalancesService.queryTokenAllowances).toHaveBeenCalledWith(testAddress, [zrx, req]);

  accountBalancesDomain = getAccountBalancesDomain(store.getState());
  expect(accountBalancesDomain.isSubscribed('ETH')).toEqual(false);
  expect(accountBalancesDomain.isAllowed('ETH')).toEqual(false);
  expect(accountBalancesDomain.get('ETH')).toEqual(1000);

  expect(accountBalancesDomain.get('REQ')).toEqual(2000);
  expect(accountBalancesDomain.isSubscribed('REQ')).toEqual(false);
  expect(accountBalancesDomain.isAllowed('REQ')).toEqual(true);
});
