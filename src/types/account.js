//@flow
export type AccountState = {
  +address: ?string,
  +privateKey: ?string,
  +currentBlock: ?string,
};

export type UpdateAccountAction = {
  type: 'account/UPDATE_ACCOUNT',
  payload: {
    address: string,
  },
};

export type AccountEvent = any => AccountState => AccountState;
export type AccountAction = UpdateAccountAction;
