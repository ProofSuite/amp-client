import React from 'react';
import { Card, Button, Tag } from '@blueprintjs/core';
import styled from 'styled-components';
import SendEtherModal from '../../components/SendEtherModal';
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
          <Tag minimal large interactive intent='primary'>ETHEREUM BALANCE</Tag>
          <BalanceBox>{balance} ETH</BalanceBox>
        </Box>
        <Box>
          <Tag minimal large interactive intent='primary'>ETHEREUM ADDRESS</Tag>
          <AccountAddressBox>
          {accountAddress}
          </AccountAddressBox>
        </Box>
        <Tag minimal large interactive intent='primary'>PORTFOLIO OVERVIEW</Tag>
        <Box>
          <TokenBalanceChart />
        </Box>
        <Box>
          <Button
            fill={true}
            style={{ marginBottom: '8px' }}
            onClick={handleModalClose}
            text="START NEW TRANSACTION"
            intent="primary"
            large
          />
        </Box>
        <SendEtherModal gas={gas} gasPrice={gasPrice} isOpen={isModalOpen} handleClose={handleModalClose} />
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
  margin-bottom: 40px;
  justify-content: left;
  align-content: middle;
  text-align: center;
`;

export default WalletInfoRenderer;