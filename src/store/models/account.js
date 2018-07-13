import accountModel from '../domains/account';
import * as actionCreators from '../actions/account';

export default function getAccountModel(state) {
  return accountModel(state.account);
}

export const updateAccount = actionCreators.updateAccount;
