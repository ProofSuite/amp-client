//@flow
import React from 'react';
import styled from 'styled-components';
import { Button, Card, Tab, Tabs } from '@blueprintjs/core';
import { Colors, Loading } from '../Common';

type Order = {
  time: number,
  type: string,
  amount: number,
  price: number,
};

type Props = {
  selectedTabId: string,
  onChange: string => void,
  orderHistory: Array<Order>,
  userOrderHistory: Array<Order>,
};

const OrderHistoryRenderer = (props: Props) => {
  const { selectedTabId, onChange, orderHistory, userOrderHistory } = props;
  return (
    <Card className="order-history">
      <Heading>Order History</Heading>
      <Tabs selectedTabId={selectedTabId} onChange={onChange}>
        <Tab id="24h" title="24H" panel={<OrderHistoryTable orderHistory={orderHistory} />} />
        <Tab id="all" title="All" panel={<OrderHistoryTable orderHistory={userOrderHistory} />} />
      </Tabs>
    </Card>
  );
};

type OrderHistoryTableProps = {
  orderHistory: Array<Order>,
};

const OrderHistoryTable = (props: OrderHistoryTableProps) => {
  const { orderHistory } = props;
  return orderHistory.length < 2 ? <Loading /> : <OrderList orderHistory={orderHistory} />;
};

const OrderList = (props: { orderHistory: Array<Order> }) => {
  const { orderHistory } = props;
  return (
    <div className="list-container">
      <ul className="heading">
        <li className="heading">
          <HeaderCell />
          <HeaderCell>Type</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Price</HeaderCell>
          <HeaderCell>Time</HeaderCell>
        </li>
      </ul>
      <ul className="list">
        {orderHistory.map((order, index) => <OrderRow key={index} order={order} index={index} />)}
      </ul>
    </div>
  );
};

const OrderRow = (props: { order: Order, index: number }) => {
  const { order, index } = props;
  return (
    <li className="row">
      <Cell>{index + 1}</Cell>
      <Cell type={order.type}>{order.type}</Cell>
      <Cell>{order.amount}</Cell>
      <Cell>{order.price}</Cell>
      <Cell>{order.time}</Cell>
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

export default OrderHistoryRenderer;
