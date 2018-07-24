// @flow
import type { AccountState } from '../../types/account';

const initialState = {
  address: null,
};

export const initialized = () => {
  const event = (state: AccountState = initialState) => state;
  return event;
};

export const accountUpdated = (address: string) => {
  const event = (state: AccountState) => ({
    ...state,
    address,
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

export default function model(state: AccountState) {
  return {
    address: () => state.address,
    authenticated: () => state.address !== null,
  };
}
