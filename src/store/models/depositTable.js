//@flow
import getAccountBalancesModel from '../domains/accountBalances';

import type { State } from '../../types';

export default function createSelector(state: State) {
  let accountBalancesModel = getAccountBalancesModel(state.accountBalances);

  return accountBalancesModel;
}
