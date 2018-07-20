import model from './depositForm';
import * as eventCreators from './depositForm';
import {
  mockFailedTxReceipt,
  mockFailedTxReceipt2,
  mockHash,
  mockHash2,
  mockTxReceipt,
  mockTxReceipt2,
} from '../../mockData';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const depositForm = getModel([eventCreators.initialized()]);

  expect(depositForm.getStep()).toEqual('waiting');
  expect(depositForm.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });
  expect(depositForm.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
});

it('handles deposit event properly', () => {
  const depositForm = getModel([eventCreators.initialized(), eventCreators.deposited()]);

  expect(depositForm.getStep()).toEqual('convert');
  expect(depositForm.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });
  expect(depositForm.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
});

it('handles deposit event properly', () => {
  const depositForm = getModel([eventCreators.initialized(), eventCreators.deposited(), eventCreators.confirmed()]);

  expect(depositForm.getStep()).toEqual('confirm');
  expect(depositForm.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });
  expect(depositForm.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
});

it('handles convertTxSent event properly', () => {
  const depositForm = getModel([
    eventCreators.initialized(),
    eventCreators.deposited(),
    eventCreators.convertTxSent(mockHash),
  ]);

  expect(depositForm.getStep()).toEqual('convert');
  expect(depositForm.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });
  expect(depositForm.getConvertTxState()).toEqual({
    convertTxStatus: 'sent',
    convertTxHash: mockHash,
    convertTxReceipt: null,
  });
});

it('handles allowTxSent event properly', () => {
  const depositForm = getModel([
    eventCreators.initialized(),
    eventCreators.deposited(),
    eventCreators.convertTxSent(mockHash),
    eventCreators.allowTxSent(mockHash2),
  ]);

  expect(depositForm.getStep()).toEqual('convert');
  expect(depositForm.getAllowTxState()).toEqual({
    allowTxStatus: 'sent',
    allowTxHash: mockHash2,
    allowTxReceipt: null,
  });
  expect(depositForm.getConvertTxState()).toEqual({
    convertTxStatus: 'sent',
    convertTxHash: mockHash,
    convertTxReceipt: null,
  });
});

it('handles convertTxReverted event properly', () => {
  const depositForm = getModel([
    eventCreators.initialized(),
    eventCreators.deposited(),
    eventCreators.convertTxSent(mockHash),
    eventCreators.allowTxSent(mockHash2),
    eventCreators.convertTxReverted(mockFailedTxReceipt),
  ]);

  expect(depositForm.getStep()).toEqual('convert');
  expect(depositForm.getAllowTxState()).toEqual({
    allowTxStatus: 'sent',
    allowTxHash: mockHash2,
    allowTxReceipt: null,
  });
  expect(depositForm.getConvertTxState()).toEqual({
    convertTxStatus: 'reverted',
    convertTxHash: mockHash,
    convertTxReceipt: mockFailedTxReceipt,
  });
});

it('handles convertTxConfirmed event properly', () => {
  const depositForm = getModel([
    eventCreators.initialized(),
    eventCreators.deposited(),
    eventCreators.convertTxSent(mockHash),
    eventCreators.allowTxSent(mockHash2),
    eventCreators.convertTxConfirmed(mockTxReceipt),
  ]);

  expect(depositForm.getStep()).toEqual('convert');
  expect(depositForm.getAllowTxState()).toEqual({
    allowTxStatus: 'sent',
    allowTxHash: mockHash2,
    allowTxReceipt: null,
  });
  expect(depositForm.getConvertTxState()).toEqual({
    convertTxStatus: 'confirmed',
    convertTxHash: mockHash,
    convertTxReceipt: mockTxReceipt,
  });
});

it('handles allowTxReverted event properly', () => {
  const depositForm = getModel([
    eventCreators.initialized(),
    eventCreators.deposited(),
    eventCreators.convertTxSent(mockHash),
    eventCreators.allowTxSent(mockHash2),
    eventCreators.convertTxConfirmed(mockTxReceipt),
    eventCreators.allowTxReverted(mockFailedTxReceipt2),
  ]);

  expect(depositForm.getStep()).toEqual('convert');
  expect(depositForm.getAllowTxState()).toEqual({
    allowTxStatus: 'reverted',
    allowTxHash: mockHash2,
    allowTxReceipt: mockFailedTxReceipt2,
  });
  expect(depositForm.getConvertTxState()).toEqual({
    convertTxStatus: 'confirmed',
    convertTxHash: mockHash,
    convertTxReceipt: mockTxReceipt,
  });
});

it('handles allowTxConfirmed event properly', () => {
  const depositForm = getModel([
    eventCreators.initialized(),
    eventCreators.deposited(),
    eventCreators.convertTxSent(mockHash),
    eventCreators.allowTxSent(mockHash2),
    eventCreators.convertTxConfirmed(mockTxReceipt),
    eventCreators.allowTxConfirmed(mockTxReceipt2),
  ]);

  expect(depositForm.getStep()).toEqual('convert');
  expect(depositForm.getAllowTxState()).toEqual({
    allowTxStatus: 'confirmed',
    allowTxHash: mockHash2,
    allowTxReceipt: mockTxReceipt2,
  });
  expect(depositForm.getConvertTxState()).toEqual({
    convertTxStatus: 'confirmed',
    convertTxHash: mockHash,
    convertTxReceipt: mockTxReceipt,
  });
});
