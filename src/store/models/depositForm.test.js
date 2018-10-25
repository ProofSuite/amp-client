import createStore from '../../store/configureStore';
import { getSigner } from '../services/signer';
import { Contract } from 'ethers';
import { mockFailedTxReceipt, mockFailedTxReceipt2, mockTokens, mockTxReceipt, mockTxReceipt2 } from '../../mockData';

import * as accountBalancesService from '../services/accountBalances';

import {
  getAccountBalancesDomain,
  getAccountDomain,
  getDepositFormDomain,
  getSignerDomain,
  getTokenDomain,
} from '../domains';
import getSignerSettingsModel from './signerSettings';
import DepositFormSelector from './depositForm';
import * as actionCreators from './depositForm';

jest.mock('../services/accountBalances');
jest.mock('../services/signer');
jest.mock('../domains');
jest.mock('./signerSettings');
jest.mock('ethers');

let unsubscribeEtherBalance = jest.fn();
let unsubscribeTokenBalance = jest.fn();
let domain, depositFormDomain, model;

beforeEach(() => {
  jest.resetAllMocks();
  accountBalancesService.subscribeEtherBalance.mockReturnValue(unsubscribeEtherBalance);
  accountBalancesService.subscribeTokenBalance.mockReturnValue(unsubscribeTokenBalance);
});

it('handles subscribeBalance (token) properly', async () => {
  getAccountBalancesDomain.mockImplementation(require.requireActual('../domains').getAccountBalancesDomain);

  const testAddress = '0x7a9f3cd060ab180f36c17fe6bdf9974f577d77aa';
  const { store } = createStore();
  const token = {
    address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144',
    symbol: 'REQ',
  };

  const getTokenDomainMock = jest.fn(() => ({
    symbols: () => ['REQ'],
    bySymbol: () => ({ REQ: token }),
  }));

  const getAccountDomainMock = jest.fn(() => ({ address: () => testAddress }));
  getTokenDomain.mockImplementation(getTokenDomainMock);
  getAccountDomain.mockImplementation(getAccountDomainMock);

  domain = getAccountBalancesDomain(store.getState());
  expect(domain.get(token.symbol)).toEqual(null);
  expect(domain.isSubscribed(token.symbol)).toEqual(false);

  const unsubscribeCallback = await store.dispatch(actionCreators.subscribeBalance(token));

  domain = getAccountBalancesDomain(store.getState());
  expect(domain.get(token.symbol)).toEqual(null);
  expect(domain.isSubscribed(token.symbol)).toEqual(true);

  expect(accountBalancesService.subscribeTokenBalance).toHaveBeenCalledTimes(1);
  expect(accountBalancesService.subscribeTokenBalance.mock.calls[0][0]).toEqual(testAddress);
  expect(accountBalancesService.subscribeTokenBalance.mock.calls[0][1]).toEqual(token);

  const updateBalanceCallback = accountBalancesService.subscribeTokenBalance.mock.calls[0][2];

  updateBalanceCallback(1000);
  domain = getAccountBalancesDomain(store.getState());
  expect(domain.get('REQ')).toEqual(1000);
  expect(domain.isSubscribed('REQ')).toEqual(true);

  updateBalanceCallback(2000);
  domain = getAccountBalancesDomain(store.getState());
  expect(domain.get('REQ')).toEqual(2000);
  expect(domain.isSubscribed('REQ')).toEqual(true);

  unsubscribeCallback();
  expect(unsubscribeTokenBalance).toHaveBeenCalledTimes(1);

  domain = getAccountBalancesDomain(store.getState());
  expect(domain.get('REQ')).toEqual(2000);
  expect(domain.isSubscribed('REQ')).toEqual(false);
});

