// @flow
import React from 'react';
import { Card, Button, Tag, Tabs, Tab, FormGroup, InputGroup } from '@blueprintjs/core';
import styled from 'styled-components';
import TransferTokensModal from '../../components/TransferTokensModal';
import TokenBalanceChart from '../../components/TokenBalanceChart'
import { Box, Colors, Text,TextDiv, TextBox } from '../Common'
import { Fonts } from '../Common/Variables'

type Props = {
  isModalOpen: boolean,
  handleModalClose: void => void,
  accountAddress: string,
  balance: string,
  gas: string,
  gasPrice: string,
  handleChangeTab: string => void,
  selectedTab: string,
  contractAddress: string,
  handleChangeContractAddress: SyntheticInputEvent<Object> => void,
  handleDetectContract: SyntheticEvent<> => void,
}

const WalletInfoRenderer = (props: Props) => {
  const {
    isModalOpen,
    handleModalClose,
    accountAddress,
    balance,
    gasPrice,
    gas,
    handleChangeTab,
    handleChangeContractAddress,
    selectedTab,
    contractAddress,
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
        <Button
          text="List Token"
          minimal
          onClick={() => handleChangeTab("List Token")}
          active={selectedTab === "List Token"}
          intent={selectedTab === "List Token" ? 'primary' : ''}
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
              handleChangeContractAddress={handleChangeContractAddress}
              handleDetectContract={handleDetectContract}
              contractAddress={contractAddress}
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
  return (
    <React.Fragment>
      <Text>
        Add a token that is not listed among the default AMP tokens. If the token has not yet been added to 
        the AMP you can also list the token. View the FAQ for more detailed information on listing tokens.
      </Text>
      <FormGroup
          helperText=""
          label="Input Token Contract Address"
          intent=""
        >
          <InputGroup
            name="contractAddress"
            placeholder="(Contract address must start with 0x)"
            intent=""
            onChange={handleChange}
            value={contractAddress}
            autoFocus
          />
      </FormGroup>
    </React.Fragment>
  )
}

const ListTokenPanel = (props: *) => {
  return (
    <div>
      List Token Panel
    </div>
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
