//@flow
import React from 'react';
import TradeHistoryRenderer from './TradeHistoryRenderer';
import { Card, Tab, Tabs, Button } from '@blueprintjs/core';
import { sortArray } from '../../utils/helpers';

type Props = {
  tradeHistory: Array<Object>,
  loading: boolean,
  decimals: number,
  loggedIn: boolean,
};
type State = {
  selectedTabId: string,
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

  render() {
    const {
      props: { loading, tradeHistory, decimals, loggedIn },
      state: { selectedTabId },
      changeTab,
    } = this;
    return (
      <Card className="pt-dark trade-history">
        <h5>Trade History</h5>
        <Tabs id="TabsExample" selectedTabId={selectedTabId} onChange={changeTab}>
          <Tab
            id="all"
            title="Market"
            panel={<TradeHistoryRenderer loading={loading} tradeHistory={tradeHistory} decimals={decimals} />}
          />
          <Tab
            id="mine"
            title="Mine"
            panel={
              loggedIn ? (
                <TradeHistoryRenderer
                  loading={loading}
                  tradeHistory={sortArray(tradeHistory, 'time', 'desc')}
                  decimals={decimals}
                />
              ) : (
                <Login />
              )
            }
          />
        </Tabs>
      </Card>
    );
  }
}

export default TradeHistory;

const Login = () => <Button large={true} intent="primary" text="Login" />;
