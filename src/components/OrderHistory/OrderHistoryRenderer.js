//@flow
import React from 'react';
import OrderHistory from './OrderHistory';
import { Card, Tab, Tabs, Button } from '@blueprintjs/core';
import { sortArray } from '../../utils/helpers';
import type { Order } from '../../types/orderHistory';

type Props = {
  orderHistory: Array<Order>,
  loading: boolean,
  decimals?: number,
  loggedIn: boolean,
};
type State = {
  selectedTabId: string,
};

class OrderHistoryRenderer extends React.PureComponent<Props, State> {
  static defaultProps = {
    decimals: 7,
  };
  state = {
    selectedTabId: 'all',
  };
  changeTab = (tabId: string) => {
    this.setState({
      selectedTabId: tabId,
    });
  };

  render() {
    const {
      props: { loading, orderHistory, decimals, loggedIn },
      state: { selectedTabId },
      changeTab,
    } = this;
    return (
      <Card className="pt-dark trade-history">
        <h5>Order History</h5>
        <Tabs id="TabsExample" selectedTabId={selectedTabId} onChange={changeTab}>
          <Tab
            id="all"
            title="Market"
            panel={<OrderHistory loading={loading} orderHistory={orderHistory} decimals={decimals} />}
          />
          <Tab
            id="mine"
            title="Mine"
            panel={
              loggedIn ? (
                <OrderHistory
                  loading={loading}
                  orderHistory={sortArray(orderHistory, 'time', 'desc')}
                  decimals={decimals}
                />
              ) : (
                <Login />
              )
            }
          />
        </Tabs>
      </Card>
    );
  }
}

export default OrderHistoryRenderer;

const Login = () => <Button large={true} intent="primary" text="Login" />;
