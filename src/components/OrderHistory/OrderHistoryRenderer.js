//@flow
import React from 'react';
import styled from 'styled-components';
import { Card, Tab, Tabs, Button, Colors } from '@blueprintjs/core';
import Loading from '../Loading';

type OrderListContainerProps = {
  selectedTabId: string,
  onChange: string => void,
  authenticated: boolean,
  loading: boolean,
  orderHistory: Array<Object>,
  userOrderHistory: Array<Object>,
};

type OrderHistoryTableProps = {
  loading: boolean,
  requireAuthentication: boolean,
  orderHistory: Array<Object>,
};

const OrderHistoryRenderer = (props: OrderListContainerProps) => {
  const { selectedTabId, onChange, loading, authenticated, orderHistory, userOrderHistory } = props;
  return (
    <Card className="pt-dark trade-history">
      <h5>Order History</h5>
      <Tabs id="TabsExample" selectedTabId={selectedTabId} onChange={onChange}>
        <Tab
          id="all"
          title="Market"
          panel={<OrderHistoryTable loading={loading} orderHistory={orderHistory} requireAuthentication={false} />}
        />
        <Tab
          id="mine"
          title="Mine"
          panel={
            <OrderHistoryTable
              loading={loading}
              orderHistory={userOrderHistory}
              requireAuthentication={!authenticated}
            />
          }
        />
      </Tabs>
    </Card>
  );
};

const OrderHistoryTable = (props: OrderHistoryTableProps) => {
  const { loading, orderHistory, requireAuthentication } = props;
  return requireAuthentication ? <Login /> : loading ? <Loading /> : <OrderHistoryList orderHistory={orderHistory} />;
};

const OrderHistoryList = (props: { orderHistory: Array<Object> }) => {
  const { orderHistory } = props;
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
        {orderHistory.map((order, index) => <Row key={index} order={order} index={index} />)}
      </ul>
    </div>
  );
};

const Row = (props: { order: Object, index: number }) => {
  const { order, index } = props;
  return (
    <li className="not-heading">
      <span className="index">{index + 1}</span>
      <span className="time">{order.time}</span>
      {order.type === 'sell' ? <Sell>{order.type}</Sell> : <Buy>{order.type}</Buy>}
      <span className="amount">{order.amount}</span>
      <span className="price">{order.price}</span>
    </li>
  );
};

const Sell = styled.span`
  color: ${Colors.RED4};
`;

const Buy = styled.span`
  color: ${Colors.GREEN5};
`;

const Login = () => <Button large={true} intent="primary" text="Login" />;

export default OrderHistoryRenderer;
