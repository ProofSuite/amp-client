// @flow
import React from 'react'
import MarketsPageRenderer from './MarketsPageRenderer'

export type Props = {
  authenticated: boolean,
  appIsLoaded: boolean,
  connected: boolean,
  loading: boolean,
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
    const { queryMarketData, appIsLoaded } = this.props

    if (appIsLoaded) queryMarketData()
  }

  toggleMarketStatistics = () => {
    this.setState({ showMarketStatistics: !this.state.showMarketStatistics })
  }

  render() {
    const {
      loading,
      appIsLoaded
    } = this.props

    const {
      showMarketStatistics
    } = this.state

    if (!appIsLoaded) return null

    return (
      <MarketsPageRenderer
        loading={loading}
        showMarketStatistics={showMarketStatistics}
        toggleMarketStatistics={this.toggleMarketStatistics}
      />
    )
  }
}

export default MarketsPage
