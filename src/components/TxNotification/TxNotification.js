// @flow
import React from 'react';
import { Spinner, Intent } from '@blueprintjs/core';
import TxSuccessNotification from './TxSucessNotification';
import TxErrorNotification from './TxErrorNotification';
import TxPendingNotification from './TxPendingNotification';
import TxValidityNotification from './TxValidityNotification';

type Props = {
  loading: boolean,
  hash: string,
  receipt: Object,
  status: string,
  statusMessage: string,
  gas: number,
};

const TxNotification = (props: Props) => {
  const { hash, receipt, status, statusMessage, gas } = props;
  switch (status) {
    case 'incomplete':
      return null;
    case 'invalid':
      return renderValidityNotification('invalid', statusMessage, gas);
    case 'valid':
      return renderValidityNotification('valid', statusMessage, gas);
    case 'sent':
      return renderTxPendingNotification(hash);
    case 'confirmed':
      return renderTxSuccessNotification(hash, receipt);
    case 'reverted':
      return renderErrorNotification(statusMessage, receipt);
    case 'error':
      return renderErrorNotification(statusMessage, receipt);
    default:
      return null;
  }
};

const renderErrorNotification = (statusMessage: string, receipt: Object) => {
  return <TxErrorNotification error={statusMessage} receipt={receipt} />;
};

const renderLoader = () => {
  return <Spinner intent={Intent.SUCCESS} />;
};

const renderValidityNotification = (status: string, statusMessage: string, gas: number) => {
  return <TxValidityNotification status={status} statusMessage={statusMessage} gas={gas} />;
};

const renderTxPendingNotification = (hash: string) => {
  return <TxPendingNotification hash={hash} />;
};

const renderTxSuccessNotification = (hash: string, receipt: Object) => {
  return <TxSuccessNotification hash={hash} receipt={receipt} />;
};

export default TxNotification;
