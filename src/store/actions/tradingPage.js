// @flow
import type { TokenPairDataMap } from '../../types/tokens';
import type { UpdateTokenPairDataAction } from '../../types/tradingPage';

const actionTypes = {
  updateTokenPairData: 'tradingPage/UPDATE_TOKEN_PAIR_DATA',
};

export function updateTokenPairData(tokenPairData: TokenPairDataMap): UpdateTokenPairDataAction {
  return {
    type: actionTypes.updateTokenPairData,
    payload: { tokenPairData },
  };
}

export default actionTypes;
