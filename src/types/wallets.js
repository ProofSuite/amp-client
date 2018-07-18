//@flow
export type WalletsState = {
  +addresses: Array<string>,
  +byAddress: Object,
};

export type AddWalletAction = {
  type: 'wallets/ADD',
  payload: { address: string, serialized: string },
};

export type RemoveWalletAction = {
  type: 'wallets/REMOVE',
  payload: { address: string },
};

export type CreateWalletParams = {
  address: string,
  serialized: string,
  password: string,
  storeWallet: boolean,
  storePrivateKey: boolean,
};

export type WalletsEvent = any => WalletsState => WalletsState;
export type WalletsAction = AddWalletAction | RemoveWalletAction;
