// @flow
import React from 'react';
import styled from 'styled-components';
import OHLCV from '../../components/OHLCV';
import OrdersTable from '../../components/OrdersTable';
import OrderForm from '../../components/OrderForm';
import TradesTable from '../../components/TradesTable';
import TokenSearcher from '../../components/TokenSearcher';
import OrderBook from '../../components/OrderBook';
import { Grid, Cell } from 'styled-css-grid';

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
      <TradingPageLayout>
        <Cell area="leftColumn">
          <Grid columns={1} alignContent="start">
            <TokenSearcher />
            <OrderForm />
            <OrderForm />
          </Grid>
        </Cell>

        <Cell area="middleColumn">
          <Grid columns={1} alignContent="start">
            <OHLCV />
            <OrdersTable />
            <Grid columns={2} alignContent="start">
              <OrderBook />
              <TradesTable />
            </Grid>
          </Grid>
        </Cell>
      </TradingPageLayout>
    );
  }
}
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TradingPageLayout = styled(Grid).attrs({
  columns: '1fr 4fr',
  rows: 'fr',
  areas: ['leftColumn middleColumn'],
})`
  padding: 10px;
`;
