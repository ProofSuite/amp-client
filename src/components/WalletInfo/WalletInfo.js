// @flow
import React from 'react';
import WalletInfoRenderer from './WalletInfoRenderer';

import { isEthereumAddress } from '../../utils/crypto'
import { ETHERSCAN_TOKEN_URL } from '../../config/urls'

import type { Token, TokenPairs } from '../../types/tokens'

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
}

type State = {
  isModalOpen: boolean,
  selectedTab: string,
  tokenAddressStatus: string,
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimals: number,
  tokenIsRegistered: ?boolean,
}

export default class WalletInfo extends React.PureComponent<Props, State> {
  state = { 
    isModalOpen: false,
    selectedTab: "Portfolio",
    tokenAddress: "",
    tokenAddressStatus: "",
    tokenDecimals: 0,
    tokenSymbol: "",
    tokenIsRegistered: null
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
    const { error, token, pairs } = await addToken(tokenAddress)

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
    const { error } = await registerToken(tokenAddress)

    if (error) {
      console.log(error)
    } else {
      return this.setState({
        tokenIsRegistered: true
      })
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
      },
      state: { 
        isModalOpen,
        selectedTab,
        tokenAddress,
        tokenSymbol,
        tokenAddressStatus,
        tokenIsRegistered
      },
      handleModalClose,
      handleChangeTab,
      handleChangeTokenAddress,
      handleDetectContract,
      handleRegisterToken,
      handleAddToken
    } = this;

    let tokenEtherscanUrl = `${ETHERSCAN_TOKEN_URL}/${tokenAddress}`
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
      />
    );
  }
}
