//@flow
import type { ConvertTokensFormEvent, ConvertTokensFormState } from '../../types/convertTokensForm';
import type { TxReceipt } from '../../types/common';

const initialState = {
  'ETH': {
    txSubmitted: false,
    convertTxStatus: null,
    convertTxReceipt: null,
    convertTxHash: "",
    allowTxStatus: null,
    allowTxReceipt: null,
    allowTxHash: ""
  },
  'WETH': {
    txSubmitted: false,
    convertTxStatus: null,
    convertTxReceipt: null,
    convertTxHash: "",
    allowTxStatus: null,
    allowTxReceipt: null,
    allowTxHash: ""
  }
}

export const initialized = (): ConvertTokensFormEvent => {
  const event = (state: ConvertTokensFormState = initialState) => state;
  return event;
};

export const confirmed = (tokenSymbol: string): ConvertTokensFormEvent => {
  const event = (state: ConvertTokensFormState) => ({
    ...state,
    [tokenSymbol]: {
      ...state[tokenSymbol],
      txSubmitted: true
    }
  });

  return event;
};

export const convertTxSent = (tokenSymbol: string, hash: string) => {
  const event = (state: ConvertTokensFormState) => ({
    ...state,
    [tokenSymbol]: {
      ...state[tokenSymbol],
      convertTxStatus: 'sent',
      convertTxHash: hash,
    }
  })

  return event;
};

export const convertTxReverted = (tokenSymbol: string, receipt: TxReceipt): ConvertTokensFormEvent => {
  const event = (state: ConvertTokensFormState) => ({
      ...state,
      [tokenSymbol]: {
        ...state[tokenSymbol],
        convertTxStatus: 'reverted',
        convertTxReceipt: receipt,
      }
    })


  return event;
};

export const convertTxConfirmed = (tokenSymbol: string, receipt: TxReceipt): ConvertTokensFormEvent => {
  const event = (state: ConvertTokensFormState) => ({
    ...state,
    [tokenSymbol]: {
      ...state[tokenSymbol],
      convertTxStatus: 'confirmed',
      convertTxReceipt: receipt,
    }
  });

  return event;
};

export const allowTxSent = (tokenSymbol: string, hash: string): ConvertTokensFormEvent => {
  const event = (state: ConvertTokensFormState) => ({
    ...state,
    [tokenSymbol]: {
      ...state[tokenSymbol],
      allowTxStatus: 'confirmed',
      allowTxHash: hash,
    }
  });

  return event;
};

export const allowTxReverted = (tokenSymbol: string, receipt: TxReceipt): ConvertTokensFormEvent => {
  const event = (state: ConvertTokensFormState) => ({
    ...state,
    [tokenSymbol]: {
      ...state[tokenSymbol],
      allowTxStatus: 'reverted',
      allowTxReceipt: receipt,
    }
  });

  return event;
};

export const allowTxConfirmed = (tokenSymbol: string, receipt: TxReceipt): ConvertTokensFormEvent => {
  const event = (state: ConvertTokensFormState) => ({
    ...state,
    [tokenSymbol]: {
      ...state[tokenSymbol],
      allowTxStatus: 'confirmed',
      allowTxReceipt: receipt,
    }
  });

  return event;
};

export default function convertTokensFormDomain(state: ConvertTokensFormState) {
  return {
    txSubmitted(tokenSymbol: string) {
      return state[tokenSymbol] && state[tokenSymbol].txSubmitted
    },
    convertTokensFormState(tokenSymbol: string) {
      return state[tokenSymbol]
    },
    allowTxState(tokenSymbol: string) {
      return {
        allowTxStatus: state[tokenSymbol] && state[tokenSymbol].allowTxStatus,
        allowTxHash: state[tokenSymbol] && state[tokenSymbol].allowTxHash,
        allowTxReceipt: state[tokenSymbol] && state[tokenSymbol].allowTxReceipt,
      };
    },
    convertTxState(tokenSymbol: string) {
      return {
        convertTxStatus: state[tokenSymbol] && state[tokenSymbol].convertTxStatus,
        convertTxHash: state[tokenSymbol] && state[tokenSymbol].convertTxHash,
        convertTxReceipt: state[tokenSymbol] && state[tokenSymbol].convertTxReceipt,
      };
    },
  };
}
