//@flow
import getAccountBalancesDomain from '../domains';

import type { State } from '../../types';

export default function getDepositTableSelector(state: State) {
  let accountBalancesModel = getAccountBalancesDomain(state);

  return accountBalancesModel;
}
