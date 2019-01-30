// @flow
import React from 'react';
import TradesTableRenderer from './TradesTableRenderer';
import { ETHERSCAN_TX_URL } from '../../config/urls'
import { ContextMenuTarget, Menu, MenuItem } from '@blueprintjs/core'

import type Trade from '../../types/trades';
import type { TokenPair } from '../../types/tokens';
import type { Node } from 'react'

type State = {
  selectedTabId: string,
  isOpen: boolean,
};

type Props = {
  authenticated: boolean,
  trades: Array<Trade>,
  userTrades: Array<Trade>,
  currentPair: TokenPair,
  onCollapse: string => void,
  onExpand: string => void,
  onResetDefaultLayout: void => void
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

  renderContextMenu = () => {
    const {
      state: { isOpen },
      props: { onResetDefaultLayout },
      expand,
      toggleCollapse
    } = this

    return (
        <Menu>
            <MenuItem icon="page-layout" text="Reset Default Layout" onClick={onResetDefaultLayout} />
            <MenuItem icon={isOpen ? "chevron-up" : "chevron-down"} text={isOpen ? "Close" : "Open"} onClick={toggleCollapse} />
            <MenuItem icon="zoom-to-fit" text="Fit" onClick={expand} />
        </Menu>
    );
  }

  

  render() {
    const {
      props: { trades, userTrades, currentPair, authenticated },
      state: { selectedTabId, isOpen },
      changeTab,
      toggleCollapse,
      openEtherscanLink,
      expand,
      renderContextMenu
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
        onContextMenu={renderContextMenu}
        authenticated={authenticated}
      />
    );
  }
}

export default ContextMenuTarget(TradesTable)
