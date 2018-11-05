// @flow
import React from 'react';
import TxReceiptRenderer from './TxReceiptRenderer';
import type { TxReceipt as TxReceiptType } from '../../types/transferTokensForm';

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
    const { blockHash, blockNumber, hash, gasUsed } = this.props.receipt;

    return (
      <TxReceiptRenderer
        toggleVisible={this.toggleVisible}
        visible={visible}
        blockHash={blockHash}
        blockNumber={blockNumber}
        gasLimit={gasUsed.toNumber()}
        hash={hash}
      />
    );
  }
}

export default TxReceipt;
