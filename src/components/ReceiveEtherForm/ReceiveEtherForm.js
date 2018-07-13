//@flow
import React from 'react';
import ReceiveEtherFormRenderer from './ReceiveEtherFormRenderer';

import type { Token } from '../../types/tokens';

type Props = {
  step: Step,
  balances: { [string]: number },
  address: string,
  tokens: Array<Token>,
  subscribeBalance: Token => void,
};

type State = {
  token: Token,
  inputToken: ?Token,
  convertAmount: number,
  shouldConvert: boolean,
  shouldAllow: boolean,
  showTokenSuggest: boolean,
};

type Step = 'waiting' | 'convert';

class ReceiveEtherForm extends React.PureComponent<Props, State> {
  state = {
    token: this.props.tokens[0],
    inputToken: null,
    shouldConvert: true,
    shouldAllow: true,
    convertAmount: 50,
    showTokenSuggest: false,
  };

  componentDidMount() {
    const { token } = this.state;
    this.subscribe(token);
  }

  async subscribe(token) {
    // if (typeof this.unsubscribeBalance == 'function') {
    //   this.unsubscribeBalance()
    // }

    this.unsubscribeBalance = await this.props.subscribeBalance(token);
  }

  unsubscribe() {
    this.unsubscribeBalance();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChangeToken = (e: Object) => {
    this.setState({ inputToken: e });
  };

  handleSubmitChangeToken = (e: SyntheticEvent<>) => {
    console.log(e);
    this.setState({ showTokenSuggest: false });
    this.props.subscribeBalance(e);
  };

  handleChangeConvertAmount = (e: number) => {
    this.setState({ convertAmount: e });
  };

  handleConfirm() {
    console.log('Handle confirm');
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
    console.log(tokens);
    const { shouldAllow, shouldConvert, convertAmount, inputToken, showTokenSuggest, token } = this.state;
    const balance = balances[token.symbol];
    const showConvert = token.address === '0x0';

    return (
      <ReceiveEtherFormRenderer
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

export default ReceiveEtherForm;
