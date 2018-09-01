// @flow
import type { AccountState } from '../../types/account';

const initialState = {
  address: null,
  privateKey: null,
  currentBlock: '',
  provider: '',
};

export const initialized = () => {
  const event = (state: AccountState = initialState) => state;
  return event;
};

export const accountUpdated = (address: string, privateKey: string) => {
  const event = (state: AccountState) => ({
    ...state,
    address,
    privateKey,
  });
  return event;
};

export const accountRemoved = () => {
  const event = (state: AccountState) => ({
    ...state,
    address: null,
  });

  return event;
};

export const currentBlockUpdated = (currentBlock: string) => {
  const event = (state: AccountState) => ({
    ...state,
    currentBlock: currentBlock,
  });
  return event;
};

export const currentProviderUpdated = (provider: string) => {
  const event = (state: AccountState) => ({
    ...state,
    provider: provider,
  });
  return event;
};

export default function accountDomain(state: AccountState) {
  return {
    address: () => state.address,
    privateKey: () => state.privateKey,
    currentBlock: () => state.currentBlock,
    provider: () => state.provider,
    authenticated: () => state.address !== null,
  };
}
