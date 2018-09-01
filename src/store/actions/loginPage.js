//@flow
import type {
  CreateWalletAction,
  LoginErrorAction,
  LoginWithMetamaskAction,
  LoginWithWalletAction,
  RequestLoginAction,
} from '../../types/loginPage';

const actionTypes = {
  createWallet: 'loginPage/CREATE_WALLET',
  requestLogin: 'loginPage/REQUEST_LOGIN',
  loginWithMetamask: 'loginPage/LOGIN_WITH_METAMASK',
  loginWithWallet: 'loginPage/LOGIN_WITH_WALLET',
  loginError: 'loginPage/LOGIN_ERROR',
};

export function createWallet(address: string, encryptedWallet: string): CreateWalletAction {
  return {
    type: actionTypes.createWallet,
    payload: { address, encryptedWallet },
  };
}

export function loginWithMetamask(address: string): LoginWithMetamaskAction {
  return {
    type: actionTypes.loginWithMetamask,
    payload: { address },
  };
}

export function loginWithWallet(address: string, privateKey: string): LoginWithWalletAction {
  return {
    type: actionTypes.loginWithWallet,
    payload: { address, privateKey },
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
