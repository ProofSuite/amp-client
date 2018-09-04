// @flow
import { getTokenPairsDomain, getOrderBookDomain, getAccountBalancesDomain } from '../domains/';

import type { State, ThunkAction } from '../../types';

export default function getOrderFormModel(state: State) {
  console.log(state);
  let tokenPairDomain = getTokenPairsDomain(state);
  let orderBookDomain = getOrderBookDomain(state);
  let accountBalancesDomain = getAccountBalancesDomain(state);

  let currentPair = tokenPairDomain.getCurrentPair();
  let baseToken = currentPair.baseTokenSymbol;
  let quoteToken = currentPair.quoteTokenSymbol;
  let baseTokenBalance = accountBalancesDomain.get(baseToken);
  let quoteTokenBalance = accountBalancesDomain.get(quoteToken);
  let askPrice = orderBookDomain.getAskPrice();
  let bidPrice = orderBookDomain.getBidPrice();

  return {
    currentPair,
    baseToken,
    quoteToken,
    baseTokenBalance,
    quoteTokenBalance,
    askPrice,
    bidPrice,
  };
}

export const defaultFunction = (): ThunkAction => {
  return async (dispatch, getState) => {};
};

export const handleLimit = (): ThunkAction => {
  return async (dispatch, getState) => {};
};

export const handleStopLimit = (): ThunkAction => {
  return async (dispatch, getState) => {};
};
