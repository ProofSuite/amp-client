//@flow
import type { AddWalletAction, RemoveWalletAction } from '../../types/wallets';

const actionTypes = {
  addWallet: 'wallets/ADD',
  removeWallet: 'wallets/REMOVE',
};

export function addWallet(address: string, serialized: string): AddWalletAction {
  return {
    type: actionTypes.addWallet,
    payload: { address, serialized },
  };
}

export function removeWallet(address: string): RemoveWalletAction {
  return {
    type: actionTypes.removeWallet,
    payload: { address },
  };
}

export default actionTypes;
