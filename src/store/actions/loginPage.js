//@flow
import type { CreateWalletAction, LoginAction, LoginErrorAction, RequestLoginAction } from '../../types/loginPage';

const actionTypes = {
  createWallet: 'loginPage/CREATE_WALLET',
  requestLogin: 'loginPage/REQUEST_LOGIN',
  login: 'loginPage/LOGIN',
  loginError: 'loginPage/LOGIN_ERROR',
};

export function createWallet(address: string, encryptedWallet: string): CreateWalletAction {
  return {
    type: actionTypes.createWallet,
    payload: { address, encryptedWallet },
  };
}

export function login(address: string): LoginAction {
  return {
    type: actionTypes.login,
    payload: { address },
  };
}

export function loginError(error: string): LoginErrorAction {
  return {
    type: actionTypes.loginError,
    payload: { error },
  };
}

export function requestLogin(): RequestLoginAction {
  return {
    type: actionTypes.requestLogin,
  };
}

export default actionTypes;
