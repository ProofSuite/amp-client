import createStore from '../../store/configureStore';

import { getDefaultSigner } from '../services/signer';
import etherTxModel from './etherTx';
import * as actionCreators from './etherTx';
import { mockEtherTxParams } from '../../mockData';

import { Contract } from 'ethers';

jest.mock('ethers');
jest.mock('../services/signer');

let model;

it('handles validateEtherTx (valid) correctly', async () => {
  let toNumber = jest.fn(() => 'estimated Gas');
  let estimateGas = jest.fn(() => Promise.resolve({ toNumber }));
  let signer = jest.fn(() => Promise.resolve({ provider: { estimateGas } }));
  getDefaultSigner.mockImplementation(signer);

  const { store } = createStore();
  model = etherTxModel(store.getState());
  await store.dispatch(actionCreators.validateEtherTx(mockEtherTxParams));

  model = etherTxModel(store.getState());
  expect(model.getGas()).toEqual('estimated Gas');
  expect(model.getStatusMessage()).toEqual('Transaction Valid');
});

it('handles validateEtherTx (invalid) correctly', async () => {
  let estimateGas = jest.fn(() => Promise.reject(new Error('some error')));
  let getDefaultSignerMock = jest.fn(() => Promise.resolve({ provider: { estimateGas } }));
  getDefaultSigner.mockImplementation(getDefaultSignerMock);

  const { store } = createStore();
  model = etherTxModel(store.getState());

  await store.dispatch(actionCreators.validateEtherTx({ mockEtherTxParams }));

  model = etherTxModel(store.getState());
  expect(model.getStatusMessage()).toEqual('some error');
});

it('handles sendEtherTx (transaction confirmed) correctly', async () => {
  let waitForTransaction = jest.fn(() => Promise.resolve({ hash: 'some hash', status: '0x1' }));
  let sendTransaction = jest.fn(() => Promise.resolve({ hash: 'some hash' }));
  let getDefaultSignerMock = jest.fn(() => Promise.resolve({ provider: { waitForTransaction }, sendTransaction }));
  getDefaultSigner.mockImplementation(getDefaultSignerMock);

  const { store } = createStore();
  model = etherTxModel(store.getState());

  await store.dispatch(actionCreators.sendEtherTx(mockEtherTxParams));

  model = etherTxModel(store.getState());
  expect(model.getReceipt()).toEqual({
    hash: 'some hash',
    status: '0x1',
  });
});

it('handles sendEtherTx (failed) correctly', async () => {
  let waitForTransaction = jest.fn(() => Promise.resolve({ hash: 'some hash', status: '0x0' }));
  let sendTransaction = jest.fn(() => Promise.resolve({ hash: 'some hash' }));
  let getDefaultSignerMock = jest.fn(() => Promise.resolve({ provider: { waitForTransaction }, sendTransaction }));
  getDefaultSigner.mockImplementation(getDefaultSignerMock);

  const { store } = createStore();
  model = etherTxModel(store.getState());
  await store.dispatch(actionCreators.sendEtherTx(mockEtherTxParams));

  model = etherTxModel(store.getState());
  expect(model.getStatus()).toEqual('reverted');
  expect(model.getStatusMessage()).toEqual('Transaction Failed');
  expect(model.getReceipt()).toEqual({ hash: 'some hash', status: '0x0' });
});

it('handles sendEtherTx (throwing an error) correctly', async () => {
  let waitForTransaction = jest.fn(() => Promise.resolve({ hash: 'some hash', status: '0x1' }));
  let sendTransaction = jest.fn(() => Promise.reject(new Error('some error')));
  let getDefaultSignerMock = jest.fn(() => Promise.resolve({ provider: { waitForTransaction }, sendTransaction }));
  getDefaultSigner.mockImplementation(getDefaultSignerMock);

  const { store } = createStore();
  model = etherTxModel(store.getState());
  await store.dispatch(actionCreators.sendEtherTx(mockEtherTxParams));

  model = etherTxModel(store.getState());
  expect(model.getStatus()).toEqual('error');
  expect(model.getStatusMessage()).toEqual('some error');
});

