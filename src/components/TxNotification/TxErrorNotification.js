// @flow
import React from 'react';
import { Callout, Intent } from '@blueprintjs/core';
import TxReceipt from '../TxReceipt';

type Props = {
  error: string,
  receipt: Object,
};

const TxErrorNotification = ({ error, receipt }: Props) => (
  <Callout title="Transaction Failed" icon="info-sign" intent={Intent.DANGER}>
    <p>{error}</p>
    {receipt && <TxReceipt receipt={receipt} />}
  </Callout>
);

export default TxErrorNotification;
