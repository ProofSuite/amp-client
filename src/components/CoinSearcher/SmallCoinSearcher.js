import React from 'react';
import CoinSearcherRenderer from './CoinSearcherRenderer';
import { Card, Icon, Tab, Tabs } from '@blueprintjs/core';
import { RowSpcBtwn, ColEnd } from '../HTMLElements';
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
  selectedCoin: Object,
  selectedTabId: string,
  orderChanged: boolean,
};

class SmallCoinSearcher extends React.PureComponent<Props, State> {
  static defaultProps = {
    decimals: 5,
    small: false,
  };
  state = {
    searchFilter: '',
    filteredCoins: this.props.coinsList.btc,
    filterName: 'symbol',
    sortOrder: 'asc',
    selectedTabId: 'btc',
    selectedCoin: this.props.coinsList[0],
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

  changeSelectedCoin = coin => {
    console.log(coin);
    this.setState({ selectedCoin: coin });
  };

  render() {
    const {
      state: { selectedTabId, searchFilter, selectedCoin },
      props: { small, decimals, coinsList, toggleStar },
      onChangeSearchFilter,
      onChangeFilterName,
      onChangeSortOrder,
      changeTab,
      filterCoins,
      changeSelectedCoin,
    } = this;
    const filteredSortedCoins = filterCoins(coinsList);
    return (
      <div className="container">
        <input
          onChange={onChangeSearchFilter}
          value={searchFilter}
          className="pt-input"
          type="text"
          placeholder="Search ..."
          dir="auto"
        />
        <SelectedCoin selectedCoin={selectedCoin} />
        <Tabs id="TabsExample" selectedTabId={selectedTabId} onChange={changeTab}>
          <Tab
            id="starred"
            title={<Icon icon="star" />}
            panel={
              <CoinSearcherRenderer
                state={this.state}
                filteredCoins={filteredSortedCoins}
                changeSelectedCoin={changeSelectedCoin}
                small={true}
                decimals={decimals}
                toggleStar={toggleStar}
                onChangeSearchFilter={onChangeSearchFilter}
                onChangeFilterName={onChangeFilterName}
                onChangeSortOrder={onChangeSortOrder}
              />
            }
          />
          <Tab
            id="btc"
            title="BTC"
            panel={
              <CoinSearcherRenderer
                state={this.state}
                filteredCoins={filteredSortedCoins}
                changeSelectedCoin={changeSelectedCoin}
                small={true}
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
            title="USDT"
            panel={
              <CoinSearcherRenderer
                state={this.state}
                filteredCoins={filteredSortedCoins}
                changeSelectedCoin={changeSelectedCoin}
                small={true}
                decimals={decimals}
                toggleStar={toggleStar}
                onChangeSearchFilter={onChangeSearchFilter}
                onChangeFilterName={onChangeFilterName}
                onChangeSortOrder={onChangeSortOrder}
              />
            }
          />
        </Tabs>
      </div>
    );
  }
}

export default SmallCoinSearcher;

const SelectedCoin = ({ selectedCoin }) => (
  <div className="selected-coin">
    <RowSpcBtwn>
      <p className="pair">{selectedCoin.pair}</p>
      <ColEnd>
        <p className="price">{selectedCoin.lastPrice} / $0.08</p>
        <p>{selectedCoin.volume}</p>
      </ColEnd>
    </RowSpcBtwn>
    <RowSpcBtwn>
      <p>
        <span className="label">High: </span>
        {selectedCoin.high}
      </p>
      <p>
        <span className="label">Low: </span>
        {selectedCoin.low}
      </p>
    </RowSpcBtwn>
  </div>
);
