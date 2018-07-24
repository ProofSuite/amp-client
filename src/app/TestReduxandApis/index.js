import React, { Component } from 'react';
import OHLCV from '../../components/OHLCV';
import OrderBook from '../../components/OrderBook';
import OrderHistory from '../../components/OrderHistory';
import OrderForm from '../../components/OrderForm';
import TradeHistory from '../../components/TradeHistory';
import DepthChart from '../../components/DepthChart';
import CoinSearcher from '../../components/CoinSearcher';
import HomePage from '../HomePage';

class TestApisPage extends Component {
  render() {
    return (
      <React.Fragment>
        <HomePage />
        <OrderForm />
        <DepthChart />
        <CoinSearcher />
        <OrderHistory />
        <TradeHistory />
        <OHLCV />
        <OrderBook />
      </React.Fragment>
    );
  }
}

export default TestApisPage;
