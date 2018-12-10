// @flow
import React from 'react';
import styled from 'styled-components';
import MarketsTableRenderer from './MarketsTableRenderer';

import type { TokenPair } from '../../types/tokens';

type Props = {
  pairs: Array<TokenPair>,
  quoteTokens: Array<string>,
  redirectToTradingPage: (string, string) => void,
};

type State = {
  searchInput: string,
  selectedQuoteToken: string
};

class MarketsTable extends React.PureComponent<Props, State> {

  state = {
    searchInput: '',
    selectedQuoteToken: this.props.quoteTokens[0] 
  };

  handleSearchInputChange = (e: SyntheticInputEvent<>) => {
    this.setState({ searchInput: e.target.value });
  };

  handleUpdateQuoteToken = (selectedQuoteToken: string ) => {
    this.setState({ selectedQuoteToken })
  }

  filterTokens = (pairs: Array<TokenPair>) => {
    const { searchInput, selectedQuoteToken } = this.state;

    pairs = pairs.filter(pair => pair.quoteTokenSymbol === selectedQuoteToken)
    pairs = searchInput ? pairs.filter(pair => pair.baseTokenSymbol.indexOf(searchInput.toUpperCase()) > -1) : pairs

    return pairs
  };

  render() {
    let {
      pairs,
      redirectToTradingPage,
      quoteTokens,
     } = this.props;

    let {
      searchInput,
      selectedQuoteToken
     } = this.state;

     let filteredPairs = this.filterTokens(pairs)

    return (
      <Wrapper>
        <MarketsTableRenderer
          pairs={filteredPairs}
          searchInput={searchInput}
          handleSearchInputChange={this.handleSearchInputChange}
          redirectToTradingPage={redirectToTradingPage}
          quoteTokens={quoteTokens}
          selectedQuoteToken={selectedQuoteToken}
          handleUpdateQuoteToken={this.handleUpdateQuoteToken}
        />
      </Wrapper>
    );
  }
}

export default MarketsTable;

const Wrapper = styled.div`
  height: 100%;
`;
