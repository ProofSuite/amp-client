// @flow
import type { UpdateAccountAction } from '../../types/account';

const actionTypes = {
  updateAccount: 'account/UPDATE_ACCOUNT',
};

export function updateAccount(address: string): UpdateAccountAction {
  return {
    type: actionTypes.updateAccount,
    payload: { address },
  };
}

export default actionTypes;
