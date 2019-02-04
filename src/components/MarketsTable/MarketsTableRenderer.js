// @flow
import React from 'react';
import styled from 'styled-components';
import Help from '../../components/Help'

import { 
  formatNumber
} from 'accounting-js'

import {
  List,
  AutoSizer
} from 'react-virtualized'

import { 
  Button, 
  InputGroup, 
  Position,
} from '@blueprintjs/core';

import {
  Spring
} from 'react-spring'

import { 
  FlexRowSpaceBetween,
  Colors, 
  AMPLogo, 
  Centered, 
  LargeText, 
  SmallText,
  BlueGlowingButton,
  FlexRow,
  Box,
  CryptoIconPair
} from '../Common';

import type { PairData } from './MarketsTable'

type Props = {
  searchInput: string,
  pairs: Array<PairData>,
  handleSearchInputChange: (SyntheticInputEvent<>) => void,
  redirectToTradingPage: string => void,
  selectedTab: string,
  handleChangeTab: string => void,
  tabs: Array<string>,
  quoteTokens: Array<string>,
  currentReferenceCurrency: string,
  toggleMarketStatistics: void => void
};

class MarketsTableRenderer extends React.PureComponent<Props> {

    rowRenderer = ({ key, index, style }: *) => {
      const {
        pairs,
        redirectToTradingPage,
        currentReferenceCurrency,
      } = this.props;

      const { 
        pair,
        baseTokenSymbol,
        quoteTokenSymbol,
        price,
        change, 
        volume, 
        orderVolume,
      } = pairs[index]
  
      return (
        <Row key={key} onClick={() => redirectToTradingPage(pair)} style={style}>
          <Cell>
            <FlexRow alignItems="center">
              <Box pb={4} mr={2}>
                <CryptoIconPair size={32} baseToken={baseTokenSymbol} quoteToken={quoteTokenSymbol} />
              </Box>
              <SmallText muted>{pair}</SmallText>
            </FlexRow>
          </Cell>
          <Cell>
            <SmallText muted>
              {formatNumber(price, { precision: 2 })} {quoteTokenSymbol}
            </SmallText>
          </Cell>
          <Cell>
            <SmallText muted>
              {formatNumber(price, { precision: 2 })} {currentReferenceCurrency}
            </SmallText>
          </Cell>
          <Cell>
            <SmallText muted>
              {formatNumber(volume, { precision: 2 })}
            </SmallText>
          </Cell>
          <Cell>
            <SmallText muted>
              {orderVolume ? formatNumber(orderVolume, { precision: 2 }) : 'N.A'}
            </SmallText>
          </Cell>
          <Cell>
            <ChangeCell change={change}>{change ? `${formatNumber(change, { precision: 2 })}%` : 'N.A'}</ChangeCell>
          </Cell>
          <Cell>
            <FlexRow justifyContent="flex-end" p={1}>
              <BlueGlowingButton
                intent="primary"
                text="Trade"
                onClick={() => redirectToTradingPage(pair)}
              />
            </FlexRow>
          </Cell>
        </Row>
      )
  }

  noRowsRenderer = () => {
    return (
      <Centered my={4}>
        <AMPLogo height="150em" width="150em" />
        <LargeText muted>No pairs to display!</LargeText>
      </Centered>
    )
  }

  render() {
      const {
      pairs,
      searchInput,
      handleSearchInputChange,
      selectedTab,
      handleChangeTab,
      currentReferenceCurrency,
      tabs,
      toggleMarketStatistics
    } = this.props;

    return (
      <Spring from={{ opacity: 0, marginLeft: -200 }} to={{ opacity: 1, marginLeft: 0 }} >
      {props =>
      <TableSection style={props}>
        <TableToolBar mt={3} mb={4}>
          <FlexRow>
            <InputGroup
              type="string"
              leftIcon="search"
              placeholder="Search Token ..."
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <Button
              minimal
              intent="primary"
              text="View Market Statistics"
              icon="stacked-chart"
              onClick={toggleMarketStatistics}
            />
          </FlexRow>
          <ButtonRow>
            {tabs.map((tab, i) => {
              return (
                <Button
                  text={tab}
                  minimal
                  onClick={() => handleChangeTab(tab)}
                  active={selectedTab === tab}
                  intent={selectedTab === tab ? 'primary' : ''}
                />    
              )
            })
          }
          </ButtonRow>
        </TableToolBar>
            <TableHeader>
              <TableHeaderCell>Market</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Price ({currentReferenceCurrency})</TableHeaderCell>
              <TableHeaderCell>Volume</TableHeaderCell>
              <TableHeaderCell>
                Order Volume
                <span> </span>
                <Help position={Position.RIGHT}>
                  The total amount of bids and asks currently in the orderbook
                </Help>
              </TableHeaderCell>
              <TableHeaderCell>Change 24H</TableHeaderCell>
              <TableHeaderCell></TableHeaderCell>
            </TableHeader>
            <Table>
            <TableBody>
              <AutoSizer>
                {({ width, height }) => (
                  
                  <List
                    width={width}
                    height={height}
                    rowCount={pairs.length}
                    rowHeight={60}
                    rowRenderer={this.rowRenderer}
                    noRowsRenderer={this.noRowsRenderer}
                    overscanRowCount={0}
                  />
                )}
              </AutoSizer>
              </TableBody>
          </Table>
      </TableSection>
      }
      </Spring>
    );
  }
};


const ChangeCell = styled(SmallText).attrs({ className: 'change' })`
  color: ${props => (props.change > 0 ? Colors.GREEN5 : Colors.RED4)} !important;
`

const Table = styled.div.attrs({
  className: '',
})`
  width: 100%;
  border: none !important;
`;

const TableToolBar = styled(FlexRowSpaceBetween)``

const TableSection = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const TableBody = styled.div`
  height: 80vh;
`;

const TableHeader = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const TableHeaderCell = styled.div`
  width: 15%;
`;

const Cell = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  padding-left: 6px;

  &:hover {
    background-color: ${Colors.BLUE_MUTED} !important;
    cursor: pointer;
    position: relative;
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 0 1px rgb(49, 64, 76), -1px 10px 4px rgba(16, 22, 26, 0.1),
      1px 18px 24px rgba(16, 22, 26, 0.2);
    box-shadow: inset 0 0 0 1px rgb(49, 64, 76), -1px 5px 4px rgba(16, 22, 26, 0.1), 1px 7px 24px rgba(16, 22, 26, 0.2);
    z-index: 1;
  }
`;

const ButtonRow = styled.span`
  display: flex;
  justify-content: flex-end;
  & .bp3-button {
    margin-left: 5px;
  }
`

export default MarketsTableRenderer;
