// @flow
import type { TokenPair } from './tokens'

export type UpdateTokenPairDataAction = {
  type: 'marketsPage/UPDATE_TOKEN_PAIR_DATA',
  payload: { tokenPairData: Array<TokenPair> }
}

export type MarketsPageActions = 
  | UpdateTokenPairDataAction