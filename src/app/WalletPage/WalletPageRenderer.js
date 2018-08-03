import React from 'react';
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';
import CenteredSpinner from '../../components/Common/CenteredSpinner';
import DepositTable from '../../components/DepositTable';

type Props = {
  queryAccountData: void => void,
};

const WalletPageRenderer = ({ loading, depositTableData }: Props) => {
  return (
    <Wrapper>
      <WalletPagePanel />
      <WalletPageContent>{loading ? <CenteredSpinner /> : <DepositTable data={depositTableData} />}</WalletPageContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.5em;
`;

const WalletPagePanel = styled(Card)`
  height: 92vh;
  flex-grow: 1;
  margin: 0.5em;
`;

const WalletPageContent = styled(Card)`
  height: 92vh;
  flex-grow: 4;
  margin: 0.5em;
`;

export default WalletPageRenderer;
