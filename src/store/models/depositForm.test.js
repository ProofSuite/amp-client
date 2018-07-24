import createStore from '../../store/configureStore';
import { getDefaultSigner } from '../services/signer';
import { Contract } from 'ethers';
import { mockFailedTxReceipt, mockFailedTxReceipt2, mockTokens, mockTxReceipt, mockTxReceipt2 } from '../../mockData';

import * as accountBalancesService from '../services/accountBalances';

import getTokenModel from './tokens';
import getProviderModel from './provider';
import getAccountModel from './account';
import getAccountBalancesModel from './accountBalances';
import getDepositFormModel from './depositForm';
import * as actionCreators from './depositForm';

jest.mock('../services/accountBalances');
jest.mock('../services/signer');
jest.mock('./tokens');
jest.mock('./account');
jest.mock('./provider');
jest.mock('ethers');

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
  const { store } = createStore();
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

  model = getAccountBalancesModel(store.getState());
  expect(model.get(token.symbol)).toEqual(null);
  expect(model.isSubscribed(token.symbol)).toEqual(false);

  const unsubscribeCallback = await store.dispatch(actionCreators.subscribeBalance(token));

  model = getAccountBalancesModel(store.getState());
  expect(model.get(token.symbol)).toEqual(null);
  expect(model.isSubscribed(token.symbol)).toEqual(true);

  expect(accountBalancesService.subscribeTokenBalance).toHaveBeenCalledTimes(1);
  expect(accountBalancesService.subscribeTokenBalance.mock.calls[0][0]).toEqual(testAddress);
  expect(accountBalancesService.subscribeTokenBalance.mock.calls[0][1]).toEqual(token);

  const updateBalanceCallback = accountBalancesService.subscribeTokenBalance.mock.calls[0][2];

  updateBalanceCallback(1000);
  model = getAccountBalancesModel(store.getState());
  expect(model.get('REQ')).toEqual(1000);
  expect(model.isSubscribed('REQ')).toEqual(true);

  updateBalanceCallback(2000);
  model = getAccountBalancesModel(store.getState());
  expect(model.get('REQ')).toEqual(2000);
  expect(model.isSubscribed('REQ')).toEqual(true);

  unsubscribeCallback();
  expect(unsubscribeTokenBalance).toHaveBeenCalledTimes(1);

  model = getAccountBalancesModel(store.getState());
  expect(model.get('REQ')).toEqual(2000);
  expect(model.isSubscribed('REQ')).toEqual(false);
});

it('handles subscribeBalance (ether) properly', async () => {
  const { store } = createStore();
  const testAddress = '0x7a9f3cd060ab180f36c17fe6bdf9974f577d77aa';
  const token = { address: '0x0', symbol: 'ETH' };

  const getTokenModelMock = jest.fn(() => ({
    symbols: () => ['ETH'],
    bySymbol: () => ({ ETH: token }),
  }));

  const getAccountModelMock = jest.fn(() => ({ address: () => testAddress }));
  getTokenModel.mockImplementation(getTokenModelMock);
  getAccountModel.mockImplementation(getAccountModelMock);

  model = getAccountBalancesModel(store.getState());
  expect(model.get('ETH')).toEqual(null);
  expect(model.isSubscribed('ETH')).toEqual(false);

  const unsubscribeCallback = await store.dispatch(actionCreators.subscribeBalance(token));

  model = getAccountBalancesModel(store.getState());
  expect(model.get('ETH')).toEqual(null);
  expect(model.isSubscribed('ETH')).toEqual(true);

  expect(accountBalancesService.subscribeEtherBalance).toHaveBeenCalledTimes(1);
  const updateBalanceCallback = accountBalancesService.subscribeEtherBalance.mock.calls[0][1];

  updateBalanceCallback(1000);
  model = getAccountBalancesModel(store.getState());
  expect(model.get('ETH')).toEqual(1000);
  expect(model.isSubscribed('ETH')).toEqual(true);

  updateBalanceCallback(2000);
  model = getAccountBalancesModel(store.getState());
  expect(model.get('ETH')).toEqual(2000);
  expect(model.isSubscribed('ETH')).toEqual(true);

  unsubscribeCallback();
  expect(unsubscribeEtherBalance).toHaveBeenCalledTimes(1);

  model = getAccountBalancesModel(store.getState());
  expect(model.get('ETH')).toEqual(2000);
  expect(model.isSubscribed('ETH')).toEqual(false);
});

