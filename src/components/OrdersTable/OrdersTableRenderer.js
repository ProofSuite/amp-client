//@flow
import React from 'react';
import styled from 'styled-components';
import { Card, Tab, Tabs, Collapse, Button } from '@blueprintjs/core';
import { Colors, Loading, CenteredMessage } from '../Common';
import { format } from 'date-fns';
import { Order } from '../../types/orders';

type Props = {
  loading: boolean,
  selectedTabId: string,
  onChange: string => void,
  isOpen: boolean,
  toggleCollapse: void => void,
  orders: {
    ALL: Array<Order>,
    OPEN: Array<Order>,
    PENDING: Array<Order>,
    EXECUTED: Array<Order>,
    CANCELED: Array<Order>,
  },
};

const OrdersTableRenderer = (props: Props) => {
  const { loading, selectedTabId, onChange, orders, isOpen, toggleCollapse } = props;
  return (
    <Card className="order-history">
      <OrdersTableHeader>
        <Heading>Orders</Heading>
        <Button icon={isOpen ? 'chevron-left' : 'chevron-down'} minimal onClick={toggleCollapse} />
      </OrdersTableHeader>
      <Collapse isOpen={isOpen}>
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
      </Collapse>
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
          <HeaderCell className="pair">PAIR</HeaderCell>
          <HeaderCell className="amount">AMOUNT</HeaderCell>
          <HeaderCell className="price">PRICE</HeaderCell>
          <HeaderCell className="status">STATUS</HeaderCell>
          <HeaderCell className="side">SIDE</HeaderCell>
          <HeaderCell className="time">TIME</HeaderCell>
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
      <Cell className="pair" muted>
        {order.pair}
      </Cell>
      <Cell className="amount" muted>
        {order.amount}
      </Cell>
      <Cell className="price" muted>
        {order.price} ({order.type})
      </Cell>
      <Cell className="status" muted>
        {order.status}
      </Cell>
      <Cell className="side" side={order.side} muted>
        {order.side}
      </Cell>
      <Cell className="time" muted>
        {format(order.time, 'DD/MM/YYYY HH:MM:SS Z')}
      </Cell>
    </Row>
  );
};

const OrdersTableHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 10px;
  align-items: center;
`;

const Heading = styled.h3`
  margin: auto;
`;

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

const Cell = styled.span.attrs({
  className: props => props.className,
})`
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
