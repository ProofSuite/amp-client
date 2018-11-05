import getTransferTokensFormDomain from './transferTokensForm';
import * as eventCreators from './transferTokensForm';
import { mockHash, mockReceipt } from '../../mockData';

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return getTransferTokensFormDomain(state);
}

it('handles initialized event properly', () => {
  const domain = getDomain([eventCreators.initialized()]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('incomplete');
  expect(domain.getStatusMessage()).toEqual(null);
  expect(domain.getGas()).toEqual(21000);
  expect(domain.getGasPrice()).toEqual(41000000000);
  expect(domain.getHash()).toEqual(null);
  expect(domain.getReceipt()).toEqual(null);
});

it('handles txValidated event properly', () => {
  const domain = getDomain([eventCreators.initialized(), eventCreators.txValidated('Transaction Valid', 21000)]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('valid');
  expect(domain.getStatusMessage()).toEqual('Transaction Valid');
  expect(domain.getGas()).toEqual(21000);
  expect(domain.getGasPrice()).toEqual(41000000000);
  expect(domain.getHash()).toEqual(null);
  expect(domain.getReceipt()).toEqual(null);
});

it('handles txInvalidated event properly', () => {
  const domain = getDomain([eventCreators.initialized(), eventCreators.txInvalidated('Address invalid')]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('invalid');
  expect(domain.getStatusMessage()).toEqual('Address invalid');
  expect(domain.getGas()).toEqual(21000);
  expect(domain.getGasPrice()).toEqual(41000000000);
  expect(domain.getHash()).toEqual(null);
  expect(domain.getReceipt()).toEqual(null);
});

it('handles txSent event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.txValidated('Transaction Valid', 21000),
    eventCreators.txSent(mockHash),
  ]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('sent');
  expect(domain.getStatusMessage()).toEqual(null);
  expect(domain.getGas()).toEqual(21000);
  expect(domain.getGasPrice()).toEqual(41000000000);
  expect(domain.getHash()).toEqual(mockHash);
  expect(domain.getReceipt()).toEqual(null);
});

it('handles txReverted event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.txValidated('Transaction Valid', 21000),
    eventCreators.txSent(mockHash),
    eventCreators.txReverted('Transaction Failed', mockReceipt),
  ]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('reverted');
  expect(domain.getStatusMessage()).toEqual('Transaction Failed');
  expect(domain.getGas()).toEqual(21000);
  expect(domain.getGasPrice()).toEqual(41000000000);
  expect(domain.getHash()).toEqual(mockHash);
  expect(domain.getReceipt()).toEqual(mockReceipt);
});

it('handles txConfirmed event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.txValidated('Transaction Valid', 21000),
    eventCreators.txSent(mockHash),
    eventCreators.txConfirmed(mockReceipt),
  ]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('confirmed');
  expect(domain.getStatusMessage()).toEqual(null);
  expect(domain.getGas()).toEqual(21000);
  expect(domain.getGasPrice()).toEqual(41000000000);
  expect(domain.getHash()).toEqual(mockHash);
  expect(domain.getReceipt()).toEqual(mockReceipt);
});

it('handles txError event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.txValidated('Transaction Valid', 21000),
    eventCreators.txSent(mockHash),
    eventCreators.txError('error', 'Error during transaction'),
  ]);

  expect(domain.isLoading()).toEqual(false);
  expect(domain.getStatus()).toEqual('error');
  expect(domain.getStatusMessage()).toEqual('Error during transaction');
  expect(domain.getGas()).toEqual(21000);
  expect(domain.getGasPrice()).toEqual(41000000000);
  expect(domain.getHash()).toEqual(mockHash);
});
