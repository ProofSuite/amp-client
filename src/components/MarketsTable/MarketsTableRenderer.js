// @flow
import React from 'react';
import styled from 'styled-components';
import { formatNumber } from 'accounting-js'
import Help from '../../components/Help'

import { 
  Button, 
  Switch, 
  Checkbox, 
  InputGroup, 
  Tag, 
  Position
} from '@blueprintjs/core';

import { 
  RowSpaceBetween, 
  CryptoIcon, 
  Colors, 
  AMPLogo, 
  Centered, 
  LargeText, 
  GreenGlowingButton, 
  BlueGlowingButton
} from '../Common';

type TokenData = {
  symbol: string,
  address: string,
  balance: string,
  allowed: boolean,
  allowancePending: boolean
}

type Props = {
  connected: boolean,
  baseTokensData: Array<TokenData>,
  quoteTokensData: Array<TokenData>,
  ETHTokenData: TokenData,
  WETHTokenData: TokenData,
  tokenDataLength: number,
  searchInput: string,
  handleSearchInputChange: (SyntheticInputEvent<>) => void,
  toggleAllowance: string => void,
  redirectToTradingPage: string => void,
  totalFilteredTokens: number
};

const MarketsTableRenderer = (props: Props) => {
  const {
    searchInput,
    handleSearchInputChange,
    totalFilteredTokens
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
      </RowSpaceBetween>
      <Table>
        <TableHeader>
          <TableHeaderCell>Market</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
          <TableHeaderCell>Volume</TableHeaderCell>
          <TableHeaderCell>Orderbook size</TableHeaderCell>
          <TableHeaderCell>Change 24H</TableHeaderCell>
        </TableHeader>
      </Table>
      <TableBodyContainer>
        <Table>
          <TableBody>
            <MarketTableRow
              
            />
          </TableBody>
        </Table>
      </TableBodyContainer>
      {totalFilteredTokens === 0 && (
          <Centered>
            <AMPLogo height="150em" width="150em" />
            <LargeText muted>No tokens to display!</LargeText>
          </Centered>
      )}
    </TableSection>
  );
};

const MarketRow = (props: Props) => {
  const {
    redirectToTradingPage,
  } = props;

  return pairData.map(({ baseTokenSymbol, quoteTokenSymbol, pairIsAllowed, allowancePending }, index) => {
    return (
      <Row key={index}>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
      </Row>
    )
  })
}


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

const TokenNameWrapper = styled.span`
  display: flex;
  align-items: center;
  & svg {
    margin-right: 12px;
  }
`;

const HideTokenCheck = styled(Checkbox)`
  margin: 0 !important;
`;

const NoToken = styled.p`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const ButtonWrapper = styled.span`
  margin-left: 10px !important;
  margin-right: 10px !important;
`;

export default MarketsTableRenderer;
