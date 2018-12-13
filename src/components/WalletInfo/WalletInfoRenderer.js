// @flow
import React from 'react';
import { Card, Button, Tag, Tabs, Tab, ControlGroup, InputGroup } from '@blueprintjs/core';
import styled from 'styled-components';
import TransferTokensModal from '../../components/TransferTokensModal';
import TokenBalanceChart from '../../components/TokenBalanceChart'
import { Box, Colors, Text,TextDiv, TextBox } from '../Common'
import { Fonts } from '../Common/Variables'

type Props = {
  isModalOpen: boolean,
  accountAddress: string,
  balance: string,
  gas: string,
  gasPrice: string,
  selectedTab: string,
  tokenAddress: string,
  tokenAddressStatus: string,
  tokenSymbol: string,
  tokenEtherscanUrl: string,
  tokenIsAdded: boolean,
  tokenIsListed: boolean,
  handleChangeTab: string => void,
  handleModalClose: void => void,
  handleChangetokenAddress: SyntheticInputEvent<Object> => void,
  handleDetectContract: SyntheticEvent<> => Promise<void>,
}

const WalletInfoRenderer = (props: Props) => {
  const {
    isModalOpen,
    handleModalClose,
    accountAddress,
    balance,
    gasPrice,
    gas,
    selectedTab,
    tokenAddress,
    tokenSymbol,
    tokenEtherscanUrl,
    tokenAddressStatus,
    handleChangeTab,
    handleChangetokenAddress,
    handleDetectContract,
  } = props;

  return (
      <WalletInfoCard>
      <ButtonRow>
        <Button
          text="Portfolio"
          minimal
          onClick={() => handleChangeTab("Portfolio")}
          active={selectedTab === "Portfolio"}
          intent={selectedTab === "Portfolio" ? 'primary' : ''}
        />
        <Button
          text="Add Token"
          minimal
          onClick={() => handleChangeTab("Add Token")}
          active={selectedTab === "Add Token"}
          intent={selectedTab === "Add Token" ? 'primary' : ''}
        />    
      </ButtonRow>
      <Tabs selectedTabId={selectedTab}>
        <Tab
          id="Portfolio"
          panel={
            <PortfolioPanel
              isModalOpen={isModalOpen}
              handleModalClose={handleModalClose}
              accountAddress={accountAddress}
              balance={balance}
              gasPrice={gasPrice}
              gas={gas}             
            />
          }
        />
        <Tab
          id="Add Token"
          panel={
            <AddTokenPanel
              handleChangetokenAddress={handleChangetokenAddress}
              handleDetectContract={handleDetectContract}
              tokenAddress={tokenAddress}
              tokenAddressStatus={tokenAddressStatus}
              tokenSymbol={tokenSymbol}
              tokenEtherscanUrl={tokenEtherscanUrl}
            />
          }
        />
      </Tabs>        
      </WalletInfoCard>
  );
};


const PortfolioPanel = (props: *) => {
  const {
    accountAddress,
    balance,
    gas,
    gasPrice,
    isModalOpen,
    handleModalClose
  } = props

  return (
    <React.Fragment>
      <Box py={3}>
        <TextBox>
          <Tag minimal large>Ethereum Account</Tag>
        </TextBox>
        <TextDiv py={2} small muted>
          Here is your ethereum address where people can send you tokens:
        </TextDiv>
        <TextBox py={2} fontSize={Fonts.FONT_SIZE} textAlign="right">
          {accountAddress}
        </TextBox>
      </Box>
      <Box py={3}>
        <TextBox>
          <Tag minimal large>Ethereum Balance</Tag>
        </TextBox>
        <TextDiv py={2} small muted>
          This is the total amount of Ether (the native Ethereum currency) in your wallet:
        </TextDiv>
        <TextBox py={2} fontSize={Fonts.FONT_SIZE_LARGE} textAlign="right">
          {balance} ETH
        </TextBox>
      </Box>        
      <Tag minimal large>Portfolio Overview</Tag>
      <TokenBalanceChartBox>
        <TokenBalanceChart />
      </TokenBalanceChartBox>
      <TextBox>
        <GlowingButton
          fill
          onClick={handleModalClose}
          text="NEW TRANSACTION"
          intent="primary"
          large
        />
      </TextBox>
      <TransferTokensModal gas={gas} gasPrice={gasPrice} isOpen={isModalOpen} handleClose={handleModalClose} />
    </React.Fragment>
  )
}

const AddTokenPanel = (props: *) => {
  const { 
    tokenAddress,
    tokenAddressStatus, 
    tokenSymbol,
    tokenEtherscanUrl,
    handleDetectContract,    
    handleChangetokenAddress, 
  } = props

  return (
      <React.Fragment>
        <Text>
          Add a token that is not listed among the default AMP tokens. If the token has not yet been added to 
          the AMP you can also list the token.
          <br />
          View the FAQ for more detailed information on listing tokens.
        </Text>
        <Box py={3}>
          <ControlGroup
            helperText=""
            label="Input Token Contract Address"
            intent=""
            fill
          >
            <InputGroup
              name="tokenAddress"
              placeholder="(Contract address must start with 0x)"
              intent={tokenAddressStatus === "invalid" ? "danger" : ""}
              onChange={handleChangetokenAddress}
              value={tokenAddress}
              autoFocus
            />
            <Button
              intent="primary"
              text="Detect Contract"
              onClick={handleDetectContract}
            />
        </ControlGroup>
      </Box>
      {tokenSymbol &&
        <React.Fragment>
          <Box py={3}>
            <TextBox>Token detected: </TextBox>
            <TextBox>Symbol: {tokenSymbol}</TextBox>
            <TextBox><a href={tokenEtherscanUrl}>View on Etherscan</a></TextBox>
          </Box>
          <Box py={3}>
            <TextBox></TextBox>
          </Box>
        </React.Fragment>
      }
    </React.Fragment>
  )
}

const WalletInfoCard = styled(Card)`
  height: 92vh;
`

const GlowingButton = styled(Button)`
  box-shadow: ${"0 3px 20px " + Colors.BLUE1 + "!important;"}
  &hover: {
    background-color: ${Colors.BLUE5}
    box-shadow: ${"0 3px 20px " + Colors.BLUE5 + "!important;"}
  }
`

const TokenBalanceChartBox = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: left;
  align-content: middle;
  text-align: center;
  width: 100%;
`

const ButtonRow = styled.span`
  display: flex;
  justify-content: flex-start;
  & .bp3-button {
    margin-left: 5px;
  }
`

export default WalletInfoRenderer;
