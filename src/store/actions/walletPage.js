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
import type { TokenPairs, Tokens, TokenRates, Tx } from '../../types/tokens'

const actionTypes = {
  updateBalance: 'walletPage/UPDATE_BALANCE',
  updateBalances: 'walletPage/UPDATE_BALANCES',
  updateAllowance: 'walletPage/UPDATE_ALLOWANCE',
  updateAllowancePending: 'walletPage/UPDATE_ALLOWANCE_PENDING',
  updateAllowances: 'walletPage/UPDATE_ALLOWANCES',
  updateCurrentPair: 'walletPage/UPDATE_CURRENT_PAIR',
  updateShowHelpModal: 'walletPage/UPDATE_SHOW_HELP_MODAL',
  updateWalletPageData: 'walletPage/UPDATE_WALLET_PAGE_DATA',
  lockToken: 'walletPage/LOCK_TOKEN',
  unlockToken: 'walletPage/UNLOCK_TOKEN',
  confirmLockToken: 'walletPage/CONFIRM_LOCK_TOKEN',
  confirmUnlockToken: 'walletPage/CONFIRM_UNLOCK_TOKEN'
};

export function updateWalletPageData(currentBlock: number, tokens: Tokens, pairs: TokenPairs, exchangeAddress: string, transactions: Array<Tx>): UpdateWalletPageDataAction {
  return {
    type: actionTypes.updateWalletPageData,
    payload: { currentBlock, tokens, pairs, exchangeAddress, transactions }
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

export function unlockToken(symbol: string, txHash: string, tx: Tx) {
  return {
    type: actionTypes.unlockToken,
    payload: {
      symbol,
      txHash,
      tx
    }
  }
}

export function lockToken(symbol: string, txHash: string, tx: Tx) {
  return {
    type: actionTypes.lockToken,
    payload: {
      symbol,
      txHash,
      tx
    }
  }
}

export function confirmUnlockToken(symbol: string, txHash: string, tx: Tx) {
  return {
    type: actionTypes.confirmUnlockToken,
    payload: {
      symbol,
      txHash,
      tx
    }
  }
}

export function confirmLockToken(symbol: string, txHash: string, tx: Tx) {
  return {
    type: actionTypes.confirmLockToken,
    payload: {
      symbol,
      txHash,
      tx
    }
  }
}

export function errorLockToken(symbol: string, txHash: string, tx: Tx, message: string) {
  return {
    type: actionTypes.errorLockToken,
    payload: {
      symbol,
      txHash,
      tx,
      message
    }
  }
}

export function errorUnlockToken(symbol: string, txHash: string, tx: Tx, message: string) {
  return {
    type: actionTypes.errorUnlockToken,
    payload: {
      symbol,
      txHash,
      tx,
      message,
    }
  }
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
