// @flow
import React from 'react';
import styled from 'styled-components';
import { formatNumber } from 'accounting-js'
import { 
  Loading, 
  SmallText,
  Colors
} from '../Common';

import { ResizableBox } from 'react-resizable'

type BidOrAsk = {
  price: number,
  amount: number,
  total: number,
};

type Props = {
  bids: Array<BidOrAsk>,
  asks: Array<BidOrAsk>,
  onSelect: BidOrAsk => void,
};

export const OrderBookRenderer = (props: Props) => {
  const { bids, asks, onSelect } = props;

  return (
    <React.Fragment>
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
      <ResizableBox height={400}>
        <OrderBookBox>
          {bids && (
            <ListContainer className="list-container">
              <List className="bp3-list-unstyled list">
                {bids.map((order, index) => <BuyOrder key={index} order={order} onClick={() => onSelect(order)} />)}
              </List>
            </ListContainer>
          )}
          {asks && (
            <ListContainer className="list-container left-list">
              <List className="bp3-list-unstyled list">
                {asks.map((order, index) => <SellOrder key={index} order={order} onClick={() => onSelect(order)} />)}
              </List>
            </ListContainer>
          )}
        </OrderBookBox>
      </ResizableBox>
    </React.Fragment>
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
      <Cell>{formatNumber(order.price, { precision: 5 })}</Cell>
    </Row>
  );
};

const SellOrder = (props: SingleOrderProps) => {
  const { order, onClick } = props;

  return (
    <Row onClick={onClick}>
      <SellRowBackGround amount={order.relativeTotal} />
      <Cell>{formatNumber(order.price, { precision: 5 })}</Cell>
      <Cell>{formatNumber(order.amount, { precision: 3 })}</Cell>
      <Cell>{formatNumber(order.total, { precision: 3 })}</Cell>
    </Row>
  );
};

const OrderBookBox = styled.div.attrs({})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  overflow-y: scroll;
`;
const ListContainer = styled.div`
  width: 100%;
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

const HeaderCell = styled.span`
  width: 20%;
`;

export default OrderBookRenderer;
