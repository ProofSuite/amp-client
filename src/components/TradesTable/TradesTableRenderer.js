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
  tradeHistory: Array<Trade>,
  userTradeHistory: Array<Trade>,
  toggleCollapse: (SyntheticEvent<>) => void,
  isOpen: boolean,
};

const TradesTableRenderer = (props: Props) => {
  const { currentPair, isOpen, selectedTabId, onChange, tradeHistory, userTradeHistory, toggleCollapse } = props;

  return (
    <div>
      <Card className="trade-history">
        <TradesTableHeader>
          <Heading>
            Trades
            <Text muted>
              {' '}
              ({currentPair.baseTokenSymbol} / {currentPair.quoteTokenSymbol})
            </Text>
          </Heading>
          <Button icon={isOpen ? 'chevron-left' : 'chevron-down'} minimal onClick={toggleCollapse} />
        </TradesTableHeader>
        <Collapse isOpen={isOpen}>
          <Tabs selectedTabId={selectedTabId} onChange={onChange}>
            <Tab id="24h" title="24H" panel={<Panel trades={tradeHistory} />} />
            <Tab id="all" title="All" panel={<Panel trades={userTradeHistory} />} />
          </Tabs>
        </Collapse>
      </Card>
    </div>
  );
};

const Panel = (props: { trades: Array<Trade> }) => {
  const { trades } = props;

  return trades.length < 1 ? (
    <Loading />
  ) : (
    <div className="list-container">
      <ul className="heading">
        <li className="heading">
          <HeaderCell>AMOUNT</HeaderCell>
          <HeaderCell>PRICE</HeaderCell>
          <HeaderCell />
          <HeaderCell>TIME</HeaderCell>
        </li>
      </ul>
      <ul className="list">
        {trades.map((trade, index) => <TradeTableRow key={index} index={index} trade={trade} />)}
      </ul>
    </div>
  );
};

const TradeTableRow = (props: { index: number, trade: Trade }) => {
  const { trade, index } = props;
  return (
    <Row side={trade.side}>
      <Cell>{trade.amount}</Cell>
      <Cell>{trade.price}</Cell>
      <Cell side={trade.side}>{trade.side}</Cell>
      <Cell muted>{format(trade.time, 'DD/MM/YYYY HH:MM:SS Z ')}</Cell>
    </Row>
  );
};

const TradesTableHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 10px;
  align-items: center;
`;

const Heading = styled.h4`
  margin: auto;
`;

const Row = styled.li.attrs({
  className: 'row',
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  border: 1px transparent;
  border-radius: 2px;
  box-shadow: inset 0px 1px 0 0 rgba(16, 22, 26, 0.15);
  padding: 7px;
  background-color: ${props => (props.side === 'BUY' ? Colors.BUY_MUTED : Colors.SELL_MUTED)};
`;

const Cell = styled.span`
  color: ${props =>
    props.side === 'BUY'
      ? Colors.BUY
      : props.side === 'SELL'
        ? Colors.SELL
        : props.muted
          ? Colors.TEXT_MUTED
          : Colors.TEXT_MUTED}

  min-width: 35px;
  width: 20%;
`;

const HeaderCell = styled.span`
  width: 20%;
`;

export default TradesTableRenderer;
