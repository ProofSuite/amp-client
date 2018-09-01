import React from 'react';
import { Button, Switch, Icon, Checkbox, InputGroup } from '@blueprintjs/core';
import { RowSpaceBetween } from '../Common';
import styled from 'styled-components';

const DepositTableRenderer = (props: Props) => {
  const { hideZeroBalanceToken, toggleZeroBalanceToken } = props;
  return (
    <Wrapper>
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
        <Cell style={{ width: '40%' }}>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const TableSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 60%;
`;

const HeadingMenu = styled.div`
  width: 39%;
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

const HeadPanel = styled.div`
  display: flex;
  justify-con
`;

export default DepositTableRenderer;
