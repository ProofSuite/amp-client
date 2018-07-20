import React, { Component } from 'react';
import OHLCV from '../../components/OHLCV';
import OrderBook from '../../components/OrderBook';
import TradeHistory from '../../components/TradeHistory';
import HomePage from '../HomePage';

class TestApisPage extends Component {
  render() {
    return (
      <React.Fragment>
        <HomePage />
        <TradeHistory />
        <OHLCV />
        <OrderBook />
      </React.Fragment>
    );
  }
}

export default TestApisPage;
