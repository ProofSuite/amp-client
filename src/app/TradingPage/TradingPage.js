// @flow
import React from 'react';
import styled from 'styled-components';
import { RowSpaceBetween } from '../../components/Common';
import OHLCV from '../../components/OHLCV';
import OrderHistory from '../../components/OrderHistory';
import OrderForm from '../../components/OrderForm';
import TradeHistory from '../../components/TradeHistory';
import CoinSearcher from '../../components/CoinSearcher';
import OrderBookandChart from '../../components/OrderBookandChart';

import type { LoadDataParams } from '../../types/tradingPage';

type Props = {
  loadData: (params: LoadDataParams) => void,
};

export default class TradingPage extends React.PureComponent<Props> {
  state = {
    hide: false,
  };

  componentDidMount() {
    this.props.loadData({ tokenId: 'token_id' });
  }

  toggleOrderBook = () => {
    window.dispatchEvent(new Event('resize'));
    this.setState(function(prevState) {
      return {
        hide: !prevState.hide,
      };
    });
  };

  render() {
    const {
      state: { hide },
      toggleOrderBook,
    } = this;
    return (
      <div className="trading-page">
        <div style={{ width: '22%' }} className="column">
          <CoinSearcher small={true} />
          <OrderForm />
          <OrderForm />
        </div>
        <div className={hide ? 'extended-charting' : 'small-charting'}>
          <OHLCV toggleOrderBook={toggleOrderBook} hideOrderBook={hide} />
          <RowSpaceBetween>
            <OrderHistory />
            <TradeHistory />
          </RowSpaceBetween>
        </div>
        <div className={hide ? 'hidden-order-book' : 'open-order-book'}>
          <OrderBookandChart />
        </div>

        {/*<OrderForm />*/}
        {/*<DepthChart />*/}
        {/*<CoinSearcher small={true}/>*/}
        {/*<OrderHistory />*/}
        {/*<TradeHistory />*/}
        {/*<OHLCV />*/}
        {/*<OrderBook />*/}
      </div>
    );
  }
}
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
