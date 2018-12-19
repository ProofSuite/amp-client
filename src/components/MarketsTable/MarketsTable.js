// @flow

import React from 'react';
import styled from 'styled-components';
import MarketsTableRenderer from './MarketsTableRenderer';

import type { TokenPair } from '../../types/tokens';

type Props = {
  pairs: Array<TokenPair>,
  quoteTokens: Array<string>,
  redirectToTradingPage: (string, string) => void,
  currentReferenceCurrency: string,
};

type State = {
  searchInput: string,
  selectedTab: string
};

class MarketsTable extends React.PureComponent<Props, State> {
  static defaultProps = {
    pairs: []
  }

  state = {
    searchInput: '',
    selectedTab: this.props.quoteTokens[0] 
  };

  handleSearchInputChange = (e: SyntheticInputEvent<>) => {
    this.setState({ searchInput: e.target.value });
  };

  handleChangeTab = (selectedTab: string ) => {
    this.setState({ selectedTab })
  }

  filterTokens = (pairs: Array<TokenPair>) => {
    const { searchInput, selectedTab } = this.state;

    if (selectedTab !== 'ALL') pairs = pairs.filter(pair => pair.quoteTokenSymbol === selectedTab)
    pairs = searchInput ? pairs.filter(pair => pair.baseTokenSymbol.indexOf(searchInput.toUpperCase()) > -1) : pairs

    return pairs
  };

  render() {
    let {
      pairs,
      redirectToTradingPage,
      quoteTokens,
      currentReferenceCurrency
     } = this.props;

    let {
      searchInput,
      selectedTab
     } = this.state;

     let filteredPairs = this.filterTokens(pairs)
     let tabs = quoteTokens.concat(['ALL'])

    return (
      <Wrapper>
        <MarketsTableRenderer
          pairs={filteredPairs}
          searchInput={searchInput}
          handleSearchInputChange={this.handleSearchInputChange}
          redirectToTradingPage={redirectToTradingPage}
          quoteTokens={quoteTokens}
          tabs={tabs}
          selectedTab={selectedTab}
          handleChangeTab={this.handleChangeTab}
          currentReferenceCurrency={currentReferenceCurrency}
        />
      </Wrapper>
    );
  }
}

export default MarketsTable;

const Wrapper = styled.div`
  height: 100%;
`;
