// @flow
import type { EtherTxState, TxReceipt } from '../../types/etherTx';

const initialState: EtherTxState = {
  loading: false,
  status: 'incomplete',
  statusMessage: null,
  gas: null,
  gasPrice: null,
  hash: null,
  receipt: null,
};

export const initialized = () => {
  const event = (state: EtherTxState = initialState) => state;
  return event;
};

export const etherTxValidated = (statusMessage: string, gas: number) => {
  const event = (state: EtherTxState) => ({
    ...state,
    status: 'valid',
    statusMessage: statusMessage,
    gas: gas,
  });
  return event;
};

export const etherTxInvalidated = (statusMessage: string) => {
  const event = (state: EtherTxState) => ({
    ...state,
    status: 'invalid',
    statusMessage: statusMessage,
  });
  return event;
};

export const etherTxReverted = (statusMessage: string, receipt: TxReceipt) => {
  const event = (state: EtherTxState) => ({
    ...state,
    loading: false,
    status: 'reverted',
    statusMessage: statusMessage,
    receipt: receipt,
  });
  return event;
};

export const etherTxError = (status: string, statusMessage: string) => {
  const event = (state: EtherTxState) => ({
    ...state,
    loading: false,
    status: status,
    statusMessage: statusMessage,
  });
  return event;
};

export const etherTxSent = (hash: string) => {
  const event = (state: EtherTxState) => ({
    ...state,
    loading: false,
    status: 'sent',
    statusMessage: null,
    receipt: null,
    hash: hash,
  });
  return event;
};

export const etherTxConfirmed = (receipt: TxReceipt) => {
  const event = (state: EtherTxState) => ({
    ...state,
    loading: false,
    status: 'confirmed',
    receipt: receipt,
  });
  return event;
};

export default function model(state: EtherTxState) {
  return {
    getState: () => state,
    isLoading: () => state.loading,
    getStatus: () => state.status,
    getStatusMessage: () => state.statusMessage,
    getGas: () => state.gas,
    getHash: () => state.hash,
    getReceipt: () => state.receipt,
  };
}
