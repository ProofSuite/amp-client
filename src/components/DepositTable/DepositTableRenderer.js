// @flow
import React from 'react';
import { Button, Switch, Checkbox, InputGroup } from '@blueprintjs/core';
import { RowSpaceBetween, ColoredCryptoIcon } from '../Common';
import styled from 'styled-components';

import type { TokenData } from '../../types/tokens'

type Props = {
  connected: boolean,
  baseTokensData: Array<TokenData>,
  quoteTokensData: Array<TokenData>,
  ETHTokenData: TokenData,
  WETHTokenData: TokenData,
  tokenDataLength: number,
  searchInput: string,
  handleSearchInputChange: (SyntheticInputEvent<>) => void,
  hideZeroBalanceToken: boolean,
  openDepositModal: string => void,
  openConvertModal: (string, string) => void,
  openSendModal: string => void,
  toggleAllowance: string => void,
  toggleZeroBalanceToken: void => void,
  redirectToTradingPage: string => void,
};

const DepositTableRenderer = (props: Props) => {
  const {
    hideZeroBalanceToken,
    toggleZeroBalanceToken,
    searchInput,
    handleSearchInputChange,
    tokenDataLength,
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
            <ETHRow {...props} />
            <WETHRow {...props} />
            <QuoteTokenRows {...props} />
            <BaseTokenRows {...props} />
          </TableBody>
        </Table>
        {tokenDataLength === 0 && <NoToken>No tokens</NoToken>}
      </TableBodyContainer>
    </TableSection>
  );
};

const ETHRow = (props: Props) => {
  const {
    connected,
    ETHTokenData,
    openDepositModal,
    openSendModal,
    openConvertModal,
  } = props;

  if (!ETHTokenData) return null

  const { symbol, balance } = ETHTokenData

  return (
    <Row key='ETH'>
      <Cell>
        <TokenNameWrapper>
          <ColoredCryptoIcon size={35} name={symbol} />
          <span>{symbol}</span>
        </TokenNameWrapper>
      </Cell>
      <Cell>{balance}</Cell>
      <Cell></Cell>
      <Cell style={{ width: '40%' }}>
        <ButtonWrapper>
          <Button
            disabled={!connected}
            intent="success"
            text="Deposit"
            minimal
            rightIcon="import"
            onClick={() => openDepositModal(symbol)}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            disabled={!connected}
            intent="success"
            minimal
            text="Send"
            rightIcon="export"
            onClick={() => openSendModal(symbol)}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            disabled={!connected}
            intent="success"
            minimal
            text="Convert to WETH"
            onClick={() => openConvertModal('ETH', 'WETH')}
            rightIcon="random"
          />
        </ButtonWrapper>
      </Cell>
    </Row>
  );
}

const WETHRow = (props: Props) => {
  const {
    connected,
    WETHTokenData,
    toggleAllowance,
    openDepositModal,
    openSendModal,
    openConvertModal
  } = props


  if (!WETHTokenData) return null

  const { symbol, balance, allowed, allowancePending } = WETHTokenData

  return (
    <Row key='WETH'>
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
          <Button
            disabled={!connected}
            intent="success"
            minimal
            rightIcon="import"
            text="Deposit"
            onClick={() => openDepositModal(symbol)}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            disabled={!connected}
            intent="success"
            minimal
            rightIcon="export"
            text="Send"
            onClick={() => openSendModal(symbol)}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            disabled={!connected}
            intent="success"
            minimal
            text="Convert to ETH"
            rightIcon="random"
            onClick={() => openConvertModal('WETH', "ETH")} />
        </ButtonWrapper>
      </Cell>
    </Row>
  )
}

const QuoteTokenRows = (props: Props) => {
  const {
    connected,
    quoteTokensData,
    toggleAllowance,
    openDepositModal,
    openSendModal,
  } = props

  if (!quoteTokensData) return null

  return quoteTokensData.map(({ symbol, balance, allowed, allowancePending }, index) => {
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
            <Button
              disabled={!connected}
              intent="success"
              minimal
              text="Deposit"
              rightIcon="import"
              onClick={() => openDepositModal(symbol)}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              disabled={!connected}
              intent="success"
              minimal
              text="Send"
              rightIcon="export"
              onClick={() => openSendModal(symbol)}
            />
          </ButtonWrapper>
        </Cell>
      </Row>
    )
  })
}



const BaseTokenRows = (props: Props) => {
  const {
    baseTokensData,
    connected,
    toggleAllowance,
    openDepositModal,
    openSendModal,
    redirectToTradingPage,
  } = props;

  if (!baseTokensData) return null

  return baseTokensData.map(({ symbol, balance, allowed, allowancePending }, index) => {
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
            <Button
              disabled={!connected}
              intent="success"
              text="Deposit"
              minimal
              rightIcon="import"
              onClick={() => openDepositModal(symbol)}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              disabled={!connected}
              intent="success"
              text="Send"
              minimal
              onClick={() => openSendModal(symbol)}
              rightIcon="export"
              />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              disabled={!connected}
              intent="success"
              text="Trade"
              rightIcon="chart"
              minimal
              onClick={() => redirectToTradingPage(symbol)}
            />
          </ButtonWrapper>
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
