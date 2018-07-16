// @flow
import React from 'react';
import { Callout, Intent } from '@blueprintjs/core';
import TxReceipt from '../TxReceipt';

type Props = {
  receipt: Object,
  hash: string,
  title: ?string,
};

const TxSuccessNotification = ({ receipt, hash, title }: Props) => (
  <Callout intent={Intent.SUCCESS} icon="info-sign" title={title}>
    <p>Transaction Hash: {hash}</p>
    <TxReceipt receipt={receipt} />
  </Callout>
);

TxSuccessNotification.defaultProps = {
  title: 'Transaction successful',
};

export default TxSuccessNotification;
