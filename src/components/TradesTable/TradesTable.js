// @flow
import React from 'react';
import TradesTableRenderer from './TradesTableRenderer';
import type Trade from '../../types/trades';
import type { TokenPair } from '../../types/tokens';

import { ETHERSCAN_TX_URL } from '../../config/urls'

type State = {
  selectedTabId: string,
  isOpen: boolean,
};

type Props = {
  trades: Array<Trade>,
  userTrades: Array<Trade>,
  currentPair: TokenPair,
  onCollapse: string => void,
  onExpand: string => void
};

class TradesTable extends React.PureComponent<Props, State> {

  state = {
    selectedTabId: 'Market',
    isOpen: true,
  };

  changeTab = (tabId: string) => {
    this.setState({ selectedTabId: tabId });
  };

  openEtherscanLink = (txHash: string) => {
    if (txHash !== "") window.open(`${ETHERSCAN_TX_URL}/${txHash}`)
  }

  toggleCollapse = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    this.props.onCollapse('tradesTable')
  };

  expand = () => {
    this.props.onExpand('tradesTable')
  }

  render() {
    const {
      props: { trades, userTrades, currentPair },
      state: { selectedTabId, isOpen },
      changeTab,
      toggleCollapse,
      openEtherscanLink,
      expand
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
        openEtherscanLink={openEtherscanLink}
        expand={expand}
      />
    );
  }
}

export default TradesTable
