import createStore from '../../store/configureStore';
import * as accountBalancesService from '../services/accountBalances';

import getTokenModel from './tokens';
import getAccountModel from './account';
import getAccountBalancesModel from './accountBalances';
import * as actionCreators from './WalletPage';

jest.mock('../services/accountBalances');
jest.mock('../services/signer');
jest.mock('./tokens');
jest.mock('./account');
jest.mock('./provider');
jest.mock('ethers');

let model, tokenModel;

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

  const getTokenModelMock = jest.fn(() => ({
    symbols: () => ['REQ', 'ETH', 'ZRX'],
    bySymbol: () => ({ REQ: req, ETH: ether, ZRX: zrx }),
    tokens: () => [zrx, ether, req],
  }));

  const getAccountModelMock = jest.fn(() => ({ address: () => testAddress }));
  getTokenModel.mockImplementation(getTokenModelMock);
  getAccountModel.mockImplementation(getAccountModelMock);

  model = getAccountBalancesModel(store.getState());
  tokenModel = getTokenModel(store.getState());

  expect(model.get(req.symbol)).toEqual(null);
  expect(model.isAllowed(req.symbol)).toEqual(false);
  expect(model.isSubscribed(req.symbol)).toEqual(false);

  await store.dispatch(actionCreators.queryAccountData());

  model = getAccountBalancesModel(store.getState());
  expect(accountBalancesService.queryEtherBalance).toHaveBeenCalledTimes(1);
  expect(accountBalancesService.queryEtherBalance).toHaveBeenCalledWith(testAddress);

  expect(accountBalancesService.queryTokenBalances).toHaveBeenCalledTimes(1);
  expect(accountBalancesService.queryTokenBalances).toHaveBeenCalledWith(testAddress, [zrx, req]);
  expect(accountBalancesService.queryTokenAllowances).toHaveBeenCalledTimes(1);
  expect(accountBalancesService.queryTokenAllowances).toHaveBeenCalledWith(testAddress, [zrx, req]);

  model = getAccountBalancesModel(store.getState());
  expect(model.isSubscribed('ETH')).toEqual(false);
  expect(model.isAllowed('ETH')).toEqual(false);
  expect(model.get('ETH')).toEqual(1000);

  expect(model.get('REQ')).toEqual(2000);
  expect(model.isSubscribed('REQ')).toEqual(false);
  expect(model.isAllowed('REQ')).toEqual(true);
});
