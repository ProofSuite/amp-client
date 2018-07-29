import depositFormDomain from './depositForm';
import * as eventCreators from './depositForm';
import {
  mockFailedTxReceipt,
  mockFailedTxReceipt2,
  mockHash,
  mockHash2,
  mockTxReceipt,
  mockTxReceipt2,
} from '../../mockData';

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return depositFormDomain(state);
}

it('handles initialized event properly', () => {
  const domain = getDomain([eventCreators.initialized()]);

  expect(domain.getStep()).toEqual('waiting');
  expect(domain.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });
  expect(domain.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
});

it('handles deposit event properly', () => {
  const domain = getDomain([eventCreators.initialized(), eventCreators.deposited()]);

  expect(domain.getStep()).toEqual('convert');
  expect(domain.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });
  expect(domain.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
});

it('handles deposit event properly', () => {
  const domain = getDomain([eventCreators.initialized(), eventCreators.deposited(), eventCreators.confirmed()]);

  expect(domain.getStep()).toEqual('confirm');
  expect(domain.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });
  expect(domain.getConvertTxState()).toEqual({
    convertTxStatus: 'incomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  });
});

it('handles convertTxSent event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.deposited(),
    eventCreators.convertTxSent(mockHash),
  ]);

  expect(domain.getStep()).toEqual('convert');
  expect(domain.getAllowTxState()).toEqual({
    allowTxStatus: 'incomplete',
    allowTxHash: null,
    allowTxReceipt: null,
  });
  expect(domain.getConvertTxState()).toEqual({
    convertTxStatus: 'sent',
    convertTxHash: mockHash,
    convertTxReceipt: null,
  });
});

it('handles allowTxSent event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.deposited(),
    eventCreators.convertTxSent(mockHash),
    eventCreators.allowTxSent(mockHash2),
  ]);

  expect(domain.getStep()).toEqual('convert');
  expect(domain.getAllowTxState()).toEqual({
    allowTxStatus: 'sent',
    allowTxHash: mockHash2,
    allowTxReceipt: null,
  });
  expect(domain.getConvertTxState()).toEqual({
    convertTxStatus: 'sent',
    convertTxHash: mockHash,
    convertTxReceipt: null,
  });
});

it('handles convertTxReverted event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.deposited(),
    eventCreators.convertTxSent(mockHash),
    eventCreators.allowTxSent(mockHash2),
    eventCreators.convertTxReverted(mockFailedTxReceipt),
  ]);

  expect(domain.getStep()).toEqual('convert');
  expect(domain.getAllowTxState()).toEqual({
    allowTxStatus: 'sent',
    allowTxHash: mockHash2,
    allowTxReceipt: null,
  });
  expect(domain.getConvertTxState()).toEqual({
    convertTxStatus: 'reverted',
    convertTxHash: mockHash,
    convertTxReceipt: mockFailedTxReceipt,
  });
});

it('handles convertTxConfirmed event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.deposited(),
    eventCreators.convertTxSent(mockHash),
    eventCreators.allowTxSent(mockHash2),
    eventCreators.convertTxConfirmed(mockTxReceipt),
  ]);

  expect(domain.getStep()).toEqual('convert');
  expect(domain.getAllowTxState()).toEqual({
    allowTxStatus: 'sent',
    allowTxHash: mockHash2,
    allowTxReceipt: null,
  });
  expect(domain.getConvertTxState()).toEqual({
    convertTxStatus: 'confirmed',
    convertTxHash: mockHash,
    convertTxReceipt: mockTxReceipt,
  });
});

it('handles allowTxReverted event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.deposited(),
    eventCreators.convertTxSent(mockHash),
    eventCreators.allowTxSent(mockHash2),
    eventCreators.convertTxConfirmed(mockTxReceipt),
    eventCreators.allowTxReverted(mockFailedTxReceipt2),
  ]);

  expect(domain.getStep()).toEqual('convert');
  expect(domain.getAllowTxState()).toEqual({
    allowTxStatus: 'reverted',
    allowTxHash: mockHash2,
    allowTxReceipt: mockFailedTxReceipt2,
  });
  expect(domain.getConvertTxState()).toEqual({
    convertTxStatus: 'confirmed',
    convertTxHash: mockHash,
    convertTxReceipt: mockTxReceipt,
  });
});

it('handles allowTxConfirmed event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.deposited(),
    eventCreators.convertTxSent(mockHash),
    eventCreators.allowTxSent(mockHash2),
    eventCreators.convertTxConfirmed(mockTxReceipt),
    eventCreators.allowTxConfirmed(mockTxReceipt2),
  ]);

  expect(domain.getStep()).toEqual('convert');
  expect(domain.getAllowTxState()).toEqual({
    allowTxStatus: 'confirmed',
    allowTxHash: mockHash2,
    allowTxReceipt: mockTxReceipt2,
  });
  expect(domain.getConvertTxState()).toEqual({
    convertTxStatus: 'confirmed',
    convertTxHash: mockHash,
    convertTxReceipt: mockTxReceipt,
  });
});
