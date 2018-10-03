// @flow
import React from 'react';
import styled from 'styled-components';
import { Loading, Colors, Text } from '../Common';
import { Button, Card, Tabs, Tab, Collapse } from '@blueprintjs/core';
import { format } from 'date-fns';

import type { Trade } from '../../types/trades';
import type { TokenPair } from '../../types/tokens';

type Props = {
  selectedTabId: string,
  currentPair: TokenPair,
  onChange: string => void,
  trades: Array<Trade>,
  userTrades: Array<Trade>,
  toggleCollapse: (SyntheticEvent<>) => void,
  isOpen: boolean,
};

const TradesTableRenderer = (props: Props) => {
  const { currentPair, isOpen, selectedTabId, onChange, trades, userTrades, toggleCollapse } = props;

  return (
    <div>
      <Wrapper className="trade-history">
        <TradesTableHeader>
          <Heading>
            Trades
            <Text muted>
              {' '}
              ({currentPair.baseTokenSymbol} / {currentPair.quoteTokenSymbol})
            </Text>
          </Heading>
          <Button icon={isOpen ? 'chevron-up' : 'chevron-down'} minimal onClick={toggleCollapse} />
        </TradesTableHeader>
        <Collapse isOpen={isOpen}>
          <Tabs selectedTabId={selectedTabId} onChange={onChange}>
            <Tab id="Market" title="Market" panel={<MarketTradesPanel trades={trades} />} />
            <Tab id="Yours" title="Yours" panel={<UserTradesPanel trades={userTrades} />} />
          </Tabs>
        </Collapse>
      </Wrapper>
    </div>
  );
};

const MarketTradesPanel = (props: { trades: Array<Trade> }) => {
  const { trades } = props;

  return trades.length < 1 ? (
    <Loading />
  ) : (
    <div>
      <ListHeader className="heading">
        <HeadingRow>
          <HeaderCell>AMOUNT</HeaderCell>
          <HeaderCell>PRICE</HeaderCell>
          <HeaderCell>STATUS</HeaderCell>
          <HeaderCell cellName="time">TIME</HeaderCell>
        </HeadingRow>
      </ListHeader>
      <ListBody className="list">
        {trades.map((trade, index) => {
          return (
            <TradesPanelRow change={trade.change} key={index}>
              <Cell>{trade.amount}</Cell>
              <Cell>{trade.price}</Cell>
              <Cell status={trade.status}>{trade.status}</Cell>
              <Cell cellName="time" muted>
                {format(trade.time, 'DD/MM/YYYY HH:MM:SS Z ')}
              </Cell>
            </TradesPanelRow>
          )
        })}
      </ListBody>
    </div>
  );
};

const UserTradesPanel = (props: { trades: Array<Trade> }) => {
  const { trades } = props;

  return trades.length < 1 ? (
    <Loading />
  ) : (
    <div>
      <ListHeader className="heading">
        <HeadingRow>
          <HeaderCell>AMOUNT</HeaderCell>
          <HeaderCell>PRICE</HeaderCell>
          <HeaderCell>SIDE</HeaderCell>
          <HeaderCell>STATUS</HeaderCell>
          <HeaderCell cellName="time">TIME</HeaderCell>
        </HeadingRow>
      </ListHeader>
      <ListBody className="list">
        {trades.map((trade, index) => {
          return (
            <Row side={trade.side} key={index}>
              <Cell>{trade.amount}</Cell>
              <Cell>{trade.price}</Cell>
              <Cell side={trade.side}>{trade.side}</Cell>
              <Cell status={trade.status}>{trade.status}</Cell>
              <Cell cellName="time" muted>
                {format(trade.time, 'DD/MM/YYYY HH:MM:SS Z ')}
              </Cell>
            </Row>
          )
        })}
      </ListBody>
    </div>
  );
}

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
`;

const ListHeader = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px;
`;

const ListBody = styled.ul`
  height: 90%;
  max-height: 491px;
  overflow-y: scroll;
  margin: 0;
`;

const HeadingRow = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  padding-left: 10px;
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
  padding-left: 10px !important;
  background-color: ${props => (props.side === 'BUY' ? Colors.BUY_MUTED : Colors.SELL_MUTED)};
`;

const TradesPanelRow = styled.li.attrs({
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
  padding-left: 10px !important;
  background-color: ${props => (props.change === 'positive' ? Colors.BUY_MUTED : Colors.SELL_MUTED)};
`;

const Cell = styled.span`
  color: ${props =>
    props.side
    ? props.side === 'BUY'
      ? Colors.BUY
      : props.side === 'SELL'
        ? Colors.SELL
        : Colors.TEXT_MUTED
    : props.status
      ? props.status === 'EXECUTED'
        ? Colors.BUY
        : props.status === 'ERROR'
          ? Colors.SELL
          : Colors.TEXT_MUTED
      : Colors.TEXT_MUTED}

  min-width: 35px;
  width: ${props => (props.cellName === 'time' ? '43%' : '12%')};
`;

const HeaderCell = styled.span`
  width: ${props => (props.cellName === 'time' ? '43%' : '12%')};
`;

export default TradesTableRenderer;
