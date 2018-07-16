//@flow
import accountModel from '../domains/account';
import * as actionCreators from '../actions/account';

import type { State } from '../../types';

export default function getAccountModel(state: State) {
  return accountModel(state.account);
}

export const updateAccount = actionCreators.updateAccount;
