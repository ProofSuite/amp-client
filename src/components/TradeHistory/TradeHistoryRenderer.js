//@flow
import React from 'react';
import TradeHistory from './TradeHistory';
import { Card, Tab, Tabs, Button } from '@blueprintjs/core';
import { sortArray } from '../../utils/helpers';

type Props = {
  tradeHistory: Array<Object>,
  loading: boolean,
  decimals?: number,
  loggedIn: boolean,
};
type State = {
  selectedTabId: string,
};

class TradeHistoryRenderer extends React.PureComponent<Props, State> {
  static defaultProps = {
    decimals: 7,
  };
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
        <Tabs style={{ height: '100%' }} id="TabsExample" selectedTabId={selectedTabId} onChange={changeTab}>
          <Tab
            id="all"
            title="Market"
            panel={<TradeHistory loading={loading} tradeHistory={tradeHistory} decimals={decimals} />}
          />
          <Tab
            id="mine"
            title="Mine"
            style={{ display: 'flex', alignItems: 'flex-end' }}
            panel={
              loggedIn ? (
                <TradeHistory
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

export default TradeHistoryRenderer;

const Login = () => <Button large={true} intent="primary" text="Login" />;
