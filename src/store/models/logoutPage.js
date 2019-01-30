// @flow
import * as actionCreators from '../actions/logoutPage';
import { getAccountDomain } from '../domains';
import type { State, ThunkAction } from '../../types';

export default function logoutPageSelector(state: State) {
  let { authenticated } = getAccountDomain(state)
  
  return {
    authenticated,
  };
}

export function logout(): ThunkAction {
  return async (dispatch, getState, { mixpanel }) => {
    mixpanel.track('logout');

    dispatch(actionCreators.logout());
  };
}
