import { TxStatus, TxReceipt } from './common';
import { AccountBalance, AccountBalances } from './accountBalances';

export type DepositFormState = {
  +step: 'waiting' | 'convert' | 'confirm',
  +convertTxStatus: TxStatus,
  +allowTxStatus: TxStatus,
  +convertTxHash: string,
  +allowTxHash: string,
  +convertTxReceipt: TxReceipt,
  +allowTxReceipt: TxReceipt,
};

export type DepositAction = {
  type: 'depositForm/DEPOSIT',
};

export type ConfirmAction = {
  type: 'depositForm/CONFIRM',
};

export type SendConvertTxAction = {
  type: 'depositForm/SEND_CONVERT_TX',
};

export type RevertConvertTxAction = {
  type: 'depositForm/REVERT_CONVERT_TX',
  payload: {},
};

export type ConfirmConvertTxAction = {
  type: 'depositForm/CONFIRM_CONVERT_TX',
  payload: {},
};

export type SendAllowTxAction = {
  type: 'depositForm/SEND_ALLOW_TX',
  payload: {},
};

export type RevertAllowTxAction = {
  type: 'depositForm/REVERT_ALLOW_TX',
  payload: {},
};

export type ConfirmAllowTxAction = {
  type: 'depositForm/CONFIRM_ALLOW_TX',
  payload: {},
};

export type SubscribeBalanceAction = {
  type: 'depositForm/SUBSCRIBE_BALANCE',
  payload: { symbol: string },
};

export type UpdateBalanceAction = {
  type: 'depositForm/UPDATE_BALANCE',
  payload: AccountBalance,
};

export type UnsubscribeBalanceAction = {
  type: 'depositForm/UNSUBSCRIBE_BALANCE',
  payload: { symbol: string },
};

export type UpdateBalancesAction = {
  type: 'depositForm/UPDATE_BALANCES',
  payload: { balances: AccountBalances },
};

export type UpdateAllowanceAction = {
  type: 'depositForm/UPDATE_ALLOWANCE',
  payload: AccountAllowance,
};

export type UpdateAllowancesAction = {
  type: 'depositForm/UPDATE_ALLOWANCES',
  payload: { allowances: AccountAllowances },
};

export type DepositFormEvent = any => DepositFormState => DepositFormState;

export type DepositFormAction =
  | DepositAction
  | ConfirmAction
  | SendConvertTxAction
  | RevertConvertTxAction
  | ConfirmConvertTxAction
  | SendAllowTxAction
  | RevertAllowTxAction
  | ConfirmAllowTxAction
  | SubscribeAccountBalanceAction
  | UpdateAccountBalanceAction
  | UpdateAccountBalancesAction
  | UpdateAccountAllowanceAction
  | UpdateAccountAllowancesAction
  | UnsubscribeAccountBalanceAction;