it('handles subscribeBalance (ether) properly', async () => {
  getAccountBalancesDomain.mockImplementation(require.requireActual('../domains').getAccountBalancesDomain);
  const { store } = createStore();
  const testAddress = '0x7a9f3cd060ab180f36c17fe6bdf9974f577d77aa';
  const token = { address: '0x0', symbol: 'ETH' };

  const getTokenDomainMock = jest.fn(() => ({
    symbols: () => ['ETH'],
    bySymbol: () => ({ ETH: token }),
  }));

  const getAccountDomainMock = jest.fn(() => ({ address: () => testAddress }));
  getTokenDomain.mockImplementation(getTokenDomainMock);
  getAccountDomain.mockImplementation(getAccountDomainMock);

  domain = getAccountBalancesDomain(store.getState());
  expect(domain.get('ETH')).toEqual(null);
  expect(domain.isSubscribed('ETH')).toEqual(false);

  const unsubscribeCallback = await store.dispatch(actionCreators.subscribeBalance(token));

  domain = getAccountBalancesDomain(store.getState());
  expect(domain.get('ETH')).toEqual(null);
  expect(domain.isSubscribed('ETH')).toEqual(true);

  expect(accountBalancesService.subscribeEtherBalance).toHaveBeenCalledTimes(1);
  const updateBalanceCallback = accountBalancesService.subscribeEtherBalance.mock.calls[0][1];

  updateBalanceCallback(1000);
  domain = getAccountBalancesDomain(store.getState());
  expect(domain.get('ETH')).toEqual(1000);
  expect(domain.isSubscribed('ETH')).toEqual(true);

  updateBalanceCallback(2000);
  domain = getAccountBalancesDomain(store.getState());
  expect(domain.get('ETH')).toEqual(2000);
  expect(domain.isSubscribed('ETH')).toEqual(true);

  unsubscribeCallback();
  expect(unsubscribeEtherBalance).toHaveBeenCalledTimes(1);

  domain = getAccountBalancesDomain(store.getState());
  expect(domain.get('ETH')).toEqual(2000);
  expect(domain.isSubscribed('ETH')).toEqual(false);
});

it('subscribeBalance (ether) updates the depositForm model correctly', async () => {
  getDepositFormDomain.mockImplementation(require.requireActual('../domains').getDepositFormDomain);
  getAccountBalancesDomain.mockImplementation(require.requireActual('../domains').getAccountBalancesDomain);

  const { store } = createStore();
  const testAddress = '0x7a9f3cd060ab180f36c17fe6bdf9974f577d77aa';
  const token = { address: '0x0', symbol: 'ETH' };

  const getTokenDomainMock = jest.fn(() => ({
    symbols: () => ['ETH'],
    bySymbol: () => ({ ETH: token }),
  }));

  const getAccountDomainMock = jest.fn(() => ({ address: () => testAddress }));
  getTokenDomain.mockImplementation(getTokenDomainMock);
  getAccountDomain.mockImplementation(getAccountDomainMock);

  model = DepositFormSelector(store.getState());
  expect(model.getStep()).toEqual('waiting');

  const unsubscribeCallback = await store.dispatch(actionCreators.subscribeBalance(token));

  model = DepositFormSelector(store.getState());
  expect(model.getStep()).toEqual('waiting');

  expect(accountBalancesService.subscribeEtherBalance).toHaveBeenCalledTimes(1);
  const updateBalanceCallback = accountBalancesService.subscribeEtherBalance.mock.calls[0][1];

  updateBalanceCallback(1000);
  model = DepositFormSelector(store.getState());
  expect(model.getStep()).toEqual('convert');
});

