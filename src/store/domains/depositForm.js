//@flow
import type { DepositFormState, DepositFormEvent } from '../../types/depositForm';
import type { TxReceipt } from '../../types/common';

const initialState = {
  step: 'waiting',
  allowTxHash: null,
  convertTxReceipt: null,
  allowTxHash: null,
  allowTxReceipt: null,
};

export const initialized = (): DepositFormEvent => {
  const event = (state: DepositFormState = initialState) => state;
  return event;
};

export const deposited = (): DepositFormEvent => {
  const event = (state: DepositFormState) => ({
    ...state,
    step: 'convert',
  });
  return event;
};

export const confirmed = (): DepositFormEvent => {
  const event = (state: DepositFormState) => ({
    ...state,
    step: 'confirm',
  });

  return event;
};

export const convertTxSent = (hash: string): DepositFormEvent => {
  const event = (state: DepositFormState) => ({
    ...state,
    convertTxHash: hash,
  });

  return event;
};

export const convertTxReverted = (receipt: TxReceipt): DepositFormEvent => {
  const event = (state: DepositFormState) => ({
    ...state,
    convertTxReceipt: receipt,
  });

  return event;
};

export const convertTxConfirmed = (receipt: TxReceipt): DepositFormEvent => {
  const event = (state: DepositFormState) => ({
    ...state,
    convertTxReceipt: receipt,
  });

  return event;
};

export const allowTxSent = (hash: string): DepositFormEvent => {
  const event = (state: DepositFormState) => ({
    ...state,
    allowTxHash: hash,
  });

  return event;
};

export const allowTxReverted = (receipt: TxReceipt): DepositFormEvent => {
  const event = (state: DepositFormState) => ({
    ...state,
    allowTxReceipt: receipt,
  });

  return event;
};

export const allowTxConfirmed = (receipt: TxReceipt): DepositFormEvent => {
  const event = (state: DepositFormState) => ({
    ...state,
    allowTxReceipt: receipt,
  });

  return event;
};

export default function model(state: DepositFormState) {
  return {
    step() {
      return state.step;
    },
  };
}
