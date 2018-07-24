//@flow
import type { CreateWalletAction, RemoveWalletAction } from '../../types/wallets';

const actionTypes = {
  createWallet: 'createWallet/CREATE',
  addWallet: 'wallets/ADD', //DEPRECATED
  removeWallet: 'wallets/REMOVE', //DEPRECATED
};

export function createWallet(address: string, encryptedWallet: string): CreateWalletAction {
  return {
    type: actionTypes.createWallet,
    payload: { address, encryptedWallet },
  };
}

//DEPRECATED ?
export function addWallet(address: string, encryptedWallet: string): CreateWalletAction {
  return {
    type: actionTypes.createWallet,
    payload: { address, encryptedWallet },
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
