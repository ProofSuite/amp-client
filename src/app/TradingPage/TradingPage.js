// @flow
import React from 'react'
import styled from 'styled-components'
import OHLCV from '../../components/OHLCV'
import OrdersTable from '../../components/OrdersTable'
import OrderForm from '../../components/OrderForm'
import TradesTable from '../../components/TradesTable'
import TokenSearcher from '../../components/TokenSearcher'
import OrderBook from '../../components/OrderBook'
import { Grid, Cell } from 'styled-css-grid'
import { Redirect } from 'react-router-dom'

type Props = {
  authenticated: boolean,
  queryDefaultData: () => void
}

type State = {}

export default class TradingPage extends React.PureComponent<Props, State> {
  componentDidMount() {
    const { authenticated, queryDefaultData } = this.props
    if (authenticated) queryDefaultData()
  }

  render() {
    const { authenticated } = this.props
    if (!authenticated) return <Redirect to="/login" />


    return (
      <TradingPageLayout>
        <SidePanel>
          <Grid columns={1} alignContent="start">
            <TokenSearcher />
            <OrderForm side="BUY" />
            <OrderForm side="SELL" />
          </Grid>
        </SidePanel>

        <MainPanel>
          <Grid columns={1} alignContent="start">
            <OHLCV />
            <OrdersTableBox />
            <OrdersAndTradesTableBox>
              <OrderBookBox />
              <TradesTableBox />
            </OrdersAndTradesTableBox>
          </Grid>
        </MainPanel>
      </TradingPageLayout>
    )
  }
}

const TradingPageLayout = styled.div.attrs({
  className: 'trading-page-layout'
})``

const SidePanel = styled.div.attrs({
  className: 'trading-page-side-panel'
})``

const MainPanel = styled.div.attrs({
  className: 'trading-page-main-panel'
})``

const OrderBookBox = styled(OrderBook).attrs({
  className: 'trading-page-orderbook'
})`
`

const TradesTableBox = styled(TradesTable).attrs({
  className: 'trading-page-tradestable'
})`
`

const OrdersTableBox = styled(OrdersTable).attrs({
  className: 'trading-page-orderstable'
})``

const OrdersAndTradesTableBox = styled.div.attrs({
  className: 'trading-page-orders-and-trades-tables'
})``

