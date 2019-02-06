// @flow
import React from 'react';
import styled from 'styled-components';
import { formatNumber } from 'accounting-js'
import Help from '../../components/Help'

import {
  Checkbox, 
  InputGroup,
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
  FlexColumn,
  Box,
  Header,
} from '../Common';

import {
  Fonts
} from '../Common/Variables'

import {
  List,
  AutoSizer
} from 'react-virtualized'

import { 
  Spring,
  Transition
} from 'react-spring'
   
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
  totalETHandWETHBalance: number,
  selectedToken: string,
};

class TokenTableRenderer extends React.PureComponent<Props> {

  rowRenderer = ({ key, index, style }: *) => {
      const { ETHTokenData } = this.props

      if (index === 0 && ETHTokenData) return <ETHRow key={key} style={style} {...this.props} />
      if (ETHTokenData) index = index - 1
      
      return (
        <BaseTokenRow 
          key={key} 
          index={index} 
          style={style} 
          {...this.props}
        />
      )
  }

  noRowRenderer = () => {
    return (
      <Centered>
        <AMPLogo height="150em" width="150em" />
        <LargeText muted>No tokens to display!</LargeText>
      </Centered>
    )
  }

  widgetRenderer = () => {
      const {
        openConvertModal,
        baseTokensData,
        selectedToken,
        openDepositModal,
        handleToggleAllowance,
        redirectToTradingPage,
        selectedTokenData,
      } = this.props

      if (selectedToken === "ETH") return (
        <ETHWidget 
          selectedTokenData={selectedTokenData}
          openConvertModal={openConvertModal}
          openDepositModal={openDepositModal}
          redirectToTradingPage={redirectToTradingPage}
        />
      )

      // let selectedTokenData = baseTokensData.filter(elem => elem.symbol === selectedToken)[0]      
      return (
        <TokenWidget
          token={selectedToken}
          baseTokensData={baseTokensData}
          selectedTokenData={selectedTokenData}
          handleToggleAllowance={handleToggleAllowance}
          redirectToTradingPage={redirectToTradingPage}
        />
      )
  }

  render () {
      const {
        hideZeroBalanceToken,
        toggleZeroBalanceToken,
        searchInput,
        handleSearchInputChange,
        totalFilteredTokens,
        selectedToken
      } = this.props;

      return (
        <Spring from={{ opacity: 0, marginLeft: 100 }} to={{ opacity: 1, marginLeft: 0 }}>
        {animation =>
            <React.Fragment>
            {this.widgetRenderer(selectedToken)}
            <TableSection style={animation}>
              <RowSpaceBetween style={{ marginBottom: '20px' }}>
                <InputGroup
                  type="string"
                  leftIcon="search"
                  placeholder="Search Token ..."
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <HideTokenCheck 
                  checked={hideZeroBalanceToken} 
                  onChange={toggleZeroBalanceToken}
                >
                  Show all listed tokens
                </HideTokenCheck>
              </RowSpaceBetween>
              <TableHeader>
                  <TokenNameHeaderCell>Token Name</TokenNameHeaderCell>
                  <BalancesHeaderCell>Balances</BalancesHeaderCell>
                  <ActionsHeaderCell></ActionsHeaderCell>
              </TableHeader>
              <Table>
                  <AutoSizer style={{ height: '100%'}}>
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
              </Table>
            </TableSection>
          </React.Fragment>
        }
        </Spring>
      );
  }
}


