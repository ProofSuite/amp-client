// @flow
import React from 'react';
import styled from 'styled-components';
import TxNotification from '../TxNotification';
import { Button, Callout, Icon, Slider } from '@blueprintjs/core';
import { formatNumber } from 'accounting-js'

import { 
  ModalBody, 
  FlexColumn, 
  FlexRow, 
  Box,
  XLText,
  Colors
} from '../Common'

import {
  Fonts,
} from '../Common/Variables'

import CenteredSpinner from '../Common/CenteredSpinner'
import type { TxReceipt } from '../../types/common'

type Props = {
  address: string,
  fromToken: string,
  toToken: string,
  txSubmitted: boolean,
  shouldAllow: boolean,
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
  reset: string => void,
  formType: "Deposit" | "Withdrawal"
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
    handleConvertTokens,
    handleChangeConvertFraction,
    convertFraction,
    fromToken,
    depositBalance,
    walletBalance,
    formType
  } = props;

  return (
    <ModalBody>
      <FlexColumn my={3}>
        <FlexColumn m={2} alignItems="center" width="100%">
          <XLText muted>{messages[fromToken].label1}</XLText>
          <Box my={3} width="50%">
            <Slider
              max={100}
              min={0}
              onChange={handleChangeConvertFraction}
              value={convertFraction}
              labelStepSize={25}
            />
          </Box>
        </FlexColumn>
        <FlexColumn my={3} alignItems="center">
          <XLText muted>Balances after deposit</XLText>
          <FlexColumn my={3} alignItems="stretch" width="50%">
            <FlexRow justifyContent="space-between" my={2}>
              <BalanceText>Wallet:</BalanceText>
              <BalanceValueText>{formatNumber(walletBalance, { precision : 3 })}
                <BalanceSymbolText muted>ETH</BalanceSymbolText>
              </BalanceValueText>
            </FlexRow>
            <FlexRow justifyContent="space-between" my={2}>
                <BalanceText>Trading Deposit:</BalanceText>
                <BalanceValueText>{formatNumber(depositBalance, { precision: 3 })}
                  <BalanceSymbolText muted>ETH</BalanceSymbolText>
                </BalanceValueText>
            </FlexRow>
          </FlexColumn>
        </FlexColumn>
      </FlexColumn>
      <Button
        intent="primary"
        onClick={handleConvertTokens}
        text={formType}
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
      reverted: 'Transaction Failed. Could not unlock ETH trading',
      sent: 'Unlocking ETH trading ...',
      confirmed: 'ETH trading unlocked successfully',
    },
    convert: {
      reverted: 'Transaction Failed. Could not deposit ETH',
      sent: 'Processing ETH deposit ...',
      confirmed: 'ETH deposit successful',
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
            <h3>ETH deposit successful. You can now start trading</h3>
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
    title: `You need to deposit ETH before you can start trading ETH pairs`,
    callout: ``,
    label1: `Choose the fraction of ETH you want to deposit.`,
  },
  "WETH": {
    title: `Convert back to Ether`,
    callout: `To be able to trade on the AMP platform, you will need to convert you Ether (ETH) to tokenized ether (WETH). ETH and WETH can be converted at anytime through a smart-contract and 1 ETH = 1 WETH consistently`,
    label1: `Choose the fraction of your ETH you want to withdraw`,
  },
};

const BalanceText = styled.div`
  font-size: ${Fonts.FONT_SIZE_XL + 'px'};
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
`

const BalanceValueText = styled.div`
  font-size: ${Fonts.FONT_SIZE_XL + 'px'};
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
`

const BalanceSymbolText = styled.span`
  font-size: ${Fonts.FONT_SIZE_LARGE + 'px'};
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
`

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