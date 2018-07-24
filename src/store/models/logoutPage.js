// @flow
import * as actionCreators from '../actions/logoutPage';
import accountDomain from '../domains/account';
import type { State, ThunkAction } from '../../types';

export default function logoutPageSelector(state: State) {
  return {
    authenticated: accountDomain(state.account).authenticated(),
  };
}

export function logout(): ThunkAction {
  return async dispatch => {
    dispatch(actionCreators.logout());
  };
}
