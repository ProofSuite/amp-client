//@flow
import React from 'react'
import styled from 'styled-components'
import { formatNumber } from 'accounting-js'
import { AutoSizer } from 'react-virtualized'

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
  Hideable,
  FlexRow
} from '../Common'

import { relativeDate } from '../../utils/helpers'
import { Order } from '../../types/orders'

import type { Node } from 'react'

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
  },
  expand: SyntheticEvent<> => void,
  onContextMenu: void => Node
}

const breakpoints = {
  S: 400,
  M: 600, 
  L: 800
}


const OrdersTableRenderer = (props: Props) => {
  const { 
    loading, 
    selectedTabId, 
    onChange, 
    cancelOrder, 
    orders, 
    isOpen, 
    toggleCollapse,
    expand,
    onContextMenu
  } = props

  return (
    <AutoSizer style={{ width: '100%', height: '100%' }}>
        {({ width, height }) => (
          <CardBox onContextMenu={onContextMenu}>
            <OrdersTableHeader>
              <Heading>Orders</Heading>
              <FlexRow>
                <Button 
                  icon={isOpen ? 'chevron-up' : 'chevron-down'} 
                  minimal 
                  onClick={toggleCollapse}
                  small
                />
                <Button 
                  icon='zoom-to-fit' 
                  minimal 
                  onClick={expand} 
                  small
                />
                <Button 
                  icon='move'
                  className="drag"
                  minimal 
                  small
                />
              </FlexRow>
            </OrdersTableHeader>
            <Wrapper>
            <Collapse isOpen={isOpen}>
              <Tabs selectedTabId={selectedTabId} onChange={onChange}>
                <Tab id="all" title="ALL" panel={<OrdersTablePanel loading={loading} orders={orders['ALL']} cancelOrder={cancelOrder} width={width} />} />
                <Tab id="open" title="OPEN" panel={<OrdersTablePanel loading={loading} orders={orders['OPEN']} cancelOrder={cancelOrder} width={width} />} />
                <Tab id="cancelled" title="CANCELLED" panel={<OrdersTablePanel loading={loading} orders={orders['CANCELLED']} cancelOrder={cancelOrder} width={width} />} />
                <Tab id="executed" title="EXECUTED" panel={<OrdersTablePanel loading={loading} orders={orders['FILLED']} cancelOrder={cancelOrder} width={width} />} />
              </Tabs>
            </Collapse>
            </Wrapper>
          </CardBox>
        )}
      </AutoSizer>
  )
}

const OrdersTablePanel = (props: *) => {
  const { loading, orders, cancelOrder, width } = props

  return loading ? (
    <Loading />
  ) : orders.length < 1 ? (
    <CenteredMessage message="No orders" />
  ) : (
        <ListContainer>
          <ListHeaderWrapper>
            <ListHeader>
              <HeaderCell className="pair">PAIR</HeaderCell>
              <HeaderCell className="amount">AMOUNT</HeaderCell>
              <Hideable hiddenIf={width<breakpoints.L}>
                <HeaderCell className="price">PRICE</HeaderCell>
              </Hideable>
              <HeaderCell className="status">STATUS</HeaderCell>
              <HeaderCell className="side">SIDE</HeaderCell>
              <Hideable hiddenIf={width<breakpoints.L}>
                <HeaderCell className="time">TIME</HeaderCell>
              </Hideable>
              <HeaderCell className="cancel" />
            </ListHeader>
          </ListHeaderWrapper>
          <ListBodyWrapper>
            {orders.map((order, index) => {
              return (
                <OrderRow 
                  key={index} 
                  order={order} 
                  index={index} 
                  cancelOrder={cancelOrder}
                  width={width}
                />
              )
            }
            )}
          </ListBodyWrapper>
        </ListContainer>
  )
}

const OrderRow = (props: *) => {
  const { order, cancelOrder, width } = props

  return (
    <Row>
      <Cell className="pair" muted>
        <SmallText muted>
          {order.pair}
        </SmallText>
      </Cell>
      <Cell className="amount" muted>
        <SmallText muted>
          {formatNumber(order.filled, { precision: 3 })}/{formatNumber(order.amount, { precision: 3 })}
        </SmallText>
      </Cell>
      <Hideable hiddenIf={width < breakpoints.L}>
      <Cell className="price" muted>
        <SmallText muted>
          {formatNumber(order.price, { precision: 5 })} ({order.type})
        </SmallText>
      </Cell>
      </Hideable>
        <Cell className="status" muted>
          <StatusTag status={order.status} />
        </Cell>
      <Cell className="side" side={order.side} muted>
        <SmallText color={order.side === 'BUY' ? Colors.BUY : Colors.SELL}>{order.side}</SmallText>
      </Cell>
      <Hideable hiddenIf={width < breakpoints.L}>
        <Cell className="time" muted>
          <SmallText muted>{relativeDate(order.time)}</SmallText>
        </Cell>
      </Hideable>
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
  justify-content: space-between;
  grid-gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`

const CardBox = styled(Card)`
  height: 100%;
`

const Wrapper = styled.div`
  overflow-y: scroll;
  height: 90%;
`

const Heading = styled.h3`
  margin: auto;
`

const ListContainer = styled.div`  
  height: 90%;
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
  height: 100%;
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
