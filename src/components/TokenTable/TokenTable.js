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
    selectedToken: 'ETH',
    hideZeroBalanceToken: false,
    searchInput: '',
    convertModalFromToken: 'ETH',
    convertModalToToken: 'WETH',
  };

  openDepositModal = (event: SyntheticEvent<>, symbol: string) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    let selectedToken = this.props.tokenData.filter(elem => elem.symbol === symbol)[0];

    this.setState({
      isDepositModalOpen: true,
      selectedToken,
    });
  };

  openSendModal = (event: SyntheticEvent<>, symbol: string) => {
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

  updateSelectedToken = (selectedToken: string) => {
    this.setState({ selectedToken })
  }

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
      baseTokens,
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

     let baseTokenData = tokenData.filter((token: Token) => baseTokens.indexOf(token.symbol) === -1 && token.symbol !== 'WETH' && token.symbol !== 'ETH')
     let WETHTokenData = tokenData.filter((token: Token) => token.symbol === 'WETH')
     let ETHTokenData = tokenData.filter((token: Token) => token.symbol === 'ETH')

     let ETHData = [{
       ...ETHTokenData[0],
       ETHBalance: ETHTokenData[0].balance,
       WETHBalance: WETHTokenData[0].balance,
       totalBalance: Number(ETHTokenData[0].balance) + Number(WETHTokenData[0].balance)
     }]

    let selectedTokenData
     if (selectedToken === "ETH") {       
       selectedTokenData = ETHData[0]
     } else {
       selectedTokenData = tokenData.filter((token: Token) => token.symbol === selectedToken)[0]
     }
     
    let filteredBaseTokenData = this.filterTokens(baseTokenData)
    let filteredETHData = this.filterTokens(ETHData)
    let totalFilteredTokens = filteredBaseTokenData.length

    return (
      <Wrapper>
        <TokenTableRenderer
          connected={connected}
          handleToggleAllowance={this.handleToggleAllowance}
          baseTokensData={filteredBaseTokenData}
          ETHTokenData={filteredETHData[0]}
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
          updateSelectedToken={this.updateSelectedToken}
          selectedToken={selectedToken}
          selectedTokenData={selectedTokenData}
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
1
export default TokenTable;

const Wrapper = styled.div`
  height: 100%;
`;
