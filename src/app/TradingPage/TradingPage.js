// @flow
import React from 'react';
import styled from 'styled-components';
import { RowSpcBtwn } from '../../components/HTMLElements';
import OHLCV from '../../components/OHLCV';
import OrderBook from '../../components/OrderBook';
import OrderHistory from '../../components/OrderHistory';
import OrderForm from '../../components/OrderForm';
import CoinSearcher from '../../components/CoinSearcher';
import TradeHistory from '../../components/TradeHistory';
import DepthChart from '../../components/DepthChart';
import TokenSearcher from '../../components/TokenSearcher';
import OrderBookandChart from '../../components/OrderBookandChart';
import { Box } from '../../components/Common';
import { Button } from '@blueprintjs/core';
import { Collapse, CollapseRight } from '../../components/Common';

import type { LoadDataParams } from '../../types/tradingPage';

type Props = {
  loadData: (params: LoadDataParams) => void,
};

export default class TradingPage extends React.PureComponent<Props> {
  state = {
    showLeft: false,
    showRight: false,
    middleWidth: 'both-hidden',
    leftWidth: 0,
    rightWidth: 0,
    chartClass: 'middle-container both-hidden',
  };
  componentDidMount() {
    this.props.loadData({ tokenId: 'token_id' });
  }

  toggleRight = () => {
    this.setState(
      function(prevState) {
        if (prevState.showRight) {
          // Right Show -> Hide
          if (!prevState.showLeft) {
            return {
              middleWidth: 'both-hidden',
              rightWidth: 0,
              showRight: !prevState.showRight,
            };
          } else {
            return {
              middleWidth: 'if-right-hidden',
              rightWidth: 0,
              showRight: !prevState.showRight,
            };
          }
        } else if (!prevState.showRight) {
          // Right Hide -> Show
          if (!prevState.showLeft) {
            return {
              middleWidth: 'if-left-hidden',
              rightWidth: 22,
              showRight: !prevState.showRight,
            };
          } else {
            return {
              middleWidth: 'none-hidden',
              rightWidth: 22,
              showRight: !prevState.showRight,
            };
          }
        }
      },
      function() {
        window.dispatchEvent(new Event('resize'));
      }
    );
  };
  toggleLeft = () => {
    this.setState(
      function(prevState) {
        if (prevState.showLeft) {
          // Left Show -> Hide
          if (!prevState.showRight) {
            return {
              middleWidth: 'both-hidden',
              leftWidth: 0,
              showLeft: !prevState.showLeft,
            };
          } else {
            return {
              middleWidth: 'if-left-hidden',
              leftWidth: 0,
              showLeft: !prevState.showLeft,
            };
          }
        } else if (!prevState.showLeft) {
          // Left Hide -> Show
          if (!prevState.showRight) {
            return {
              middleWidth: 'if-right-hidden',
              leftWidth: 22,
              showLeft: !prevState.showLeft,
            };
          } else {
            return {
              middleWidth: 'none-hidden',
              leftWidth: 22,
              showLeft: !prevState.showLeft,
            };
          }
        }
        return {
          showLeft: !prevState.showLeft,
        };
      },
      function() {
        window.dispatchEvent(new Event('resize'));
      }
    );
  };
  render() {
    const {
      state: { showLeft, showRight, middleWidth },
      toggleRight,
      toggleLeft,
    } = this;
    return (
      <div className="trading-page">
{/*<<<<<<< HEAD*/}
        <div style={{ width: '22%' }} className="column">
          <Box m={1} p={1}>
            <TokenSearcher />
          </Box>
          <OrderForm />
          <OrderForm />
{/*=======*/}
        {/*<div*/}
          {/*className={*/}
            {/*showLeft ? 'column coin-searcher-order-form left-side' : 'column coin-searcher-order-form hidden-side'*/}
          {/*}*/}
        {/*>*/}
          {/*<Collapse showLeft={showLeft} />*/}
{/*>>>>>>> completed layout for trading page*/}
        </div>
        <div className={'middle-container ' + middleWidth}>
          <OHLCV toggleRight={toggleRight} toggleLeft={toggleLeft} showRight={showRight} showLeft={showLeft} />
          <div className="order-book-chart-container">
            <OrderBookandChart />
          </div>
          <RowSpcBtwn>
            <OrderHistory />
            <TradeHistory />
          </RowSpcBtwn>
        </div>
        <div className={showRight ? 'open-order-book right-side' : 'open-order-book hidden-side'}>
          <CollapseRight showRight={showRight} />
        </div>
      </div>
    );
  }
}
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
// (middleWidth == 99 ? "both-hidden" : middleWidth == 55 ? "none-hidden" : "one-hidden" )
