// @flow
import { getOrderBookDomain } from '../domains';
import type { State, ThunkAction } from '../../types';

export default function orderBookSelector(state: State): ThunkAction {
  return getOrderBookDomain(state).getOrderBookData(25);
}
