// @flow
import React from 'react';
import TradesTableRenderer from './TradesTableRenderer';
import type Trade from '../../types/trades';
import type { TokenPair } from '../../types/tokens';

type State = {
  selectedTabId: string,
  isOpen: boolean,
};

type Props = {
  trades: Array<Trade>,
  userTrades: Array<Trade>,
  currentPair: TokenPair,
};

class TradesTable extends React.PureComponent<Props, State> {

  state = {
    selectedTabId: 'Market',
    isOpen: true,
  };

  changeTab = (tabId: string) => {
    this.setState({ selectedTabId: tabId });
  };

  toggleCollapse = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const {
      props: { trades, userTrades, currentPair },
      state: { selectedTabId, isOpen },
      changeTab,
      toggleCollapse,
    } = this;

    return (
      <TradesTableRenderer
        selectedTabId={selectedTabId}
        currentPair={currentPair}
        onChange={changeTab}
        trades={trades}
        userTrades={userTrades}
        isOpen={isOpen}
        toggleCollapse={toggleCollapse}
      />
    );
  }
}

export default TradesTable
