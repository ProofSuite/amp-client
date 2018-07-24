//@flow
import type { LogoutAction } from '../../types/logoutPage';

const actionTypes = {
  logout: 'logoutPage/LOGOUT',
};

export function logout(): LogoutAction {
  return {
    type: actionTypes.logout,
  };
}

export default actionTypes;
