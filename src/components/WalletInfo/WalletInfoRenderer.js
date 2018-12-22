// @flow
import React from 'react';
import { Card, Position, Button, Tag, Tabs, Tab, InputGroup } from '@blueprintjs/core';
import styled from 'styled-components';
import TransferTokensModal from '../../components/TransferTokensModal';
import TokenBalanceChart from '../../components/TokenBalanceChart'
import Help from '../../components/Help'
import { Flex, FlexItem, Box, Colors, Text,TextDiv, TextBox, BlueGlowingButton } from '../Common'
import { Fonts } from '../Common/Variables'

type Props = {
  isModalOpen: boolean,
  accountAddress: string,
  balance: string,
  gas: number,
  gasPrice: number,
  selectedTab: string,
  tokenAddress: string,
  tokenAddressStatus: string,
  tokenSymbol: string,
  tokenEtherscanUrl: string,
  tokenIsAdded: ?boolean,
  tokenIsListed: ?boolean,
  tokenIsRegistered: ?boolean,
  handleChangeTab: string => void,
  handleModalClose: void => void,
  handleChangeTokenAddress: SyntheticInputEvent<Object> => void,
  handleDetectContract: SyntheticEvent<> => Promise<void>,
  handleAddToken: SyntheticEvent<> => Promise<void>,
  handleRegisterToken: SyntheticEvent<> => Promise<void>,
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
    handleChangeTokenAddress,
    handleDetectContract,
    tokenIsAdded,
    tokenIsListed,
    tokenIsRegistered,
    handleAddToken,
    handleRegisterToken,
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
          disabled
        />
        <Button
          text="Premium Listing"
          minimal
          intent="warning"
          onClick={() => handleChangeTab("Premium Listing")}
          active={selectedTab === "Premium Listing"}
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
              handleChangeTokenAddress={handleChangeTokenAddress}
              handleDetectContract={handleDetectContract}
              tokenAddress={tokenAddress}
              tokenAddressStatus={tokenAddressStatus}
              tokenSymbol={tokenSymbol}
              tokenEtherscanUrl={tokenEtherscanUrl}
              tokenIsAdded={tokenIsAdded}
              tokenIsRegistered={tokenIsRegistered}
              tokenIsListed={tokenIsListed}
              handleAddToken={handleAddToken}
              handleRegisterToken={handleRegisterToken}
            />
          }
        />
        <Tab
          id="Premium Listing"
          panel={
            <PremiumListingPanel
              handleChangeTokenAddress={handleChangeTokenAddress}
              handleDetectContract={handleDetectContract}
              tokenAddress={tokenAddress}
              tokenAddressStatus={tokenAddressStatus}
              tokenSymbol={tokenSymbol}
              tokenEtherscanUrl={tokenEtherscanUrl}
              tokenIsAdded={tokenIsAdded}
              tokenIsRegistered={tokenIsRegistered}
              tokenIsListed={tokenIsListed}
              handleAddToken={handleAddToken}
              handleRegisterToken={handleRegisterToken}
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
    tokenIsAdded,
    tokenIsListed,
    tokenIsRegistered,
    handleDetectContract,    
    handleChangeTokenAddress, 
    handleAddToken,
    handleRegisterToken,
  } = props

  return (
      <React.Fragment>
        <Text muted>
          Add a token that is not listed among the default AMP tokens. If the token has not yet been added to 
          the AMP you can also list the token.
          <br />
          View the FAQ for more detailed information on listing tokens.
        </Text>
        <Flex py={3}>
            <FlexItem flex="1">
              <InputGroup
                name="tokenAddress"
                placeholder="(Contract address must start with 0x)"
                intent={tokenAddressStatus === "invalid" ? "danger" : ""}
                onChange={handleChangeTokenAddress}
                value={tokenAddress}
                autoFocus
                fill
              />
            </FlexItem>
          <Button
            intent="primary"
            text="Search Token"
            minimal
            onClick={handleDetectContract}
          />
          <Box pl={2} pt={2}>
            <Help position={Position.LEFT}>
              This button will detect whether a valid contract exists at the given address. To be valid, your token 
              must be a standard ERC20 token.
            </Help>
          </Box>
      </Flex>
      {tokenSymbol &&
        <React.Fragment>
          <h3>Token found: {tokenSymbol}</h3>
          <a href={tokenEtherscanUrl}>→ View on Etherscan</a>
          <Box py={3}>
            <Flex py={1} width="50%">
              <BlueGlowingButton
                disabled={tokenIsAdded}
                text={tokenIsAdded ? "Token already added" : "Add token"}
                intent="primary"
                fill
                onClick={handleAddToken}
              />
              <Box pl={2} pt={1}>
                <Help position={Position.RIGHT}>
                  Add a token to your wallet to track balances and make transactions for this token. This does not register the 
                  token on the AMP exchange. To enable trading, the {tokenSymbol} token must be registered (see below)
                </Help>
              </Box>
            </Flex>
            <Flex py={1} width="50%">
              <BlueGlowingButton
                disabled={tokenIsRegistered}
                text={tokenIsRegistered ? "Token already registered" : "Register token"}
                intent="primary"
                fill
                onClick={handleRegisterToken}
              />
              <Box pl={2} pt={1}>
                <Help position={Position.RIGHT}>
                  Registering a token will create the following markets:
                  <ul>
                    <li>→ {tokenSymbol}/USDC</li>
                    <li>→ {tokenSymbol}/DAI</li> 
                    <li>→ {tokenSymbol}/WETH</li>
                  </ul>
                  If another person wants to trade {tokenSymbol}, that person needs to add this token on their own account to discover
                  the corresponding markets.
                  <br />
                  <br />
                  If you want to list your token among the default token list, contact us at: support@proofsuite.com
                </Help>
              </Box>
            </Flex>
          </Box>
 
        </React.Fragment>
      }
    </React.Fragment>
  )
}


const PremiumListingPanel = (props: *) => {
  return (
    <Box>
      For premium listing, contact us at support@proofsuite.com
    </Box>
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
