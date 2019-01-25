// @flow
import React from 'react';
import OrderBookRenderer from './OrderBookRenderer';
import VerticalOrderBookRenderer from './VerticalOrderBookRenderer'

import type { TokenPair } from '../../types/tokens';
import { AutoSizer } from 'react-virtualized'

import styled from 'styled-components'

type BidOrAsk = {
  price: number,
  amount: number,
  total: number,
};

type Props = {
  loading: boolean,
  asks: Array<BidOrAsk>,
  bids: Array<BidOrAsk>,
  currentPair: TokenPair,
  select: BidOrAsk => void,
  onCollapse: string => void
};

type State = {
  selectedTabId: string,
  isOpen: boolean,
  directionSetting: "vertical" | "horizontal"
};

class OrderBook extends React.Component<Props, State> {
  state = {
    isOpen: true,
    selectedTabId: 'list',
    directionSetting: 'horizontal'
  };

  changeTab = (tabId: string) => {
    this.setState({ selectedTabId: tabId });
  };

  toggleCollapse = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    this.props.onCollapse('orderBook')
  };

  renderOrderBook = (width: number, height: number) => {
    const { bids, asks, currentPair, select } = this.props;
    const { selectedTabId, isOpen, directionSetting } = this.state;  
    const direction = (width < 500) ? "vertical" : directionSetting

    return {
      "vertical": 
        <VerticalOrderBookRenderer 
          bids={bids}
          asks={asks}
          currentPair={currentPair}
          onSelect={select}
          selectedTabId={selectedTabId}
          isOpen={isOpen}
          changeTab={this.changeTab}
          toggleCollapse={this.toggleCollapse}
        />,
      "horizontal": 
        <OrderBookRenderer 
          bids={bids}
          asks={asks}
          currentPair={currentPair}
          onSelect={select}
          selectedTabId={selectedTabId}
          isOpen={isOpen}
          changeTab={this.changeTab}
          toggleCollapse={this.toggleCollapse}
        />
    }[direction]
  }

  render() {
    return (
      <AutoSizer style={{ width: '100%', height: '100%' }}>
        {({ width, height }) => {
          return this.renderOrderBook(width, height)
        }}
      </AutoSizer>
    )    
  }
}

export default OrderBook;
