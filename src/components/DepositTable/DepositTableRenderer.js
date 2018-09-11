import React from 'react';
import { Button, Switch, Checkbox, InputGroup } from '@blueprintjs/core';
import { RowSpaceBetween, ColoredCryptoIcon } from '../Common';
import styled from 'styled-components';

const DepositTableRenderer = (props: Props) => {
  const { hideZeroBalanceToken, toggleZeroBalanceToken } = props;
  return (
    <TableSection>
      <RowSpaceBetween style={{ marginBottom: '10px' }}>
        <InputGroup
          type="string"
          leftIcon="search"
          placeholder="Search Token ..."
          value={props.searchValue}
          onChange={props.handleSearchChange}
        />
        <HideTokenCheck checked={hideZeroBalanceToken} onChange={toggleZeroBalanceToken}>
          Hide Tokens with 0 balance
        </HideTokenCheck>
      </RowSpaceBetween>
      <Table>
        <thead>
          <TableHeader>
            <TableHeaderCell>Token Name</TableHeaderCell>
            <TableHeaderCell>Balances</TableHeaderCell>
            <TableHeaderCell>Allowances</TableHeaderCell>
            <TableHeaderCell style={{ width: '40%' }}>Allow trading</TableHeaderCell>
          </TableHeader>
        </thead>
      </Table>
      <TableBodyContainer>
        <Table>
          <TableBody>
            <RowRenderer {...props} />
          </TableBody>
        </Table>
        {props.depositData.length < 1 && <NoToken>No Token to show</NoToken>}
      </TableBodyContainer>
    </TableSection>
  );
};

const RowRenderer = (props: Props) => {
  const { provider, depositData, handleAllowance, handleDepositClose, handleWithdraw } = props;
  return depositData.map(({ symbol, balance, allowed }, index) => {
    return (
      <Row key={index}>
        <Cell>
          <TokenNameWrapper>
            <ColoredCryptoIcon size={23} name={symbol} />
            <span>{symbol}</span>
          </TokenNameWrapper>
        </Cell>
        <Cell>{balance}</Cell>
        <Cell>
          <Switch checked={allowed} onChange={() => handleAllowance(allowed, symbol)} />
        </Cell>
        <Cell style={{ width: '40%' }}>
          <ButtonWrapper>
            <Button
              disabled={!provider}
              style={{ marginRight: '10px' }}
              intent="primary"
              text="Deposit"
              onClick={handleDepositClose}
            />
            <Button disabled={!provider} intent="primary" text="Withdraw" onClick={handleWithdraw} />
          </ButtonWrapper>
        </Cell>
      </Row>
    );
  });
};

const Table = styled.table.attrs({
  className: 'bp3-html-table bp3-interactive bp3-html-table-striped',
})`
  width: 100%;
`;

const Row = styled.tr`
  width: 100%;
`;
const TokenNameWrapper = styled.div`
  display: flex;
  align-items: center;
  & svg {
    margin-right: 12px;
  }
`;
const TableBodyContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
const TableSection = styled.div`
  display: flex;
  justify-content: space-between;
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

const ButtonWrapper = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;

export default DepositTableRenderer;
