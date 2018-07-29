//@flow
import React from 'react';
import OrderHistoryRenderer from './OrderHistoryRenderer';
import { reduceDecimals, toDate } from '../../utils/converters';
import type Props from '../../types/orderHistory';
import { sortArray } from '../../utils/helpers';

type State = {
  selectedTabId: string,
};

class OrderHistory extends React.PureComponent<Props, State> {
  static defaultProps = {
    decimals: 5,
  };
  state = { selectedTabId: 'all' };

  changeTab = (tabId: string) => {
    this.setState({ selectedTabId: tabId });
  };

  parseOrderHistory = (orderHistory: Array<Object>) => {
    const { decimals } = this.props;
    console.log(decimals);
    orderHistory = sortArray(orderHistory, 'time', 'desc');

    return (orderHistory: any).map(order => ({
      time: toDate(order.time),
      type: order.type,
      amount: reduceDecimals(order.amount, decimals),
      price: reduceDecimals(order.price, decimals),
    }));
  };

  render() {
    const {
      props: { orderHistory, userOrderHistory, decimals, authenticated },
      state: { selectedTabId },
      changeTab,
      parseOrderHistory,
    } = this;
    const formattedOrderHistory = parseOrderHistory(orderHistory);
    const formattedUserOrderHistory = parseOrderHistory(userOrderHistory);

    return (
      <OrderHistoryRenderer
        selectedTabId={selectedTabId}
        onChange={changeTab}
        authenticated={authenticated}
        decimals={decimals}
        orderHistory={formattedOrderHistory}
        userOrderHistory={formattedUserOrderHistory}
      />
    );
  }
}

export default OrderHistory;