it('confirmEtherDeposit (both transactions succeed) updates the depositForm model correctly', async () => {
  getDepositFormDomain.mockImplementation(require.requireActual('../domains').getDepositFormDomain);
  getAccountBalancesDomain.mockImplementation(require.requireActual('../domains').getAccountBalancesDomain);
  getSignerDomain.mockImplementation(require.requireActual('../domains').getSignerDomain);
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

  let getSignerSettingsModelMock = jest.fn(() => ({ getNetworkID: () => 8888 }));
  let getSignerMock = jest.fn(() => ({ provider: { waitForTransaction } }));
  let deposit = jest.fn(() => Promise.resolve({ hash: 'deposit weth tx hash' }));
  let approve = jest.fn(() => Promise.resolve({ hash: 'approve weth tx hash' }));
  let wethContractMock = jest.fn(() => ({ deposit, approve }));

  getSigner.mockImplementation(getSignerMock);
  Contract.mockImplementation(wethContractMock);
  getSignerSettingsModel.mockImplementation(getSignerSettingsModelMock);

  depositFormDomain = getDepositFormDomain(store.getState());
  expect(depositFormDomain.getStep()).toEqual('waiting');
  expect(depositFormDomain.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
  expect(depositFormDomain.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });

  await store.dispatch(actionCreators.confirmEtherDeposit(shouldConvert, shouldAllow, convertAmount));

  depositFormDomain = getDepositFormDomain(store.getState());
  expect(depositFormDomain.getStep()).toEqual('confirm');
  expect(depositFormDomain.getAllowTxState()).toEqual({
    allowTxStatus: 'confirmed',
    allowTxHash: 'approve weth tx hash',
    allowTxReceipt: mockTxReceipt,
  });
  expect(depositFormDomain.getConvertTxState()).toEqual({
    convertTxStatus: 'confirmed',
    convertTxHash: 'deposit weth tx hash',
    convertTxReceipt: mockTxReceipt2,
  });
});

it('confirmEtherDeposit (both transactions fail) updates the depositForm model correctly', async () => {
  getDepositFormDomain.mockImplementation(require.requireActual('../domains').getDepositFormDomain);
  getAccountBalancesDomain.mockImplementation(require.requireActual('../domains').getAccountBalancesDomain);
  getSignerDomain.mockImplementation(require.requireActual('../domains').getSignerDomain);

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

  let getSignerSettingsModelMock = jest.fn(() => ({ getNetworkID: () => 8888 }));
  let getSignerMock = jest.fn(() => ({ provider: { waitForTransaction } }));
  let deposit = jest.fn(() => Promise.resolve({ hash: 'deposit weth tx hash' }));
  let approve = jest.fn(() => Promise.resolve({ hash: 'approve weth tx hash' }));
  let wethContractMock = jest.fn(() => ({ deposit, approve }));

  getSigner.mockImplementation(getSignerMock);
  Contract.mockImplementation(wethContractMock);
  getSignerSettingsModel.mockImplementation(getSignerSettingsModelMock);

  depositFormDomain = getDepositFormDomain(store.getState());
  expect(depositFormDomain.getStep()).toEqual('waiting');
  expect(depositFormDomain.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
  expect(depositFormDomain.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });

  await store.dispatch(actionCreators.confirmEtherDeposit(shouldConvert, shouldAllow, convertAmount));

  depositFormDomain = getDepositFormDomain(store.getState());
  expect(depositFormDomain.getStep()).toEqual('confirm');
  expect(depositFormDomain.getAllowTxState()).toEqual({
    allowTxStatus: 'reverted',
    allowTxHash: 'approve weth tx hash',
    allowTxReceipt: mockFailedTxReceipt,
  });
  expect(depositFormDomain.getConvertTxState()).toEqual({
    convertTxStatus: 'reverted',
    convertTxHash: 'deposit weth tx hash',
    convertTxReceipt: mockFailedTxReceipt2,
  });
});

