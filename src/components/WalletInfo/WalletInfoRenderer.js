import React from 'react';
import { Card, Button, Tag } from '@blueprintjs/core';
import styled from 'styled-components';
import TransferTokensModal from '../../components/TransferTokensModal';
import TokenBalanceChart from '../../components/TokenBalanceChart'

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
        <Box>
          <Tag minimal large>ETHEREUM BALANCE</Tag>
          <BalanceBox>{balance} ETH</BalanceBox>
        </Box>
        <Box>
          <Tag minimal large>ETHEREUM ADDRESS</Tag>
          <AccountAddressBox>
          {accountAddress}
          </AccountAddressBox>
        </Box>
        <Tag minimal large>PORTFOLIO OVERVIEW</Tag>
        <TokenBalanceChartBox>
          <TokenBalanceChart />
        </TokenBalanceChartBox>
        <Box>
          <Button
            fill
            onClick={handleModalClose}
            text="START NEW TRANSACTION"
            intent="primary"
            large
          />
        </Box>
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

const Box = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: left;
  align-content: middle;
  text-align: center;
`;

const TokenBalanceChartBox = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: left;
  align-content: middle;
  text-align: center;
  width: 100%;
`

export default WalletInfoRenderer;
