export type DepositFormState = {
  +step: 'waiting' | 'convert',
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

export type DepositFormEvent = any => DepositFormState => DepositFormState;

export type DepositFormAction =
  | DepositAction
  | ConfirmAction
  | SendConvertTxAction
  | RevertConvertTxAction
  | ConfirmConvertTxAction
  | SendAllowTxAction
  | RevertAllowTxAction
  | ConfirmAllowTxAction;
