// @flow
import type {
  UpdateAccountAllowancesAction,
  UpdateAccountAllowanceAction,
  UpdateAccountBalancesAction,
  UpdateAccountBalanceAction,
  UpdateTokenPairsAction,
  UpdateCurrentPairAction,
  UpdateExchangeAddressAction,
  UpdateAllowancePendingAction,
  UpdateTokensAction
} from '../../types/walletPage';

import type { AccountAllowances, AccountBalances, AccountBalance, AccountAllowance } from '../../types/accountBalances';
import type { TokenPairs, Tokens } from '../../types/tokens'

const actionTypes = {
  updateBalance: 'walletPage/UPDATE_BALANCE',
  updateBalances: 'walletPage/UPDATE_BALANCES',
  updateAllowance: 'walletPage/UPDATE_ALLOWANCE',
  updateAllowancePending: 'walletPage/UPDATE_ALLOWANCE_PENDING',
  updateAllowances: 'walletPage/UPDATE_ALLOWANCES',
  updateCurrentPair: 'walletPage/UPDATE_CURRENT_PAIR',
  updateTokenPairs: 'walletPage/UPDATE_TOKEN_PAIRS',
  updateTokens: 'walletPage/UPDATE_TOKENS',
  updateShowHelpModal: 'walletPage/UPDATE_SHOW_HELP_MODAL',
  updateExchangeAddress: 'walletPage/UPDATE_EXCHANGE_ADDRESS'
};

export function updateTokenPairs(pairs: TokenPairs): UpdateTokenPairsAction {
  return {
    type: actionTypes.updateTokenPairs,
    payload: { pairs }
  }
}

export function updateTokens(tokens: Tokens): UpdateTokensAction {
  return {
    type: actionTypes.updateTokens,
    payload: { tokens }
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

export function updateExchangeAddress(exchangeAddress: string): UpdateExchangeAddressAction {
  return {
    type: actionTypes.updateExchangeAddress,
    payload: { exchangeAddress }
  }
}

export function closeHelpModal() {
  return {
    type: actionTypes.updateShowHelpModal,
    payload: { showHelpModal: false }
  }
}

export default actionTypes;
