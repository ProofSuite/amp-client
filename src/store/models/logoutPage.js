// @flow
import * as actionCreators from '../actions/logoutPage';
import { getAccountDomain } from '../domains';
import type { State, ThunkAction } from '../../types';
import { push } from 'connected-react-router'


export default function logoutPageSelector(state: State) {
  return {
    authenticated: getAccountDomain(state).authenticated(),
  };
}

export function logout(): ThunkAction {
  return async (dispatch, getState, { mixpanel }) => {
    mixpanel.track('logout');

    dispatch(push('/login'))
    dispatch(actionCreators.logout());
  };
}
