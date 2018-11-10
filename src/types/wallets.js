//@flow
export type WalletsState = {
  +addresses: Array<string>,
  +byAddress: Object,
};

export type Wallet = {
  address: string,
  encryptedWallet: string
}

export type CreateWalletAction = {
  type: 'createWallet/CREATE',
  payload: { address: string, encryptedWallet: string },
};

export type AddWalletAction = {
  type: 'wallets/ADD',
  payload: { address: string, encryptedWallet: string },
};

export type RemoveWalletAction = {
  type: 'wallets/REMOVE',
  payload: { address: string },
};

export type CreateWalletParams = {
  address: string,
  encryptedWallet: string,
  password: string,
  storeWallet: boolean,
  storePrivateKey: boolean,
};

export type WalletsEvent = any => WalletsState => WalletsState;
export type WalletsAction = AddWalletAction | RemoveWalletAction | CreateWalletAction;
