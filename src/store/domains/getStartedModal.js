//@flow
import type { GetStartedModalEvent, GetStartedModalState } from '../../types/getStartedModal'
import type { TxReceipt } from '../../types/common';


const initialState = {
    approveTxStatus: 'incomplete',
    approveTxHash: null,
    approveTxReceipt: null,
    convertTxStatus: 'imcomplete',
    convertTxHash: null,
    convertTxReceipt: null,
  }


export const initialized = (): GetStartedModalEvent => {
  const event = (state: GetStartedModalState = initialState) => state;
  return event;
};

export const convertTxSent = (hash: string) => {
  const event = (state: GetStartedModalState) => {
    return {
      ...state,
      convertTxStatus: 'sent',
      convertTxHash: hash,
    };
  };
  return event;
};

export const convertTxReverted = (receipt: TxReceipt): GetStartedModalEvent => {
  const event = (state: GetStartedModalState) => ({
    ...state,
    convertTxStatus: 'reverted',
    convertTxReceipt: receipt,
  });

  return event;
};

export const convertTxConfirmed = (receipt: TxReceipt): GetStartedModalEvent => {
  const event = (state: GetStartedModalState) => ({
    ...state,
    convertTxStatus: 'confirmed',
    convertTxReceipt: receipt,
  });

  return event;
};

export const approveTxSent = (hash: string): GetStartedModalEvent => {
  const event = (state: GetStartedModalState) => ({
    ...state,
    approveTxStatus: 'sent',
    approveTxHash: hash,
  });

  return event;
};

export const approveTxReverted = (receipt: TxReceipt): GetStartedModalEvent => {
  const event = (state: GetStartedModalState) => ({
    ...state,
    approveTxStatus: 'reverted',
    approveTxReceipt: receipt,
  });

  return event;
};

export const approveTxConfirmed = (receipt: TxReceipt): GetStartedModalEvent => {
  const event = (state: GetStartedModalState) => ({
    ...state,
    approveTxStatus: 'confirmed',
    approveTxReceipt: receipt,
  });

  return event;
};

export default function getStartedModalDomain(state: GetStartedModalState) {
  return {
    approveTxState() {
      return {
        approveTxStatus: state.approveTxStatus,
        approveTxHash: state.approveTxHash,
        approveTxReceipt: state.approveTxReceipt,
      };
    },
    convertTxState() {
      return {
        convertTxStatus: state.convertTxStatus,
        convertTxHash: state.convertTxHash,
        convertTxReceipt: state.convertTxReceipt,
      };
    },
  };
}
