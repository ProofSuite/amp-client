import React from 'react';
import { Callout, Intent, Spinner } from '@blueprintjs/core';
import styled from 'styled-components';

type Props = {
  hash: string,
};

const TxPendingNotification = ({ hash }: Props) => (
  <Callout intent={Intent.SUCCESS} icon="info-sign" title="Transaction in progress">
    <NotificationBox>
      <h6>Transaction Hash: {hash}</h6>
      <SpinnerBox>
        <Spinner intent={Intent.SUCCESS} />
      </SpinnerBox>
    </NotificationBox>
  </Callout>
);

const SpinnerBox = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  margin: auto;
`;

export default TxPendingNotification;