const ETHWidget = (props: Props) => {
  const {
    openConvertModal,
    redirectToTradingPage,
    selectedTokenData
  } = props;

  return (
    <Spring from={{ marginLeft: -50, opacity: 0 }} to={{ marginLeft: 0, opacity: 1 }}>
        {animation =>
          <Box m={2} pb={3} style={animation}>
            <FlexRow justifyContent="space-between">
              <FlexRow justifyContent="flex-end">
                <FlexColumn mx={3}>
                  <ColoredCryptoIcon size={128} name="ETH" />
                </FlexColumn>
                <FlexRow mx={3}>
                  <FlexColumn mx={3} alignItems="flex-end" justifyContent="flex-start">
                    <Header muted justifyContent="center">Wallet Balance</Header>
                    <EthereumBalanceText justifyContent="flex-end">{formatNumber(selectedTokenData.ETHBalance, { precision: 3 })}</EthereumBalanceText>
                    <FlexRow justifyContent="flex-end">
                      <EthereumBalanceSymbol alignSelf="flex-end" muted>ETH</EthereumBalanceSymbol>
                    </FlexRow>
                  </FlexColumn>
                  <FlexColumn mx={3} alignItems="flex-end">
                    <Header muted justifyContent="center">Deposit Balance</Header>
                    <EthereumBalanceText justifyContent="flex-end">{formatNumber(selectedTokenData.WETHBalance, { precision: 3 })}</EthereumBalanceText>
                    <FlexRow justifyContent="flex-end">
                      <EthereumBalanceSymbol alignSelf="flex-end" muted>ETH</EthereumBalanceSymbol>
                    </FlexRow>
                  </FlexColumn>
                  <FlexColumn mx={5} alignItems="flex-end">
                    <Header muted justifyContent="center">Total Balance</Header>
                    <EthereumBalanceText justifyContent="flex-end">{formatNumber(selectedTokenData.totalBalance, { precision: 3 })}</EthereumBalanceText>
                    <FlexRow justifyContent="flex-end">
                      <EthereumBalanceSymbol alignSelf="flex-end" muted>ETH</EthereumBalanceSymbol>
                    </FlexRow>
                  </FlexColumn>
                </FlexRow>
              </FlexRow>
              <FlexColumn>
                  <GreenGlowingButton
                    intent="success"
                    text="Deposit"
                    m={2}
                    large
                    onClick={(event) => openConvertModal(event, 'ETH', 'WETH')}
                  />
                  <GreenGlowingButton
                    intent="success"
                    text="Withdraw"
                    m={2}
                    large
                    onClick={(event) => openConvertModal(event, 'WETH', 'ETH')}
                  />
                  <GreenGlowingButton
                    intent="success"
                    text="Trade"
                    large
                    m={2}
                    onClick={(event) => redirectToTradingPage('WETH')}
                  />
              </FlexColumn>
            </FlexRow>
          </Box>
        }
    </Spring>
    );
}