it('handles validateTransferTokens (valid) correctly', async () => {
  let toNumber = jest.fn(() => 'estimated gas');
  let transfer = jest.fn(() => Promise.resolve({ toNumber }));
  let contractMock = jest.fn(() => ({ estimate: { transfer } }));
  Contract.mockImplementation(contractMock);
  getDefaultSigner.mockImplementation(() => Promise.resolve('signer'));

  const { store } = createStore();
  model = etherTxModel(store.getState());
  await store.dispatch(actionCreators.validateTransferTokensTx(mockEtherTxParams));

  model = etherTxModel(store.getState());
  expect(model.getGas()).toEqual('estimated gas');
  expect(model.getStatusMessage()).toEqual('Transaction Valid');
});

it('handles validateTransferTokens (invalid) correctly', async () => {
  let transfer = jest.fn(() => Promise.reject(new Error('some error')));
  let contractMock = jest.fn(() => ({ estimate: { transfer } }));
  Contract.mockImplementation(contractMock);
  getDefaultSigner.mockImplementation(() => Promise.resolve('signer'));

  const { store } = createStore();
  model = etherTxModel(store.getState());
  await store.dispatch(actionCreators.validateTransferTokensTx(mockEtherTxParams));

  model = etherTxModel(store.getState());
  expect(model.getStatusMessage()).toEqual('some error');
});

it('handles sendTransferTokens (transaction confirmed) correctly', async () => {
  let transfer = jest.fn(() => Promise.resolve({ hash: 'some hash' }));
  let waitForTransaction = jest.fn(() => Promise.resolve({ hash: 'some hash', status: '0x1' }));
  let contractMock = jest.fn(() => ({ transfer }));
  let getDefaultSignerMock = jest.fn(() => Promise.resolve({ provider: { waitForTransaction } }));

  getDefaultSigner.mockImplementation(getDefaultSignerMock);
  Contract.mockImplementation(contractMock);

  const { store } = createStore();
  model = etherTxModel(store.getState());
  await store.dispatch(actionCreators.sendTransferTokensTx(mockEtherTxParams));

  model = etherTxModel(store.getState());
  expect(model.getReceipt()).toEqual({
    hash: 'some hash',
    status: '0x1',
  });
});

it('handles sendTransferTokensTx (transaction failed) correctly', async () => {
  let waitForTransaction = jest.fn(() => Promise.resolve({ hash: 'some hash', status: '0x0' }));
  let getDefaultSignerMock = jest.fn(() => Promise.resolve({ provider: { waitForTransaction } }));
  let transfer = jest.fn(() => Promise.resolve({ hash: 'some hash' }));
  let contractMock = jest.fn(() => ({ transfer }));

  getDefaultSigner.mockImplementation(getDefaultSignerMock);
  Contract.mockImplementation(contractMock);

  const { store } = createStore();
  model = etherTxModel(store.getState());
  await store.dispatch(actionCreators.sendTransferTokensTx(mockEtherTxParams));

  model = etherTxModel(store.getState());
  expect(model.getStatus()).toEqual('reverted');
  expect(model.getStatusMessage()).toEqual('Transaction Failed');
  expect(model.getReceipt()).toEqual({ hash: 'some hash', status: '0x0' });
});

it('handles sendTransferTokens (throwing an error) correctly', async () => {
  let waitForTransaction = jest.fn(() => Promise.resolve({ hash: 'some hash', status: '0x1' }));
  let getDefaultSignerMock = jest.fn(() => Promise.resolve({ provider: { waitForTransaction } }));
  let transfer = jest.fn(() => Promise.reject(new Error('some error')));
  let contractMock = jest.fn(() => ({ transfer }));

  getDefaultSigner.mockImplementation(getDefaultSignerMock);
  Contract.mockImplementation(contractMock);

  const { store } = createStore();
  model = etherTxModel(store.getState());
  await store.dispatch(actionCreators.sendTransferTokensTx(mockEtherTxParams));

  model = etherTxModel(store.getState());
  expect(model.getStatus()).toEqual('error');
  expect(model.getStatusMessage()).toEqual('some error');
});
