// @flow
import React from 'react';
import styled from 'styled-components';
import MarketsTableRenderer from './MarketsTableRenderer';
import type { Token } from '../../types/tokens';

type TokenData = {
  symbol: string,
  address: string,
  balance: string,
  allowed: boolean,
  allowancePending: boolean
}

type Props = {
  connected: boolean,
  toggleAllowance: string => void,
  tokenData: Array<TokenData>,
  baseTokens: Array<string>,
  quoteTokens: Array<string>,
  redirectToTradingPage: string => void,
};

type State = {
  selectedToken: ?Token,
  hideZeroBalanceToken: boolean,
  searchInput: string,
};

class MarketsTable extends React.PureComponent<Props, State> {
  state = {
    selectedToken: null,
    searchInput: '',
  };

  handleSearchInputChange = (e: SyntheticInputEvent<>) => {
    this.setState({ searchInput: e.target.value });
  };

  filterTokens = (data: Array<TokenData>) => {
    const { searchInput } = this.state;
    if (searchInput) data = data.filter(token => token.symbol.indexOf(searchInput.toUpperCase()) > -1);
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
     } = this.props;

    let {
      selectedToken,
      searchInput,
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
        <MarketsTableRenderer
          connected={connected}
          baseTokensData={filteredBaseTokenData}
          quoteTokensData={filteredQuoteTokenData}
          ETHTokenData={filteredETHTokenData[0]}
          WETHTokenData={filteredWETHTokenData[0]}
          tokenDataLength={tokenData.length}
          searchInput={searchInput}
          handleSearchInputChange={this.handleSearchInputChange}
          toggleAllowance={toggleAllowance}
          redirectToTradingPage={redirectToTradingPage}
          totalFilteredTokens={totalFilteredTokens}
        />
      </Wrapper>
    );
  }
}

export default MarketsTable;

const Wrapper = styled.div`
  height: 100%;
`;
