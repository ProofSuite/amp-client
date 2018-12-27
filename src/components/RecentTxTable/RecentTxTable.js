// @flow
import React from 'react';
import RecentTxTableRenderer from './RecentTxTableRenderer';
import type Trade from '../../types/trades';

import type { Tx } from '../../types/transactions';

import { ETHERSCAN_TX_URL } from '../../config/urls'

type Props = {
  transactions: Array<Tx>,
};

class RecentTxTable extends React.PureComponent<Props, State> {

  openEtherscanLink = (txHash: string) => {
    if (txHash !== "") window.open(`${ETHERSCAN_TX_URL}/${txHash}`)
  }

  render() {
    const {
      props: { transactions },
      openEtherscanLink
    } = this;

    return (
      <RecentTxTableRenderer
        transactions={transactions}
        openEtherscanLink={openEtherscanLink}
      />
    );
  }
}

export default RecentTxTable
