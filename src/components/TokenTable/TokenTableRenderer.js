// @flow
import React from 'react';
import styled from 'styled-components';
import { formatNumber } from 'accounting-js'
import Help from '../../components/Help'

import {
  Switch, 
  Checkbox, 
  InputGroup, 
  Tag, 
  Position,
  Button,
  Icon,
  Tooltip
} from '@blueprintjs/core';

import { 
  RowSpaceBetween, 
  ColoredCryptoIcon, 
  Colors, 
  AMPLogo, 
  Centered, 
  LargeText, 
  SmallText,
  GreenGlowingButton, 
  BlueGlowingButton,
  FlexRow,
  Box
} from '../Common';

import { Devices } from '../../components/Common/Variables'

type TokenData = {
  symbol: string,
  address: string,
  balance: string,
  allowed: boolean,
  decimals: number,
  allowancePending: boolean,
  quote?: ?bool,
  registered?: ?bool,
  listed?: ?bool,
  active?: ?bool,
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
  handleToggleAllowance: (SyntheticEvent<>, string) => void,
  toggleZeroBalanceToken: void => void,
  redirectToTradingPage: string => void,
  totalFilteredTokens: number,
  referenceCurrency: string,
};

const TokenTableRenderer = (props: Props) => {
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
          Hide small balances
        </HideTokenCheck>
      </RowSpaceBetween>
      <Table>
        <TableHeader>
          <TokenNameHeaderCell>Token Name</TokenNameHeaderCell>
          <BalancesHeaderCell>Balances</BalancesHeaderCell>
          <UnlockedHeaderCell>
          Unlocked 
          <span> </span>
          <Help position={Position.RIGHT}>
            By unlocking tokens, you allow the AMP smart-contract to settle trades you have approved.
            Unlocking both tokens is required before starting trading a given pair.
          </Help>
          </UnlockedHeaderCell>
          <ActionsHeaderCell></ActionsHeaderCell>
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
    referenceCurrency,
    redirectToTradingPage
  } = props;

  if (!ETHTokenData) return null

  const { symbol, balance, value } = ETHTokenData

  return (
    <Row key='ETH'>
      <TokenNameCell>
        <TokenNameWrapper>
          <ColoredCryptoIcon size={32} name={symbol} />
          <SmallText muted>{symbol}</SmallText>
        </TokenNameWrapper>
      </TokenNameCell>
      <BalancesCell>
        <SmallText muted>
          {formatNumber(balance, { precision: 4})}  {symbol} ({formatNumber(value, { precision: 2})} {referenceCurrency})
        </SmallText>
      </BalancesCell>
      <UnlockedCell></UnlockedCell>
      <ActionsCell>
        <FlexRow justifyContent="flex-end" p={1}>
            <ButtonWrapper>
            <GreenGlowingButton
              disabled={!connected}
              intent="success"
              text="Convert to WETH"
              onClick={(event) => openConvertModal(event, 'ETH', 'WETH')}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <BlueGlowingButton
              disabled={!connected}
              intent="primary"
              text="Deposit"
              onClick={(event) => openDepositModal(event, symbol)}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <BlueGlowingButton
              disabled={!connected}
              intent="primary"
              text="Send"
              onClick={(event) => openSendModal(event, symbol)}
            />
          </ButtonWrapper>
        </FlexRow>
      </ActionsCell>
    </Row>
  );
}

const WETHRow = (props: Props) => {
  const {
    connected,
    WETHTokenData,
    handleToggleAllowance,
    openDepositModal,
    openSendModal,
    openConvertModal,
    referenceCurrency,
    redirectToTradingPage
  } = props


  if (!WETHTokenData) return null
  const { symbol, balance, allowed, allowancePending, value, listed } = WETHTokenData

  return (
    <Row key='WETH'>
      <Cell onClick={() => redirectToTradingPage(symbol)}>
        <TokenNameWrapper>
          <ColoredCryptoIcon size={32} name={symbol} />
          <SmallText muted>{symbol}</SmallText>
          {
            listed && <Box px={2}>
              <Tooltip hoverOpenDelay={50} content="Verified" position={Position.RIGHT}>
                <Icon icon="tick-circle" iconSize={14} intent="primary" />
              </Tooltip>
            </Box>
          }
        </TokenNameWrapper>
      </Cell>
      <BalancesCell onClick={() => redirectToTradingPage(symbol)}>
        <SmallText muted>
          {formatNumber(balance, { precision: 4})}  {symbol} ({formatNumber(value, { precision: 2})} {referenceCurrency})
        </SmallText>
      </BalancesCell>
      <UnlockedCell >
          <Switch inline checked={allowed} onClick={(event) => handleToggleAllowance(event, symbol)} />
          {allowancePending && <Tag intent="success" large minimal interactive icon="time">Pending</Tag>}
      </UnlockedCell>
      <ActionsCell onClick={() => redirectToTradingPage(symbol)}>
        <FlexRow justifyContent="flex-end" p={1}>
          <ButtonWrapper>
            <GreenGlowingButton
              disabled={!connected}
              intent="success"
              text="Convert to ETH"
              onClick={(event) => openConvertModal(event, 'WETH', "ETH")} />
          </ButtonWrapper>
          <ButtonWrapper>
            <BlueGlowingButton
              disabled={!connected}
              intent="primary"
              text="Deposit"
              onClick={(event) => openDepositModal(event, symbol)}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <BlueGlowingButton
              disabled={!connected}
              intent="primary"
              text="Send"
              onClick={(event) => openSendModal(event, symbol)}
            />
          </ButtonWrapper>
          </FlexRow>
      </ActionsCell>
    </Row>
  )
}

