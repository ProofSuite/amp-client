import getEtherTxDomain from './etherTx';
import * as eventCreators from './etherTx';
import { mockHash, mockReceipt } from '../../mockData';

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return getEtherTxDomain(state);
}

it('handles initialized event properly', () => {
  const domain = getDomain([eventCreators.initialized()]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('incomplete');
  expect(domain.getStatusMessage()).toEqual(null);
  expect(domain.getGas()).toEqual(null);
  expect(domain.getGasPrice()).toEqual(null);
  expect(domain.getHash()).toEqual(null);
  expect(domain.getReceipt()).toEqual(null);
});

it('handles etherTxValidated event properly', () => {
  const domain = getDomain([eventCreators.initialized(), eventCreators.etherTxValidated('Transaction Valid', 21000)]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('valid');
  expect(domain.getStatusMessage()).toEqual('Transaction Valid');
  expect(domain.getGas()).toEqual(21000);
  expect(domain.getGasPrice()).toEqual(null);
  expect(domain.getHash()).toEqual(null);
  expect(domain.getReceipt()).toEqual(null);
});

it('handles etherTxInvalidated event properly', () => {
  const domain = getDomain([eventCreators.initialized(), eventCreators.etherTxInvalidated('Address invalid')]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('invalid');
  expect(domain.getStatusMessage()).toEqual('Address invalid');
  expect(domain.getGas()).toEqual(null);
  expect(domain.getGasPrice()).toEqual(null);
  expect(domain.getHash()).toEqual(null);
  expect(domain.getReceipt()).toEqual(null);
});

it('handles etherTxSent event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.etherTxValidated('Transaction Valid', 21000),
    eventCreators.etherTxSent(mockHash),
  ]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('sent');
  expect(domain.getStatusMessage()).toEqual(null);
  expect(domain.getGas()).toEqual(21000);
  expect(domain.getGasPrice()).toEqual(null);
  expect(domain.getHash()).toEqual(mockHash);
  expect(domain.getReceipt()).toEqual(null);
});

it('handles etherTxReverted event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.etherTxValidated('Transaction Valid', 21000),
    eventCreators.etherTxSent(mockHash),
    eventCreators.etherTxReverted('Transaction Failed', mockReceipt),
  ]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('reverted');
  expect(domain.getStatusMessage()).toEqual('Transaction Failed');
  expect(domain.getGas()).toEqual(21000);
  expect(domain.getGasPrice()).toEqual(null);
  expect(domain.getHash()).toEqual(mockHash);
  expect(domain.getReceipt()).toEqual(mockReceipt);
});

it('handles etherTxConfirmed event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.etherTxValidated('Transaction Valid', 21000),
    eventCreators.etherTxSent(mockHash),
    eventCreators.etherTxConfirmed(mockReceipt),
  ]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('confirmed');
  expect(domain.getStatusMessage()).toEqual(null);
  expect(domain.getGas()).toEqual(21000);
  expect(domain.getGasPrice()).toEqual(null);
  expect(domain.getHash()).toEqual(mockHash);
  expect(domain.getReceipt()).toEqual(mockReceipt);
});

it('handles etherTxError event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.etherTxValidated('Transaction Valid', 21000),
    eventCreators.etherTxSent(mockHash),
    eventCreators.etherTxError('error', 'Error during transaction'),
  ]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('error');
  expect(domain.getStatusMessage()).toEqual('Error during transaction');
  expect(domain.getGas()).toEqual(21000);
  expect(domain.getGasPrice()).toEqual(null);
  expect(domain.getHash()).toEqual(mockHash);
});
