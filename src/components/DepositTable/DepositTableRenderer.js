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
  allowancePending: boolean,
  decimals: number,
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
  hideZeroBalanceToken: boolean,
  openDepositModal: string => void,
  openConvertModal: (string, string) => void,
  openSendModal: string => void,
  toggleAllowance: string => void,
  toggleZeroBalanceToken: void => void,
  redirectToTradingPage: string => void,
  totalFilteredTokens: number
};

const DepositTableRenderer = (props: Props) => {
  const {
    hideZeroBalanceToken,
    toggleZeroBalanceToken,
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
        <HideTokenCheck checked={hideZeroBalanceToken} onChange={toggleZeroBalanceToken}>
          Hide Tokens with 0 balance
        </HideTokenCheck>
      </RowSpaceBetween>
      <Table>
        <TableHeader>
          <TableHeaderCell>Token Name</TableHeaderCell>
          <TableHeaderCell>Balances</TableHeaderCell>
          <TableHeaderCell>
          Unlocked 
          <span> </span>
          <Help position={Position.RIGHT}>
            By unlocking tokens, you allow the AMP smart-contract to settle trades you have approved.
            Unlocking both tokens is required before starting trading a given pair.
          </Help>
          </TableHeaderCell>
          <TableHeaderCell style={{ width: '70%' }}></TableHeaderCell>
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
          <CryptoIcon size={30} color={Colors.BLUE5} name={symbol} />
          <span>{symbol}</span>
        </TokenNameWrapper>
      </Cell>
      <Cell>{formatNumber(balance, { precision: 2})}</Cell>
      <Cell></Cell>
      <Cell style={{ width: '70%' }}>
        <ButtonWrapper>
          <BlueGlowingButton
            disabled={!connected}
            intent="primary"
            text="Deposit"
            onClick={() => openDepositModal(symbol)}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <BlueGlowingButton
            disabled={!connected}
            intent="primary"
            text="Send"
            onClick={() => openSendModal(symbol)}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <GreenGlowingButton
            disabled={!connected}
            intent="success"
            text="Convert to WETH"
            onClick={() => openConvertModal('ETH', 'WETH')}
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
    openConvertModal,
  } = props


  if (!WETHTokenData) return null

  const { symbol, balance, allowed, allowancePending } = WETHTokenData

  return (
    <Row key='WETH'>
      <Cell>
        <TokenNameWrapper>
          <CryptoIcon size={30} color={Colors.BLUE5} name={symbol} />
          <span>{symbol}</span>
        </TokenNameWrapper>
      </Cell>
      <Cell>{formatNumber(balance, { precision: 2})}</Cell>
      <Cell>
          <Switch inline checked={allowed} onChange={() => toggleAllowance(symbol)} />
          {allowancePending && <Tag intent="success" large minimal interactive icon="time">Pending</Tag>}
        </Cell>
      <Cell style={{ width: '70%' }}>
        <ButtonWrapper>
          <BlueGlowingButton
            disabled={!connected}
            intent="primary"
            text="Deposit"
            onClick={() => openDepositModal(symbol)}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <BlueGlowingButton
            disabled={!connected}
            intent="primary"
            text="Send"
            onClick={() => openSendModal(symbol)}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <GreenGlowingButton
            disabled={!connected}
            intent="success"
            text="Convert to ETH"
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
            <CryptoIcon size={30} color={Colors.BLUE5} name={symbol} />
            <span>{symbol}</span>
          </TokenNameWrapper>
        </Cell>
        <Cell>{formatNumber(balance, { precision: 2 })}</Cell>
        <Cell>
          <Switch inline checked={allowed} onChange={() => toggleAllowance(symbol)} />
          {allowancePending && <Tag intent="success" large minimal interactive icon="time">Pending</Tag>}
        </Cell>
        <Cell style={{ width: '70%' }}>
          <ButtonWrapper>
            <BlueGlowingButton
              disabled={!connected}
              intent="primary"
              text="Deposit"
              onClick={() => openDepositModal(symbol)}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <BlueGlowingButton
              disabled={!connected}
              intent="primary"
              text="Send"
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
            <CryptoIcon size={30} color={Colors.BLUE5} name={symbol} />
            <span>{symbol}</span>
          </TokenNameWrapper>
        </Cell>
        <Cell>{formatNumber(balance, { precision: 2})}</Cell>
        <Cell>
          <Switch inline checked={allowed} onChange={() => toggleAllowance(symbol)} />
          {allowancePending && <Tag intent="success" large minimal interactive icon="time">Pending</Tag>}
        </Cell>
        <Cell style={{ width: '70%' }}>
          <ButtonWrapper>
            <BlueGlowingButton
              disabled={!connected}
              intent="primary"
              text="Deposit"
              onClick={() => openDepositModal(symbol)}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <BlueGlowingButton
              disabled={!connected}
              intent="primary"
              text="Send"
              onClick={() => openSendModal(symbol)}
              />
          </ButtonWrapper>
          <ButtonWrapper>
            <GreenGlowingButton
              disabled={!connected}
              intent="success"
              text="Trade"
              onClick={() => redirectToTradingPage(symbol)}
            />
          </ButtonWrapper>
        </Cell>
      </Row>
    );
  });
};

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

export default DepositTableRenderer;
