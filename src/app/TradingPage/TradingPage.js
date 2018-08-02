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
type State = {};

export default class TradingPage extends React.PureComponent<Props, State> {
  componentDidMount() {
    this.props.queryDefaultData({ code: 'WETH_DAI' });
  }

  render() {
    return (
      <div className="trading-page">
        <OHLCV />
        <ColumnCenter>
          <TokenSearcher />
          <OrderForm />
          <OrderForm />
        </ColumnCenter>

        <ColumnCenter>
          <RowSpaceBetween>
            <OrderHistory />
            <TradeHistory />
          </RowSpaceBetween>
        </ColumnCenter>

        <div>
          <OrderBookandChart />
        </div>
      </div>
    );
  }
}
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
