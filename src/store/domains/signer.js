// @flow
import type { SignerSettings, SignerState } from '../../types/signer';

const initialState = {
  loading: false,
  error: '',
  type: 'rpc',
  url: 'http://127.0.0.1:8545',
  networkID: 8888,
};

export const initialized = () => {
  const event = (state: SignerState = initialState) => state;
  return event;
};

export const signerUpdated = ({ type, url, networkID }: SignerSettings) => {
  const event = (state: SignerState) => ({
    ...state,
    loading: false,
    error: null,
    type: type || state.type,
    url: url || state.url,
    networkID: networkID || state.networkID,
  });

  return event;
};

export const signerRequested = () => {
  const event = (state: SignerState) => ({
    ...state,
    loading: true,
  });

  return event;
};

export const signerError = (error: string) => {
  const event = (state: SignerState) => ({
    ...state,
    loading: false,
    error: error,
  });

  return event;
};

export default function signerDomain(state: SignerState) {
  return {
    isLoading: () => state.loading,
    getError: () => state.error,
    getCurrentSigner: () => ({ type: state.type, url: state.url, networkID: state.networkID }),
    getType: () => state.type,
    getUrl: () => state.url,
    getNetworkID: () => state.networkID,
  };
}