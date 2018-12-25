// @flow
import React from 'react'
import styled from 'styled-components'
import OHLCV from '../../components/OHLCV'
import OrdersTable from '../../components/OrdersTable'
import OrderForm from '../../components/OrderForm'
import TradesTable from '../../components/TradesTable'
import TokenSearcher from '../../components/TokenSearcher'
import OrderBook from '../../components/OrderBook'
import { CloseableCallout, EmphasizedText } from '../../components/Common'
import { Grid } from 'styled-css-grid'
import { Redirect } from 'react-router-dom'

type Props = {
  authenticated: boolean,
  isConnected: boolean,
  isInitiated: boolean,
  balancesLoading: boolean,
  baseTokenBalance: string,
  quoteTokenBalance: string,
  baseTokenAllowance: string,
  quoteTokenAllowance: string,
  baseTokenSymbol: string,
  quoteTokenSymbol: string,
  pairIsAllowed: boolean,
  pairName: string,
  queryTradingPageData: () => void,
  makeFee: string, 
  takeFee: string,
  toggleAllowances: (string, string) => void,
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
    quoteTokensLocked: () => {
      const { baseTokenSymbol, quoteTokenSymbol } = this.props
      
    return {
      title: `Unlock tokens to start trading`,
      intent: 'danger',
      message: (
          <React.Fragment>
            To start trading a currency pair, unlock trading for both tokens ({baseTokenSymbol} and {quoteTokenSymbol}).
            Click <EmphasizedText onClick={() => this.props.toggleAllowances(baseTokenSymbol, quoteTokenSymbol)}>here</EmphasizedText> to unlock {baseTokenSymbol}/{quoteTokenSymbol}
          </React.Fragment>
        )
      }
    },
    baseTokensLocked: () => {
      const { 
        baseTokenSymbol, 
        quoteTokenSymbol, 
      } = this.props

      return {
        title: `Unlock tokens to start trading`,
        intent: 'danger',
        message: (
          <React.Fragment>
            To start trading a currency pair, unlock trading for both tokens ({baseTokenSymbol} and {quoteTokenSymbol}).
            Click <EmphasizedText onClick={() => this.props.toggleAllowances(baseTokenSymbol, quoteTokenSymbol)}>here</EmphasizedText> to unlock {baseTokenSymbol}/{quoteTokenSymbol}
          </React.Fragment>
        )
      }
    },
    tokensLocked: () => {
      const { baseTokenSymbol, quoteTokenSymbol } = this.props

      return {
        title: `Unlock tokens to start trading`,
        intent: `danger`,
        message: (
            <React.Fragment>
              To start trading a currency pair, unlock trading for both tokens ({baseTokenSymbol} and {quoteTokenSymbol}).
              Click <EmphasizedText onClick={() => this.props.toggleAllowances(baseTokenSymbol, quoteTokenSymbol)}>here</EmphasizedText> to unlock {baseTokenSymbol}/{quoteTokenSymbol}
            </React.Fragment>
          )
        }
      }
    }

  componentDidMount() {
    if (this.props.isConnected) {
      this.props.queryTradingPageData();
    }

    // this.checkIfCalloutRequired()
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.isConnected || !this.props.isConnected) {
      return;
    }

    this.props.queryTradingPageData();
  }

  checkIfCalloutRequired = () => {
    const {
      authenticated,
      baseTokenBalance,
      quoteTokenBalance,
      pairIsAllowed,
     } = this.props

    if (!authenticated) {
      let calloutOptions = this.callouts.notAuthenticated()
      this.setState({ calloutVisible: true, calloutOptions })
    }

    if (baseTokenBalance === '0.0' && quoteTokenBalance === '0.0') {
      return
    }

    if (!pairIsAllowed) {
      let calloutOptions = this.callouts.tokensLocked()
      return this.setState({ calloutVisible: true, calloutOptions })
    }
  }

  closeCallout = () => {
    this.setState({ calloutVisible: false })
  }

  render() {
    const { authenticated, isInitiated } = this.props
    const { calloutOptions, calloutVisible } = this.state

    if (!authenticated) return <Redirect to="/login" />
    if (!isInitiated) return null;

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
              <OrderForm />
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
