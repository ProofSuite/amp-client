//@flow
export type TxStatus = 'incomplete' | 'valid' | 'invalid' | 'sent' | 'reverted' | 'confirmed' | 'error';
export type Address = string;

export type TxReceipt = {
  blockHash: string,
  blockNumber: string,
  gasUsed: Object,
  hash: string,
};

export type SendEtherFormState = {
  +loading: boolean,
  +status: TxStatus,
  +statusMessage: ?string,
  +gas: ?number,
  +gasPrice: ?number,
  +hash: ?string,
  +receipt: ?TxReceipt,
};

export type EtherTxParams = {
  amount: number,
  receiver: string,
  gas: number,
  gasPrice: number,
};

export type TransferTokensTxParams = {
  amount: number,
  receiver: string,
  gas: number,
  gasPrice: number,
  tokenAddress: Address,
};

export type TxNotification = {
  status: TxStatus,
  statusMessage: string,
  gas: number,
  receipt: TxReceipt,
};

export type TxErrorAction = {
  type: 'sendEtherForm/ERROR',
  payload: {
    status: TxStatus,
    statusMessage: string,
  },
};

export type ValidateTxAction = {
  type: 'sendEtherForm/VALIDATE',
  payload: {
    statusMessage: string,
    gas: number,
  },
};

export type InvalidateTxAction = {
  type: 'sendEtherForm/INVALIDATE',
  payload: {
    statusMessage: string,
  },
};

export type SendTxAction = {
  type: 'sendEtherForm/SEND',
  payload: {
    hash: string,
  },
};

export type RevertTxAction = {
  type: 'sendEtherForm/REVERT',
  payload: {
    statusMessage: string,
    receipt: TxReceipt,
  },
};

export type ConfirmTxAction = {
  type: 'sendEtherForm/CONFIRM',
  payload: {
    receipt: TxReceipt,
  },
};

export type SendEtherFormEvent = any => SendEtherFormState => SendEtherFormState;

export type SendEtherFormAction =
  | TxErrorAction
  | ValidateTxAction
  | InvalidateTxAction
  | SendTxAction
  | ConfirmTxAction
  | RevertTxAction;
