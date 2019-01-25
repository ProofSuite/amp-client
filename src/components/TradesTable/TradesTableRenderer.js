// @flow
import React from 'react';
import styled from 'styled-components';
import { formatNumber } from 'accounting-js'
import { relativeDate } from '../../utils/helpers'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { 
  Loading, 
  Colors, 
  Text, 
  CenteredMessage,
  SmallText,
  Hideable
} from '../Common';

import { 
  Icon, 
  Button, 
  Card, 
  Tabs, 
  Tab, 
  Collapse
} from '@blueprintjs/core';

import type { Trade } from '../../types/trades';
import type { TokenPair } from '../../types/tokens';
import { AutoSizer } from 'react-virtualized'

type Props = {
  selectedTabId: string,
  currentPair: TokenPair,
  onChange: string => void,
  trades: Array<Trade>,
  userTrades: Array<Trade>,
  toggleCollapse: (SyntheticEvent<>) => void,
  openEtherscanLink: string => void,
  isOpen: boolean,
};

const TradesTableRenderer = (props: Props) => {
  const { 
    currentPair, 
    isOpen, 
    selectedTabId, 
    onChange, 
    trades, 
    userTrades, 
    toggleCollapse,
    openEtherscanLink
  } = props;

  return (
    <AutoSizer style={{ width: '100%', height: '100%' }}>
        {({ width, height }) => (
          <Wrapper>
            <TradesTableHeader>
              <Heading>
                Trades
                <Text muted>
                  {' '}
                  ({currentPair.baseTokenSymbol} / {currentPair.quoteTokenSymbol})
                </Text>
              </Heading>
              <Button 
                icon={isOpen ? 'chevron-up' : 'chevron-down'} 
                minimal 
                onClick={toggleCollapse}
              />
            </TradesTableHeader>
            <Collapse isOpen={isOpen}>
              <Tabs 
                selectedTabId={selectedTabId} 
                onChange={onChange}
              >
                <Tab 
                  id="Market"
                  title="Market"
                  panel={
                    <MarketTradesPanel 
                      trades={trades} 
                      openEtherscanLink={openEtherscanLink}
                      width={width}
                    />
                  }
                />
                <Tab
                  id="User"
                  title="User"
                  panel={
                    <UserTradesPanel 
                      trades={userTrades} 
                      openEtherscanLink={openEtherscanLink} 
                      width={width}
                    />
                  }
                />
              </Tabs>
            </Collapse>
          </Wrapper>
        )}
      </AutoSizer>
  )
};

const MarketTradesPanel = (props: *) => {
  const { trades, openEtherscanLink, width } = props;

  if (!trades) return <Loading />
  if (trades.length === 0) return <CenteredMessage message="No trades for this token pair" />

  return (
      <React.Fragment>
        <ListHeader>
          <HeadingRow>
            <HeaderCell>PRICE</HeaderCell>
            <HeaderCell>AMOUNT</HeaderCell>
            <Hideable hiddenIf={width < 600}>
              <HeaderCell >STATUS</HeaderCell>
            </Hideable>
            <Hideable hiddenIf={width < 400}>
              <HeaderCell cellName="time">TIME</HeaderCell>
            </Hideable>
          </HeadingRow>
        </ListHeader>
        <ListBody>
        <ReactCSSTransitionGroup transitionName="flash-buy">
          {trades.map((trade, index) => (
            <Row 
              color={trade.change === 'positive' ? Colors.BUY_MUTED : Colors.SELL_MUTED} 
              key={trade.hash}
              onClick={() => openEtherscanLink(trade.txHash)}
              >
                <Cell color={trade.change === 'positive' ? Colors.BUY : Colors.SELL}>
                <Icon icon={trade.change === 'positive' ? 'chevron-up' : 'chevron-down'} iconSize={14}/>
                <SmallText color={trade.change === 'positive' ? Colors.BUY : Colors.SELL}>
                  {formatNumber( trade.price, { precision: 5 })}
                </SmallText>
              </Cell>
              <Cell>
                <SmallText muted>
                  {formatNumber(trade.amount, { precision: 3 })}
                </SmallText>
              </Cell>
              <Hideable hiddenIf={width < 600}>
                <Cell>
                  <SmallText muted>{trade.status}</SmallText>
                </Cell>
              </Hideable>
              <Hideable hiddenIf={width < 400}>
                <Cell cellName="time">
                  <SmallText muted>{relativeDate(trade.time)}</SmallText>
                </Cell>
              </Hideable>
            </Row>
          ))}
        </ReactCSSTransitionGroup>
        </ListBody>
      </React.Fragment>
  );
};

