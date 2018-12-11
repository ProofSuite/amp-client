//@flow
export type AccountState = {
  +address: ?string,
  +privateKey: ?string,
  +currentBlock: ?string,
  +showHelpModal: boolean,
  +exchangeAddress: string,
  +referenceCurrency: string,
};

export type UpdateAccountAction = {
  type: 'account/UPDATE_ACCOUNT',
  payload: {
    address: string,
  },
};

export type AccountEvent = any => AccountState => AccountState;
export type AccountAction = UpdateAccountAction;
