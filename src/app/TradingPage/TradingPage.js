// @flow
import React from 'react';
import styled from 'styled-components';
import OHLCV from '../../components/OHLCV';
import OrderHistory from '../../components/OrdersTable';
import OrderForm from '../../components/OrderForm';
import TradeHistory from '../../components/TradesTable';
import DepthChart from '../../components/DepthChart';
import TokenSearcher from '../../components/TokenSearcher';
import OrderBookandChart from '../../components/OrderBookandChart';
import { ColumnCenter, CollapseRight, RowSpaceBetween, DownCollapse } from '../../components/Common';

type Props = {
  queryDefaultData: ({ code: string }) => void,
};

type State = {
  showLeft: boolean,
  showRight: boolean,
  hide: boolean,
  middleWidth: string,
  leftWidth: number,
  rightWidth: number,
  chartClass: string,
};

export default class TradingPage extends React.PureComponent<Props, State> {
  state = {
    showLeft: false,
    showRight: false,
    hide: false,
    middleWidth: 'both-hidden',
    leftWidth: 0,
    rightWidth: 0,
    chartClass: 'middle-container both-hidden',
  };

  componentDidMount() {
    this.props.queryDefaultData({ code: 'WETH_DAI' });
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

  handleLeft = () => {};

  handleRight = () => {
    window.dispatchEvent(new Event('resize'));
    this.setState(prevState => ({
      middleWidth: 'none-hidden',
      showRight: !prevState.showRight,
    }));
  };

  toggleOrderBook = () => {
    window.dispatchEvent(new Event('resize'));
    this.setState(prevState => ({
      hide: !prevState.hide,
    }));
  };

  render() {
    const {
      state: { showLeft, showRight, middleWidth, hide },
      toggleOrderBook,
    } = this;
    return (
      <div className="trading-page">
        <ColumnCenter>
          <TokenSearcher />
          <OrderForm />
          <OrderForm />
        </ColumnCenter>

        <ColumnCenter>
          <OHLCV toggleOrderBook={toggleOrderBook} hideOrderBook={hide} />
          <RowSpaceBetween>
            <OrderHistory />
            <TradeHistory />
          </RowSpaceBetween>
        </ColumnCenter>

        <div>
          <OrderBookandChart />
        </div>
        <div>
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
