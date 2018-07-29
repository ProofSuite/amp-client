import React from 'react';
import { Button, Switch } from '@blueprintjs/core';
import styled from 'styled-components';

const DepositTableRenderer = (props: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableHeaderCell>Token Name</TableHeaderCell>
        <TableHeaderCell>Balances</TableHeaderCell>
        <TableHeaderCell>Allowances</TableHeaderCell>
        <TableHeaderCell>Allow trading</TableHeaderCell>
        <TableHeaderCell />
      </TableHeader>
      <TableBody>
        <RowRenderer {...props} />
      </TableBody>
    </Table>
  );
};

const RowRenderer = (props: Props) => {
  const { depositData = [], handleAllowance, handleDeposit, handleWithdraw } = props;

  return depositData.map(({ symbol, balance, allowed }, index) => {
    return (
      <Row key={index}>
        <Cell>{symbol}</Cell>
        <Cell>{balance}</Cell>
        <Cell>
          <Switch checked={allowed} onChange={handleAllowance} />
        </Cell>
        <Cell>
          <ButtonWrapper>
            <Button intent="primary" text="Deposit" onClick={handleDeposit} />
            <Button intent="primary" text="Withdraw" onClick={handleWithdraw} />
          </ButtonWrapper>
        </Cell>
      </Row>
    );
  });
};

const Table = styled.table.attrs({
  className: 'pt-html-table pt-interactive pt-html-table-striped',
})`
  width: 100%;
`;

const Row = styled.tr`
  width: 100%;
`;

const TableBody = styled.tbody``;
const TableHeader = styled.thead``;
const TableHeaderCell = styled.th``;

const Cell = styled.td``;

const ButtonWrapper = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;

export default DepositTableRenderer;
