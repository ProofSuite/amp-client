import React from 'react';
import { Card, Button, Tag, Callout } from '@blueprintjs/core';
import styled from 'styled-components';
import TransferTokensModal from '../../components/TransferTokensModal';
import TokenBalanceChart from '../../components/TokenBalanceChart'
import { Box, Flex, Text, TextDiv, TextBox } from '../Common'
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
          <Button
            fill
            onClick={handleModalClose}
            text="START NEW TRANSACTION"
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

const BalanceBox = styled.p`
  font-size: 14px;
  margin: auto;
  margin-left: 20px;
`

const AccountAddressBox = styled.p`
  font-size: 14px;
  margin: auto;
  margin-left: 20px;
`

// const TextBox = styled.div`
//   display: flex;
//   margin-bottom: 10px;
//   justify-content: left;
//   align-content: middle;
//   text-align: center;
// `;

const TokenBalanceChartBox = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: left;
  align-content: middle;
  text-align: center;
  width: 100%;
`

export default WalletInfoRenderer;
