import React from 'react';
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';
import CenteredSpinner from '../../components/Common/CenteredSpinner';
import DepositTable from '../../components/DepositTable';
import CurrentWallet from '../../components/CurrentWallet';
import Notifier from '../../components/Notifier';

type Props = {
  queryAccountData: void => void,
};

const WalletPageRenderer = ({ loading, depositTableData, accountAddress }: Props) => {
  return (
    <Wrapper>
      <RowWrapper>
        <CurrentWallet accountAddress={accountAddress} />
        <WalletPageContent>
          {loading ? <CenteredSpinner /> : <DepositTable depositData={depositTableData} />}
        </WalletPageContent>
      </RowWrapper>
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text
        Footer Text Footer Text Footer Text Footer Text Footer Text
      </p>
      <Notifier />
    </Wrapper>
  );
};

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.5em;
`;

const WalletPageContent = styled(Card)`
  height: 92vh;
  width: 75%;
  margin: 0.5em;
`;

export default WalletPageRenderer;