it('subscribeBalance (ether) updates the depositForm model correctly', async () => {
  const { store } = createStore();
  const testAddress = '0x7a9f3cd060ab180f36c17fe6bdf9974f577d77aa';
  const token = { address: '0x0', symbol: 'ETH' };

  const getTokenModelMock = jest.fn(() => ({
    symbols: () => ['ETH'],
    bySymbol: () => ({ ETH: token }),
  }));

  const getAccountModelMock = jest.fn(() => ({ address: () => testAddress }));
  getTokenModel.mockImplementation(getTokenModelMock);
  getAccountModel.mockImplementation(getAccountModelMock);

  model = getDepositFormModel(store.getState());
  expect(model.getStep()).toEqual('waiting');

  const unsubscribeCallback = await store.dispatch(actionCreators.subscribeBalance(token));

  model = getDepositFormModel(store.getState());
  expect(model.getStep()).toEqual('waiting');

  expect(accountBalancesService.subscribeEtherBalance).toHaveBeenCalledTimes(1);
  const updateBalanceCallback = accountBalancesService.subscribeEtherBalance.mock.calls[0][1];

  updateBalanceCallback(1000);
  model = getDepositFormModel(store.getState());
  expect(model.getStep()).toEqual('convert');
});

it('confirmEtherDeposit (both transactions succeed) updates the depositForm model correctly', async () => {
  const { store } = createStore();
  const shouldConvert = true;
  const shouldAllow = true;
  const convertAmount = 100;

  let waitForTransaction = jest.fn(hash => {
    return {
      'deposit weth tx hash': Promise.resolve(mockTxReceipt2),
      'approve weth tx hash': Promise.resolve(mockTxReceipt),
    }[hash];
  });

  let getProviderModelMock = jest.fn(() => ({ getNetworkId: () => 8888 }));
  let getDefaultSignerMock = jest.fn(() => Promise.resolve({ provider: { waitForTransaction } }));
  let deposit = jest.fn(() => Promise.resolve({ hash: 'deposit weth tx hash' }));
  let approve = jest.fn(() => Promise.resolve({ hash: 'approve weth tx hash' }));
  let wethContractMock = jest.fn(() => ({ deposit, approve }));

  getDefaultSigner.mockImplementation(getDefaultSignerMock);
  Contract.mockImplementation(wethContractMock);
  getProviderModel.mockImplementation(getProviderModelMock);

  model = getDepositFormModel(store.getState());
  expect(model.getStep()).toEqual('waiting');
  expect(model.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
  expect(model.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });

  await store.dispatch(actionCreators.confirmEtherDeposit(shouldConvert, shouldAllow, convertAmount));

  model = getDepositFormModel(store.getState());
  expect(model.getStep()).toEqual('confirm');
  expect(model.getAllowTxState()).toEqual({
    allowTxStatus: 'confirmed',
    allowTxHash: 'approve weth tx hash',
    allowTxReceipt: mockTxReceipt,
  });
  expect(model.getConvertTxState()).toEqual({
    convertTxStatus: 'confirmed',
    convertTxHash: 'deposit weth tx hash',
    convertTxReceipt: mockTxReceipt2,
  });
});

it('confirmEtherDeposit (both transactions fail) updates the depositForm model correctly', async () => {
  const { store } = createStore();
  const shouldConvert = true;
  const shouldAllow = true;
  const convertAmount = 100;

  let waitForTransaction = jest.fn(hash => {
    return {
      'approve weth tx hash': Promise.resolve(mockFailedTxReceipt),
      'deposit weth tx hash': Promise.resolve(mockFailedTxReceipt2),
    }[hash];
  });

  let getProviderModelMock = jest.fn(() => ({ getNetworkId: () => 8888 }));
  let getDefaultSignerMock = jest.fn(() => Promise.resolve({ provider: { waitForTransaction } }));
  let deposit = jest.fn(() => Promise.resolve({ hash: 'deposit weth tx hash' }));
  let approve = jest.fn(() => Promise.resolve({ hash: 'approve weth tx hash' }));
  let wethContractMock = jest.fn(() => ({ deposit, approve }));

  getDefaultSigner.mockImplementation(getDefaultSignerMock);
  Contract.mockImplementation(wethContractMock);
  getProviderModel.mockImplementation(getProviderModelMock);

  model = getDepositFormModel(store.getState());
  expect(model.getStep()).toEqual('waiting');
  expect(model.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
  expect(model.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });

  await store.dispatch(actionCreators.confirmEtherDeposit(shouldConvert, shouldAllow, convertAmount));

  model = getDepositFormModel(store.getState());
  expect(model.getStep()).toEqual('confirm');
  expect(model.getAllowTxState()).toEqual({
    allowTxStatus: 'reverted',
    allowTxHash: 'approve weth tx hash',
    allowTxReceipt: mockFailedTxReceipt,
  });
  expect(model.getConvertTxState()).toEqual({
    convertTxStatus: 'reverted',
    convertTxHash: 'deposit weth tx hash',
    convertTxReceipt: mockFailedTxReceipt2,
  });
});

