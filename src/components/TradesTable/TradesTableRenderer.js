// @flow
import React from 'react';
import styled from 'styled-components';
import { Loading, Colors, Text, CenteredMessage } from '../Common';
import { Icon, Button, Card, Tabs, Tab, Collapse } from '@blueprintjs/core';
import { format } from 'date-fns';

import type { Trade } from '../../types/trades';
import type { TokenPair } from '../../types/tokens';

type Props = {
  selectedTabId: string,
  currentPair: TokenPair,
  onChange: string => void,
  trades: Array<Trade>,
  userTrades: Array<Trade>,
  toggleCollapse: (SyntheticEvent<>) => void,
  isOpen: boolean,
};

const TradesTableRenderer = (props: Props) => {
  const { currentPair, isOpen, selectedTabId, onChange, trades, userTrades, toggleCollapse } = props;

  return (
    <div>
      <Wrapper className="trade-history">
        <TradesTableHeader>
          <Heading>
            Trades
            <Text muted>
              {' '}
              ({currentPair.baseTokenSymbol} / {currentPair.quoteTokenSymbol})
            </Text>
          </Heading>
          <Button icon={isOpen ? 'chevron-up' : 'chevron-down'} minimal onClick={toggleCollapse} />
        </TradesTableHeader>
        <Collapse isOpen={isOpen}>
          <Tabs selectedTabId={selectedTabId} onChange={onChange}>
            <Tab id="Market" title="Market" panel={<MarketTradesPanel trades={trades} />} />
            <Tab id="User" title="User" panel={<UserTradesPanel trades={userTrades} />} />
          </Tabs>
        </Collapse>
      </Wrapper>
    </div>
  );
};

const MarketTradesPanel = (props: { trades: Array<Trade> }) => {
  const { trades } = props;

  if (!trades) {
    return <Loading />;
  }

  if (trades.length === 0) {
    return <CenteredMessage message="No trades for this token pair" />
  }

  return (
    <div>
      <ListHeader className="heading">
        <HeadingRow>
          <HeaderCell>PRICE</HeaderCell>
          <HeaderCell>AMOUNT</HeaderCell>
          <HeaderCell />
          <HeaderCell cellName="time">TIME</HeaderCell>
        </HeadingRow>
      </ListHeader>
      <ListBody className="list">
        {trades.map((trade, index) => (
          <Row color={trade.change === 'positive' ? Colors.BUY_MUTED : Colors.SELL_MUTED} key={index}>
            <Cell color={trade.change === 'positive' ? Colors.BUY : Colors.SELL}>
              <Icon icon={trade.change === 'positive' ? 'chevron-up' : 'chevron-down'} iconSize={14}/>{trade.price}
            </Cell>
            <Cell>{trade.amount}</Cell>
            <Cell side={trade.side}>{trade.side}</Cell>
            <Cell cellName="time" muted>{format(trade.time, 'DD/MM/YYYY HH:MM:SS Z ')}</Cell>
          </Row>
        ))}
      </ListBody>
    </div>
  );
};

const UserTradesPanel = (props: { trades: Array<Trade> }) => {
  const { trades } = props;

  if (!trades) {
    return <Loading />;
  }

  if (trades.length === 0) {
    return <CenteredMessage message="No trades for this token pair" />
  }

  return (
    <div>
      <ListHeader className="heading">
        <HeadingRow>
          <HeaderCell>PRICE</HeaderCell>
          <HeaderCell>AMOUNT</HeaderCell>
          <HeaderCell />
          <HeaderCell cellName="time">TIME</HeaderCell>
        </HeadingRow>
      </ListHeader>
      <ListBody className="list">
        {trades.map((trade, index) => (
          <Row color={trade.side === 'BUY' ? Colors.BUY_MUTED : Colors.SELL_MUTED} key={index}>
            <Cell>{trade.price}</Cell>
            <Cell>{trade.amount}</Cell>
            <Cell color={trade.side === 'BUY' ? Colors.BUY : Colors.SELL}>{trade.side}</Cell>
            <Cell cellName="time" muted>{format(trade.time, 'DD/MM/YYYY HH:MM:SS Z ')}</Cell>
        </Row>
        ))}
      </ListBody>
    </div>
  );
};

const TradesTableHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 10px;
  align-items: center;
`;

const Heading = styled.h3`
  margin: auto;
`;

const Wrapper = styled(Card)`
  margin: auto;
  height: 100% !important;
`;

const ListHeader = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px;
`;

const ListBody = styled.ul`
  height: 90%;
  max-height: 491px;
  overflow-y: scroll;
  margin: 0;
`;

const HeadingRow = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  padding-left: 10px;
`;

const Row = styled.li.attrs({
  className: 'row',
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  border: 1px transparent;
  border-radius: 2px;
  box-shadow: inset 0px 1px 0 0 rgba(16, 22, 26, 0.15);
  padding: 7px;
  padding-left: 10px !important;
  background-color: ${props => props.color};
  /* background-color: ${props => (props.side === 'BUY' ? Colors.BUY_MUTED : Colors.SELL_MUTED)}; */
`;

const Cell = styled.span`
  color: ${props => props.color ? props.color : Colors.TEXT_MUTED};
  min-width: 35px;
  width: ${props => (props.cellName === 'time' ? '43%' : '12%')};
`;

// const Cell = styled.span`
//   color: ${props =>
//     props.side === 'BUY'
//       ? Colors.BUY
//       : props.side === 'SELL'
//         ? Colors.SELL
//         : props.muted
//           ? Colors.TEXT_MUTED
//           : Colors.TEXT_MUTED}

//   min-width: 35px;
//   width: ${props => (props.cellName === 'time' ? '43%' : '12%')};
// `;

const HeaderCell = styled.span`
  width: ${props => (props.cellName === 'time' ? '43%' : '12%')};
`;

export default TradesTableRenderer;
