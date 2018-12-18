//@flow
export type AccountState = {
  +address: ?string,
  +privateKey: ?string,
  +currentBlock: ?string,
  +showHelpModal: boolean,
  +exchangeAddress: string,
  +referenceCurrency: ReferenceCurrency,
};

export type AccountParams = {
  address?: ?string,
  privateKey?: ?string,
  currentBlock?: ?string,
  showHelpModal?: ?boolean,
  exchangeAddress?: ?string,
  referenceCurrency?: ?ReferenceCurrency,
}

export type UpdateAccountAction = {
  type: 'account/UPDATE_ACCOUNT',
  payload: {
    address: string,
  },
};

export type ReferenceCurrency = {
  name: string,
  symbol: string,
}

export type AccountEvent = any => AccountState => AccountState;
export type AccountAction = UpdateAccountAction;
