import model, * as eventCreators from './etherTx';
import { mockHash } from '../../mockData';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const etherTx = getModel([eventCreators.initialized()]);

  expect(etherTx.isLoading()).toEqual(false);
  expect(etherTx.getStatus()).toEqual('incomplete');
  expect(etherTx.getStatusMessage()).toEqual(null);
  expect(etherTx.getGas()).toEqual(null);
  expect(etherTx.getGasPrice()).toEqual(null);
  expect(etherTx.getHash()).toEqual(null);
  expect(etherTx.getReceipt()).toEqual(null);
});

it('handles etherTxValidated event properly', () => {
  const etherTx = getModel([eventCreators.initialized(), eventCreators.etherTxValidated('Transaction Valid', 21000)]);

  expect(etherTx.isLoading()).toEqual(false);
  expect(etherTx.getStatus()).toEqual('valid');
  expect(etherTx.getStatusMessage()).toEqual('Transaction Valid');
  expect(etherTx.getGas()).toEqual(21000);
  expect(etherTx.getGasPrice()).toEqual(null);
  expect(etherTx.getHash()).toEqual(null);
  expect(etherTx.getReceipt()).toEqual(null);
});

it('handles etherTxInvalidated event properly', () => {
  const etherTx = getModel([eventCreators.initialized(), eventCreators.etherTxInvalidated('Address invalid')]);

  expect(etherTx.isLoading()).toEqual(false);
  expect(etherTx.getStatus()).toEqual('invalid');
  expect(etherTx.getStatusMessage()).toEqual('Address invalid');
  expect(etherTx.getGas()).toEqual(null);
  expect(etherTx.getGasPrice()).toEqual(null);
  expect(etherTx.getHash()).toEqual(null);
  expect(etherTx.getReceipt()).toEqual(null);
});

it('handles etherTxSent event properly', () => {
  const etherTx = getModel([
    eventCreators.initialized(),
    eventCreators.etherTxValidated('Transaction Valid', 21000),
    eventCreators.etherTxSent(mockHash),
  ]);

  expect(etherTx.isLoading()).toEqual(false);
  expect(etherTx.getStatus()).toEqual('sent');
  expect(etherTx.getStatusMessage()).toEqual(null);
  expect(etherTx.getGas()).toEqual(21000);
  expect(etherTx.getGasPrice()).toEqual(null);
  expect(etherTx.getHash()).toEqual(mockHash);
  expect(etherTx.getReceipt()).toEqual(null);
});

it('handles etherTxSent event properly', () => {
  const etherTx = getModel([
    eventCreators.initialized(),
    eventCreators.etherTxValidated('Transaction Valid', 21000),
    eventCreators.etherTxSent(mockHash),
  ]);

  expect(etherTx.isLoading()).toEqual(false);
  expect(etherTx.getStatus()).toEqual('sent');
  expect(etherTx.getStatusMessage()).toEqual(null);
  expect(etherTx.getGas()).toEqual(21000);
  expect(etherTx.getGasPrice()).toEqual(null);
  expect(etherTx.getHash()).toEqual(mockHash);
  expect(etherTx.getReceipt()).toEqual(null);
});
