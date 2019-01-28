// @flow
import React from 'react';
import styled from 'styled-components';
import { formatNumber } from 'accounting-js'
import { 
  Loading, 
  SmallText,
  Colors,
  Text
} from '../Common';

import {
  Card,
  Button,
  Collapse,
  Menu,
  MenuItem,
  ContextMenuTarget
} from '@blueprintjs/core'

import type { TokenPair } from '../../types/Tokens'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

type BidOrAsk = {
  price: number,
  amount: number,
  total: number,
};

type Props = {
  bids: Array<BidOrAsk>,
  asks: Array<BidOrAsk>,
  onSelect: BidOrAsk => void,
  selectedTabId: string,
  isOpen: boolean,
  currentPair: TokenPair,
  changeTab: string => void,
  toggleCollapse: SyntheticEvent<> => void,
  expand: SyntheticEvent<> => void,
  onResetDefaultLayout: void => void
};


class HorizontalOrderBook extends React.Component<Props> {

    renderContextMenu = () => {
    const {
      isOpen,
      onResetDefaultLayout,
      expand,
      toggleCollapse
    } = this.props

    return (
        <Menu>
            <MenuItem text="Reset Default Layout" onClick={onResetDefaultLayout} />
            <MenuItem text={isOpen ? "Close" : "Open"} onClick={toggleCollapse} />
            <MenuItem text="Maximize" onClick={expand} />
        </Menu>
    );
  }

  render() {
    const { 
      bids, 
      asks,
      currentPair, 
      isOpen,
      onSelect,
      toggleCollapse,
      expand,
    } = this.props

    return (
      <CardBox onContextMenu={this.renderContextMenu}>
        <OrderBookHeader>
          <Heading>
            Order Book
            <Text muted>
              {' '}
              ({currentPair.baseTokenSymbol} / {currentPair.quoteTokenSymbol})
            </Text>
          </Heading>
          <Button 
            icon={isOpen ? 'chevron-up' : 'chevron-down'} 
            minimal 
            onClick={toggleCollapse} 
            small
          />
          <Button 
            icon='maximize' 
            minimal 
            onClick={expand}
            small
          />
          <Button 
            icon='move' 
            className="dragMe"
            minimal
            small
          />
        </OrderBookHeader>
        <Wrapper>
          <Collapse isOpen={isOpen} transitionDuration={100}>
            <OrderListRenderer
              bids={bids} 
              asks={asks} 
              onSelect={onSelect} 
            />
          </Collapse>
        </Wrapper>
      </CardBox>
    )
  }
}



export const OrderListRenderer = (props: *) => {
  const { bids, asks, onSelect } = props;

  return (
    <OrderListBox>
      <OrderBookBox>
        {!bids && <Loading />}
        {bids && (
          <ListContainer className="list-container">
            <ListHeading>
              <HeaderRow>
                <HeaderCell>TOTAL</HeaderCell>
                <HeaderCell>AMOUNT</HeaderCell>
                <HeaderCell>PRICE</HeaderCell>
              </HeaderRow>
            </ListHeading>
          </ListContainer>
        )}
        {asks && (
          <ListContainer className="list-container left-list">
            <ListHeading>
              <HeaderRow>
                <HeaderCell>PRICE</HeaderCell>
                <HeaderCell>AMOUNT</HeaderCell>
                <HeaderCell>TOTAL</HeaderCell>
              </HeaderRow>
            </ListHeading>
          </ListContainer>
        )}
      </OrderBookBox>
        <OrderBookBox>
          {bids && (
            <ListContainer className="list-container">
              <List className="bp3-list-unstyled list">
                <ReactCSSTransitionGroup
                  transitionName="flash-buy"
                >
                  {bids.map((order, index) => <BuyOrder key={order.price} order={order} onClick={() => onSelect(order)} />)}
                </ReactCSSTransitionGroup>
              </List>
            </ListContainer>
          )}
          {asks && (
            <ListContainer className="list-container left-list">
              <List className="bp3-list-unstyled list">
                <ReactCSSTransitionGroup
                  transitionName="flash-sell"
                >
                  {asks.map((order, index) => <SellOrder key={order.price} order={order} onClick={() => onSelect(order)} />)}
                </ReactCSSTransitionGroup>
              </List>
            </ListContainer>
          )}
        </OrderBookBox>
    </OrderListBox>
  );
};

export type SingleOrderProps = {
  order: Object,
  onClick: void => void
};

const BuyOrder = (props: SingleOrderProps) => {
  const { order, onClick } = props;

  return (
    <Row onClick={onClick}>
      <BuyRowBackground amount={order.relativeTotal} />
      <Cell>{formatNumber(order.total, { precision: 3 })}</Cell>
      <Cell>{formatNumber(order.amount, { precision: 3 })}</Cell>
      <Cell color={Colors.BUY}>{formatNumber(order.price, { precision: 5 })}</Cell>
    </Row>
  );
};

const SellOrder = (props: SingleOrderProps) => {
  const { order, onClick } = props;

  return (
    <Row onClick={onClick}>
      <SellRowBackGround amount={order.relativeTotal} />
      <Cell color={Colors.SELL}>{formatNumber(order.price, { precision: 5 })}</Cell>
      <Cell>{formatNumber(order.amount, { precision: 3 })}</Cell>
      <Cell>{formatNumber(order.total, { precision: 3 })}</Cell>
    </Row>
  );
};

const CardBox = styled(Card)`
  width: 100%;
  height: 100%;
  min-height: 50px;
`;

const Wrapper = styled.div`
  overflow-y: scroll;
  height: 85%;
`

const OrderBookBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
`;

const ListContainer = styled.div`
  width: 100%;
`;

const OrderListBox = styled.div`
`;

const List = styled.ul``;

const Row = styled.li.attrs({
  className: 'row',
})`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin: 0px !important;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  padding-left: 10px !important;
  border: 1px transparent;
  border-radius: 2px;
  box-shadow: inset 0px 1px 0 0 rgba(16, 22, 26, 0.15);

  &:hover {
    background-color: ${Colors.BLUE_MUTED};
    position: relative;
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 0 1px rgb(49, 64, 76), -1px 10px 4px rgba(16, 22, 26, 0.1),
      1px 18px 24px rgba(16, 22, 26, 0.2);
    box-shadow: inset 0 0 0 1px rgb(49, 64, 76), -1px 5px 4px rgba(16, 22, 26, 0.1), 1px 7px 24px rgba(16, 22, 26, 0.2);
    z-index: 1;
  }
`;

const SellRowBackGround = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => 100 * props.amount}% !important;
  background-color: ${Colors.SELL_MUTED} !important;
  z-index: 1;
`;

const BuyRowBackground = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: ${props => 100 * props.amount}% !important;
  background-color: ${Colors.BUY_MUTED} !important;
  z-index: 1;
`;

const Cell = styled(SmallText)`
  min-width: 35px;
  width: 20%;
`;

const ListHeading = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px;
  padding-left: 10px !important;
`;

const HeaderRow = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0px !important;
  padding-bottom: 10px;
  width: 100%;
  span {
    font-weight: 600;
  }
`;

const OrderBookHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

const Heading = styled.h3`
  margin: auto;
`;

const HeaderCell = styled.span`
  width: 20%;
`;

export default ContextMenuTarget(HorizontalOrderBook);
