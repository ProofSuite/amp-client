// @flow
import type { WalletsState } from '../../types/wallets';

const initialState = {
  addresses: [],
  byAddress: {},
  currentBlock: '2312',
};

export const initialized = () => {
  const event = (state: WalletsState = initialState) => state;
  return event;
};

export const walletAdded = (address: string, encryptedWallet: ?string) => {
  const event = (state: WalletsState) => ({
    ...state,
    addresses: [...new Set([...state.addresses, address])],
    byAddress: {
      ...state.byAddress,
      [address]: {
        address: address,
        encryptedWallet: encryptedWallet || null,
      },
    },
  });

  return event;
};

export const walletRemoved = (address: string) => {
  const event = (state: WalletsState) => ({
    ...state,
    addresses: state.addresses.filter(element => element !== address),
    byAddress: Object.keys(state.byAddress)
      .filter(key => key !== address)
      .reduce((result, current) => {
        result[current] = state.byAddress[current];
        return result;
      }, {}),
  });

  return event;
};

export const currentBlockUpdated = (currentBlock: string) => {
  const event = (state: WalletsState) => ({
    ...state,
    currentBlock: currentBlock,
  });

  return event;
};

export default function walletDomain(state: WalletsState) {
  return {
    addresses: () => state.addresses,
    byAddress: () => state.byAddress,
    getCurrentBlock: () => state.currentBlock,
  };
}
