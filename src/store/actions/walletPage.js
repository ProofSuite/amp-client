// @flow
import type {
  UpdateAccountAllowancesAction,
  UpdateAccountAllowanceAction,
  UpdateAccountBalancesAction,
  UpdateAccountBalanceAction,
  UpdateCurrentPairAction,
  UpdateAllowancePendingAction,
  UpdateWalletPageDataAction,
} from '../../types/walletPage';

import type { AccountAllowances, AccountBalances, AccountBalance, AccountAllowance } from '../../types/accountBalances';
import type { TokenPairs, Tokens, TokenRates } from '../../types/tokens'

const actionTypes = {
  updateBalance: 'walletPage/UPDATE_BALANCE',
  updateBalances: 'walletPage/UPDATE_BALANCES',
  updateAllowance: 'walletPage/UPDATE_ALLOWANCE',
  updateAllowancePending: 'walletPage/UPDATE_ALLOWANCE_PENDING',
  updateAllowances: 'walletPage/UPDATE_ALLOWANCES',
  updateCurrentPair: 'walletPage/UPDATE_CURRENT_PAIR',
  updateShowHelpModal: 'walletPage/UPDATE_SHOW_HELP_MODAL',
  updateWalletPageData: 'walletPage/UPDATE_WALLET_PAGE_DATA'
};

export function updateWalletPageData(currentBlock: number, tokens: Tokens, pairs: TokenPairs, exchangeAddress: string): UpdateWalletPageDataAction {
  return {
    type: actionTypes.updateWalletPageData,
    payload: { currentBlock, tokens, pairs, exchangeAddress }
  }
}

export function updateBalances(balances: AccountBalances): UpdateAccountBalancesAction {
  return {
    type: actionTypes.updateBalances,
    payload: { balances },
  };
}

export function updateBalance(balance: AccountBalance): UpdateAccountBalanceAction {
  return {
    type: actionTypes.updateBalance,
    payload: balance,
  };
}

export function updateAllowances(allowances: AccountAllowances): UpdateAccountAllowancesAction {
  return {
    type: actionTypes.updateAllowances,
    payload: { allowances },
  };
}

export function updateAllowancePending(symbol: string): UpdateAllowancePendingAction {
  return {
    type: actionTypes.updateAllowancePending,
    payload: { symbol } ,
  }
}

export function updateAllowance(allowance: AccountAllowance): UpdateAccountAllowanceAction {
  return {
    type: actionTypes.updateAllowance,
    payload: allowance,
  };
}

export function updateCurrentPair(pair: string): UpdateCurrentPairAction {
  return {
    type: actionTypes.updateCurrentPair,
    payload: { pair },
  };
}

export function closeHelpModal() {
  return {
    type: actionTypes.updateShowHelpModal,
    payload: { showHelpModal: false }
  }
}

export default actionTypes;
