//@flow
import type { AddWalletAction, RemoveWalletAction, CreateWalletAction } from '../../types/wallets';

const actionTypes = {
  createWallet: 'createWallet/CREATE',
  addWallet: 'wallets/ADD', //DEPRECATED
  removeWallet: 'wallets/REMOVE', //DEPRECATED
};

export function createWallet(address: string, serialized: string): CreateWalletAction {
  return {
    type: actionTypes.createWallet,
    payload: { address, serialized },
  };
}

//DEPRECATED ?
export function addWallet(address: string, serialized: string): CreateWalletAction {
  return {
    type: actionTypes.createWallet,
    payload: { address, serialized },
  };
}

//DEPRECATED ?
export function removeWallet(address: string): RemoveWalletAction {
  return {
    type: actionTypes.removeWallet,
    payload: { address },
  };
}

export default actionTypes;
