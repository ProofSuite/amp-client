import React from 'react';
import { Callout, Intent, Spinner } from '@blueprintjs/core';
import styled from 'styled-components';

type Props = {
  hash: string,
  title: ?string,
};

const TxPendingNotification = ({ hash, title }: Props) => (
  <Callout intent={Intent.SUCCESS} icon="info-sign" title={title}>
    <NotificationBox>
      <h6>Transaction Hash:</h6>
      <Ellipsis>{hash}</Ellipsis>
      <SpinnerBox>
        <Spinner intent={Intent.SUCCESS} />
      </SpinnerBox>
    </NotificationBox>
  </Callout>
);

TxPendingNotification.defaultProps = {
  title: 'Transaction in progress',
};

const SpinnerBox = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-content: center;
  justify-content: center;
  margin: auto;
`;

const Ellipsis = styled.p`
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default TxPendingNotification;
