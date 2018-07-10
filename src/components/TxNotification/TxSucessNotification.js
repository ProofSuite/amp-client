// @flow
import React from 'react';
import { Callout, Intent } from '@blueprintjs/core';
import TxReceipt from '../TxReceipt';

type Props = {
  receipt: Object,
  hash: string,
};

const TxSuccessNotification = ({ receipt, hash }: Props) => (
  <Callout intent={Intent.SUCCESS} icon="info-sign" title="Transaction successful!">
    <p>Transaction Hash: {hash}</p>
    <TxReceipt receipt={receipt} />
  </Callout>
);

export default TxSuccessNotification;
