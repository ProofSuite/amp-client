//@flow
import React from 'react'
import styled from 'styled-components'

import { 
  Card, 
  Tag, 
  Tab,
  Tabs, 
  Collapse, 
  Button, 
  Icon
} from '@blueprintjs/core'

import { 
  Colors, 
  Loading, 
  CenteredMessage,
  SmallText,
} from '../Common'

import { relativeDate } from '../../utils/helpers'
import { Order } from '../../types/orders'

type Props = {
  loading: boolean,
  selectedTabId: string,
  onChange: string => void,
  isOpen: boolean,
  toggleCollapse: void => void,
  cancelOrder: string => void,
  orders: {
    ALL: Array<Order>,
    OPEN: Array<Order>,
    PENDING: Array<Order>,
    EXECUTED: Array<Order>,
    CANCELLED: Array<Order>,
    FILLED: Array<Order>
  }
}

const OrdersTableRenderer = (props: Props) => {
  const { loading, selectedTabId, onChange, cancelOrder, orders, isOpen, toggleCollapse } = props
  return (
    <Wrapper className="order-history">
      <OrdersTableHeader>
        <Heading>Orders</Heading>
        <Button icon={isOpen ? 'chevron-up' : 'chevron-down'} minimal onClick={toggleCollapse} />
      </OrdersTableHeader>
      <Collapse isOpen={isOpen}>
        <Tabs selectedTabId={selectedTabId} onChange={onChange}>
          <Tab id="all" title="ALL" panel={<OrdersTablePanel loading={loading} orders={orders['ALL']} cancelOrder={cancelOrder} />} />
          <Tab id="open" title="OPEN" panel={<OrdersTablePanel loading={loading} orders={orders['OPEN']} cancelOrder={cancelOrder} />} />
          <Tab id="cancelled" title="CANCELLED" panel={<OrdersTablePanel loading={loading} orders={orders['CANCELLED']} cancelOrder={cancelOrder} />} />
          <Tab id="executed" title="EXECUTED" panel={<OrdersTablePanel loading={loading} orders={orders['FILLED']} cancelOrder={cancelOrder} />} />
        </Tabs>
      </Collapse>
    </Wrapper>
  )
}

const OrdersTablePanel = (props: { loading: boolean, orders: Array<Order>, cancelOrder: string => void }) => {
  const { loading, orders, cancelOrder } = props
  return loading ? (
    <Loading />
  ) : orders.length < 1 ? (
    <CenteredMessage message="No orders" />
  ) : (
    <ListContainer className="list-container">
      <ListHeaderWrapper className="heading">
        <ListHeader className="heading">
          <HeaderCell className="pair">PAIR</HeaderCell>
          <HeaderCell className="amount">AMOUNT</HeaderCell>
          <HeaderCell className="price">PRICE</HeaderCell>
          <HeaderCell className="status">STATUS</HeaderCell>
          <HeaderCell className="side">SIDE</HeaderCell>
          <HeaderCell className="time">TIME</HeaderCell>
          <HeaderCell className="cancel" />
        </ListHeader>
      </ListHeaderWrapper>
      <ListBodyWrapper className="list">
        {orders.map((order, index) => <OrderRow key={index} order={order} index={index} cancelOrder={cancelOrder} />)}
      </ListBodyWrapper>
    </ListContainer>
  )
}

const OrderRow = (props: { order: Order, index: number, cancelOrder: string => void }) => {
  const { order, cancelOrder } = props

  return (
    <Row>
      <Cell className="pair" muted>
        <SmallText muted>{order.pair}</SmallText>
      </Cell>
      <Cell className="amount" muted>
        <SmallText muted>{order.filled}/{order.amount}</SmallText>
      </Cell>
      <Cell className="price" muted>
        <SmallText muted>{order.price} ({order.type})</SmallText>
      </Cell>
      <Cell className="status" muted>
        <StatusTag status={order.status} />
      </Cell>
      <Cell className="side" side={order.side} muted>
        <SmallText color={order.side === 'BUY' ? Colors.BUY : Colors.SELL}>{order.side}</SmallText>
      </Cell>
      <Cell className="time" muted>
        <SmallText muted>{relativeDate(order.time)}</SmallText>
        {/* {format(order.time, 'DD/MM/YYYY HH:MM:SS')} */}
      </Cell>
      <Cell className="cancel" muted>
        {order.cancelleable && (
          <Button intent="danger" minimal onClick={() => cancelOrder(order.hash)}>
            <Icon icon="cross" intent="danger" />&nbsp;&nbsp;Cancel
          </Button>
        )}
      </Cell>
    </Row>
  )
}

const StatusTag = ({ status }) => {
  const statuses = {
    "INVALIDATED": "danger",
    "CANCELLED": "danger",
    "OPEN": "primary",
    "FILLED": "success",
    "PARTIALLY_FILLED": "success"
  }

  const intent = statuses[status]
  return (
    <Tag minimal large interactive intent={intent}>
      <SmallText>{status}</SmallText>
    </Tag>
  )
}

const OrdersTableHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 10px;
  align-items: center;
`
const Wrapper = styled(Card)``

const Heading = styled.h3`
  margin: auto;
`

const ListContainer = styled.div`
  height: 100%;
`

const ListHeaderWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px;
  margin-bottom: 10px;
  padding-left: 0px !important;
  margin-left: 0px !important;
`

const ListBodyWrapper = styled.ul`
  width: 100%;
  max-height: 300px;
  margin: 0;
  height: 90%;
  overflow-y: scroll;
  padding-left: 0px !important;
  margin-left: 0px !important;
`

const ListHeader = styled.li`
  width: 100%;
  display: flex;
  margin: 0px !important;
  padding: 10px;
  text-align: left;
  padding: 0;
  padding-left: 0px !important;
  margin-left: 0px !important;
  span {
    font-weight: 600;
  }
`

const Row = styled.li.attrs({ className: 'row' })`
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px transparent;
  border-radius: 2px;
  box-shadow: inset 0px 1px 0 0 rgba(16, 22, 26, 0.15);
  padding-left: 0px !important;
  margin-left: 0px !important;
`



const Cell = styled.span.attrs({ className: props => props.className })`
  color: ${props =>
    props.side === 'BUY'
      ? Colors.BUY
      : props.side === 'SELL'
        ? Colors.SELL
        : props.muted
          ? Colors.TEXT_MUTED
          : Colors.WHITE}

  min-width: 35px;
  display: flex;
  align-items: center;
  height: 40px !important;
  width: ${props => (props.className === 'cancel' ? '100px' : '20%')};
`

const HeaderCell = styled.span.attrs({ className: props => props.className })`
  width: ${props => (props.className === 'cancel' ? '100px' : '20%')};
`

export default OrdersTableRenderer
