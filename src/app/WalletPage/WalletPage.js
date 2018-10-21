// @flow
import React from 'react'
import WalletPageRenderer from './WalletPageRenderer'
import { Redirect } from 'react-router-dom'

import type { TokenData } from '../../types/tokens'

export type Props = {
  loading: boolean,
  connected: boolean,
  pvtKeyLocked: boolean,
  accountAddress: string,
  accountPrivateKey: string,
  etherBalance: string,
  gasPrice: number,
  gas: number,
  authenticated: boolean,
  queryAccountData: void => void,
  depositTableData: Array<TokenData>,
  redirectToTradingPage: string => void,
  openConnection: void => void,
  toggleAllowance: string => void
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
      pvtKeyLocked,
      depositTableData,
      authenticated,
      accountAddress,
      accountPrivateKey,
      etherBalance,
      gasPrice,
      gas,
      toggleAllowance,
      redirectToTradingPage
    } = this.props

    if (!authenticated) return <Redirect to="/login" />

    return (
      <WalletPageRenderer
        loading={loading}
        etherBalance={etherBalance}
        gasPrice={gasPrice}
        gas={gas}
        accountPrivateKey={accountPrivateKey}
        connected={connected}
        pvtKeyLocked={pvtKeyLocked}
        accountAddress={accountAddress}
        depositTableData={depositTableData}
        toggleAllowance={toggleAllowance}
        redirectToTradingPage={redirectToTradingPage}
      />
    )
  }
}

export default WalletPage
