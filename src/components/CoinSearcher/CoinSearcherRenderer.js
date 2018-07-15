// @flow

import React from 'react';
import CoinSearch from './CoinSearch';
import { Card, Icon, Tab, Tabs } from '@blueprintjs/core';
import { filterer, getObjectFromProperty, sortArray } from '../../utils/helpers';

type Props = {
  loading: boolean,
  coinsList: Object,
  small: boolean,
  decimals: number,
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

class CoinSearchRenderer extends React.PureComponent<Props, State> {
  static defaultProps = {
    decimals: 2,
    small: false,
  };
  state = {
    coinsList: this.props.coinsList.btc,
    searchFilter: '',
    filteredCoins: this.props.coinsList.btc,
    filterName: 'name',
    sortOrder: 'asc',
    selectedTabId: 'btc',
    orderChanged: false,
  };

  toggleStar = (name: string) => {
    let coin = getObjectFromProperty(this.state.filteredCoins, 'name', name);
    if (coin) {
      coin.starred = !coin.starred;
    }
    this.forceUpdate();
  };
  onChangeSearchFilter = (e: SyntheticInputEvent<>) => {
    let X;
    if (e.target.value) {
      X = this.state.coinsList.filter(function(coin) {
        return coin.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
      });
    } else {
      X = this.state.coinsList;
    }
    this.setState({
      searchFilter: e.target.value,
      filteredCoins: X,
    });
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
    this.setState({
      sortOrder: value,
    });
  };
  changeTab = (tabId: string) => {
    let filteredCoins;
    if (tabId !== 'starred') {
      filteredCoins = this.props.coinsList.btc;
    } else {
      filteredCoins = this.props.coinsList.btc;
    }
    this.setState({
      selectedTabId: tabId,
      filteredCoins: filteredCoins,
    });
  };

  render() {
    const {
      state: { selectedTabId, searchFilter, sortOrder, filterName, filteredCoins },
      props: { loading, small, decimals },
      toggleStar,
      onChangeSearchFilter,
      onChangeFilterName,
      onChangeSortOrder,
      changeTab,
    } = this;
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
              <CoinSearch
                state={this.state}
                filteredCoins={sortArray(filteredCoins, filterName, sortOrder).filter(coin =>
                  filterer(selectedTabId === 'starred', coin, 'starred', true)
                )}
                loading={loading}
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
              <CoinSearch
                state={this.state}
                filteredCoins={sortArray(filteredCoins, filterName, sortOrder).filter(coin =>
                  filterer(selectedTabId === 'starred', coin, 'starred', true)
                )}
                loading={loading}
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
              <CoinSearch
                state={this.state}
                filteredCoins={sortArray(filteredCoins, filterName, sortOrder).filter(coin =>
                  filterer(selectedTabId === 'starred', coin, 'starred', true)
                )}
                loading={loading}
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

CoinSearchRenderer.defaultProps = {
  loading: false,
  style: {},
};
export default CoinSearchRenderer;
