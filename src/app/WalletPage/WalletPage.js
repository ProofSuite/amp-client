// @flow
import React from 'react'
import WalletPageRenderer from './WalletPageRenderer'
import { Redirect } from 'react-router-dom'

import type { TokenData } from '../../types/tokens'

export type Props = {
  loading: boolean,
  connected: boolean,
  accountAddress: string,
  etherBalance: string,
  gasPrice: number,
  gas: number,
  authenticated: boolean,
  queryAccountData: void => void,
  redirectToTradingPage: string => void,
  openConnection: void => void,
  toggleAllowance: string => void,
  tokenData: Array<TokenData>,
  baseTokens: Array<string>,
  quoteTokens: Array<string>,
}

class WalletPage extends React.PureComponent<Props> {
  componentDidMount() {
    const { authenticated, queryAccountData } = this.props
    if (authenticated) queryAccountData()
  }

  render() {
    const {
      loading,
      connected,
      authenticated,
      accountAddress,
      etherBalance,
      gasPrice,
      gas,
      toggleAllowance,
      redirectToTradingPage,
      tokenData,
      quoteTokens,
      baseTokens,
    } = this.props

    if (!authenticated) return <Redirect to="/login" />

    return (
      <WalletPageRenderer
        gas={gas}
        gasPrice={gasPrice}
        loading={loading}
        etherBalance={etherBalance}
        tokenData={tokenData}
        baseTokens={baseTokens}
        quoteTokens={quoteTokens}
        connected={connected}
        accountAddress={accountAddress}
        toggleAllowance={toggleAllowance}
        redirectToTradingPage={redirectToTradingPage}
      />
    )
  }
}

export default WalletPage
