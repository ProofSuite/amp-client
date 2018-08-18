import createStore from '../../store/configureStore';

import getOrderFormModel from './orderForm';
import { getTokenPairsDomain, getOrderBookDomain, getAccountBalancesDomain } from '../domains';

it('checks Initial Model return', async () => {
  const { store } = createStore();
  const state = store.getState();

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
  const defaultOrderFormDomain = getOrderFormModel(state);

  expect(defaultOrderFormDomain).toEqual({
    currentPair,
    baseToken,
    quoteToken,
    baseTokenBalance,
    quoteTokenBalance,
    askPrice,
    bidPrice,
  });
});
