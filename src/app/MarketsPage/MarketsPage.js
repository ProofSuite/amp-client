// @flow
import React from 'react'
import MarketsPageRenderer from './MarketsPageRenderer'
import { Redirect } from 'react-router-dom'

import type { TokenPair } from '../../types/tokens'

export type Props = {
  authenticated: boolean,
  connected: boolean,
  toggleAllowance: (string, string) => void,
  redirectToTradingPage: (string, string) => void,
  quoteTokens: Array<string>,
  loading: boolean,
  pairs: Array<TokenPair>,
  queryMarketData: void => void,
}

export type State = {
  showMarketStatistics: boolean
}

class MarketsPage extends React.PureComponent<Props, State> {

  state = {
    showMarketStatistics: false
  }

  componentDidMount() {
    const { authenticated, queryMarketData } = this.props
    if (authenticated) queryMarketData()
  }

  toggleMarketStatistics = () => {
    this.setState({ showMarketStatistics: !this.state.showMarketStatistics })
  }

  render() {
    const {
      authenticated,
      connected,
      pairs,
      toggleAllowance,
      redirectToTradingPage,
      quoteTokens,
      loading,
    } = this.props

    const {
      showMarketStatistics
    } = this.state

    // if (!authenticated) return <Redirect to="/login" />

    return (
      <MarketsPageRenderer
        pairs={pairs}
        quoteTokens={quoteTokens}
        connected={connected}
        toggleAllowance={toggleAllowance}
        loading={loading}
        redirectToTradingPage={redirectToTradingPage}
        showMarketStatistics={showMarketStatistics}
        toggleMarketStatistics={this.toggleMarketStatistics}
      />
    )
  }
}

export default MarketsPage
