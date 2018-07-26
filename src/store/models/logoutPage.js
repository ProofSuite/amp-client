// @flow
import * as actionCreators from '../actions/logoutPage';
import { getAccountDomain } from '../domains';
import type { State, ThunkAction } from '../../types';

export default function logoutPageSelector(state: State) {
  return {
    authenticated: getAccountDomain(state).authenticated(),
  };
}

export function logout(): ThunkAction {
  return async dispatch => {
    dispatch(actionCreators.logout());
  };
}
