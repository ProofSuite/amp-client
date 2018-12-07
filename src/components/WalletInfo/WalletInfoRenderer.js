import React from 'react';
import { Card, Button, Tag, Callout } from '@blueprintjs/core';
import styled from 'styled-components';
import TransferTokensModal from '../../components/TransferTokensModal';
import TokenBalanceChart from '../../components/TokenBalanceChart'
import { Box, Colors, Flex, Text, TextDiv, TextBox } from '../Common'
import { Fonts } from '../Common/Variables'

const WalletInfoRenderer = props => {
  const {
    isModalOpen,
    handleModalClose,
    accountAddress,
    balance,
    gasPrice,
    gas,
  } = props;

  return (
      <WalletInfoCard>
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
            This is the total amount of Ether (the native Ethereum currency) in your
            wallet:
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
      </WalletInfoCard>
  );
};

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

export default WalletInfoRenderer;
