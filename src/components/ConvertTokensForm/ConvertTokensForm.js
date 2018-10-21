//@flow
import React from 'react';
import ConvertTokensFormRenderer from './ConvertTokensFormRenderer';

import type { Token } from '../../types/tokens';
import type { TxReceipt } from '../../types/common'

type Step = 'convert' | 'confirm';

type Props = {
  txSubmitted: boolean,
  token: Token,
  address: string,
  balance: ?number,
  txSubmitted: false,
  convertTxStatus: string,
  convertTxReceipt: TxReceipt,
  convertTxHash: string,
  allowTxStatus: string,
  allowTxReceipt: TxReceipt,
  allowTxHash: string
};

type State = {
  token: ?Token,
  convertAmount: number,
  shouldConvert: boolean,
  shouldAllow: boolean,
  showTokenSuggest: boolean,
};

class ConvertTokensForm extends React.PureComponent<Props, State> {
  state = {
    token: this.props.token || null,
    shouldConvert: true,
    shouldAllow: true,
    convertAmount: 50,
    showTokenSuggest: false,
  };

  handleChangeConvertAmount = (e: number) => {
    this.setState({ convertAmount: e });
  };

  updateToken = (token: Token) => {
    this.setState({ token })
  }

  toggleTokenSuggest = () => {
    this.setState({ showTokenSuggest: !this.state.showTokenSuggest });
  };

  toggleShouldAllowTrading = () => {
    this.setState({ shouldAllow: !this.state.shouldAllow });
  };

  toggleShouldConvert = () => {
    this.setState({ shouldConvert: !this.state.shouldConvert });
  };

  transactionStatus = () => {
    const { token, allowTxStatus, convertTxStatus } = this.props;

    if (token.symbol === 'ETH') {
      if (allowTxStatus === 'failed' || convertTxStatus === 'failed') return 'failed';
      if (allowTxStatus === 'confirmed' && convertTxStatus === 'confirmed') return 'confirmed';
      if (allowTxStatus === 'sent' && convertTxStatus === 'sent') return 'sent';
    } else {
      if (allowTxStatus === 'failed') return 'failed';
      if (allowTxStatus === 'confirmed') return 'confirmed';
      if (allowTxStatus === 'sent') return 'sent';
    }
  };

  render() {
    const { token,
      txSubmitted,
      address,
      balance,
      convertTxStatus,
      convertTxReceipt,
      convertTxHash,
      allowTxStatus,
      allowTxReceipt,
      allowTxHash
    } = this.props;


    const { shouldAllow, shouldConvert, convertAmount, showTokenSuggest } = this.state;

    if (!token) return null

    const isEtherDeposit = token.symbol === 'ETH';
    const allowTradingCheckboxDisabled = isEtherDeposit && !shouldConvert;
    const submitButtonDisabled = (!isEtherDeposit && allowTradingCheckboxDisabled) || (!shouldConvert || allowTradingCheckboxDisabled);

    return (
      <ConvertTokensFormRenderer
        txSubmitted={txSubmitted}
        token={token}
        balance={balance}
        address={address}
        shouldConvert={shouldConvert}
        shouldAllow={shouldAllow}
        convertAmount={convertAmount}
        isEtherDeposit={isEtherDeposit}
        allowTradingCheckboxDisabled={allowTradingCheckboxDisabled}
        submitButtonDisabled={submitButtonDisabled}
        handleChangeConvertAmount={this.handleChangeConvertAmount}
        toggleShouldAllowTrading={this.toggleShouldAllowTrading}
        toggleShouldConvert={this.toggleShouldConvert}
        toggleTokenSuggest={this.toggleTokenSuggest}
        showTokenSuggest={showTokenSuggest}
        transactionStatus={this.transactionStatus()}
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