// @flow
import React from 'react';
import ConversionFormRenderer from './steps/ConversionFormRenderer';
import ConfirmFormRenderer from './steps/ConfirmFormRenderer';

import type { TxReceipt } from '../../types/common'
import type { Token } from '../../types/tokens'

type Props = {
  address: string,
  balance: ?number,
  token: Token,
  txSubmitted: boolean,
  shouldConvert: boolean,
  shouldAllow: boolean,
  convertAmount: number,
  handleChangeConvertAmount: number => void,
  toggleShouldAllowTrading: void => void,
  toggleShouldConvert: void => void,
  toggleTokenSuggest: void => void,
  showTokenSuggest: boolean,
  allowTradingCheckboxDisabled: boolean,
  submitButtonDisabled: boolean,
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