const UserTradesPanel = (props: *) => {
  const { trades, width } = props;

  if (!trades) return <Loading />
  if (trades.length === 0) return <CenteredMessage message="No trades for this token pair" />

  return (
    <React.Fragment>
      <ListHeader>
        <HeadingRow>
          <HeaderCell>PRICE</HeaderCell>
          <HeaderCell>AMOUNT</HeaderCell>
          <Hideable hiddenIf={width < 500}> 
            <HeaderCell>STATUS</HeaderCell>
          </Hideable>
          <HeaderCell cellName="time">TIME</HeaderCell>
        </HeadingRow>
      </ListHeader>
      <ListBody>
      <ReactCSSTransitionGroup transitionName="flash-buy">
        {trades.map((trade, index) => (
          <Row color={trade.status === 'EXECUTED' ? Colors.BUY_MUTED : Colors.SELL_MUTED} key={trade.hash}>
            <Cell>
              <SmallText muted>
                {formatNumber( trade.price, { precision: 5 })}
              </SmallText>
            </Cell>
            <Cell>
              <SmallText muted>
                {formatNumber(trade.amount, { precision: 3 })}
              </SmallText>
            </Cell>
            <Hideable hiddenIf={width < 500}>
              <Cell>
                <SmallText muted>{trade.status}</SmallText>
              </Cell>
            </Hideable>
            <Cell cellName="time">
              <SmallText muted>{relativeDate(trade.time)}</SmallText>
            </Cell>
          </Row>
        ))}
      </ReactCSSTransitionGroup>
      </ListBody>
    </React.Fragment>
  );
};

const TradesTableHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 10px;
  align-items: center;
`;

const Heading = styled.h3`
  margin: auto;
`;

const Wrapper = styled(Card)`
  margin: auto;
  height: 100% !important;
  overflow-y: scroll;
`;

const ListHeader = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px;
  padding-left: 0px !important;
  margin-left: 0px !important;
`;

const ListBody = styled.ul`
  height: 90%;
  margin: 0;
  padding-left: 0px !important;
  margin-left: 0px !important;
`;

const HeadingRow = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  padding-left: 10px;
  padding-left: 0px !important;
  margin-left: 0px !important;
`;

const Row = styled.li.attrs({
  className: 'row',
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  border: 1px transparent;
  border-radius: 2px;
  box-shadow: inset 0px 1px 0 0 rgba(16, 22, 26, 0.15);
  padding: 7px;
  margin-left: 0px !important;
  padding-left: 10px !important;
  background-color: ${props => props.color};
  cursor: pointer;

  &:hover {
    background-color: ${Colors.BLUE_MUTED};
    position: relative;
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 0 1px rgb(49, 64, 76), -1px 10px 4px rgba(16, 22, 26, 0.1),
      1px 18px 24px rgba(16, 22, 26, 0.2);
    box-shadow: inset 0 0 0 1px rgb(49, 64, 76), -1px 5px 4px rgba(16, 22, 26, 0.1), 1px 7px 24px rgba(16, 22, 26, 0.2);
    z-index: 1;
  }

`;

const Cell = styled.span`
  color: ${props => props.color ? props.color : Colors.TEXT_MUTED};
  min-width: 100px;
  width: ${props => (props.cellName === 'time' ? '20%' : '15%')};  
`;

const HeaderCell = styled.span`
  min-width: 100px;
  width: ${props => (props.cellName === 'time' ? '20%' : '15%')};
`;

export default TradesTableRenderer;
