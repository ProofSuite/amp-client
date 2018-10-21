// @flow
import React from 'react';
import { Button, Switch, Checkbox, InputGroup } from '@blueprintjs/core';
import { RowSpaceBetween, ColoredCryptoIcon } from '../Common';
import styled from 'styled-components';

type Props = {
  connected: boolean,
  depositTableData: Object,
  searchInput: string,
  handleSearchInputChange: (SyntheticEvent<>) => void,
  hideZeroBalanceToken: void => void,
  openDepositModal: string => void,
  openSendModal: string => void,
  toggleAllowance: void => void,
  toggleZeroBalanceToken: void => void,
  redirectToTradingPage: string => void,
};

const DepositTableRenderer = (props: Props) => {
  const {
    hideZeroBalanceToken,
    toggleZeroBalanceToken,
    depositTableData,
    searchInput,
    handleSearchInputChange,
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
        <HideTokenCheck checked={hideZeroBalanceToken} onChange={toggleZeroBalanceToken}>
          Hide Tokens with 0 balance
        </HideTokenCheck>
      </RowSpaceBetween>
      <Table>
        <TableHeader>
          <TableHeaderCell>Token Name</TableHeaderCell>
          <TableHeaderCell>Balances</TableHeaderCell>
          <TableHeaderCell>Allowances</TableHeaderCell>
          <TableHeaderCell style={{ width: '40%' }}>Allow trading</TableHeaderCell>
        </TableHeader>
      </Table>
      <TableBodyContainer>
        <Table>
          <TableBody>
            <RowRenderer {...props} />
          </TableBody>
        </Table>
        {depositTableData.length === 0 && <NoToken>No tokens</NoToken>}
      </TableBodyContainer>
    </TableSection>
  );
};

const RowRenderer = (props: Props) => {
  const { connected, depositTableData, toggleAllowance, openDepositModal, openSendModal, redirectToTradingPage } = props;

  return depositTableData.map(({ symbol, balance, allowed, allowancePending }, index) => {
    return (
      <Row key={index}>
        <Cell>
          <TokenNameWrapper>
            <ColoredCryptoIcon size={35} name={symbol} />
            <span>{symbol}</span>
          </TokenNameWrapper>
        </Cell>
        <Cell>{balance}</Cell>
        <Cell>
          <Switch inline checked={allowed} onChange={() => toggleAllowance(symbol)} />
          {allowancePending && <span>Pending</span>}
        </Cell>
        <Cell style={{ width: '40%' }}>
          <ButtonWrapper>
            <Button disabled={!connected} intent="primary" text="Deposit" onClick={() => openDepositModal(symbol)} />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button disabled={!connected} intent="primary" text="Send" onClick={() => openSendModal(symbol)} />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button disabled={!connected} intent="primary" text="Trade" onClick={() => redirectToTradingPage(symbol)} />
          </ButtonWrapper>
          {symbol === 'ETH' &&
            <ButtonWrapper>
              <Button
                disabled={!connected}
                intent="primary"
                minimal
                text="Convert to WETH"
                rightIcon="random"
                onClick={() => console.log('convert to WETH')} />
            </ButtonWrapper>
          }
          {
            symbol === 'WETH' &&
            <ButtonWrapper>
              <Button
                disabled={!connected}
                intent="primary"
                minimal
                text="Convert to ETH"
                onClick={() => console.log('convert to ETH')}
                rightIcon="random"
              />
            </ButtonWrapper>
          }
        </Cell>
      </Row>
    );
  });
};

const Table = styled.table.attrs({
  className: 'bp3-html-table bp3-html-table-striped',
})`
  width: 100%;
`;

const TableBodyContainer = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: scroll;
`;

const TableSection = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 100%;
  width: 99%;
`;

const TableBody = styled.tbody``;

const TableHeader = styled.tr``;

const TableHeaderCell = styled.th`
  width: 19%;
`;
const Cell = styled.td`
  width: 19%;
  vertical-align: middle !important;
  & label {
    margin: 0;
  }
`;

const Row = styled.tr`
  width: 100%;
`;

const TokenNameWrapper = styled.thead`
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

export default DepositTableRenderer;
