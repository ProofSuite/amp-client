// @flow
import React from 'react';
import { Callout } from '@blueprintjs/core';

type Props = {
  status: string,
  statusMessage: string,
  gas: number,
};

const TxValidityNotification = (props: Props) => {
  const { status, statusMessage, gas } = props;
  if (status === 'invalid') {
    return renderInvalidTx(gas, statusMessage);
  } else if (status === 'valid') {
    return renderValidTx(gas, statusMessage);
  } else {
    return null;
  }
};

const renderInvalidTx = (gas: number, statusMessage: string) => {
  return (
    <Callout intent="warning" icon="warning-sign" title={statusMessage}>
      {gas && `Required Gas: ${gas}`}
    </Callout>
  );
};

const renderValidTx = (gas: number, statusMessage: string) => {
  return (
    <Callout intent="success" icon="info-sign" title={statusMessage}>
      Required Gas: {gas}
    </Callout>
  );
};

export default TxValidityNotification;
