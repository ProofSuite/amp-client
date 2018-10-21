import { TxReceipt, TxStatus } from './common';

export type ConvertTokensFormState = {
  [ tokenSymbol: string]: {
    +step: 'waiting' | 'convert' | 'confirm',
    +convertTxStatus: TxStatus,
    +allowTxStatus: TxStatus,
    +convertTxHash: string,
    +allowTxHash: string,
    +convertTxReceipt: TxReceipt,
    +allowTxReceipt: TxReceipt,
  }
};



export type ConvertTokensFormEvent = any => ConvertTokensFormState => ConvertTokensFormState;