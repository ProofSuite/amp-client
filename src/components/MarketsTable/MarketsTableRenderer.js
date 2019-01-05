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
  RowSpaceBetween,
  CryptoIconPair,
  Colors, 
  AMPLogo, 
  Centered, 
  LargeText, 
  SmallText,
  BlueGlowingButton,
  FlexRow,
} from '../Common';

type Props = {
  searchInput: string,
  pairs: Array<Object>,
  handleSearchInputChange: (SyntheticInputEvent<>) => void,
  redirectToTradingPage: (string, string) => void,
  selectedTab: string,
  handleChangeTab: string => void,
  tabs: Array<string>,
  quoteTokens: Array<string>,
  currentReferenceCurrency: string,
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
        baseTokenAddress,
        quoteTokenAddress,
        price,
        change, 
        high,
        low,
        volume, 
        orderVolume,
      } = pairs[index]


  
      return (
        <Row key={key} onClick={() => redirectToTradingPage(baseTokenSymbol, quoteTokenSymbol)} style={style}>
          <Cell>
            <FlexRow alignItems="center">
              <CryptoIconPair size={35} baseToken={baseTokenSymbol} quoteToken={quoteTokenSymbol} />
              <SmallText p={2} muted>{pair}</SmallText>
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
            <ChangeCell change={change}>{change ? `${change}%` : 'N.A'}</ChangeCell>
          </Cell>
          <Cell>
            <FlexRow justifyContent="flex-end" p={1}>
              <BlueGlowingButton
                intent="primary"
                text="Trade"
                onClick={() => redirectToTradingPage(baseTokenSymbol, quoteTokenSymbol)}
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
      tabs
    } = this.props;

    return (
      <TableSection>
        <RowSpaceBetween style={{ marginBottom: '10px' }}>
          <InputGroup
            type="string"
            leftIcon="search"
            placeholder="Search Token ..."
            value={searchInput}
            onChange={handleSearchInputChange}
          />
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
        </RowSpaceBetween>
          
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
