import { TxReceipt, TxStatus } from './common';

export type GetStartedModalState = {
  +convertTxStatus: TxStatus,
  +approveTxStatus: TxStatus,
  +convertTxHash: string,
  +approveTxHash: string,
  +convertTxReceipt: TxReceipt,
  +approveTxReceipt: TxReceipt,
};

export type SendConvertTxAction = {
  type: 'getStartedModal/SEND_CONVERT_TX',
};

export type RevertConvertTxAction = {
  type: 'getStartedModal/REVERT_CONVERT_TX',
  payload: {},
};

export type ConfirmConvertTxAction = {
  type: 'getStartedModal/CONFIRM_CONVERT_TX',
  payload: {},
};

export type SendApproveTxAction = {
  type: 'getStartedModal/SEND_APPROVE_TX',
  payload: {},
};

export type RevertApproveTxAction = {
  type: 'getStartedModal/REVERT_APPROVE_TX',
  payload: {},
};

export type ConfirmApproveTxAction = {
  type: 'getStartedModal/CONFIRM_APPROVE_TX',
  payload: {},
};

export type GetStartedModalEvent = any => GetStartedModalState => GetStartedModalState;

export type GetStartedModalAction =
  | DepositAction
  | ConfirmAction
  | SendConvertTxAction
  | RevertConvertTxAction
  | ConfirmConvertTxAction
  | SendApproveTxAction
  | RevertApproveTxAction
  | ConfirmApproveTxAction
