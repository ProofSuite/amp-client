import React from 'react';
import CoinSearcherRenderer from './CoinSearcherRenderer';
import { Card, Icon, Tab, Tabs } from '@blueprintjs/core';
import { filterer, getObjectFromProperty, sortArray } from '../../utils/helpers';

type Props = {
  loading: boolean,
  coinsList: Object,
  toggleStar: string => void,
};

type State = {
  coinsList: Array<Object>,
  searchFilter: string,
  filteredCoins: Array<Object>,
  filterName: string,
  sortOrder: string,
  selectedTabId: string,
  orderChanged: boolean,
};

class CoinSearcher extends React.PureComponent<Props, State> {
  static defaultProps = {
    decimals: 2,
    small: false,
  };
  state = {
    searchFilter: '',
    filteredCoins: this.props.coinsList.btc,
    filterName: 'name',
    sortOrder: 'asc',
    selectedTabId: 'btc',
    orderChanged: false,
  };

  onChangeSearchFilter = (e: SyntheticInputEvent<>) => {
    this.setState({ searchFilter: e.target.value });
  };
  onChangeFilterName = (value: string) => {
    if (value === this.state.filterName && !this.state.orderChanged) {
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
  changeTab = (tabId: string) => {
    this.setState({ selectedTabId: tabId });
  };
  filterCoins = coinsList => {
    let X = [];
    const { searchFilter, selectedTabId, filterName, sortOrder } = this.state;
    if (searchFilter) {
      X = coinsList.filter(function(coin) {
        return coin.name.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1;
      });
    } else {
      X = coinsList;
    }
    X = sortArray(X, filterName, sortOrder);
    X = X.filter(coin => filterer(selectedTabId === 'starred', coin, 'starred', true));
    return X;
  };

  render() {
    const {
      state: { selectedTabId, searchFilter },
      props: {
        small,
        decimals,
        coinsList: { btc: coins },
        toggleStar,
      },
      onChangeSearchFilter,
      onChangeFilterName,
      onChangeSortOrder,
      changeTab,
      filterCoins,
    } = this;
    const filteredSortedCoins = filterCoins(coins);
    return (
      <Card
        style={{ width: '100%', margin: '10px' }}
        className={small ? 'small-searcher coin-searcher pt-dark' : 'coin-searcher pt-dark'}
      >
        <Tabs id="TabsExample" selectedTabId={selectedTabId} onChange={changeTab}>
          <input
            onChange={onChangeSearchFilter}
            value={searchFilter}
            className="pt-input"
            type="text"
            placeholder="Search ..."
            dir="auto"
          />
          <Tab
            id="btc"
            title="BTC Market"
            panel={
              <CoinSearcherRenderer
                state={this.state}
                filteredCoins={filteredSortedCoins}
                small={small}
                decimals={decimals}
                toggleStar={toggleStar}
                onChangeSearchFilter={onChangeSearchFilter}
                onChangeFilterName={onChangeFilterName}
                onChangeSortOrder={onChangeSortOrder}
              />
            }
          />
          <Tab
            id="usdt"
            title="USDT Market"
            panel={
              <CoinSearcherRenderer
                state={this.state}
                filteredCoins={filteredSortedCoins}
                small={small}
                decimals={decimals}
                toggleStar={toggleStar}
                onChangeSearchFilter={onChangeSearchFilter}
                onChangeFilterName={onChangeFilterName}
                onChangeSortOrder={onChangeSortOrder}
              />
            }
          />
          <Tab
            id="starred"
            title={<Icon icon="star" />}
            panel={
              <CoinSearcherRenderer
                state={this.state}
                filteredCoins={filteredSortedCoins}
                small={small}
                decimals={decimals}
                toggleStar={toggleStar}
                onChangeSearchFilter={onChangeSearchFilter}
                onChangeFilterName={onChangeFilterName}
                onChangeSortOrder={onChangeSortOrder}
              />
            }
          />
        </Tabs>
      </Card>
    );
  }
}

export default CoinSearcher;