it('confirmEtherDeposit (one transactions fails) updates the depositForm model correctly', async () => {
  getDepositFormDomain.mockImplementation(require.requireActual('../domains').getDepositFormDomain);
  getAccountBalancesDomain.mockImplementation(require.requireActual('../domains').getAccountBalancesDomain);
  getSignerDomain.mockImplementation(require.requireActual('../domains').getSignerDomain);

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

  let getSignerSettingsModelMock = jest.fn(() => ({ getNetworkID: () => 8888 }));
  let getSignerMock = jest.fn(() => ({ provider: { waitForTransaction } }));
  let deposit = jest.fn(() => Promise.resolve({ hash: 'deposit weth tx hash' }));
  let approve = jest.fn(() => Promise.resolve({ hash: 'approve weth tx hash' }));
  let wethContractMock = jest.fn(() => ({ deposit, approve }));

  getSigner.mockImplementation(getSignerMock);
  Contract.mockImplementation(wethContractMock);
  getSignerSettingsModel.mockImplementation(getSignerSettingsModelMock);

  depositFormDomain = getDepositFormDomain(store.getState());
  expect(depositFormDomain.getStep()).toEqual('waiting');
  expect(depositFormDomain.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
  expect(depositFormDomain.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });

  await store.dispatch(actionCreators.confirmEtherDeposit(shouldConvert, shouldAllow, convertAmount));

  depositFormDomain = getDepositFormDomain(store.getState());
  expect(depositFormDomain.getStep()).toEqual('confirm');
  expect(depositFormDomain.getAllowTxState()).toEqual({
    allowTxStatus: 'reverted',
    allowTxHash: 'approve weth tx hash',
    allowTxReceipt: mockFailedTxReceipt,
  });
  expect(depositFormDomain.getConvertTxState()).toEqual({
    convertTxStatus: 'confirmed',
    convertTxHash: 'deposit weth tx hash',
    convertTxReceipt: mockTxReceipt,
  });
});

it('confirmTokenDeposit (transaction succeeds updates the depositForm model correctly', async () => {
  getDepositFormDomain.mockImplementation(require.requireActual('../domains').getDepositFormDomain);
  getAccountBalancesDomain.mockImplementation(require.requireActual('../domains').getAccountBalancesDomain);
  getSignerDomain.mockImplementation(require.requireActual('../domains').getSignerDomain);

  const { store } = createStore();
  const shouldAllow = true;

  let waitForTransaction = jest.fn(() => Promise.resolve(mockTxReceipt));
  let getSignerSettingsModelMock = jest.fn(() => ({ getNetworkID: () => 8888 }));
  let getSignerMock = jest.fn(() => ({ provider: { waitForTransaction } }));
  let approve = jest.fn(() => Promise.resolve({ hash: 'approve tx hash' }));
  let tokenContract = jest.fn(() => ({ approve }));

  getSigner.mockImplementation(getSignerMock);
  Contract.mockImplementation(tokenContract);
  getSignerSettingsModel.mockImplementation(getSignerSettingsModelMock);

  model = DepositFormSelector(store.getState());
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

  model = DepositFormSelector(store.getState());
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
  getDepositFormDomain.mockImplementation(require.requireActual('../domains').getDepositFormDomain);
  getAccountBalancesDomain.mockImplementation(require.requireActual('../domains').getAccountBalancesDomain);
  getSignerDomain.mockImplementation(require.requireActual('../domains').getSignerDomain);
  const { store } = createStore();
  const shouldAllow = true;

  let waitForTransaction = jest.fn(() => Promise.resolve(mockFailedTxReceipt));
  let getSignerSettingsModelMock = jest.fn(() => ({ getNetworkID: () => 8888 }));
  let getSignerMock = jest.fn(() => ({ provider: { waitForTransaction, chainId: '8888' } }));
  let approve = jest.fn(() => Promise.resolve({ hash: 'approve tx hash' }));
  let tokenContract = jest.fn(() => ({ approve }));

  getSigner.mockImplementation(getSignerMock);
  Contract.mockImplementation(tokenContract);
  getSignerSettingsModel.mockImplementation(getSignerSettingsModelMock);

  model = DepositFormSelector(store.getState());
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

  model = DepositFormSelector(store.getState());
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

// getDepositFormDomain.mockImplementation(
//   require.requireActual('../domains').getDepositFormDomain
// );
