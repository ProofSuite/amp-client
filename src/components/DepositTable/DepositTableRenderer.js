import React from 'react';
import { Button, Switch } from '@blueprintjs/core';
import styled from 'styled-components';

const DepositTableRenderer = (props: Props) => {
  return (
    <Wrapper>
      <Table>
        <TableHeader>
          <Row>
            <TableHeaderCell>Token Name</TableHeaderCell>
            <TableHeaderCell>Balances</TableHeaderCell>
            <TableHeaderCell>Allowances</TableHeaderCell>
            <TableHeaderCell>Allow trading</TableHeaderCell>
          </Row>
        </TableHeader>
        <TableBody>
          <RowRenderer {...props} />
        </TableBody>
      </Table>
      <HeadingMenu>
        <h4>Heading</h4>
        <p>Text .......</p>
        <p>Text .......</p>
        <p>Text .......</p>
        <p>Text .......</p>
      </HeadingMenu>
    </Wrapper>
  );
};

const RowRenderer = (props: Props) => {
  const { depositData, handleAllowance, handleModalClose, handleWithdraw } = props;

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
            <Button style={{ marginRight: '10px' }} intent="primary" text="Deposit" onClick={handleModalClose} />
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
  width: 60%;
`;

const Row = styled.tr`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const HeadingMenu = styled.div`
  width: 39%;
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
