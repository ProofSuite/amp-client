import React from 'react';
import { Card, Button } from '@blueprintjs/core';
import styled from 'styled-components';
import StartTxModal from '../../components/StartTxModal';
import { toPassowrdType } from '../../utils/helpers';

const CurrentWalletRenderer = props => {
  const {
    showPrivateKey,
    toggleLock,
    isModalOpen,
    handleModalClose,
    togglePrivateKey,
    privateKey,
    accountAddress,
    balance,
    locked,
    currentBlock,
  } = props;
  return (
    <WalletWrapper>
      <div>
        <CardTitle>Current Wallet</CardTitle>
        <Row>
          <h3>Balance: </h3>
          <h2>{balance} ETH</h2>
        </Row>
        <Row>
          <h3>Address: </h3>
          <p>{accountAddress}</p>
        </Row>
        <Row>
          <h3>Private Key: </h3>
          <p style={{ lineHeight: '1.6' }}>
            {showPrivateKey ? (locked ? privateKey : toPassowrdType(privateKey)) : toPassowrdType(privateKey)}
            <Button
              minimal="true"
              style={{ marginLeft: '10px', cursor: 'pointer' }}
              onClick={togglePrivateKey}
              icon={showPrivateKey ? 'eye-off' : 'eye-open'}
            />
          </p>
        </Row>
        <Row>
          <Button minimal="true" onClick={toggleLock} text={(locked ? 'Lock' : 'Unlock') + ' Private Key Display'} />
        </Row>
        <Row>
          <Button
            style={{ marginBottom: '8px' }}
            onClick={handleModalClose}
            text="Start Transaction"
            intent="primary"
          />
        </Row>
        <Row>
          <a
            style={{ marginTop: '15px', cursor: 'pointer' }}
            href={'https://etherscan.io/address/' + accountAddress}
            target="_blank"
          >
            View Wallet on Etherscan
          </a>
        </Row>
        <StartTxModal isOpen={isModalOpen} handleClose={handleModalClose} />
      </div>
      <Block>
        <h3>Current Block: </h3>
        <a href={'https://etherscan.io/block/' + currentBlock} target="_blank">
          {currentBlock}
        </a>
      </Block>
    </WalletWrapper>
  );
};

const WalletWrapper = styled(Card)`
  height: 92vh;
  width: 25%;
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardTitle = styled.h3`
  width: 100%;
  float: left;
  margin-bottom: 15px;
`;
const Block = styled.div`
  float: left;
  word-wrap: break-word;
`;
const Row = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 25px;
  & > h3 {
    margin-right: 15px;
  }
  & > h2 {
    text-align: center;
  }
  & > h4 {
    text-align: center;
  }
  & > h4,
  & > h3,
  & > p {
    width: 100%;
    word-wrap: break-word;
    float: left;
    margin-bottom: 8px;
  }
  $ > p {
  }
`;

export default CurrentWalletRenderer;
