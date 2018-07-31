// @flow
import { getOrdersDomain } from '../domains';
import type { State } from '../../types';

export default function ordersTableSelector(state: State) {
  return {
    orders: () => getOrdersDomain(state).lastOrders(100),
  };
}