const QuoteTokenRows = (props: Props) => {
  const {
    connected,
    quoteTokensData,
    handleToggleAllowance,
    openDepositModal,
    openSendModal,
    referenceCurrency,
    redirectToTradingPage
  } = props

  if (!quoteTokensData) return null

  return quoteTokensData.map(({ symbol, balance, allowed, allowancePending, value }, index) => {
    return (
      <Row key={index}>
        <Cell onClick={() => redirectToTradingPage(symbol)} style={{ width: '15%'}}>
          <TokenNameWrapper>
            <ColoredCryptoIcon size={32} name={symbol} />
            <SmallText muted>{symbol}</SmallText>
          </TokenNameWrapper>
        </Cell>
        <Cell onClick={() => redirectToTradingPage(symbol)}>
          <SmallText muted>
            {formatNumber(balance, { precision: 4})}  {symbol} ({formatNumber(value, { precision: 2})} {referenceCurrency})
          </SmallText>
        </Cell>
        <UnlockedCell>
          <Button
            disabled={!connected}
            intent={allowed ? 'primary' : 'danger'}
            text={allowed ? 'Unlocked' : 'Locked'}
            onClick={event => handleToggleAllowance(event, symbol)}
          />
          {allowancePending && <Tag intent="success" large minimal interactive icon="time">Pending</Tag>}
        </UnlockedCell>
        <ActionsCell onClick={() => redirectToTradingPage(symbol)}>
          <FlexRow justifyContent="flex-end" p={1}>
          <ButtonWrapper>
            <BlueGlowingButton
              disabled={!connected}
              intent="primary"
              text="Deposit"
              onClick={(event) => openDepositModal(event, symbol)}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <BlueGlowingButton
              disabled={!connected}
              intent="primary"
              text="Send"
              onClick={(event) => openSendModal(event, symbol)}
            />
          </ButtonWrapper>
          </FlexRow>
        </ActionsCell>
      </Row>
    )
  })
}



const BaseTokenRows = (props: Props) => {
  const {
    baseTokensData,
    connected,
    handleToggleAllowance,
    openDepositModal,
    openSendModal,
    redirectToTradingPage,
    referenceCurrency
  } = props;

  if (!baseTokensData) return null

  return baseTokensData.map(({ symbol, balance, allowed, allowancePending, value, listed }, index) => {
    return (
      <Row key={index}>
        <Cell onClick={() => redirectToTradingPage(symbol)} style={{ width: '15%'}}>
          <TokenNameWrapper>
            <ColoredCryptoIcon size={32} name={symbol} />
            <SmallText muted>{symbol}</SmallText>
            {
              listed && <Box px={2}>
                <Tooltip hoverOpenDelay={50} content="Verified" position={Position.RIGHT}>
                  <Icon icon="tick-circle" iconSize={14} intent="primary" />
                </Tooltip>
              </Box>
            }
          </TokenNameWrapper>
        </Cell>
        <Cell onClick={() => redirectToTradingPage(symbol)}>
          <SmallText muted>
            {formatNumber(balance, { precision: 4})}  {symbol} ({formatNumber(value, { precision: 2})} {referenceCurrency})
          </SmallText>
        </Cell>
        <UnlockedCell>
          <Switch inline checked={allowed} 
            onChange={(event) => handleToggleAllowance(event, symbol)} />
            {allowancePending && <Tag intent="success" large minimal interactive icon="time">Pending</Tag>}
        </UnlockedCell>
        <ActionsCell onClick={() => redirectToTradingPage(symbol)}>
          <FlexRow justifyContent="flex-end" p={1}>
            <ButtonWrapper>
              <BlueGlowingButton
                disabled={!connected}
                intent="primary"
                text="Deposit"
                onClick={(event) => openDepositModal(event, symbol)}
              />
            </ButtonWrapper>
            <ButtonWrapper>
              <BlueGlowingButton
                disabled={!connected}
                intent="primary"
                text="Send"
                onClick={(event) => openSendModal(event, symbol)}
                />
            </ButtonWrapper>
          </FlexRow>
        </ActionsCell>
      </Row>
    );
  });
};

const Table = styled.table.attrs({
  className: 'bp3-html-table bp3-condensed',
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
width: 20%;
text-align: middle;
`;

const TokenNameHeaderCell = styled(TableHeaderCell)`
  width: 15%;
`

const BalancesHeaderCell = styled(TableHeaderCell)`
`

const UnlockedHeaderCell = styled(TableHeaderCell)`
  width: 15%;

  @media ${Devices.tablet} {
    display: none;
  }
`

const ActionsHeaderCell = styled(TableHeaderCell)`
  width: 70%;
`

const Cell = styled.td`
  width: 20%;
  vertical-align: middle !important;
  & label {
    margin: 0;
  }
`;

const TokenNameCell = styled(Cell)`
  @media ${Devices.tablet} {
    
  }
`

const BalancesCell = styled(Cell)`
  @media ${Devices.tablet} {
    
  }
`

const UnlockedCell = styled(Cell)`
  width: 15%;

  @media ${Devices.tablet} {
    display: none; 
  }
`

const ActionsCell = styled(Cell)`
  width: 70%;
`

const Row = styled.tr`
  width: 100%;

  overflow-x: scroll;

  &:hover {
    background-color: ${Colors.BLUE_MUTED} !important;
    cursor: pointer;
    position: relative;
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 0 1px rgb(49, 64, 76), -1px 10px 4px rgba(16, 22, 26, 0.1),
      1px 18px 24px rgba(16, 22, 26, 0.2);
    box-shadow: inset 0 0 0 1px rgb(49, 64, 76), -1px 5px 4px rgba(16, 22, 26, 0.1), 1px 7px 24px rgba(16, 22, 26, 0.2);
    z-index: 1;
  }
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

export default TokenTableRenderer;
