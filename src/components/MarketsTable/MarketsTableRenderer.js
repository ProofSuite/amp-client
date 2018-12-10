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
  Colors, 
  AMPLogo, 
  Centered, 
  LargeText, 
  SmallText,
  BlueGlowingButton
} from '../Common';

type Props = {
  searchInput: string,
  pairs: Array<Object>,
  handleSearchInputChange: (SyntheticInputEvent<>) => void,
  redirectToTradingPage: (string, string) => void,
  selectedQuoteToken: string,
  handleUpdateQuoteToken: string => void,
  quoteTokens: Array<string>
};

const MarketsTableRenderer = (props: Props) => {
  const {
    pairs,
    quoteTokens,
    searchInput,
    handleSearchInputChange,
    redirectToTradingPage,
    selectedQuoteToken,
    handleUpdateQuoteToken,
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
          {quoteTokens.map((quote, i) => {
            return (
              <Button
                text={quote}
                minimal
                onClick={() => handleUpdateQuoteToken(quote)}
                active={selectedQuoteToken === quote}
                intent={selectedQuoteToken === quote ? 'primary' : ''}
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
              quoteTokens={quoteTokens}
            />
          </TableBody>
        </Table>
      </TableBodyContainer>
      {pairs.length === 0 && (
          <Centered>
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
    pairs
  } = props;

  return pairs.map(({ pair, baseTokenSymbol, quoteTokenSymbol, baseTokenAddress, quoteTokenAddress, lastPrice, change, high, low, volume, orderbookSize }, index) => {
    return (
      <Row key={index}>
        <Cell>
          <SmallText>
            {pair}
          </SmallText>
        </Cell>
        <Cell>
          <SmallText>
            {formatNumber(lastPrice, { precision: 2 })} {baseTokenSymbol}
          </SmallText>
        </Cell>
        <Cell>
          <SmallText>
            {formatNumber(volume, { precision: 2 })}
          </SmallText>
        </Cell>
        <Cell>
          <SmallText>
            {formatNumber(orderbookSize, { precision: 2 })}
          </SmallText>
        </Cell>
        <Cell>
          <ChangeCell change={change}>{change} %</ChangeCell>
        </Cell>
        <Cell>
          <BlueGlowingButton
            intent="primary"
            text="Trade"
            onClick={() => redirectToTradingPage(baseTokenSymbol, quoteTokenSymbol)}
          />
        </Cell>
      </Row>
    )
  })
}

const ChangeCell = styled(SmallText).attrs({ className: 'change' })`
  color: ${props => (props.change > 0 ? Colors.GREEN5 : Colors.RED4)} !important;
`

const Table = styled.table.attrs({
  className: 'bp3-html-table bp3-condensed bp3-interactive',
})`
  width: 100%;
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
`;

const ButtonRow = styled.span`
  display: flex;
  justify-content: flex-end;
  & .bp3-button {
    margin-left: 5px;
  }
`

export default MarketsTableRenderer;
