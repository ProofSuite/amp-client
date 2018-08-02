//@flow
import React from 'react';
import styled from 'styled-components';
import { Card, Tab, Tabs } from '@blueprintjs/core';
import { Colors, Loading, CenteredMessage } from '../Common';
import { format } from 'date-fns';
import { Order } from '../../types/orders';

type Props = {
  loading: boolean,
  selectedTabId: string,
  onChange: string => void,
  orders: {
    ALL: Array<Order>,
    OPEN: Array<Order>,
    PENDING: Array<Order>,
    EXECUTED: Array<Order>,
    CANCELED: Array<Order>,
  },
};

const OrdersTableRenderer = (props: Props) => {
  const { loading, selectedTabId, onChange, orders } = props;
  return (
    <Card className="order-history">
      <Heading>Order History</Heading>
      <Tabs selectedTabId={selectedTabId} onChange={onChange}>
        <Tab id="all" title="ALL" panel={<OrdersTablePanel loading={loading} orders={orders['ALL']} />} />
        <Tab id="open" title="OPEN" panel={<OrdersTablePanel loading={loading} orders={orders['OPEN']} />} />
        <Tab
          id="canceled"
          title="CANCELED"
          panel={<OrdersTablePanel loading={loading} orders={orders['CANCELED']} />}
        />
        <Tab id="pending" title="PENDING" panel={<OrdersTablePanel loading={loading} orders={orders['PENDING']} />} />
        <Tab
          id="executed"
          title="EXECUTED"
          panel={<OrdersTablePanel loading={loading} orders={orders['EXECUTED']} />}
        />
      </Tabs>
    </Card>
  );
};

const OrdersTablePanel = (props: { loading: boolean, orders: Array<Order> }) => {
  const { loading, orders } = props;
  return loading ? (
    <Loading />
  ) : orders.length < 1 ? (
    <CenteredMessage message="No orders" />
  ) : (
    <div className="list-container">
      <ul className="heading">
        <li className="heading">
          <HeaderCell>PAIR</HeaderCell>
          <HeaderCell>AMOUNT</HeaderCell>
          <HeaderCell>PRICE</HeaderCell>
          <HeaderCell>STATUS</HeaderCell>
          <HeaderCell>SIDE</HeaderCell>
          <HeaderCell>TIME</HeaderCell>
        </li>
      </ul>
      <ul className="list">{orders.map((order, index) => <OrderRow key={index} order={order} index={index} />)}</ul>
    </div>
  );
};

const OrderRow = (props: { order: Order, index: number }) => {
  const { order } = props;
  return (
    <Row>
      <Cell muted>{order.pair}</Cell>
      <Cell muted>{order.amount}</Cell>
      <Cell muted>
        {order.price} ({order.type})
      </Cell>
      <Cell muted>{order.status}</Cell>
      <Cell side={order.side} muted>
        {order.side}
      </Cell>
      <Cell muted>{format(order.time, 'DD/MM/YYYY HH:MM:SS Z')}</Cell>
    </Row>
  );
};

const Row = styled.li.attrs({
  className: 'row',
})`
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
  padding: 7px;
  border: 1px transparent;
  border-radius: 2px;
  box-shadow: inset 0px 1px 0 0 rgba(16, 22, 26, 0.15);
`;

const Heading = styled.h4``;

const Cell = styled.span`
  color: ${props =>
    props.side === 'BUY'
      ? Colors.BUY
      : props.side === 'SELL'
        ? Colors.SELL
        : props.muted
          ? Colors.TEXT_MUTED
          : Colors.WHITE}

  min-width: 35px;
  width: 20%;
`;

const HeaderCell = styled.span`
  width: 20%;
`;

export default OrdersTableRenderer;
