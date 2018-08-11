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
  } = props;
  return (
    <WalletWrapper>
      <CardTitle>Current Wallet</CardTitle>
      <Row>
        <h6>Balance: </h6>
        <h4>{balance} ETH</h4>
      </Row>
      <Row>
        <h6>Address: </h6>
        <p>{accountAddress}</p>
      </Row>
      <Row>
        <h6>Private Key: </h6>
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
        <Button style={{ marginBottom: '8px' }} onClick={handleModalClose} text="Start Transaction" intent="primary" />
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
    </WalletWrapper>
  );
};

const WalletWrapper = styled(Card)`
  height: 92vh;
  width: 25%;
  margin: 0.5em;
  display: flex;
  flex-direction: column;
`;
const CardTitle = styled.h4`
  width: 100%;
  float: left;
  margin-bottom: 15px;
`;
const Row = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 25px;
  & > h6 {
    margin-right: 15px;
  }
  & > h4 {
    text-align: center;
  }
  & > h4,
  & > h6,
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
