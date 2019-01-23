// @flow
import React from 'react';
import OrderBookRenderer from './OrderBookRenderer';
import VerticalOrderBookRenderer from './VerticalOrderBookRenderer'

import type { TokenPair } from '../../types/tokens';

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
  direction: "vertical" | "horizontal"
};

type State = {
  selectedTabId: string,
  isOpen: boolean,
};

class OrderBook extends React.Component<Props, State> {
  state = {
    isOpen: true,
    selectedTabId: 'list',
  };

  changeTab = (tabId: string) => {
    this.setState({ selectedTabId: tabId });
  };

  toggleCollapse = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { bids, asks, currentPair, select, direction } = this.props;
    const { selectedTabId, isOpen } = this.state;

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
}

export default OrderBook;
