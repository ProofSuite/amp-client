// @flow
import React from 'react';
import styled from 'styled-components';
import MarketsTableRenderer from './MarketsTableRenderer';
import type { Token } from '../../types/tokens';

type Props = {
  pairs: Array<Object>,
  redirectToTradingPage: string => void,
};

type State = {
  searchInput: string,
};

class MarketsTable extends React.PureComponent<Props, State> {

  state = {
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
      pairs,
      redirectToTradingPage,
     } = this.props;

    let {
      searchInput,
     } = this.state;

     let filteredPairs = this.filterTokens(pairs)

    
    return (
      <Wrapper>
        <MarketsTableRenderer
          pairs={filteredPairs}
          searchInput={searchInput}
          handleSearchInputChange={this.handleSearchInputChange}
          redirectToTradingPage={redirectToTradingPage}
        />
      </Wrapper>
    );
  }
}

export default MarketsTable;

const Wrapper = styled.div`
  height: 100%;
`;
