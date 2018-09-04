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

const WalletPageRenderer = ({
  loading,
  pvtKeyLocked,
  provider,
  depositTableData,
  accountAddress,
  accountPrivateKey,
}: Props) => {
  return (
    <Wrapper>
      <RowWrapper>
        <CurrentWallet
          pvtKeyLocked={pvtKeyLocked}
          accountAddress={accountAddress}
          accountPrivateKey={accountPrivateKey}
        />
        <WalletPageContent>
          {loading ? (
            <CenteredSpinner />
          ) : (
            <RightSection>
              <DepositWrapper>
                <DepositTable provider={provider} depositData={depositTableData} />
              </DepositWrapper>
              <HeadingMenu>
                <h4>Heading</h4>
                <p>Text .......</p>
                <p>Text .......</p>
                <p>Text .......</p>
                <p>Text .......</p>
              </HeadingMenu>
            </RightSection>
          )}
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

const HeadingMenu = styled.div`
  width: 30%;
`;

const DepositWrapper = styled.div`
  height: 100%;
  width: 69%;
`;
const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
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
