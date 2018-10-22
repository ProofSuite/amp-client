// @flow
import React from 'react';
import ConversionFormRenderer from './steps/ConversionFormRenderer';
import ConfirmFormRenderer from './steps/ConfirmFormRenderer';

import type { TxReceipt } from '../../types/common'
import type { Token } from '../../types/tokens'

type Props = {
  address: string,
  balance: ?number,
  fromToken: Token,
  toToken: Token,
  txSubmitted: boolean,
  shouldAllow: boolean,
  convertAmount: number,
  handleConvertTokens: void => void,
  handleChangeConvertAmount: number => void,
  toggleShouldAllowTrading: void => void,
  allowTxStatus: string,
  allowTxHash: string,
  allowTxReceipt: TxReceipt,
  convertTxStatus: string,
  convertTxHash: string,
  convertTxReceipt: TxReceipt,
  transactionStatus: string,
};

const ConvertTokensFormRenderer = (props: Props) => {
  if (props.txSubmitted) {
    return <ConfirmFormRenderer {...props} />
  } else {
    return <ConversionFormRenderer {...props} />
  }
};

export default ConvertTokensFormRenderer;
