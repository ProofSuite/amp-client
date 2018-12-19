// @flow
import type {
  UpdateTokenPairDataAction
} from '../../types/marketsPage'

import type { TokenPair } from '../../types/tokens'

const actionTypes = {
  updateTokenPairData: 'marketsPage/UPDATE_TOKEN_PAIR_DATA'
}

export function updateTokenPairData(tokenPairData: Array<TokenPair>): UpdateTokenPairDataAction {
  return {
    type: actionTypes.updateTokenPairData,
    payload: { tokenPairData }
  }
}

export default actionTypes;
