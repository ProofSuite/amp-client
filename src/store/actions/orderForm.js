

import type { Tx } from '../../types/transactions'

const actionTypes = {
  unlockPair: 'orderForm/UNLOCK_PAIR',
  confirmUnlockPair: 'orderForm/CONFIRM_UNLOCK_PAIR',
  errorUnlockPair: 'orderForm/ERROR_UNLOCK_PAIR'
};

export function unlockPair(baseTokenSymbol: string, quoteTokenSymbol: string, tx1: Tx, tx2: Tx) {
  return {
    type: actionTypes.unlockPair,
    payload: { baseTokenSymbol, quoteTokenSymbol, txHash: tx1.hash, transactions: [ tx1, tx2 ] },
  };
}

export function confirmUnlockPair(baseTokenSymbol: string, quoteTokenSymbol: string, tx1: Tx, tx2: Tx) {
  return {
    type: actionTypes.confirmUnlockPair,
    payload: { baseTokenSymbol, quoteTokenSymbol, txHash: tx1.hash, transactions: [ tx1, tx2 ]}
  }
}

export function errorUnlockPair(baseTokenSymbol: string, quoteTokenSymbol: string, tx1: Tx, tx2: Tx, message: string) {
  return {
    type: actionTypes.errorUnlockPair,
    payload: { baseTokenSymbol, quoteTokenSymbol, txHash: tx1.hash, transactions: [ tx1, tx2 ], message }
  }
}

export default actionTypes;
