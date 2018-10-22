//@flow
import React from 'react';
import ConvertTokensFormRenderer from './ConvertTokensFormRenderer';

import type { Token } from '../../types/tokens';
import type { TxReceipt } from '../../types/common'

type Step = 'convert' | 'confirm';

type Props = {
  txSubmitted: boolean,
  fromToken: Token,
  toToken: Token,
  address: string,
  balance: ?number,
  txSubmitted: false,
  convertTxStatus: string,
  convertTxReceipt: TxReceipt,
  convertTxHash: string,
  allowTxStatus: string,
  allowTxReceipt: TxReceipt,
  allowTxHash: string,
  convertFromWETHtoETH: number => void,
  convertFromETHtoWETH: (boolean, number) => void
};

type State = {
  convertAmount: number,
  shouldConvert: boolean,
  shouldAllow: boolean,
  showTokenSuggest: boolean,
};

class ConvertTokensForm extends React.PureComponent<Props, State> {
  state = {
    shouldConvert: true,
    shouldAllow: true,
    convertAmount: 50,
    showTokenSuggest: false,
  };

  handleChangeConvertAmount = (e: number) => {
    this.setState({ convertAmount: e });
  };

  toggleTokenSuggest = () => {
    this.setState({ showTokenSuggest: !this.state.showTokenSuggest });
  };

  toggleShouldAllowTrading = () => {
    this.setState({ shouldAllow: !this.state.shouldAllow });
  };

  transactionStatus = () => {
    const { fromToken, allowTxStatus, convertTxStatus } = this.props;

    if (fromToken === 'ETH') {
      if (allowTxStatus === 'failed' || convertTxStatus === 'failed') return 'failed';
      if (allowTxStatus === 'confirmed' && convertTxStatus === 'confirmed') return 'confirmed';
      if (allowTxStatus === 'sent' && convertTxStatus === 'sent') return 'sent';
    } else {
      if (convertTxStatus === 'failed') return 'failed';
      if (convertTxStatus === 'confirmed') return 'confirmed';
      if (convertTxStatus === 'sent') return 'sent';
    }
  };

  handleConvertTokens = () => {
    const {
      fromToken,
      toToken,
      convertFromWETHtoETH,
      convertFromETHtoWETH,
     } = this.props

     const {
       convertAmount,
       shouldAllow
     } = this.state

    if (fromToken === 'WETH' && toToken === 'ETH') return convertFromWETHtoETH(convertAmount)
    if (fromToken === 'ETH' && toToken === 'WETH') return convertFromETHtoWETH(shouldAllow, convertAmount)
  }

  render() {
    const {
      fromToken,
      toToken,
      txSubmitted,
      address,
      balance,
      convertTxStatus,
      convertTxReceipt,
      convertTxHash,
      allowTxStatus,
      allowTxReceipt,
      allowTxHash,
    } = this.props;

    const { shouldAllow, convertAmount, showTokenSuggest } = this.state;
    const transactionStatus = this.transactionStatus()

    if (!fromToken) return null

    return (
      <ConvertTokensFormRenderer
        txSubmitted={txSubmitted}
        fromToken={fromToken}
        toToken={toToken}
        balance={balance}
        address={address}
        shouldAllow={shouldAllow}
        convertAmount={convertAmount}
        handleConvertTokens={this.handleConvertTokens}
        handleChangeConvertAmount={this.handleChangeConvertAmount}
        toggleShouldAllowTrading={this.toggleShouldAllowTrading}
        toggleTokenSuggest={this.toggleTokenSuggest}
        showTokenSuggest={showTokenSuggest}
        transactionStatus={transactionStatus}
        convertTxStatus={convertTxStatus}
        convertTxReceipt={convertTxReceipt}
        convertTxHash={convertTxHash}
        allowTxStatus={allowTxStatus}
        allowTxReceipt={allowTxReceipt}
        allowTxHash={allowTxHash}
      />
    );
  }
}

export default ConvertTokensForm;