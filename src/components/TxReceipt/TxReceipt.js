// @flow
import React from 'react';
import TxReceiptRenderer from './TxReceiptRenderer';
import type { TxReceipt as TxReceiptType } from '../../types/etherTx';

type Props = {
  receipt: TxReceiptType,
};

type State = {
  visible: boolean,
};

class TxReceipt extends React.PureComponent<Props, State> {
  state = { visible: false };

  toggleVisible = (e: SyntheticEvent<>) => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { visible } = this.state;
    const { blockHash, blockNumber, hash, gasLimit } = this.props.receipt;

    return (
      <TxReceiptRenderer
        toggleVisible={this.toggleVisible}
        visible={visible}
        blockHash={blockHash}
        blockNumber={blockNumber}
        gasLimit={gasLimit.toNumber()}
        hash={hash}
      />
    );
  }
}

export default TxReceipt;
