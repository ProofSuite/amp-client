//@flow
export type LoginPageState = {
  +loading: boolean,
  +error: string,
};

export type LoginWithWallet = {
  wallet: string,
  encryptedWallet: string,
  storeWallet: boolean,
  storePrivateKey: boolean,
};

export type LoginPageEvent = any => LoginPageState => LoginPageState;

export type CreateWalletAction = {
  type: 'loginPage/CREATE_WALLET',
  payload: { address: string, encryptedWallet: string },
};

export type LoginWithMetamaskAction = {
  type: 'loginPage/LOGIN_WITH_METAMASK',
  payload: { address: string },
};

export type LoginWithWalletAction = {
  type: 'loginPage/LOGIN_WITH_WALLET',
  payload: { address: string },
};

export type LoginErrorAction = {
  type: 'loginPage/LOGIN_ERROR',
  payload: { error: string },
};

export type RequestLoginAction = {
  type: 'loginPage/REQUEST_LOGIN',
};

export type LoginPageAction =
  | CreateWalletAction
  | LoginErrorAction
  | RequestLoginAction
  | LoginWithWalletAction
  | LoginWithMetamaskAction;
