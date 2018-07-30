// @flow
import React from 'react';
import TradeHistoryRenderer from './TradeHistoryRenderer';
import { sortArray } from '../../utils/helpers';

type State = {
  selectedTabId: string,
};

type Props = {
  marketTradeHistory: Array<Object>,
  userTradeHistory: Array<Object>,
};

class TradeHistory extends React.PureComponent<Props, State> {
  state = {
    selectedTabId: 'all',
  };

  changeTab = (tabId: string) => {
    this.setState({
      selectedTabId: tabId,
    });
  };

  sortTradeHistory = (tradeHistory: any) => {
    return sortArray(tradeHistory, 'time', 'desc');
  };

  render() {
    const {
      props: { marketTradeHistory, userTradeHistory },
      state: { selectedTabId },
      changeTab,
      sortTradeHistory,
    } = this;

    const sortedMarketTradeHistory = sortTradeHistory(marketTradeHistory);
    const sortedUserTradeHistory = sortTradeHistory(userTradeHistory);

    return (
      <TradeHistoryRenderer
        selectedTabId={selectedTabId}
        onChange={changeTab}
        tradeHistory={sortedMarketTradeHistory}
        userTradeHistory={sortedUserTradeHistory}
      />
    );
  }
}

export default TradeHistory;
