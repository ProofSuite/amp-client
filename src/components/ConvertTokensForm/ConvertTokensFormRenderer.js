// @flow
import React from 'react';
import styled from 'styled-components';
import TxNotification from '../TxNotification';
import { Button, Callout, Checkbox, Icon, Slider } from '@blueprintjs/core';
import { formatNumber } from 'accounting-js'
import { ModalBody } from '../Common'

import CenteredSpinner from '../Common/CenteredSpinner'
import type { TxReceipt } from '../../types/common'

type Props = {
  address: string,
  fromToken: string,
  toToken: string,
  fromTokenBalance: number,
  toTokenBalance: number,
  txSubmitted: boolean,
  shouldAllow: boolean,
  convertAmount: number,
  convertFraction: number,
  handleConvertTokens: void => void,
  handleChangeConvertFraction: number => void,
  toggleShouldAllowTrading: void => void,
  allowTxStatus: string,
  allowTxHash: string,
  allowTxReceipt: TxReceipt,
  convertTxStatus: string,
  convertTxHash: string,
  convertTxReceipt: TxReceipt,
  transactionStatus: string,
  reset: boolean,
};

const ConvertTokensFormRenderer = (props: Props) => {
  if (props.txSubmitted) {
    return <ConfirmFormRenderer {...props} />
  } else {
    return <ConversionFormRenderer {...props} />
  }
};

const ConversionFormRenderer = (props: Props) => {
  const {
    shouldAllow,
    toggleShouldAllowTrading,
    handleConvertTokens,
    handleChangeConvertFraction,
    convertFraction,
    convertAmount,
    fromToken,
    toToken,
    fromTokenBalance,
    toTokenBalance
  } = props;

  return (
    <ModalBody>
      <Callout intent="success" title={messages[fromToken].title}>
        {messages[fromToken].callout}
      </Callout>
      <SliderGroup>
        <p>{messages[fromToken].label1}</p>
        <SliderBox>
          <Slider
            max={100}
            min={0}
            onChange={handleChangeConvertFraction}
            value={convertFraction}
            labelStepSize={25}
          />
        </SliderBox>
      </SliderGroup>
      <BalancesGroup>
          <p>After this transaction you will have</p>
        <BalancesBox>
          <BalanceBox>
            {/* TODO Need to convert all the balances to strings */}
            <h2>{formatNumber(Number(fromTokenBalance) - convertAmount, { precision : 3})} {fromToken}</h2>
          </BalanceBox>
          <BalanceBox>
            <h2>{formatNumber(Number(toTokenBalance) + convertAmount, { precision: 3})} {toToken}</h2>
          </BalanceBox>
        </BalancesBox>
      </BalancesGroup>

      {/* <p><Icon intent="warning" icon="warning-sign" /> {messages[fromToken].info1}</p> */}
      <br />
      <Checkbox
        checked={shouldAllow}
        label={"Allow Trading"}
        onChange={toggleShouldAllowTrading}
      />
      <p><Icon intent="warning" icon="warning-sign" /> {messages[fromToken].info2}</p>
      <Button
        intent="primary"
        onClick={handleConvertTokens}
        text="Convert"
        large
        fill
      />
    </ModalBody>
  );
};

