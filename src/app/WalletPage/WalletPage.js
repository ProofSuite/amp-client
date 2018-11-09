// @flow
import React from 'react'
import WalletPageRenderer from './WalletPageRenderer'
import { Redirect } from 'react-router-dom'

import type { TokenData } from '../../types/tokens'

import { loadShowHelpModalSetting } from '../../store/services/storage'

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
  showHelpModal: boolean,
  closeHelpModal: void => void,
  balancesLoading: boolean,
  WETHBalance: string,
  WETHAllowance: string,
}

class WalletPage extends React.PureComponent<Props, State> {

  componentDidMount() {
    const { authenticated, queryAccountData } = this.props
    if (authenticated) queryAccountData()
  }

  checkOpenHelpModal = () => {
    const showHelpModalSetting = loadShowHelpModalSetting()
    const { authenticated, showHelpModal, balancesLoading, WETHBalance, WETHAllowance } = this.props

    console.log(authenticated, showHelpModal, balancesLoading, WETHBalance, WETHAllowance)

    if (!showHelpModalSetting) return false
    if (!authenticated) return false
    if (!showHelpModal) return false
    if (!balancesLoading) return false
    if (WETHBalance !== '0.0' && WETHAllowance !== '0.0') return false

    return true
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
      closeHelpModal,
    } = this.props


    if (!authenticated) return <Redirect to="/login" />

    const isHelpModalOpen = this.checkOpenHelpModal()

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
        isHelpModalOpen={isHelpModalOpen}
        closeHelpModal={closeHelpModal}
      />
    )
  }
}

export default WalletPage
