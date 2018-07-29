import React from 'react';
import { round, toDate } from '../../utils/converters';
import { Loading } from '../Common';
import { Colors } from '@blueprintjs/core';
import styled from 'styled-components';
import type Props, { TradeListProps, TradeProps } from '../../types/tradeHistory';

const TradeHistory = (props: Props) => {
  const { decimals, tradeHistory } = props;
  const tradeSize = Object.keys(tradeHistory[0]).length;
  return tradeHistory.length < 2 && tradeSize < 1 ? (
    <Loading />
  ) : (
    <HistroyList tradeHistory={tradeHistory} decimals={decimals} />
  );
};
export default TradeHistory;

const HistroyList = (props: TradeListProps) => {
  const { decimals, tradeHistory } = props;
  return (
    <div className="list-container pt-dark">
      <ul className="pt-list-unstyled heading">
        <li className="heading">
          <span className="index">#</span>
          <span className="time">Time</span>
          <span className="type">Type</span>
          <span className="amount">Amount</span>
          <span className="price">Price</span>
        </li>
      </ul>
      <ul className="pt-list-unstyled list">
        {tradeHistory.map((trade, index) => <Row key={index} props={{ trade, decimals: decimals, index }} />)}
      </ul>
    </div>
  );
};

const Row = ({ props }: TradeProps) => {
  const { trade, decimals, index } = props;
  return (
    <li className="not-heading">
      <span className="index">{index + 1}</span>
      <span className="time">{toDate(trade.time)}</span>
      {trade.type === 'sell' ? <Sell>{trade.type}</Sell> : <Buy>{trade.type}</Buy>}
      <span className="amount">{round(trade.amount, decimals)}</span>
      <span className="price">{round(trade.price, decimals)}</span>
    </li>
  );
};

const Sell = styled.span`
  color: ${Colors.RED4};
  min-width: 35px;
`;

const Buy = styled.span`
  color: ${Colors.GREEN5};
  min-width: 35px;
`;
