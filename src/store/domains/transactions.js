// @flow 
import type { Tx, Txs, TransactionState } from '../../types/tx'

const initialState = {
    byHash: {}
}

export const initialized = () => {
    const event = (state: TxState = initialState) => state
    return event
}

export function txsReset(txs: Txs) {
    const event = (state: TransactionState) => {
        let newState = txs.reduce((result, item) => {
            result[item.hash] = {
                ...state[item.hash],
                ...item
            }
            return result
        }, {})

    return { byHash: newState }
  }

  return event
}

export function txsUpdated(txs: Tx) {
    const event = (state: TransactionState) => {
        let newState = txs.reduce((result, item) => {
        result[item.hash] = {
            ...state[item.hash],
            ...item
        }
        return result
    }, {})

    return {
      ...state,
      byHash: {
        ...state.byHash,
        ...newState
      }
    }
  }

  return event
}

export const txsDeleted = (txHashes: Array<string>) => {
  const event = (state: OrdersState) => ({
    ...state,
    byHash: Object.keys(state.byHash)
      .filter(key => txHashes.indexOf(key) === -1)
      .reduce((result, current) => {
        result[current] = state.byHash[current]
        return result
      }, {})
  })

  return event
}

export default function txDomain(state: TransactionState) {
    return {
        recentTransactions(n: number) {
            let txs = Object.values(state.byHash)
            
            txs = txs.slice(Math.max(txs.length - n, 0))
            txs = txs.reverse()

            return txs
        }
    }
}
