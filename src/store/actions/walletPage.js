// @flow
import type {
  UpdateAccountBalanceAction,
  UpdateAccountAllowanceAction,
  UpdateAccountBalancesAction,
  UpdateAccountAllowancesAction,
  UnsubscribeAccountBalanceAction,
  ClearAccountBalancesAction,
} from '../../types/walletPage';

import type { AccountAllowances, AccountBalances } from '../../types/accountBalances';

const actionTypes = {
  updateBalances: 'walletPage/UPDATE_BALANCES',
  updateAllowances: 'walletPage/UPDATE_ALLOWANCES',
};

export function updateBalances(balances: AccountBalances): UpdateAccountBalancesAction {
  return {
    type: actionTypes.updateBalances,
    payload: { balances },
  };
}

export function updateAllowances(allowances: AccountAllowances): UpdateAccountAllowancesAction {
  return {
    type: actionTypes.updateAllowances,
    payload: { allowances },
  };
}

export default actionTypes;
