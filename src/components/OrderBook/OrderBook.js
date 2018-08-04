// @flow
import React from 'react';
import styled from 'styled-components';
import { Card, Tab, Tabs, Collapse, Button } from '@blueprintjs/core';
import OrderListRenderer from './OrderListRenderer';
import DepthChartRenderer from './DepthChartRenderer';

var AmCharts = require('@amcharts/amcharts3-react');

type BidOrAsk = {
  price: number,
  amount: number,
  total: number,
};

type Props = {
  loading: boolean,
  asks: Array<BidOrAsk>,
  bids: Array<BidOrAsk>,
};

type State = {
  selectedTabId: string,
  isOpen: boolean,
};

class OrderBook extends React.Component<Props, State> {
  state = {
    isOpen: true,
    selectedTabId: 'list',
  };

  changeTab = (tabId: string) => {
    // silence-error: setState unknown Issue
    this.setState({ selectedTabId: tabId });
  };

  toggleCollapse = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  formatNumber = (val: string, chart: Object, precision: number) => {
    return AmCharts.formatNumber(val, {
      precision: precision ? precision : chart.precision,
      decimalSeparator: chart.decimalSeparator,
      thousandsSeparator: chart.thousandsSeparator,
    });
  };

  toolTip = (item: Object, graph: Object) => {
    let txt;
    if (graph.id == 'asks') {
      txt = `Ask: <strong>${this.formatNumber(item.dataContext.price, graph.chart, 4)}</strong><br />
      Total volume: <strong>${this.formatNumber(item.dataContext.total, graph.chart, 4)}</strong><br />
      Volume: <strong>${this.formatNumber(item.dataContext.amount, graph.chart, 4)}</strong>`;
    } else {
      txt = `Bid: <strong>${this.formatNumber(item.dataContext.price, graph.chart, 4)}</strong><br />
      Total volume: <strong>${this.formatNumber(item.dataContext.total, graph.chart, 4)}</strong><br />
      Volume: <strong>${this.formatNumber(item.dataContext.amount, graph.chart, 4)}</strong>`;
    }
    return txt;
  };

  render() {
    const { bids, asks } = this.props;
    const { selectedTabId, isOpen } = this.state;

    return (
      <div>
        <Card className="order-book">
          <OrderBookHeader>
            <Heading>Order Book</Heading>
            <Button icon={isOpen ? 'chevron-left' : 'chevron-down'} minimal onClick={this.toggleCollapse} />
          </OrderBookHeader>
          <Collapse isOpen={isOpen} transitionDuration={100}>
            <Tabs selectedTabId={selectedTabId} onChange={this.changeTab}>
              <Tab
                id="list"
                title="Order List"
                panel={<OrderListRenderer bids={bids} asks={asks} baseToken="" quoteToken="" />}
              />
              <Tab
                id="depth-chart"
                title="Depth Chart"
                panel={<DepthChartRenderer bids={bids} asks={asks} toolTip={this.toolTip} />}
              />
            </Tabs>
          </Collapse>
        </Card>
      </div>
    );
  }
}

const OrderBookHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 10px;
  align-items: center;
`;

const Heading = styled.h4`
  margin: auto;
`;

export default OrderBook;
