//@flow
import React from 'react';
import DepositFormRenderer from './DepositFormRenderer';

import type { Token } from '../../types/tokens';
import type { AccountBalance } from '../../types/accountBalances';

type Props = {
  step: Step,
  balances: { [string]: AccountBalance },
  address: string,
  tokens: Array<Token>,
  queryBalances: void => void,
  subscribeBalance: Token => void,
  confirmTokenDeposit: (boolean, Token) => void,
  confirmEtherDeposit: (boolean, boolean, number) => void,
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

type Step = 'waiting' | 'convert';

class DepositForm extends React.PureComponent<Props, State> {
  state = {
    token: this.props.tokens[0],
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

  handleConfirm() {
    const { token, shouldAllow, shouldConvert, convertAmount } = this.state;
    const { confirmTokenDeposit, confirmEtherDeposit } = this.props;

    token.symbol === 'ETH'
      ? confirmEtherDeposit(shouldConvert, shouldAllow, convertAmount)
      : confirmTokenDeposit(shouldAllow, token);
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

  render() {
    const { step, balances, address, tokens } = this.props;
    const { shouldAllow, shouldConvert, convertAmount, inputToken, showTokenSuggest, token } = this.state;
    const showConvert = token.address === '0x0';
    const balance = balances[token.symbol] ? balances[token.symbol].balance : null;
    return (
      <DepositFormRenderer
        step={step}
        tokens={tokens}
        token={token}
        inputToken={inputToken}
        balance={balance}
        address={address}
        showConvert={showConvert}
        shouldConvert={shouldConvert}
        shouldAllow={shouldAllow}
        convertAmount={convertAmount}
        handleChangeConvertAmount={this.handleChangeConvertAmount}
        toggleShouldAllowTrading={this.toggleShouldAllowTrading}
        toggleShouldConvert={this.toggleShouldConvert}
        toggleTokenSuggest={this.toggleTokenSuggest}
        showTokenSuggest={showTokenSuggest}
        handleChangeToken={this.handleChangeToken}
        handleSubmitChangeToken={this.handleSubmitChangeToken}
        handleConfirm={this.handleConfirm}
      />
    );
  }
}

export default DepositForm;
