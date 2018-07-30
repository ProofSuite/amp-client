// @flow
import React from 'react';
import { Card, Tab, Tabs } from '@blueprintjs/core';
import OrderBook from '../OrderBook';
import DepthChart from '../DepthChart';

type State = {
  selectedTabId: string,
};

class OrderBookandChart extends React.Component<{}, State> {
  state = {
    selectedTabId: 'list',
  };
  changeTab = (tabId: string) => {
    // silence-error: setState unknown Issue
    this.setState({ selectedTabId: tabId });
  };

  render() {
    const {
      state: { selectedTabId },
      changeTab,
    } = this;
    return (
      <Card className="order-book-chart">
        <h5>Order Book</h5>
        <Tabs id="TabsExample" selectedTabId={selectedTabId} onChange={changeTab}>
          <Tab id="list" title="Order List" panel={<OrderBook />} />
          <Tab id="depth" title="Depth Chart" panel={<DepthChart />} />
        </Tabs>
      </Card>
    );
  }
}
export default OrderBookandChart;
