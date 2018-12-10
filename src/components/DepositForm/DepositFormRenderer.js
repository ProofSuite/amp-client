// @flow
import React from 'react';
import WaitingFormRenderer from './steps/WaitingFormRenderer';
import ConversionFormRenderer from './steps/ConversionFormRenderer';
import ConfirmFormRenderer from './steps/ConfirmFormRenderer';

import type { TxReceipt } from '../../types/common';

type Props = {
  step: 'waiting' | 'convert' | 'confirm',
  address: string,
  balance: ?number,
  tokens: Array<Object>,
  token: Object,
  isEtherDeposit: boolean,
  shouldConvert: boolean,
  shouldAllow: boolean,
  convertAmount: number,
  handleChangeConvertAmount: number => void,
  toggleShouldAllowTrading: void => void,
  toggleShouldConvert: void => void,
  toggleTokenSuggest: void => void,
  showTokenSuggest: boolean,
  handleChangeToken: (SyntheticEvent<>) => void,
  handleSubmitChangeToken: (SyntheticEvent<>) => Promise<void>,
  handleConfirm: (SyntheticEvent<>) => void,
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

const DepositFormRenderer = (props: Props) => {
  switch (props.step) {
    case 'waiting':
      return <WaitingFormRenderer {...props} />;
    case 'convert':
      return <ConversionFormRenderer {...props} />;
    case 'confirm':
      return <ConfirmFormRenderer {...props} />;
    default:
      return null;
  }
};

export default DepositFormRenderer;
