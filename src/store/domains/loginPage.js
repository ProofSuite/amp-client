// @flow
import type { LoginPageState } from '../../types/LoginPage';

const initialState: LoginPageState = {
  loading: false,
  error: '',
};
//
export const initialized = () => {
  const event = (state: LoginPageState = initialState) => state;
  return event;
};

export const loginRequested = () => {
  const event = (state: LoginPageState) => ({
    ...state,
    loading: true,
    error: '',
  });

  return event;
};

export const loginFailed = (message: string) => {
  const event = (state: LoginPageState) => ({
    ...state,
    loading: false,
    error: message,
  });

  return event;
};

export const authenticated = () => {
  const event = (state: LoginPageState) => ({
    ...state,
    loading: false,
  });

  return event;
};

export default function getLoginPageDomain(state: LoginPageState) {
  return {
    isLoading: () => state.loading,
    getError: () => state.error,
  };
}
