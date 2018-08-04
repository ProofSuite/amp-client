// @flow
import React from 'react';
import TradesTableRenderer from './TradesTableRenderer';
import { sortArray } from '../../utils/helpers';

import type Trade from '../../types/trades';

type State = {
  selectedTabId: string,
  isOpen: boolean,
};

type Props = {
  trades: Array<Trade>,
  trades: Array<Trade>,
};

class TradesTable extends React.PureComponent<Props, State> {
  state = {
    selectedTabId: 'all',
    isOpen: true,
  };

  changeTab = (tabId: string) => {
    this.setState({
      selectedTabId: tabId,
    });
  };

  toggleCollapse = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const {
      props: { trades },
      state: { selectedTabId, isOpen },
      changeTab,
      toggleCollapse,
    } = this;

    const sortedMarketTradeHistory = trades;
    const sortedUserTradeHistory = trades;

    return (
      <TradesTableRenderer
        selectedTabId={selectedTabId}
        onChange={changeTab}
        tradeHistory={sortedMarketTradeHistory}
        userTradeHistory={sortedUserTradeHistory}
        isOpen={isOpen}
        toggleCollapse={toggleCollapse}
      />
    );
  }
}

export default TradesTable;
