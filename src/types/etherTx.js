//@flow
export type EtherTxStatus = 'incomplete' | 'valid' | 'invalid' | 'sent' | 'reverted' | 'confirmed' | 'error';

export type Address = string;

export type TxReceipt = {
  blockHash: string,
  blockNumber: string,
  gasLimit: Object,
  hash: string,
};

export type EtherTxState = {
  +loading: boolean,
  +status: EtherTxStatus,
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

export type EtherTxNotification = {
  status: EtherTxStatus,
  statusMessage: string,
  gas: number,
  receipt: TxReceipt,
};

export type EtherTxErrorAction = {
  type: 'etherTx/ERROR',
  payload: {
    status: EtherTxStatus,
    statusMessage: string,
  },
};

export type ValidateEtherTxAction = {
  type: 'etherTx/VALIDATE',
  payload: {
    statusMessage: string,
    gas: number,
  },
};

export type InvalidateEtherTxAction = {
  type: 'etherTx/INVALIDATE',
  payload: {
    statusMessage: string,
  },
};

export type SendEtherTxAction = {
  type: 'etherTx/SEND',
  payload: {
    hash: string,
  },
};

export type RevertEtherTxAction = {
  type: 'etherTx/REVERT',
  payload: {
    statusMessage: string,
    receipt: TxReceipt,
  },
};

export type ConfirmEtherTxAction = {
  type: 'etherTx/CONFIRM',
  payload: {
    receipt: TxReceipt,
  },
};

export type EtherTxEvent = any => EtherTxState => EtherTxState;

export type EtherTxAction =
  | EtherTxErrorAction
  | ValidateEtherTxAction
  | InvalidateEtherTxAction
  | SendEtherTxAction
  | ConfirmEtherTxAction
  | RevertEtherTxAction;
