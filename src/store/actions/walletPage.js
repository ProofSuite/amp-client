// @flow
import type { UpdateAccountAllowancesAction, UpdateAccountBalancesAction } from '../../types/walletPage';

import type { AccountAllowances, AccountBalances } from '../../types/accountBalances';

const actionTypes = {
  updateBalances: 'walletPage/UPDATE_BALANCES',
  updateAllowances: 'walletPage/UPDATE_ALLOWANCES',
  updateSingleAllowance: 'walletPage/UPDATE_SINGLE_ALLOWANCE',
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

export function updateSingleAllowance(allowance: string, tokenSymbol: string): UpdateAccountAllowancesAction {
  return {
    type: actionTypes.updateSingleAllowance,
    payload: { allowance, tokenSymbol },
  };
}

export default actionTypes;
