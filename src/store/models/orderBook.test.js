import createStore from '../../store/configureStore';

import getOrderBookModel from './orderBook';
import { getTokenPairsDomain } from '../domains';

it('checks Initial Model return', async () => {
  const { store } = createStore();
  const initialState = { asks: [], bids: [] };
  initialState['currentPair'] = getTokenPairsDomain(store.getState()).getCurrentPair();

  const defaultOrderBookDomain = getOrderBookModel(store.getState());
  expect(defaultOrderBookDomain).toEqual(initialState);
});
