// @flow
import React from 'react';
import styled from 'styled-components'

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
  const { blockHash, blockNumber, gasLimit, transactionHash, visible, toggleVisible } = props;

  console.log(transactionHash)

  return (
    <div>
      <Button minimal text={visible ? `Hide Receipt` : `Show Receipt`} onClick={toggleVisible} />
      <Collapse isOpen={visible}>
        <List>
          <Item key="1">Block Hash: {blockHash}</Item>
          <Item key="2">Block Number: {blockNumber}</Item>
          <Item key="3">Gas Used: {gasLimit}</Item>
          <Item key="4">Transaction Hash: {transactionHash}</Item>
        </List>
      </Collapse>
    </div>
  );
};

const List = styled.ul`
`

const Item = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default TxReceiptRenderer;
