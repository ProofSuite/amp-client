// @flow
import React from 'react';
import styled from 'styled-components';
import { formatNumber } from 'accounting-js'

import { 
  Button, 
  InputGroup, 
} from '@blueprintjs/core';

import { 
  RowSpaceBetween,
  ColoredCryptoIcon,
  Colors, 
  AMPLogo, 
  Centered, 
  LargeText, 
  SmallText,
  BlueGlowingButton,
  FlexRow,
  Box
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

const MarketsTableRenderer = (props: Props) => {
  const {
    pairs,
    searchInput,
    handleSearchInputChange,
    redirectToTradingPage,
    selectedTab,
    handleChangeTab,
    currentReferenceCurrency,
    tabs
  } = props;

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
      <Table>
        <TableHeader>
          <TableHeaderCell>Market</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
          <TableHeaderCell>Price ({currentReferenceCurrency})</TableHeaderCell>
          <TableHeaderCell>Volume</TableHeaderCell>
          <TableHeaderCell>Orderbook size</TableHeaderCell>
          <TableHeaderCell>Change 24H</TableHeaderCell>
          <TableHeaderCell></TableHeaderCell>
        </TableHeader>
      </Table>
      <TableBodyContainer>
        <Table>
          <TableBody>
            <MarketTableRow
              pairs={pairs}
              redirectToTradingPage={redirectToTradingPage}
              currentReferenceCurrency={currentReferenceCurrency}
            />
          </TableBody>
        </Table>
      </TableBodyContainer>
      {pairs.length === 0 && (
          <Centered my={4}>
            <AMPLogo height="150em" width="150em" />
            <LargeText muted>No tokens to display!</LargeText>
          </Centered>
      )}
    </TableSection>
  );
};

const MarketTableRow = (props: *) => {
  const {
    redirectToTradingPage,
    pairs,
    currentReferenceCurrency
  } = props;

  return pairs.map(({ pair, baseTokenSymbol, quoteTokenSymbol, baseTokenAddress, quoteTokenAddress, lastPrice, change, high, low, volume, orderbookSize }, index) => {
    return (
      <Row key={index}>
        <Cell>
          <FlexRow alignItems="center">
          <ColoredCryptoIcon size={32} name={baseTokenSymbol} />
          <SmallText p={2} muted>
            {pair}
          </SmallText>
          </FlexRow>
        </Cell>
        <Cell>
          <SmallText muted>
            {formatNumber(lastPrice, { precision: 2 })} {quoteTokenSymbol}
          </SmallText>
        </Cell>
        <Cell>
          <SmallText muted>
            {formatNumber(lastPrice, { precision: 2 })} {currentReferenceCurrency}
          </SmallText>
        </Cell>
        <Cell>
          <SmallText muted>
            {formatNumber(volume, { precision: 2 })}
          </SmallText>
        </Cell>
        <Cell>
          <SmallText muted>
            {orderbookSize ? formatNumber(orderbookSize, { precision: 2 }) : 'N.A'}
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
  })
}

const ChangeCell = styled(SmallText).attrs({ className: 'change' })`
  color: ${props => (props.change > 0 ? Colors.GREEN5 : Colors.RED4)} !important;
`

const Table = styled.table.attrs({
  className: 'bp3-html-table bp3-condensed',
})`
  width: 100%;
  border: none !important;
`;

const TableBodyContainer = styled.div`
  overflow-y: scroll;
`;

const TableSection = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const TableBody = styled.tbody`
  border: none !important
`;

const TableHeader = styled.tr`
  width: 100%;
`;

const TableHeaderCell = styled.th`
width: 15%;
text-align: middle;
`;

const Cell = styled.td`
  width: 15%;
  vertical-align: middle !important;
  & label {
    margin: 0;
  }
`;

const Row = styled.tr`
  width: 100%;
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
