import React from 'react';
import { reduceDecimals, toDate } from '../../utils/converters';
import Loading from '../Loading';
import { Colors } from '@blueprintjs/core';
import styled from 'styled-components';
import type { ListRow, OrderListContainerTypes, OrderListTypes } from '../../types/orderHistory';

const OrderHistory = (props: OrderListContainerTypes) => {
  const { decimals, loading, orderHistory } = props;
  return loading ? <Loading /> : <HistroyList orderHistory={orderHistory} decimals={decimals} />;
};
export default OrderHistory;

const HistroyList = (props: OrderListTypes) => {
  const { decimals, orderHistory } = props;
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
        {orderHistory.map((order, index) => <Row key={index} props={{ order, decimals: decimals, index }} />)}
      </ul>
    </div>
  );
};

const Row = ({ props }: ListRow) => {
  const { order, decimals, index } = props;
  return (
    <li className="not-heading">
      <span className="index">{index + 1}</span>
      <span className="time">{toDate(order.time)}</span>
      {order.type === 'sell' ? <Sell>{order.type}</Sell> : <Buy>{order.type}</Buy>}
      <span className="amount">{reduceDecimals(order.amount, decimals)}</span>
      <span className="price">{reduceDecimals(order.price, decimals)}</span>
    </li>
  );
};

const Sell = styled.span`
  color: ${Colors.RED4};
`;

const Buy = styled.span`
  color: ${Colors.GREEN5};
`;
