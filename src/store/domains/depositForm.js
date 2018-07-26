//@flow
import type { DepositFormEvent, DepositFormState } from '../../types/depositForm';
import type { TxReceipt } from '../../types/common';

const initialState = {
  step: 'waiting',
  convertTxStatus: 'incomplete',
  allowTxStatus: 'incomplete',
  convertTxHash: null,
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

export const convertTxSent = (hash: string) => {
  const event = (state: DepositFormState) => {
    return {
      ...state,
      convertTxStatus: 'sent',
      convertTxHash: hash,
    };
  };
  return event;
};

export const convertTxReverted = (receipt: TxReceipt): DepositFormEvent => {
  const event = (state: DepositFormState) => ({
    ...state,
    convertTxStatus: 'reverted',
    convertTxReceipt: receipt,
  });

  return event;
};

export const convertTxConfirmed = (receipt: TxReceipt): DepositFormEvent => {
  const event = (state: DepositFormState) => ({
    ...state,
    convertTxStatus: 'confirmed',
    convertTxReceipt: receipt,
  });

  return event;
};

export const allowTxSent = (hash: string): DepositFormEvent => {
  const event = (state: DepositFormState) => ({
    ...state,
    allowTxStatus: 'sent',
    allowTxHash: hash,
  });

  return event;
};

export const allowTxReverted = (receipt: TxReceipt): DepositFormEvent => {
  const event = (state: DepositFormState) => ({
    ...state,
    allowTxStatus: 'reverted',
    allowTxReceipt: receipt,
  });

  return event;
};

export const allowTxConfirmed = (receipt: TxReceipt): DepositFormEvent => {
  const event = (state: DepositFormState) => ({
    ...state,
    allowTxStatus: 'confirmed',
    allowTxReceipt: receipt,
  });

  return event;
};

export default function depositFormDomain(state: DepositFormState) {
  return {
    getStep() {
      return state.step;
    },
    getAllowTxState() {
      return {
        allowTxStatus: state.allowTxStatus,
        allowTxHash: state.allowTxHash,
        allowTxReceipt: state.allowTxReceipt,
      };
    },
    getConvertTxState() {
      return {
        convertTxStatus: state.convertTxStatus,
        convertTxHash: state.convertTxHash,
        convertTxReceipt: state.convertTxReceipt,
      };
    },
  };
}
