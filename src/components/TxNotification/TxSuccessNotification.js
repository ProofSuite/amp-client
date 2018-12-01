// @flow
import React from 'react';
import { Callout, Intent, Button } from '@blueprintjs/core';
import TxReceipt from '../TxReceipt';
import { ETHERSCAN_TX_URL } from '../../config/urls'

import styled from 'styled-components'

type Props = {
  receipt: Object,
  hash: string,
  title: ?string,
};

const TxSuccessNotification = ({ receipt, hash, title }: Props) => (
  <Callout intent={Intent.SUCCESS} title={title}>
    <Button minimal interactive>
      <EtherscanLink href={`${ETHERSCAN_TX_URL}/${hash}`} target="_blank">
        View on etherscan
      </EtherscanLink>
    </Button>
    <TxReceipt receipt={receipt} />
  </Callout>
);

TxSuccessNotification.defaultProps = {
  title: 'Transaction successful',
};

const EtherscanLink = styled.a`
  color: white !important;
`

export default TxSuccessNotification;
