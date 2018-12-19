// @flow
import React from 'react';
import styled from 'styled-components';
import TokenTableRenderer from './TokenTableRenderer';
import DepositModal from '../../components/DepositModal';
import TransferTokensModal from '../../components/TransferTokensModal';
import ConvertTokensModal from '../../components/ConvertTokensModal';

import type { Token } from '../../types/tokens';

type TokenData = {
  symbol: string,
  address: string,
  balance: string,
  allowed: boolean,
  decimals: number,
  allowancePending: boolean,
  quote?: ?bool,
  registered?: ?bool,
  listed?: ?bool,
  active?: ?bool,
}

type Props = {
  connected: boolean,
  toggleAllowance: string => void,
  tokenData: Array<TokenData>,
  baseTokens: Array<string>,
  quoteTokens: Array<string>,
  redirectToTradingPage: string => void,
  referenceCurrency: string
};

type State = {
  isDepositModalOpen: boolean,
  isSendModalOpen: boolean,
  isConvertModalOpen: boolean,
  convertModalFromToken: string,
  convertModalToToken: string,
  selectedToken: ?Token,
  hideZeroBalanceToken: boolean,
  searchInput: string,
};

class TokenTable extends React.PureComponent<Props, State> {
  state = {
    isDepositModalOpen: false,
    isSendModalOpen: false,
    isConvertModalOpen: false,
    selectedToken: null,
    hideZeroBalanceToken: false,
    searchInput: '',
    convertModalFromToken: 'ETH',
    convertModalToToken: 'WETH',
  };

  openDepositModal = (event: SyntheticEvent<>, symbol: string) => {
    console.log(event)

    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    let selectedToken = this.props.tokenData.filter(elem => elem.symbol === symbol)[0];

    this.setState({
      isDepositModalOpen: true,
      selectedToken,
    });
  };

  openSendModal = (event: SyntheticEvent<>, symbol: string) => {
    console.log(event)

    event.preventDefault()
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    let selectedToken = this.props.tokenData.filter(elem => elem.symbol === symbol)[0];

    this.setState({
      isSendModalOpen: true,
      selectedToken,
    });
  };

  openConvertModal = (event: SyntheticEvent<>, fromTokenSymbol: string, toTokenSymbol: string) => {
    console.log(event)

    event.preventDefault()
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    this.setState((previousState, currentProps) => {
      return {
        ...previousState,
        convertModalFromToken: fromTokenSymbol,
        convertModalToToken: toTokenSymbol,
        isConvertModalOpen: true,
      }
    })
  }

  handleToggleAllowance = (event: SyntheticEvent<>, symbol: string) => {
    console.log(event)
    
    // event.stopProp
    event.preventDefault()
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    
    
    this.props.toggleAllowance(symbol)

    return false
  }

  closeDepositModal = () => {
    this.setState({ isDepositModalOpen: false });
  };

  closeSendModal = () => {
    this.setState({ isSendModalOpen: false });
  };

  closeConvertModal = () => {
    this.setState({ isConvertModalOpen: false })
  };

  handleSearchInputChange = (e: SyntheticInputEvent<>) => {
    this.setState({ searchInput: e.target.value });
  };

  toggleZeroBalanceToken = () => {
    this.setState({ hideZeroBalanceToken: !this.state.hideZeroBalanceToken });
  };

  filterTokens = (data: Array<TokenData>) => {
    const { searchInput, hideZeroBalanceToken } = this.state;

    if (searchInput) data = data.filter(token => token.symbol.indexOf(searchInput.toUpperCase()) > -1);
    if (hideZeroBalanceToken) data = data.filter(token => token.symbol === 'ETH' || Number(token.balance) !== 0);

    return data;
  };

  render() {
    let {
      connected,
      tokenData,
      quoteTokens,
      baseTokens,
      toggleAllowance,
      redirectToTradingPage,
      referenceCurrency
     } = this.props;

    let {
      isDepositModalOpen,
      isSendModalOpen,
      selectedToken,
      searchInput,
      hideZeroBalanceToken,
      isConvertModalOpen,
      convertModalFromToken,
      convertModalToToken,
     } = this.state;

     let quoteTokenData = tokenData.filter((token: Token) => quoteTokens.indexOf(token.symbol) !== -1 && token.symbol !== 'WETH' && token.symbol !== 'ETH')
     let baseTokenData = tokenData.filter((token: Token) => baseTokens.indexOf(token.symbol) === -1 && token.symbol !== 'WETH' && token.symbol !== 'ETH')
     let WETHTokenData = tokenData.filter((token: Token) => token.symbol === 'WETH')
     let ETHTokenData = tokenData.filter((token: Token) => token.symbol === 'ETH')

    let filteredBaseTokenData = this.filterTokens(baseTokenData)
    let filteredQuoteTokenData = this.filterTokens(quoteTokenData)
    let filteredWETHTokenData = this.filterTokens(WETHTokenData)
    let filteredETHTokenData = this.filterTokens(ETHTokenData)
    let totalFilteredTokens = filteredBaseTokenData.length + filteredQuoteTokenData.length + filteredWETHTokenData.length + filteredETHTokenData.length

    return (
      <Wrapper>
        <TokenTableRenderer
          connected={connected}
          handleToggleAllowance={this.handleToggleAllowance}
          baseTokensData={filteredBaseTokenData}
          quoteTokensData={filteredQuoteTokenData}
          ETHTokenData={filteredETHTokenData[0]}
          WETHTokenData={filteredWETHTokenData[0]}
          tokenDataLength={tokenData.length}
          searchInput={searchInput}
          hideZeroBalanceToken={hideZeroBalanceToken}
          openDepositModal={this.openDepositModal}
          openConvertModal={this.openConvertModal}
          openSendModal={this.openSendModal}
          toggleZeroBalanceToken={this.toggleZeroBalanceToken}
          handleSearchInputChange={this.handleSearchInputChange}
          redirectToTradingPage={redirectToTradingPage}
          totalFilteredTokens={totalFilteredTokens}
          referenceCurrency={referenceCurrency}
        />
        <DepositModal
          isOpen={isDepositModalOpen}
          handleClose={this.closeDepositModal}
          token={selectedToken}
          tokenData={tokenData}
        />
        <TransferTokensModal
          isOpen={isSendModalOpen}
          handleClose={this.closeSendModal}
          token={selectedToken}
        />
        <ConvertTokensModal
          isOpen={isConvertModalOpen}
          handleClose={this.closeConvertModal}
          fromToken={convertModalFromToken}
          toToken={convertModalToToken}
        />
      </Wrapper>
    );
  }
}

export default TokenTable;

const Wrapper = styled.div`
  height: 100%;
`;
