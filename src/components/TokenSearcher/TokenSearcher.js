//@flow
import React from 'react';
import TokenSearcherRenderer from './TokenSearcherRenderer';
import { sortTable } from '../../utils/helpers';
import { ContextMenuTarget, Menu, MenuItem } from '@blueprintjs/core'

//TODO not sure exactly where to define this type.
type Token = {
  pair: string,
  lastPrice: string,
  change: string,
  low: string,
  high: string,
  volume: string,
  base: string,
  quote: string,
  favorited: boolean,
};

type Props = {
  tokenPairsByQuoteToken: { [string]: Array<Token> },
  currentPair: Object,
  baseTokenBalance: number,
  quoteTokenBalance: number,
  baseTokenAvailableBalance: number,
  quoteTokenAvailableBalance: number,
  updateFavorite: (string, boolean) => void,
  updateCurrentPair: string => void,
  onCollapse: string => void,
  onExpand: string => void,
  onResetDefaultLayout: string => void
};

type State = {
  quoteTokens: Array<string>,
  searchFilter: string,
  selectedPair: ?Token,
  filterName: string,
  sortOrder: string,
  selectedTabId: string,
  orderChanged: boolean,
  isOpen: boolean,
};

class TokenSearcher extends React.PureComponent<Props, State> {
  state = {
    quoteTokens: [],
    searchFilter: '',
    selectedPair: null,
    filterName: 'symbol',
    sortOrder: 'asc',
    selectedTabId: '',
    orderChanged: false,
    isOpen: true,
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    let { tokenPairsByQuoteToken, currentPair } = nextProps;
    const quoteTokens: Array<string> = Object.keys(tokenPairsByQuoteToken);
    const currentQuoteToken = currentPair.quoteTokenSymbol
    
    // const currentQuoteToken = quoteTokens[0];
    const defaultPairs = tokenPairsByQuoteToken[currentQuoteToken];
    const selectedPair = defaultPairs.filter(pair => pair.pair === currentPair.pair)[0];

    if (!prevState.selectedPair) {
      return {
        quoteTokens: quoteTokens,
        selectedTabId: currentQuoteToken,
        selectedPair: selectedPair, // selectedPair: defaultPairs[0],
      };
    } else return null;
  }

  onChangeSearchFilter = ({ target }: SyntheticInputEvent<>) => {
    this.setState({ searchFilter: target.value });
  };

  onChangeFilterName = ({ target }: SyntheticInputEvent<>) => {
    let value = target.className;
    const { filterName, orderChanged } = this.state;

    if (value === filterName && !orderChanged) {
      this.setState({
        filterName: value,
        sortOrder: 'desc',
        orderChanged: true,
      });
    } else {
      this.setState({
        filterName: value,
        sortOrder: 'asc',
        orderChanged: false,
      });
    }
  };

  onChangeSortOrder = (value: string) => {
    this.setState({ sortOrder: value });
  };

  toggleCollapse = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    this.props.onCollapse('tokenSearcher')
  };
  

  expand = () => {
    this.props.onExpand('tokenSearcher')
  }

  changeTab = (tabId: string) => {
    this.setState({ selectedTabId: tabId });
  };

  renderContextMenu = () => {
    const {
      state: { isOpen },
      props: { onResetDefaultLayout },
      expand,
      toggleCollapse
    } = this

    return (
        <Menu>
            <MenuItem icon="page-layout" text="Reset Default Layout" onClick={onResetDefaultLayout} />
            <MenuItem icon={isOpen ? "chevron-up" : "chevron-down"} text={isOpen ? "Close" : "Open"} onClick={toggleCollapse} />
            <MenuItem icon="zoom-to-fit" text="Fit" onClick={expand} />
        </Menu>
    );
  }

  filterTokens = () => {
    let result = { favorites: [] };
    const { tokenPairsByQuoteToken } = this.props;
    const { searchFilter, filterName, sortOrder } = this.state;

    for (let quote of Object.keys(tokenPairsByQuoteToken)) {
      result[quote] = tokenPairsByQuoteToken[quote].filter(pair => {
        return pair.base.indexOf(searchFilter.toUpperCase()) > -1;
      });

      result['favorites'] = sortTable(
        result['favorites'].concat(tokenPairsByQuoteToken[quote].filter(pair => pair.favorited)),
        filterName,
        sortOrder
      );
      result[quote] = sortTable(result[quote], filterName, sortOrder);
    }

    return result;
  };

  changeSelectedToken = (token: Token) => {
    this.setState({ selectedPair: token });
    this.props.updateCurrentPair(token.pair);
  };

  render() {
    const {
      state: { 
        selectedTabId, 
        searchFilter, 
        selectedPair, 
        sortOrder, 
        filterName, 
        quoteTokens, 
        isOpen
      },
      props: { 
        updateFavorite, 
        baseTokenBalance, 
        quoteTokenBalance, 
        baseTokenAvailableBalance, 
        quoteTokenAvailableBalance,
      },
      onChangeSearchFilter,
      onChangeFilterName,
      onChangeSortOrder,
      changeTab,
      toggleCollapse,
      changeSelectedToken,
      expand,
      renderContextMenu
    } = this;

    const filteredPairs = this.filterTokens();

    //Temporary loading condition
    let loading = typeof selectedPair === 'undefined';

    return (
      <TokenSearcherRenderer
        loading={loading}
        quoteTokens={quoteTokens}
        selectedTabId={selectedTabId}
        searchFilter={searchFilter}
        baseTokenBalance={baseTokenBalance}
        quoteTokenBalance={quoteTokenBalance}
        // silence-error: couldn't resolve selectedPair === undefined case
        selectedPair={selectedPair}
        sortOrder={sortOrder}
        isOpen={isOpen}
        filterName={filterName}
        filteredPairs={filteredPairs}
        updateFavorite={updateFavorite}
        onChangeSearchFilter={onChangeSearchFilter}
        onChangeFilterName={onChangeFilterName}
        onChangeSortOrder={onChangeSortOrder}
        changeTab={changeTab}
        toggleCollapse={toggleCollapse}
        changeSelectedToken={changeSelectedToken}
        baseTokenAvailableBalance={baseTokenAvailableBalance}
        quoteTokenAvailableBalance={quoteTokenAvailableBalance}
        expand={expand}
        onContextMenu={renderContextMenu}
      />
    );
  }
}

export default ContextMenuTarget(TokenSearcher);
