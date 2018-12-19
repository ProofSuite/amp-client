//@flow
import getAccountBalancesDomain from '../domains';

import type { State } from '../../types';

export default function getTokenTableSelector(state: State) {
  let accountBalancesModel = getAccountBalancesDomain(state);

  return accountBalancesModel;
}