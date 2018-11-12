// @flow
import React from 'react';
import styled from 'styled-components';
import { Button, ControlGroup, InputGroup, Label, Callout } from '@blueprintjs/core';
import TokenSelect from '../TokenSelect';
import GasSettings from '../GasSettings';
import TxNotification from '../TxNotification';
import { ModalBody } from '../Common'

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

const TransferTokensFormRenderer = (props: Props) => {
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

  return (
    <ModalBody>
      <ImportantNoticeCallout icon="warning-sign" intent="success" title="Important Notice">
        <p>Double check the entered transaction information is correct. Proofsuite has no control
          over your transactions. Your are fully responsible for your funds and assets.</p>
      </ImportantNoticeCallout>
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
      <Label text="Receiver Address" helpertext="(should start with 0x)">
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
    </ModalBody>
  );
};


const ImportantNoticeCallout = styled(Callout)`
  margin-bottom: 20px;
`

const TxNotificationBox = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export default TransferTokensFormRenderer;
