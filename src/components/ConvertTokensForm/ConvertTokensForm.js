//@flow
import React from 'react';
import ConvertTokensFormRenderer from './ConvertTokensFormRenderer';

import type { TxReceipt } from '../../types/common'

type Props = {
  txSubmitted: boolean,
  fromToken: string,
  toToken: string,
  address: string,
  fromTokenBalance: number,
  toTokenBalance: number,
  txSubmitted: false,
  convertTxStatus: string,
  convertTxReceipt: TxReceipt,
  convertTxHash: string,
  allowTxStatus: string,
  allowTxReceipt: TxReceipt,
  allowTxHash: string,
  convertFromWETHtoETH: number => void,
  convertFromETHtoWETH: (boolean, number) => void,
  reset: string => void,
};

type State = {
  convertAmount: number,
  convertFraction: number,
  shouldConvert: boolean,
  shouldAllow: boolean,
  showTokenSuggest: boolean,
};

class ConvertTokensForm extends React.PureComponent<Props, State> {
  state = {
    shouldConvert: true,
    shouldAllow: true,
    convertFraction: 0,
    convertAmount: 0,
    showTokenSuggest: false,
  };

  handleChangeConvertFraction = (convertFraction: number) => {
    this.setState((prevState, { fromTokenBalance }) => {
      return {
        ...prevState,
        convertFraction: convertFraction,
        convertAmount: fromTokenBalance * convertFraction / 100,
      }
    })
  };

  toggleTokenSuggest = () => {
    this.setState({ showTokenSuggest: !this.state.showTokenSuggest });
  };

  toggleShouldAllowTrading = () => {
    this.setState({ shouldAllow: !this.state.shouldAllow });
  };

  //TODO refactor this
  transactionStatus = () => {
    const { fromToken, allowTxStatus, convertTxStatus, txSubmitted } = this.props;

    if (fromToken === 'ETH') {
      if (allowTxStatus === 'failed' || convertTxStatus === 'failed') return 'failed';
      if (allowTxStatus === 'confirmed' && convertTxStatus === 'confirmed') return 'confirmed';
      if (allowTxStatus === 'sent' && convertTxStatus === 'sent') return 'sent';
      if (txSubmitted === true) return 'submitted'
    } else {
      if (convertTxStatus === 'failed') return 'failed';
      if (convertTxStatus === 'confirmed') return 'confirmed';
      if (convertTxStatus === 'sent') return 'sent';
      if (txSubmitted === true) return 'submitted'
    }

    return "waiting";
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

  handleReset = () => {
    const { reset, fromToken } = this.props;

    reset(fromToken);
  }

  render() {
    const {
      fromToken,
      toToken,
      txSubmitted,
      address,
      fromTokenBalance,
      toTokenBalance,
      convertTxStatus,
      convertTxReceipt,
      convertTxHash,
      allowTxStatus,
      allowTxReceipt,
      allowTxHash,
    } = this.props;

    const {
      shouldAllow,
      convertFraction,
      convertAmount
    } = this.state;

    const transactionStatus = this.transactionStatus()
        
    let depositBalance, walletBalance
    let formType = (fromToken === "WETH" && toToken === "ETH") ? "withdrawal" : "deposit"

    //Widthdrawal case
    if (fromToken === "WETH" && toToken === "ETH") {
      depositBalance = Number(fromTokenBalance) - convertAmount
      walletBalance = Number(toTokenBalance) + convertAmount
    }

    //Deposit case
    if (fromToken === "ETH" && toToken === "WETH") {
      depositBalance = Number(toTokenBalance) + convertAmount
      walletBalance = Number(fromTokenBalance) - convertAmount
    }

    if (!fromToken) return null

    return (
      <ConvertTokensFormRenderer
        txSubmitted={txSubmitted}
        fromToken={fromToken}
        toToken={toToken}
        address={address}
        shouldAllow={shouldAllow}
        convertFraction={convertFraction}
        handleConvertTokens={this.handleConvertTokens}
        handleChangeConvertFraction={this.handleChangeConvertFraction}
        toggleShouldAllowTrading={this.toggleShouldAllowTrading}
        transactionStatus={transactionStatus}
        convertTxStatus={convertTxStatus}
        convertTxReceipt={convertTxReceipt}
        convertTxHash={convertTxHash}
        allowTxStatus={allowTxStatus}
        allowTxReceipt={allowTxReceipt}
        allowTxHash={allowTxHash}
        reset={this.handleReset}
        depositBalance={depositBalance}
        walletBalance={walletBalance}
        formType={formType}
      />
    );
  }
}

export default ConvertTokensForm;