// @flow
import React from 'react';
import { Button, Collapse } from '@blueprintjs/core';

type Props = {
  visible: boolean,
  blockHash: string,
  blockNumber: string,
  gasLimit: number,
  hash: string,
  toggleVisible: (SyntheticEvent<>) => void,
};

const TxReceiptRenderer = (props: Props) => {
  const { blockHash, blockNumber, gasLimit, hash, visible, toggleVisible } = props;
  return (
    <div>
      <Button minimal text={visible ? `Hide Receipt` : `Show Receipt`} onClick={toggleVisible} />
      <Collapse isOpen={visible}>
        <ul>
          <li key="1">Block Hash: {blockHash}</li>
          <li key="2">Block Number: {blockNumber}</li>
          <li key="3">Gas Used: {gasLimit}</li>
          <li key="4">Transaction Hash: {hash}</li>
        </ul>
      </Collapse>
    </div>
  );
};

export default TxReceiptRenderer;