it('confirmEtherDeposit (one transactions fails) updates the depositForm model correctly', async () => {
  const { store } = createStore();
  const shouldConvert = true;
  const shouldAllow = true;
  const convertAmount = 100;

  let waitForTransaction = jest.fn(hash => {
    return {
      'approve weth tx hash': Promise.resolve(mockFailedTxReceipt),
      'deposit weth tx hash': Promise.resolve(mockTxReceipt),
    }[hash];
  });

  let getProviderModelMock = jest.fn(() => ({ getNetworkId: () => 8888 }));
  let getDefaultSignerMock = jest.fn(() => Promise.resolve({ provider: { waitForTransaction } }));
  let deposit = jest.fn(() => Promise.resolve({ hash: 'deposit weth tx hash' }));
  let approve = jest.fn(() => Promise.resolve({ hash: 'approve weth tx hash' }));
  let wethContractMock = jest.fn(() => ({ deposit, approve }));

  getDefaultSigner.mockImplementation(getDefaultSignerMock);
  Contract.mockImplementation(wethContractMock);
  getProviderModel.mockImplementation(getProviderModelMock);

  model = getDepositFormModel(store.getState());
  expect(model.getStep()).toEqual('waiting');
  expect(model.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
  expect(model.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });

  await store.dispatch(actionCreators.confirmEtherDeposit(shouldConvert, shouldAllow, convertAmount));

  model = getDepositFormModel(store.getState());
  expect(model.getStep()).toEqual('confirm');
  expect(model.getAllowTxState()).toEqual({
    allowTxStatus: 'reverted',
    allowTxHash: 'approve weth tx hash',
    allowTxReceipt: mockFailedTxReceipt,
  });
  expect(model.getConvertTxState()).toEqual({
    convertTxStatus: 'confirmed',
    convertTxHash: 'deposit weth tx hash',
    convertTxReceipt: mockTxReceipt,
  });
});

it('confirmTokenDeposit (transaction succeeds updates the depositForm model correctly', async () => {
  const { store } = createStore();
  const shouldAllow = true;

  let waitForTransaction = jest.fn(() => Promise.resolve(mockTxReceipt));
  let getProviderModelMock = jest.fn(() => ({ getNetworkId: () => 8888 }));
  let getDefaultSignerMock = jest.fn(() => Promise.resolve({ provider: { waitForTransaction } }));
  let approve = jest.fn(() => Promise.resolve({ hash: 'approve tx hash' }));
  let tokenContract = jest.fn(() => ({ approve }));

  getDefaultSigner.mockImplementation(getDefaultSignerMock);
  Contract.mockImplementation(tokenContract);
  getProviderModel.mockImplementation(getProviderModelMock);

  model = getDepositFormModel(store.getState());
  expect(model.getStep()).toEqual('waiting');
  expect(model.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
  expect(model.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });

  await store.dispatch(actionCreators.confirmTokenDeposit(mockTokens[2], shouldAllow));

  model = getDepositFormModel(store.getState());
  expect(model.getStep()).toEqual('confirm');
  expect(model.getAllowTxState()).toEqual({
    allowTxStatus: 'confirmed',
    allowTxHash: 'approve tx hash',
    allowTxReceipt: mockTxReceipt,
  });
  expect(model.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
});

it('confirmTokenDeposit (transaction fails) updates the depositForm model correctly', async () => {
  const { store } = createStore();
  const shouldAllow = true;

  let waitForTransaction = jest.fn(() => Promise.resolve(mockFailedTxReceipt));
  let getProviderModelMock = jest.fn(() => ({ getNetworkId: () => 8888 }));
  let getDefaultSignerMock = jest.fn(() => Promise.resolve({ provider: { waitForTransaction } }));
  let approve = jest.fn(() => Promise.resolve({ hash: 'approve tx hash' }));
  let tokenContract = jest.fn(() => ({ approve }));

  getDefaultSigner.mockImplementation(getDefaultSignerMock);
  Contract.mockImplementation(tokenContract);
  getProviderModel.mockImplementation(getProviderModelMock);

  model = getDepositFormModel(store.getState());
  expect(model.getStep()).toEqual('waiting');
  expect(model.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
  expect(model.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });

  await store.dispatch(actionCreators.confirmTokenDeposit(mockTokens[2], shouldAllow));

  model = getDepositFormModel(store.getState());
  expect(model.getStep()).toEqual('confirm');
  expect(model.getAllowTxState()).toEqual({
    allowTxStatus: 'reverted',
    allowTxHash: 'approve tx hash',
    allowTxReceipt: mockFailedTxReceipt,
  });
  expect(model.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
});
