// @flow
import React from 'react';
import styled from 'styled-components';
import { Button, ControlGroup, InputGroup, Label } from '@blueprintjs/core';
import TokenSelect from '../TokenSelect';
import GasSettings from '../GasSettings';
import TxNotification from '../TxNotification';

type Props = {
  loading: boolean,
  status: string,
  statusMessage: string,
  gas: number,
  gasPrice: number,
  hash: string,
  receipt: Object,
  tokens: Array<Object>,
  token: Object,
  amount: number,
  receiver: string,
  handleChange: (SyntheticInputEvent<>) => void,
  handleTokenChange: (SyntheticEvent<>) => void,
  handleSubmit: (SyntheticEvent<>) => void,
};

const SendEtherFormRenderer = (props: Props) => {
  const {
    loading,
    status,
    statusMessage,
    gas,
    gasPrice,
    hash,
    receipt,
    tokens,
    token,
    amount,
    receiver,
    handleChange,
    handleTokenChange,
    handleSubmit,
  } = props;
  console.log(loading, status, statusMessage, gas, gasPrice, hash, receipt, tokens, token, amount, receiver);
  return (
    <div>
      <Label helpertext="(in ether or in token decimals)" text="Amount to Send">
        <ControlGroup fill vertical={false}>
          <InputGroup
            icon="filter"
            placeholder="Ex: 1.0 for 1 ether"
            name="amount"
            value={amount}
            onChange={handleChange}
          />
          <TokenSelect token={token} tokens={tokens} onChange={handleTokenChange} />
        </ControlGroup>
      </Label>
      <br />
      <Label text="Receiver Address" helperText="(should start with 0x)">
        <InputGroup placeholder="Receiver" name="receiver" value={receiver} onChange={handleChange} />
      </Label>
      <br />
      <GasSettings gas={gas} gasPrice={gasPrice} handleChange={handleChange} />
      <TxNotificationBox>
        <TxNotification
          loading={loading}
          hash={hash}
          receipt={receipt}
          status={status}
          statusMessage={statusMessage}
          gas={gas}
        />
      </TxNotificationBox>
      <Button text="Send Transaction" intent="primary" large type="submit" fill onClick={handleSubmit} />
    </div>
  );
};

const TxNotificationBox = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export default SendEtherFormRenderer;
