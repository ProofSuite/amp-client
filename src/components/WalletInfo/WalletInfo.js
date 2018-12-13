// @flow
import React from 'react';
import WalletInfoRenderer from './WalletInfoRenderer';

import { isEthereumAddress } from '../../utils/crypto'
import { ETHERSCAN_TOKEN_URL } from '../../config/urls'

type Props = {
  accountAddress: string,
  etherBalance: string,
  gasPrice: string,
  gas: string,
  userTokens: Array<string>,
  listedTokens: Array<string>,
  detectContract: string => { decimals: number, symbol: string },
}

type State = {
  isModalOpen: boolean,
  selectedTab: string,
  tokenAddress: string,
  tokenAddressStatus: string,
  tokenSymbol: string,
}

export default class WalletInfo extends React.PureComponent<Props, State> {
  state = { 
    isModalOpen: false,
    selectedTab: "Portfolio",
    tokenAddress: "",
    tokenAddressStatus: "",
    tokenSymbol: "",
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  };

  handleChangeTab = (tab: string) => {
    this.setState({ selectedTab: tab })
  }

  handleChangetokenAddress = ({ target }: *) => {
    this.setState({ tokenAddress: target.value })
  }

  handleDetectContract = async () => {
    const { tokenAddress } = this.state
    const { detectContract } = this.props 

    if (!isEthereumAddress(tokenAddress)) {
      return this.setState({ tokenAddressStatus: "invalid" })
    }

    const { decimals, symbol } = await detectContract(tokenAddress)
    if (!decimals || !symbol) {
      return this.setState({ tokenAddressStatus: "invalid" })
    }

    return this.setState({ tokenSymbol: symbol })
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
      },
      handleModalClose,
      handleChangeTab,
      handleChangetokenAddress,
      handleDetectContract
    } = this;

    let tokenEtherscanUrl = `${ETHERSCAN_TOKEN_URL}/${tokenAddress}`
    let tokenIsAdded = userTokens.indexOf(tokenSymbol) === -1
    let tokenIsListed = listedTokens.indexOf(tokenSymbol) === -1

    return (
      <WalletInfoRenderer
        gasPrice={gasPrice}
        gas={gas}
        balance={etherBalance}
        isModalOpen={isModalOpen}
        selectedTab={selectedTab}
        accountAddress={accountAddress}
        tokenAddress={tokenAddress}
        tokenSymbol={tokenSymbol}
        tokenEtherscanUrl={tokenEtherscanUrl}
        tokenIsAdded={tokenIsAdded}
        tokenIsListed={tokenIsListed}
        handleModalClose={handleModalClose}
        handleChangeTab={handleChangeTab}
        handleChangetokenAddress={handleChangetokenAddress}
        handleDetectContract={handleDetectContract}
      />
    );
  }
}
