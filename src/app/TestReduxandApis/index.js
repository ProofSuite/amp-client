import React, { Component } from 'react';
import OHLCV from '../../components/OHLCV';
import OrderBook from '../../components/OrderBook';
import OrderHistory from '../../components/OrderHistory';
import TradeHistory from '../../components/TradeHistory';
import DepthChart from '../../components/DepthChart';
import HomePage from '../HomePage';

class TestApisPage extends Component {
  render() {
    return (
      <React.Fragment>
        <HomePage />
        <DepthChart />
        <OrderHistory />
        <TradeHistory />
        <OHLCV />
        <OrderBook />
      </React.Fragment>
    );
  }
}

export default TestApisPage;
