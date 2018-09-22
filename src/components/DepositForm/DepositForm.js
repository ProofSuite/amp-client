//@flow
import React from 'react';
import DepositFormRenderer from './DepositFormRenderer';

import type { Token } from '../../types/tokens';
import type { AccountBalance } from '../../types/accountBalances';

type Step = 'waiting' | 'convert' | 'confirm';

type Props = {
  step: Step,
  balances: { [string]: AccountBalance },
  address: string,
  token: Token,
  tokens: Array<Token>,
  queryBalances: void => void,
  subscribeBalance: Token => void,
  confirmTokenDeposit: (Token, boolean) => void,
  confirmEtherDeposit: (boolean, boolean, number) => void,
  allowTx: Object,
  convertTx: Object,
};

type State = {
  token: Token,
  inputToken: ?Token,
  convertAmount: number,
  shouldConvert: boolean,
  shouldAllow: boolean,
  showTokenSuggest: boolean,
  unsubscribeBalance: ?(void) => void,
};

class DepositForm extends React.PureComponent<Props, State> {
  state = {
    token: this.props.token || this.props.tokens[0],
    inputToken: null,
    shouldConvert: true,
    shouldAllow: true,
    convertAmount: 50,
    showTokenSuggest: false,
    unsubscribeBalance: null,
  };

  componentDidMount() {
    const { token } = this.state;
    this.props.queryBalances();
    this.subscribe(token);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  async subscribe(token: Token) {
    this.unsubscribe();

    const unsubscribeBalance = await this.props.subscribeBalance(token);
    this.setState({ unsubscribeBalance });
  }

  unsubscribe() {
    if (typeof this.state.unsubscribeBalance === 'function') this.state.unsubscribeBalance();
  }

  handleChangeToken = (e: Object) => {
    this.setState({ inputToken: e });
  };

  handleSubmitChangeToken = async (e: SyntheticEvent<>) => {
    const newToken = this.state.inputToken || this.state.token;
    this.setState({ showTokenSuggest: false, token: newToken });
    this.subscribe(newToken);
  };

  handleChangeConvertAmount = (e: number) => {
    this.setState({ convertAmount: e });
  };

  handleConfirm = () => {
    this.unsubscribe();
    const { token, shouldAllow, shouldConvert, convertAmount } = this.state;
    const { confirmTokenDeposit, confirmEtherDeposit } = this.props;

    token.symbol === 'ETH'
      ? confirmEtherDeposit(shouldConvert, shouldAllow, convertAmount)
      : confirmTokenDeposit(token, shouldAllow);
  };

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
    const { token } = this.state;
    const { allowTx, convertTx } = this.props;
    const allowTxStatus = allowTx.allowTxStatus;
    const convertTxStatus = convertTx.convertTxStatus;

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
    const { step, balances, address, tokens, allowTx, convertTx } = this.props;
    const { shouldAllow, shouldConvert, convertAmount, inputToken, showTokenSuggest, token } = this.state;
    const balance = balances[token.symbol] ? balances[token.symbol].balance : null;
    const isEtherDeposit = token.symbol === 'ETH';
    const allowTradingCheckboxDisabled = isEtherDeposit && !shouldConvert;
    const submitButtonDisabled =
      (!isEtherDeposit && allowTradingCheckboxDisabled) || (!shouldConvert || allowTradingCheckboxDisabled);

    return (
      <DepositFormRenderer
        step={step}
        tokens={tokens}
        token={token}
        inputToken={inputToken}
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
        handleChangeToken={this.handleChangeToken}
        handleSubmitChangeToken={this.handleSubmitChangeToken}
        handleConfirm={this.handleConfirm}
        transactionStatus={this.transactionStatus()}
        {...allowTx}
        {...convertTx}
      />
    );
  }
}

export default DepositForm;
