import walletModel from '../domains/wallet';
import * as actionCreators from '../actions/wallet';

export default function createSelector(state) {
  return walletModel(state.wallet);
}

export function logout() {
  return actionCreators.cleanUp();
}
