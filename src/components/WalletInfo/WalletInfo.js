// @flow
import React from 'react';
import WalletInfoRenderer from './WalletInfoRenderer';

import { isEthereumAddress } from '../../utils/crypto'
import { ETHERSCAN_TOKEN_URL, ETHERSCAN_ADDRESS_URL } from '../../config/urls'

import type { Token, TokenPairs } from '../../types/tokens'
import type { Tx } from '../../types/transactions'

type Props = {
  accountAddress: string,
  etherBalance: string,
  gasPrice: number,
  gas: number,
  userTokens: Array<string>,
  listedTokens: Array<string>,
  detectContract: string => { decimals: number, symbol: string, isRegistered: boolean },
  addToken: string => { error: string, token: Token, pairs: TokenPairs },
  registerToken: string => { error?: string, token?: Token, pairs?: TokenPairs },
  recentTransactions: Array<Tx>
}

type State = {
  isModalOpen: boolean,
  selectedTab: string,
  tokenAddressStatus: string,
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimals: number,
  tokenIsRegistered: ?boolean,
  addTokenPending: boolean,
  registerTokenPending: boolean,
}

export default class WalletInfo extends React.PureComponent<Props, State> {
  state = { 
    isModalOpen: false,
    selectedTab: "Portfolio",
    tokenAddress: "",
    tokenAddressStatus: "",
    tokenDecimals: 0,
    tokenSymbol: "",
    tokenIsRegistered: null,
    addTokenPending: false,
    registerTokenPending: false,
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  };

  handleChangeTab = (tab: string) => {
    this.setState({ selectedTab: tab })
  }

  handleChangeTokenAddress = ({ target }: *) => {
    this.setState({ tokenAddress: target.value })
  }

  handleDetectContract = async () => {
    const { tokenAddress } = this.state
    const { detectContract } = this.props 

    if (!isEthereumAddress(tokenAddress)) {
      return this.setState({ tokenAddressStatus: "invalid" })
    }

    const { decimals, symbol, isRegistered } = await detectContract(tokenAddress)

    if (!decimals || !symbol) {
      return this.setState({ tokenAddressStatus: "invalid" })
    }

    return this.setState({ 
      tokenSymbol: symbol,
      tokenDecimals: decimals,
      tokenIsRegistered: isRegistered
    })
  }

  handleAddToken = async () => {
    const { tokenAddress } = this.state
    const { addToken } = this.props

    this.setState({ addTokenPending: true })
    const { error, token, pairs } = await addToken(tokenAddress)
    this.setState({ addTokenPending: false })

    if (error) {
      console.log(error)
    } else {
      console.log(token)
      console.log(pairs)
    }
  }

  handleRegisterToken = async () => {
    const { tokenAddress } = this.state
    const { registerToken } = this.props

    this.setState({ registerTokenPending: true })
    const { error } = await registerToken(tokenAddress)
    this.setState({ registerTokenPending: false })

    if (error) {
      console.log(error)
    } else {
      return this.setState({ tokenIsRegistered: true })
    }
  }

  render() {
    const {
      props: {
        accountAddress,
        gasPrice,
        gas,
        etherBalance,
        userTokens,
        listedTokens,
        recentTransactions
      },
      state: { 
        isModalOpen,
        selectedTab,
        tokenAddress,
        tokenSymbol,
        tokenAddressStatus,
        tokenIsRegistered,
        addTokenPending,
        registerTokenPending,
      },
      handleModalClose,
      handleChangeTab,
      handleChangeTokenAddress,
      handleDetectContract,
      handleRegisterToken,
      handleAddToken
    } = this;

    let tokenEtherscanUrl = `${ETHERSCAN_TOKEN_URL}/${tokenAddress}`
    let accountEtherscanUrl = `${ETHERSCAN_ADDRESS_URL}/${accountAddress}`
    let tokenIsAdded = userTokens.indexOf(tokenAddress) !== -1
    let tokenIsListed = listedTokens.indexOf(tokenAddress) !== -1

    return (
      <WalletInfoRenderer
        gasPrice={gasPrice}
        gas={gas}
        balance={etherBalance}
        isModalOpen={isModalOpen}
        selectedTab={selectedTab}
        accountAddress={accountAddress}
        accountEtherscanUrl={accountEtherscanUrl}
        tokenAddress={tokenAddress}
        tokenAddressStatus={tokenAddressStatus}
        tokenSymbol={tokenSymbol}
        tokenEtherscanUrl={tokenEtherscanUrl}
        tokenIsAdded={tokenIsAdded}
        tokenIsListed={tokenIsListed}
        tokenIsRegistered={tokenIsRegistered}
        handleModalClose={handleModalClose}
        handleChangeTab={handleChangeTab}
        handleChangeTokenAddress={handleChangeTokenAddress}
        handleDetectContract={handleDetectContract}
        handleAddToken={handleAddToken}
        handleRegisterToken={handleRegisterToken}
        registerTokenPending={registerTokenPending}
        addTokenPending={addTokenPending}
        recentTransactions={recentTransactions}
      />
    );
  }
}
