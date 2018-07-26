// @flow
import React from 'react';
import { Card, Tab, Tabs, Button } from '@blueprintjs/core';
import OrderBook from '../OrderBook';
import DepthChart from '../DepthChart';
import { RowSpcBtwn } from '../HTMLElements';

class OrderBookandChart extends React.PureComponent {
  state = {
    selectedTabId: 'list',
  };
  changeTab = (tabId: string) => {
    this.setState({ selectedTabId: tabId });
  };

  render() {
    const {
      props: { toggleOrderBook },
      state: { selectedTabId },
      changeTab,
    } = this;
    return (
      <Card className="pt-dark order-book-chart">
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
