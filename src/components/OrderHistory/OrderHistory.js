//@flow
import React from 'react';
import OrderHistoryRenderer from './OrderHistoryRenderer';
import { reduceDecimals, toDate } from '../../utils/converters';
import { sortArray } from '../../utils/helpers';

type Props = {
  marketOrderHistory: Array<Object>,
  userOrderHistory: Array<Object>,
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

  parseOrderHistory = (orderHistory: Array<Object>) => {
    orderHistory = sortArray(orderHistory, 'time', 'desc');

    return (orderHistory: any).map(order => ({
      time: toDate(order.time),
      type: order.type,
      amount: reduceDecimals(order.amount, 2),
      price: reduceDecimals(order.price, 2),
    }));
  };

  render() {
    const { marketOrderHistory, userOrderHistory, authenticated } = this.props;
    const { selectedTabId } = this.state;
    const formattedOrderHistory = this.parseOrderHistory(marketOrderHistory);
    const formattedUserOrderHistory = this.parseOrderHistory(userOrderHistory);

    return (
      <OrderHistoryRenderer
        selectedTabId={selectedTabId}
        onChange={this.changeTab}
        authenticated={authenticated}
        orderHistory={formattedOrderHistory}
        userOrderHistory={formattedUserOrderHistory}
      />
    );
  }
}

export default OrderHistory;
