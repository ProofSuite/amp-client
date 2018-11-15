// @flow
import React from 'react'
import styled from 'styled-components'
import OHLCV from '../../components/OHLCV'
import OrdersTable from '../../components/OrdersTable'
import OrderForm from '../../components/OrderForm'
import TradesTable from '../../components/TradesTable'
import TokenSearcher from '../../components/TokenSearcher'
import OrderBook from '../../components/OrderBook'
import { CloseableCallout } from '../../components/Common'
import { Grid } from 'styled-css-grid'
import { Redirect } from 'react-router-dom'
import { Resizable, ResizableBox } from 'react-resizable'

type Props = {
  authenticated: boolean,
  balancesLoading: boolean,
  baseTokenBalance: string,
  quoteTokenBalance: string,
  baseTokenAllowance: string,
  quoteTokenAllowance: string,
  baseTokenSymbol: string,
  quoteTokenSymbol: string,
  getDefaultData: () => void
}

type State = {
  calloutVisible: boolean,
  calloutOptions: Object,
}

class TradingPage extends React.PureComponent<Props, State> {

  state = {
    calloutVisible: false,
    calloutOptions: {}
  }

  callouts = {
    notAuthenticated: () => ({
      title: 'Authenticated Required',
      intent: 'danger',
      message: 'Please authenticate to start trading'
    }),
    fundsLocked: (symbol: string) => ({
      title: `${symbol} Tokens locked`,
      intent: 'danger',
      message: 'To start trading, you need to unlock funds and allow AMP to settle transactions when a match is found'
    })
  }

  componentDidMount() {
    const { authenticated, getDefaultData } = this.props
    if (authenticated) getDefaultData()

    this.checkIfCalloutRequired()
  }

  checkIfCalloutRequired = () => {
    const {
      authenticated,
      baseTokenBalance,
      quoteTokenBalance,
      baseTokenAllowance,
      quoteTokenAllowance,
      baseTokenSymbol,
      quoteTokenSymbol
     } = this.props

    if (!authenticated) {
      let calloutOptions = this.callouts.notAuthenticated()
      this.setState({ calloutVisible: true, calloutOptions })
    }

    // TODO update when moving balances in redux from string to numbers
    if (baseTokenBalance !== '0.0' && baseTokenAllowance === '0.0') {
      let calloutOptions = this.callouts.fundsLocked(baseTokenSymbol)
      this.setState({ calloutVisible: true, calloutOptions })
    }

    if (quoteTokenBalance !== '0.0' && quoteTokenAllowance === '0.0') {
      let calloutOptions = this.callouts.fundsLocked(quoteTokenSymbol)
      this.setState({ calloutVisible: true, calloutOptions })
    }
  }

  closeCallout = () => {
    this.setState({ calloutVisible: false })
  }

  render() {
    const { authenticated,  } = this.props
    const { calloutOptions, calloutVisible } = this.state

    if (!authenticated) return <Redirect to="/login" />

    return (
      <TradingPageLayout>
        <SidePanel>
          <Grid columns={1} alignContent="start">
            <CloseableCallout
              visible={calloutVisible}
              handleClose={this.closeCallout}
              {...calloutOptions}
            />
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


export default TradingPage