
// @flow
import { getAccountDomain, getTokenPairsDomain } from '../domains';
import * as actionCreators from '../actions/marketsPage';
import * as notifierActionCreators from '../actions/app';
import { parseQueryMarketDataError } from '../../config/errors';

import { parseTokenPairsData } from '../../utils/parsers';

import type { State, ThunkAction } from '../../types';

export default function marketsPageSelector(state: State) {
  let accountDomain = getAccountDomain(state);

  return {
    authenticated: accountDomain.authenticated(),
  };
}

export function queryMarketData(): ThunkAction {
  return async (dispatch, getState, { api, provider }) => {
    try {
      let state = getState();
      let pairDomain = getTokenPairsDomain(state);
      let pairs = pairDomain.getPairsByCode();
      
      let tokenPairData = await api.fetchTokenPairData();
      tokenPairData = parseTokenPairsData(tokenPairData, pairs);

      let tradingStats = await api.fetchTradingStats()
      
      dispatch(actionCreators.updateMarketPageData(tokenPairData, tradingStats));
    } catch (e) {
      console.log(e);
      let message = parseQueryMarketDataError(e);
      dispatch(notifierActionCreators.addErrorNotification({ message }));
    }
  };
}
