// @flow
import React from 'react';
import HorizontalOrderBook from './HorizontalOrderBook';
import VerticalOrderBook from './VerticalOrderBook'
import type { TokenPair } from '../../types/tokens';
import { AutoSizer } from 'react-virtualized'


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
  onCollapse: string => void,
  onExpand: string => void,
  onResetDefaultLayout: void => void
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

  expand = () => {
    this.props.onExpand('orderBook')
  }

  renderOrderBook = (width: number, height: number) => {
    const {
      props: { bids, asks, currentPair, select, onResetDefaultLayout },
      state: { selectedTabId, isOpen, directionSetting },
      changeTab,
      toggleCollapse,
      expand,
    } = this

    const direction = (width < 500) ? "vertical" : directionSetting

    return {
      "vertical": 
        <VerticalOrderBook 
          bids={bids}
          asks={asks}
          currentPair={currentPair}
          onSelect={select}
          selectedTabId={selectedTabId}
          isOpen={isOpen}
          changeTab={changeTab}
          toggleCollapse={toggleCollapse}
          expand={expand}
          onResetDefaultLayout={onResetDefaultLayout}
          
        />,
      "horizontal": 
        <HorizontalOrderBook 
          bids={bids}
          asks={asks}
          currentPair={currentPair}
          onSelect={select}
          selectedTabId={selectedTabId}
          isOpen={isOpen}
          changeTab={changeTab}
          toggleCollapse={toggleCollapse}
          expand={expand}
          onResetDefaultLayout={onResetDefaultLayout}
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
