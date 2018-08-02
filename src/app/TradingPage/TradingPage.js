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
import { Button } from '@blueprintjs/core';
import { Box, ColumnCenter, CollapseRight, RowSpaceBetween, DownCollapse } from '../../components/Common';

import type { LoadDataParams } from '../../types/tradingPage';

type Props = {
  loadData: (params: LoadDataParams) => void,
};
type State = {};

export default class TradingPage extends React.PureComponent<Props, State> {
  componentDidMount() {
    this.props.loadData({ tokenId: 'token_id' });
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
