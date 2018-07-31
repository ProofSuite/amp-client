// @flow
import React from 'react';
import TradesTableRenderer from './TradesTableRenderer';
import { sortArray } from '../../utils/helpers';

import type Trade from '../../types/trades';

type State = {
  selectedTabId: string,
};

type Props = {
  trades: Array<Trade>,
  trades: Array<Trade>,
};

class TradesTable extends React.PureComponent<Props, State> {
  state = {
    selectedTabId: 'all',
  };

  changeTab = (tabId: string) => {
    this.setState({
      selectedTabId: tabId,
    });
  };

  render() {
    const {
      props: { trades },
      state: { selectedTabId },
      changeTab,
    } = this;

    const sortedMarketTradeHistory = trades;
    const sortedUserTradeHistory = trades;

    return (
      <TradesTableRenderer
        selectedTabId={selectedTabId}
        onChange={changeTab}
        tradeHistory={sortedMarketTradeHistory}
        userTradeHistory={sortedUserTradeHistory}
      />
    );
  }
}

export default TradesTable;
