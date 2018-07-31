// @flow
import React from 'react';
import styled from 'styled-components';
import { Loading, Colors } from '../Common';
import { Card, Tabs, Tab } from '@blueprintjs/core';
import { format } from 'date-fns';

type Trade = Object;

type Props = {
  selectedTabId: string,
  onChange: string => void,
  tradeHistory: Array<Trade>,
  userTradeHistory: Array<Trade>,
};

const TradesTableRenderer = (props: Props) => {
  const { selectedTabId, onChange, tradeHistory, userTradeHistory } = props;
  return (
    <Card className="trade-history">
      <Heading>Trade History</Heading>
      <Tabs selectedTabId={selectedTabId} onChange={onChange}>
        <Tab id="24h" title="24H" panel={<Panel trades={tradeHistory} />} />
        <Tab id="all" title="All" panel={<Panel trades={userTradeHistory} />} />
      </Tabs>
    </Card>
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

const Heading = styled.h4``;

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
