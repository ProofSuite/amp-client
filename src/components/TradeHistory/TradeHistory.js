import React from 'react';
import TradeHistoryRenderer from './TradeHistoryRenderer';
import { Button, Card, Tab, Tabs } from '@blueprintjs/core';
import { sortArray } from '../../utils/helpers';
import type { TradeHistoryState } from '../../types/tradeHistory';

type State = {
  selectedTabId: string,
};

class TradeHistory extends React.PureComponent<TradeHistoryState, State> {
  static defaultProps = { decimals: 5, loggedIn: true };

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
      props: { marketTradeHistory, userTradeHistory, decimals, loggedIn },
      state: { selectedTabId },
      changeTab,
      sortTradeHistory,
    } = this;

    const sortedMarketTradeHistory = sortTradeHistory(marketTradeHistory);
    const sortedUserTradeHistory = sortTradeHistory(userTradeHistory);

    return (
      <Card className="pt-dark trade-history">
        <h5>Trade History</h5>
        <Tabs id="TabsExample" selectedTabId={selectedTabId} onChange={changeTab}>
          <Tab
            id="all"
            title="Market"
            panel={<TradeHistoryRenderer tradeHistory={sortedMarketTradeHistory} decimals={decimals} />}
          />
          <Tab
            id="mine"
            title="Mine"
            panel={
              loggedIn ? <TradeHistoryRenderer tradeHistory={sortedUserTradeHistory} decimals={decimals} /> : <Login />
            }
          />
        </Tabs>
      </Card>
    );
  }
}

export default TradeHistory;

const Login = () => <Button large={true} intent="primary" text="Login" />;
