//@flow
import React from 'react';
import OrdersTableRenderer from './OrdersTableRenderer';
import { sortTable } from '../../utils/helpers';

import type { Order } from '../../types/Orders';

type Props = {
  orders: Array<Order>,
  authenticated: false,
};

type State = {
  selectedTabId: string,
};

class OrderHistory extends React.PureComponent<Props, State> {
  static defaultProps = { authenticated: true };
  state = { selectedTabId: 'all' };

  changeTab = (tabId: string) => {
    this.setState({ selectedTabId: tabId });
  };

  filterOrders = () => {
    const { orders } = this.props;
    let result = { ALL: orders };
    let filters = ['OPEN', 'CANCELED', 'PENDING', 'EXECUTED', 'PARTIALLY_FILLED'];

    for (let filter of filters) {
      // silence-error: currently too many flow errors, waiting for rest to be resolved
      result[filter] = orders.filter(order => {
        return order.status === filter;
      });
    }

    for (let filter of filters.concat('ALL')) {
      // silence-error: currently too many flow errors, waiting for rest to be resolved
      result[filter] = sortTable(result[filter], 'time', 'desc');
    }

    return result;
  };

  render() {
    const { authenticated, orders } = this.props;
    const { selectedTabId } = this.state;

    const filteredOrders = this.filterOrders();
    const loading = orders.length < 1;

    return (
      <OrdersTableRenderer
        loading={loading}
        selectedTabId={selectedTabId}
        onChange={this.changeTab}
        authenticated={authenticated}
        // silence-error: currently too many flow errors, waiting for rest to be resolved
        orders={filteredOrders}
      />
    );
  }
}

export default OrderHistory;
