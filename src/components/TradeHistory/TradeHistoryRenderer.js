// @flow
import React from 'react';
import styled from 'styled-components';
import { toDate } from '../../utils/converters';
import { Loading, Colors } from '../Common';
import { Card, Tabs, Tab } from '@blueprintjs/core';

type Trade = Object;

type Props = {
  selectedTabId: string,
  onChange: string => void,
  tradeHistory: Array<Trade>,
  userTradeHistory: Array<Trade>,
};

const TradeHistoryRenderer = (props: Props) => {
  const { selectedTabId, onChange, tradeHistory, userTradeHistory } = props;
  return (
    <Card className="trade-history">
      <Heading>Trade History</Heading>
      <Tabs selectedTabId={selectedTabId} onChange={onChange}>
        <Tab id="24h" title="24H" panel={<TradeHistoryPanel trades={tradeHistory} />} />
        <Tab id="all" title="All" panel={<TradeHistoryPanel trades={userTradeHistory} />} />
      </Tabs>
    </Card>
  );
};

const TradeHistoryPanel = (props: { trades: Array<Trade> }) => {
  const { trades } = props;
  const tradeSize = Object.keys(trades[0]).length;

  return trades.length < 2 && tradeSize < 1 ? (
    <Loading />
  ) : (
    <div className="list-container">
      <ul className="heading">
        <li className="heading">
          <HeaderCell>#</HeaderCell>
          <HeaderCell>Time</HeaderCell>
          <HeaderCell>Type</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Price</HeaderCell>
        </li>
      </ul>
      <ul className="list">{trades.map((trade, index) => <Row key={index} index={index} trade={trade} />)}</ul>
    </div>
  );
};

const Row = (props: { index: number, trade: Trade }) => {
  const { trade, index } = props;
  return (
    <li className="row">
      <Cell>{index + 1}</Cell>
      <Cell type={trade.type}>{trade.type}</Cell>
      <Cell>{trade.amount}</Cell>
      <Cell>{trade.price}</Cell>
      <Cell>{toDate(trade.time)}</Cell>
    </li>
  );
};

const Heading = styled.h5`
  padding-bottom: 5px;
  text-align: left;
`;

const Cell = styled.span`
  color: ${props => (props.type === 'BUY' ? Colors.BUY : props.type === 'SELL' ? Colors.SELL : Colors.WHITE)}
  min-width: 35px;
  width: 20%;
`;

const HeaderCell = styled.span`
  width: 20%;
`;

export default TradeHistoryRenderer;