const TokenWidget = (props: *) => {
  const {
    selectedTokenData,
    handleToggleAllowance,
    redirectToTradingPage,
    baseTokensData
  } = props;

  if (!selectedTokenData || !baseTokensData || !baseTokensData.length) return null

  return (
    <Transition
      items={[selectedTokenData]}
      keys={item => item.symbol}
      from={{ marginLeft: -50, opacity: 0 }}
      enter={{ marginLeft: 0, opacity: 1 }}
      leave={{ opacity: 0, display: 'none' }}
    >
      {token => animation => {
        return (
          <Box m={3} pb={3} style={animation}>
            <FlexRow justifyContent="space-between">
              <FlexRow justifyContent="flex-end">
                <FlexColumn mx={3}>
                  <ColoredCryptoIcon size={128} name={token.symbol} />
                </FlexColumn>
                <FlexRow mx={3}>
                <FlexColumn mx={3} alignItems="stretch">
                    <FlexRow justifyContent="center">
                      <Header muted alignSelf="center">{token.symbol} Balance</Header>
                    </FlexRow>
                    <TokenBalanceText justifyContent="flex-end">{formatNumber(token.balance, { precision: 3 })}</TokenBalanceText>
                    <FlexRow justifyContent="flex-end">
                      <TokenBalanceSymbol alignSelf="flex-end" muted>{token.symbol}</TokenBalanceSymbol>
                    </FlexRow>
                  </FlexColumn>
                </FlexRow>
              </FlexRow>
              <FlexColumn>  
                {
                  
                }
                <GreenGlowingButton
                  m={2}
                  large
                  intent="success"
                  onClick={(event) => handleToggleAllowance(event, token.symbol)}
                  text={token.allowed ? `Lock ${token.symbol} Trading` : `Unlock ${token.symbol} Trading`}
                  icon={token.allowed ? "unlock" : "lock"}
                />
                {/* <Help position={Position.LEFT}>
                  By unlocking tokens, you allow the AMP smart-contract to settle trades you have approved.
                  Unlocking both tokens is required before starting trading a given pair.
                </Help> */}
                <GreenGlowingButton
                  intent="success"
                  text={`Trade ${token.symbol}`}
                  m={2}
                  large
                  onClick={(event) => redirectToTradingPage(token.symbol)}
                />
                {/* <Help position={Position.LEFT}>
                  By unlocking tokens, you allow the AMP smart-contract to settle trades you have approved.
                  Unlocking both tokens is required before starting trading a given pair.
                </Help> */}
              </FlexColumn>
              
              {/* <Switch inline checked={allowed} large
                    onChange={(event) => handleToggleAllowance(event, symbol)} />
                    {allowancePending && <Tag intent="success" large minimal interactive icon="time">Pending</Tag>} */}
            </FlexRow>
        </Box>
        )
      }}
    </Transition>
  )
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
    updateSelectedToken
  } = props;

  if (!ETHTokenData) return null
  //totalBalance is the sum of both the ETH balance and the WETH balance
  const { symbol, value, totalBalance } = ETHTokenData

  return (
    <Row key={key} style={style}>
      <TokenNameCell onClick={() => updateSelectedToken(symbol)}>
        <TokenNameWrapper>
          <ColoredCryptoIcon size={32} name={symbol} />
          <SmallText muted>{symbol}</SmallText>
        </TokenNameWrapper>
      </TokenNameCell>
      <BalancesCell onClick={() => updateSelectedToken(symbol)}>
        <SmallText muted>
          {formatNumber(totalBalance, { precision: 4})}  {symbol} ({formatNumber(value, { precision: 2 })} {referenceCurrency})
        </SmallText>
      </BalancesCell>
      <ActionsCell onClick={() => updateSelectedToken(symbol)}>
        <FlexRow justifyContent="flex-end" p={1}>
          <ButtonWrapper>
            <BlueGlowingButton
              disabled={!connected}
              intent="primary"
              text="Receive"
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

const BaseTokenRow = (props: *) => {
  const {
    index,
    key,
    style,
    baseTokensData,
    connected,
    openDepositModal,
    openSendModal,
    referenceCurrency,
    selectedToken,
    updateSelectedToken
  } = props;

  const { symbol, balance, allowed, allowancePending, value, listed } = baseTokensData[index]

    return (
        <Row key={key} style={style}>
          <TokenNameCell onClick={() => updateSelectedToken(symbol)}>
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
          <BalancesCell onClick={() => updateSelectedToken(symbol)}>
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
          <ActionsCell onClick={() => updateSelectedToken(symbol)}>
            <FlexRow justifyContent="flex-end" p={1}>
              <ButtonWrapper>
                <BlueGlowingButton
                  disabled={!connected}
                  intent="primary"
                  text="Receive"
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

const TableSection = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(90vh - 250px);
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
  width: 70%;

  @media ${Devices.tablet} {
    display: none;
  }
`

const ActionsHeaderCell = styled(TableHeaderCell)`
  width: 40%;
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
  width: 70%;
  @media ${Devices.tablet} {}
`

const ActionsCell = styled(Cell)`
  width: 40%;
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

const TokenBalanceText = styled.div`
  font-size: ${Fonts.FONT_SIZE_XXL + 'px'};
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
`;

const TokenBalanceSymbol = styled.div`
  font-size: ${Fonts.FONT_SIZE_XL + 'px'};
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
`

const EthereumBalanceText = styled.div`
  font-size: ${Fonts.FONT_SIZE_XXL + 'px'};
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
`;

const EthereumBalanceSymbol = styled.div`
  font-size: ${Fonts.FONT_SIZE_XL + 'px'};
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
`



const ButtonWrapper = styled.span`  
  margin-left: 10px !important;
  margin-right: 10px !important;
`;

export default TokenTableRenderer;
