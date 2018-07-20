import React, { Component } from 'react';
import OHLCV from '../../components/OHLCV';
import OrderBook from '../../components/OrderBook';
import HomePage from '../HomePage';

class TestApisPage extends Component {
  render() {
    return (
      <React.Fragment>
        <HomePage />
        <OHLCV />
        <OrderBook />
      </React.Fragment>
    );
  }
}

export default TestApisPage;
