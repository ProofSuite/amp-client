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

import {
  List,
  AutoSizer
} from 'react-virtualized'

import { Spring } from 'react-spring'
import { Devices } from '../../components/Common/Variables'

type TokenData = {
  symbol: string,
  address: string,
  balance: number,
  value: number,
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
  ETHTokenData: TokenData,
  WETHTokenData: TokenData,
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

class TokenTableRenderer extends React.PureComponent<Props> {

  rowRenderer = ({ key, index, style }: *) => {
      const {
        ETHTokenData,
        WETHTokenData,
      } = this.props

      if (index === 0 && ETHTokenData) return <ETHRow key={key} style={style} {...this.props} />
      if (index === 0 && WETHTokenData) return <WETHRow key={key} style={style} {...this.props} />
      if (index === 1 && ETHTokenData && WETHTokenData) return <WETHRow key={key} style={style} {...this.props} />
      if (ETHTokenData) index = index - 1
      if (WETHTokenData) index = index - 1

      return <BaseTokenRow key={key} index={index} style={style} {...this.props} />
  }

  noRowRenderer = () => {
    return (
      <Centered>
        <AMPLogo height="150em" width="150em" />
        <LargeText muted>No tokens to display!</LargeText>
      </Centered>
    )
  }

  render () {
    const {
        hideZeroBalanceToken,
        toggleZeroBalanceToken,
        searchInput,
        handleSearchInputChange,
        totalFilteredTokens
      } = this.props;

      return (
        <Spring from={{ opacity: 0, marginLeft: 100 }} to={{ opacity: 1, marginLeft: 0 }} >
        {props =>
        <TableSection style={props}>
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
            <Table>
              <TableBody>
                <AutoSizer>
                  {({ width, height }) => (
                    <List
                      width={width}
                      height={height}
                      rowCount={totalFilteredTokens}
                      rowHeight={60}
                      rowRenderer={this.rowRenderer}
                      noRowsRenderer={this.noRowRenderer}
                    />
                  )}
              </AutoSizer>
              </TableBody>
            </Table>
        </TableSection>
        }
        </Spring>
      );
  }
}




const ETHRow = (props: Props) => {
  const {
    key,
    style,
    connected,
    ETHTokenData,
    openDepositModal,
    openSendModal,
    openConvertModal,
    referenceCurrency,
  } = props;

  if (!ETHTokenData) return null
  const { symbol, balance, value } = ETHTokenData

  return (
    <Row key={key} style={style}>
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
    key,
    style,
    connected,
    WETHTokenData,
    handleToggleAllowance,
    openDepositModal,
    openSendModal,
    openConvertModal,
    referenceCurrency,
    redirectToTradingPage
  } = props

  const { symbol, balance, allowed, allowancePending, value, listed } = WETHTokenData

  return (
    <Row key={key} style={style}>
      <TokenNameCell onClick={() => redirectToTradingPage(symbol)}>
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
      </TokenNameCell>
      <BalancesCell onClick={() => redirectToTradingPage(symbol)}>
        <FlexRow>
          <SmallText muted>
            {formatNumber(balance, { precision: 4 })}  {symbol} 
          </SmallText>
          {value !== null && 
            <SmallText muted ml={1}> 
              ({formatNumber(value, { precision: 2 })} {referenceCurrency})
            </SmallText>
          }
        </FlexRow>
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


const BaseTokenRow = (props: Props) => {
  const {
    index,
    key,
    style,
    baseTokensData,
    connected,
    handleToggleAllowance,
    openDepositModal,
    openSendModal,
    redirectToTradingPage,
    referenceCurrency
  } = props;

  const { symbol, balance, allowed, allowancePending, value, listed } = baseTokensData[index]

    return (
        <Row key={key} style={style}>
          <TokenNameCell onClick={() => redirectToTradingPage(symbol)}>
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
          </TokenNameCell>
          <BalancesCell onClick={() => redirectToTradingPage(symbol)}>
            <FlexRow>
              <SmallText muted>
                {formatNumber(balance, { precision: 4 })}  {symbol} 
              </SmallText>
              {value !== null && 
                <SmallText muted ml={1}> 
                  ({formatNumber(value, { precision: 2 })} {referenceCurrency})
                </SmallText>
              }
            </FlexRow>
          </BalancesCell>
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
};

const Table = styled.div`
  width: 100%;
`;

const TableSection = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const TableBody = styled.div`
  height: 80vh;
`;

const TableHeader = styled.div`
  display: flex;
  width: 100%;
`;

const TableHeaderCell = styled.div`
  width: 20%;
`;

const TokenNameHeaderCell = styled(TableHeaderCell)`
  min-witdh: 130px;
`

const BalancesHeaderCell = styled(TableHeaderCell)`
  width: 25%;
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

const Cell = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TokenNameCell = styled(Cell)`
  min-width: 130px;
  @media ${Devices.tablet} {
    
  }
`

const BalancesCell = styled(Cell)`
  width: 25%;
  @media ${Devices.tablet} {}
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

const Row = styled.div`
  width: 100%;
  display: flex;
  height: 60px;

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

  padding-left: 6px;
`;

const HideTokenCheck = styled(Checkbox)`
  margin: 0 !important;
`;

const ButtonWrapper = styled.span`  
  margin-left: 10px !important;
  margin-right: 10px !important;
`;

export default TokenTableRenderer;
