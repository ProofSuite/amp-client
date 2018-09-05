import React from 'react';
import { Button, Switch, Icon, Checkbox, InputGroup } from '@blueprintjs/core';
import { RowSpaceBetween, CryptoIcon } from '../Common';
import styled from 'styled-components';

const DepositTableRenderer = (props: Props) => {
  const { hideZeroBalanceToken, toggleZeroBalanceToken, provider } = props;
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
            <TableHeaderCellForIcon style={{ width: '3.5%' }}> </TableHeaderCellForIcon>
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
  const { provider, depositData, handleAllowance, handleModalClose, handleWithdraw } = props;
  return depositData.map(({ symbol, balance, allowed }, index) => {
    return (
      <Row key={index}>
        <CellForIcon>
          <CryptoIcon name={symbol} />
        </CellForIcon>
        <Cell>
          <span>{symbol}</span>
        </Cell>
        <Cell>{balance}</Cell>
        <Cell>
          <Switch checked={allowed} onChange={handleAllowance} />
        </Cell>
        <Cell style={{ width: '40%' }}>
          <ButtonWrapper>
            <Button
              disabled={!provider}
              style={{ marginRight: '10px' }}
              intent="primary"
              text="Deposit"
              onClick={handleModalClose}
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
const SingleRow = styled.tr`
  width: 100%;
  height: 100%;
`;
const SingleCell = styled.td`
  height: 100%;
  width: 100%;
  display: flex;
  vertical-align: middle;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
const TableBodyContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const TokenSymbol = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  & svg {
    margin-right: 7px;
  }
`;

const TableSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 99%;
`;
const SearchBar = styled.input.attrs({
  className: 'bp3-input',
})`
  width: 100%;
`;

const TableBody = styled.tbody``;
const TableHeader = styled.tr``;
const TableHeaderCell = styled.th`
  width: 19%;
`;
const TableHeaderCellForIcon = styled.th`
  width: 5.5%;
`;

const Cell = styled.td`
  width: 19%;
  vertical-align: middle !important;
  & label {
    margin: 0;
  }
`;
const CellForIcon = styled.td`
  width: 1%;
  font-size: 25px;
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

const HeadPanel = styled.div`
  display: flex;
  justify-con
`;

export default DepositTableRenderer;
