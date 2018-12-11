// @flow
import { getAccountDomain, getTokenPairsDomain } from '../domains';
import * as actionCreators from '../actions/marketsPage';
import * as notifierActionCreators from '../actions/app';
import { parseQueryMarketDataError } from '../../config/errors';

import { parseTokenPairData } from '../../utils/parsers';

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
      let currentPair = pairDomain.getCurrentPair();

      console.log(currentPair)

      let tokenPairData = await api.fetchTokenPairData();
      tokenPairData = parseTokenPairData(tokenPairData, currentPair);

      dispatch(actionCreators.updateTokenPairData(tokenPairData));
    } catch (e) {
      console.log(e);
      let message = parseQueryMarketDataError(e);
      dispatch(notifierActionCreators.addErrorNotification({ message }));
    }
  };
}
