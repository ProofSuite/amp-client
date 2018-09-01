// @flow
import type { UpdateAccountAction } from '../../types/account';

const actionTypes = {
  updateAccount: 'account/UPDATE_ACCOUNT',
  updateCurrentBlock: 'account/UPDATE_CURRENT_BLOCK',
  updateCurrentProvider: 'account/UPDATE_CURRENT_PROVIDER',
};

export function updateAccount(address: string, privateKey: string): UpdateAccountAction {
  return {
    type: actionTypes.updateAccount,
    payload: { address, privateKey },
  };
}

export function updateCurrentBlock(currentBlock: string) {
  return {
    type: actionTypes.updateCurrentBlock,
    payload: { currentBlock },
  };
}

export function updateCurrentProvider(provider: string) {
  return {
    type: actionTypes.updateCurrentProvider,
    payload: { provider },
  };
}

export default actionTypes;
