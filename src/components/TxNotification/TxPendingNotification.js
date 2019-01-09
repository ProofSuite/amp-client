import React from 'react';
import { Callout, Intent, Spinner, Button } from '@blueprintjs/core';
import { Colors, Indent } from '../Common'
import styled from 'styled-components';

import { ETHERSCAN_TX_URL } from '../../config/urls'

type Props = {
  hash: string,
  title: ?string,
};

const TxPendingNotification = ({ hash, title }: Props) => (
  <Callout intent={Intent.SUCCESS} icon="null">
    <CalloutBox>
    <CalloutText>
      <SpinnerBox>
        <Spinner intent={Intent.SUCCESS} size={25} />
      </SpinnerBox>
      <Indent />
      <h3>{title}</h3>
    </CalloutText>
    <NotificationBox>
      <Button minimal interactive>
        <EtherscanLink target="_blank" href={`${ETHERSCAN_TX_URL}/${hash}`}>
          View on etherscan
        </EtherscanLink>
      </Button>
    </NotificationBox>
    </CalloutBox>
  </Callout>
);

TxPendingNotification.defaultProps = {
  title: 'Transaction in progress',
};

const CalloutBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  align-content: center;
  justify-content: center;
`

const CalloutText  = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.GREEN5}
  font-weight: bold;
  flex: 1;
`

const EtherscanLink = styled.a`
  color: white !important;
`

const SpinnerBox = styled.div`
`;

const NotificationBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  margin: auto;
`;

export default TxPendingNotification;
