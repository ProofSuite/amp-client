// @flow
import type {
  UpdateCurrentPairAction,
  UpdateAllowancePendingAction
} from '../../types/marketsTable';

const actionTypes = {
  updateBalance: 'marketsTable/UPDATE_BALANCE',
  updateBalances: 'marketsTable/UPDATE_BALANCES',
  updateAllowance: 'marketsTable/UPDATE_ALLOWANCE',
  updateAllowancePending: 'marketsTable/UPDATE_ALLOWANCE_PENDING',
  updateAllowances: 'marketsTable/UPDATE_ALLOWANCES',
  updateCurrentPair: 'marketsTable/UPDATE_CURRENT_PAIR',
  updateTokenPairs: 'marketsTable/UPDATE_TOKEN_PAIRS',
  updateShowHelpModal: 'marketsTable/UPDATE_SHOW_HELP_MODAL',
  updateExchangeAddress: 'marketsTable/UPDATE_EXCHANGE_ADDRESS'
};

export function updateAllowancePending(symbol: string): UpdateAllowancePendingAction {
  return {
    type: actionTypes.updateAllowancePending,
    payload: { symbol } ,
  }
}

export function updateCurrentPair(pair: string): UpdateCurrentPairAction {
  return {
    type: actionTypes.updateCurrentPair,
    payload: { pair },
  };
}

export default actionTypes;