const ConfirmFormRenderer = (props: Props) => {
  const {
    fromToken,
    allowTxStatus,
    allowTxHash,
    allowTxReceipt,
    convertTxStatus,
    convertTxHash,
    convertTxReceipt,
    transactionStatus,
    reset,
  } = props;

  const notificationBoxTitles = {
    allow: {
      reverted: 'Allow Trading Transaction Failed',
      sent: 'Allowing Trading ...',
      confirmed: 'Allow Trading Transaction Successful',
    },
    convert: {
      reverted: 'Convert Ether Transaction Failed',
      sent: 'Converting Ether  ...',
      confirmed: 'Convert Ether Transaction Successful',
    },
  };

  switch (transactionStatus) {
    case 'failed':
      return (
        <ModalBody>
          <ConfirmBox>
            <ConfirmIconBox>
              <Icon icon="error" intent="danger" iconSize={200} />
            </ConfirmIconBox>
            <h4>There was a problem with your transaction. But no worries, your funds are safe</h4>
          </ConfirmBox>
          <TxNotificationBox>
            <TxNotification
              status={allowTxStatus}
              hash={allowTxHash}
              receipt={allowTxReceipt}
              title={notificationBoxTitles.allow[allowTxStatus]}
            />
          </TxNotificationBox>
          <TxNotificationBox>
            <TxNotification
              status={convertTxStatus}
              hash={convertTxHash}
              receipt={convertTxReceipt}
              title={notificationBoxTitles.convert[convertTxStatus]}
            />
          </TxNotificationBox>
          <Button minimal onClick={reset}>
            Try again
          </Button>
        </ModalBody>
      );
    case 'submitted':
      return (
        <ModalBody>
          <TxNotificationBox>
            <ConfirmBox>
              <h3>Transactions are being sent</h3>
              <CenteredSpinner />
            </ConfirmBox>
          </TxNotificationBox>
        </ModalBody>
      )
    case 'sent':
      return (
        <ModalBody>
          <ConfirmBox>
            <h3>Transactions have been sent!</h3>
          </ConfirmBox>
          <TxNotificationBox>
            <TxNotification
              status={allowTxStatus}
              hash={allowTxHash}
              receipt={allowTxReceipt}
              title={notificationBoxTitles.allow[allowTxStatus]}
            />
          </TxNotificationBox>
          <TxNotificationBox>
            <TxNotification
              status={convertTxStatus}
              hash={convertTxHash}
              receipt={convertTxReceipt}
              title={notificationBoxTitles.convert[convertTxStatus]}
            />
          </TxNotificationBox>
        </ModalBody>
      );
    case 'confirmed':
      return (
        <ModalBody>
          <ConfirmBox>
            <ConfirmIconBox>
              <Icon icon="tick-circle" intent="success" iconSize={200} />
            </ConfirmIconBox>
            <h3>Your {fromToken} has been successfully tokenized. You can now start trading</h3>
            <Button minimal onClick={reset}>
              Convert again
            </Button>
          </ConfirmBox>
          <TxNotificationBox>
            <TxNotification
              status={allowTxStatus}
              hash={allowTxHash}
              receipt={allowTxReceipt}
              title={notificationBoxTitles.allow[allowTxStatus]}
            />
          </TxNotificationBox>
          <TxNotificationBox>
            <TxNotification
              status={convertTxStatus}
              hash={convertTxHash}
              receipt={convertTxReceipt}
              title={notificationBoxTitles.convert[convertTxStatus]}
            />
          </TxNotificationBox>
        </ModalBody>
      );
    default:
      return null;
  }
};

const messages = {
  "ETH": {
    title: `Tokenize your Ether for trading!`,
    callout: `To be able to trade on the AMP platform, you will need to convert you Ether (ETH) to tokenized ether (WETH).
    ETH and WETH can be converted at anytime through a smart-contract and 1 ETH = 1 WETH consistently. To perform other normal blockchain transactions, you will need Ether to pay for gas. Therefore
    we recommend tokenizing around 90% of your ETH`,
    label1: `Choose the fraction of ETH you want to tokenize.`,
    info1: `WETH is reequired for trading. You can convert back to ETH at any time. Read more about WETH here`,
    info2: 'Required for trading',
  },
  "WETH": {
    title: `Convert back to Ether`,
    callout: `To be able to trade on the AMP platform, you will need to convert you Ether (ETH) to tokenized ether (WETH). ETH and WETH can be converted at anytime through a smart-contract and 1 ETH = 1 WETH consistently`,
    label1: `Choose the fraction of WETH (tokenized Ether) you want to convert to ETH`,
    info1: `WETH is reequired for trading. You can convert between WETH (tokenized ether) and ETH at any time. Read more about WETH here`,
    info2: 'Required for trading',
  },
};

const SliderGroup = styled.div`
  margin: 40px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`

const SliderBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 400px;
`;

const BalancesGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

const BalancesBox = styled.div`
  display: flex;
  width: 60%;
  flex-direction: row;
  justify-content: space-around;
`;

const BalanceBox = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TxNotificationBox = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
`;

const ConfirmBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const ConfirmIconBox = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;



export default ConvertTokensFormRenderer;


