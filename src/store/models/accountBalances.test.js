import { createStore } from '../../store';

import * as accountBalancesService from '../services/accountBalances';
import getTokenModel from './tokens';
import getAccountModel from './account';

import accountBalancesModel, * as actionCreators from './accountBalances';

jest.mock('../services/accountBalances');
jest.mock('./tokens');
jest.mock('./account');

let unsubscribeEtherBalance = jest.fn();
let unsubscribeTokenBalance = jest.fn();
let model;

beforeEach(() => {
  jest.resetAllMocks();
  accountBalancesService.subscribeEtherBalance.mockReturnValue(unsubscribeEtherBalance);
  accountBalancesService.subscribeTokenBalance.mockReturnValue(unsubscribeTokenBalance);
});

it('handles subscribeBalance (token) properly', async () => {
  const testAddress = '0x7a9f3cd060ab180f36c17fe6bdf9974f577d77aa';
  const store = createStore();
  const token = {
    address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144',
    symbol: 'REQ',
  };

  const getTokenModelMock = jest.fn(() => ({
    symbols: () => ['REQ'],
    bySymbol: () => ({ REQ: token }),
  }));

  const getAccountModelMock = jest.fn(() => ({ address: () => testAddress }));

  getTokenModel.mockImplementation(getTokenModelMock);
  getAccountModel.mockImplementation(getAccountModelMock);

  model = accountBalancesModel(store.getState());
  expect(model.get(token.symbol)).toEqual(null);
  expect(model.isSubscribed(token.symbol)).toEqual(false);

  const unsubscribeCallback = await store.dispatch(actionCreators.subscribeBalance(token));

  model = accountBalancesModel(store.getState());
  expect(model.get(token.symbol)).toEqual(null);
  expect(model.isSubscribed(token.symbol)).toEqual(true);

  expect(accountBalancesService.subscribeTokenBalance).toHaveBeenCalledTimes(1);
  expect(accountBalancesService.subscribeTokenBalance.mock.calls[0][0]).toEqual(testAddress);
  expect(accountBalancesService.subscribeTokenBalance.mock.calls[0][1]).toEqual(token);

  const updateBalanceCallback = accountBalancesService.subscribeTokenBalance.mock.calls[0][2];

  updateBalanceCallback(1000);
  model = accountBalancesModel(store.getState());
  expect(model.get('REQ')).toEqual(1000);
  expect(model.isSubscribed('REQ')).toEqual(true);

  updateBalanceCallback(2000);
  model = accountBalancesModel(store.getState());
  expect(model.get('REQ')).toEqual(2000);
  expect(model.isSubscribed('REQ')).toEqual(true);

  unsubscribeCallback();
  expect(unsubscribeTokenBalance).toHaveBeenCalledTimes(1);

  model = accountBalancesModel(store.getState());
  expect(model.get('REQ')).toEqual(null);
  expect(model.isSubscribed('REQ')).toEqual(false);
});

it('handles subscribeBalance (ether) properly', async () => {
  const store = createStore();
  const testAddress = '0x7a9f3cd060ab180f36c17fe6bdf9974f577d77aa';
  const token = { address: '0x0', symbol: 'ETH' };

  const getTokenModelMock = jest.fn(() => ({
    symbols: () => ['ETH'],
    bySymbol: () => ({ ETH: token }),
  }));

  const getAccountModelMock = jest.fn(() => ({ address: () => testAddress }));
  getTokenModel.mockImplementation(getTokenModelMock);
  getAccountModel.mockImplementation(getAccountModelMock);

  model = accountBalancesModel(store.getState());
  expect(model.get('ETH')).toEqual(null);
  expect(model.isSubscribed('ETH')).toEqual(false);

  const unsubscribeCallback = await store.dispatch(actionCreators.subscribeBalance(token));

  model = accountBalancesModel(store.getState());
  expect(model.get('ETH')).toEqual(null);
  expect(model.isSubscribed('ETH')).toEqual(true);

  expect(accountBalancesService.subscribeEtherBalance).toHaveBeenCalledTimes(1);
  const updateBalanceCallback = accountBalancesService.subscribeEtherBalance.mock.calls[0][1];

  updateBalanceCallback(1000);
  model = accountBalancesModel(store.getState());
  expect(model.get('ETH')).toEqual(1000);
  expect(model.isSubscribed('ETH')).toEqual(true);

  updateBalanceCallback(2000);
  model = accountBalancesModel(store.getState());
  expect(model.get('ETH')).toEqual(2000);
  expect(model.isSubscribed('ETH')).toEqual(true);

  unsubscribeCallback();
  expect(unsubscribeEtherBalance).toHaveBeenCalledTimes(1);

  model = accountBalancesModel(store.getState());
  expect(model.get('ETH')).toEqual(null);
  expect(model.isSubscribed('ETH')).toEqual(false);
});
