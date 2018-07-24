export type LoginPageState = {
  +loading: boolean,
  +error: string,
};

export type LoginPageEvent = any => LoginPageState => LoginPageState;

export type CreateWalletAction = {
  type: 'loginPage/CREATE_WALLET',
  payload: { address: string, encryptedWallet: string },
};

export type LoginAction = {
  type: 'loginPage/LOGIN',
  payload: { address: string },
};

export type LoginErrorAction = {
  type: 'loginPage/LOGIN_ERROR',
  payload: { error: string },
};

export type RequestLoginAction = {
  type: 'loginPage/REQUEST_LOGIN',
};

export type LoginPageActions = CreateWalletAction | LoginAction | LoginErrorAction | RequestLoginAction;
