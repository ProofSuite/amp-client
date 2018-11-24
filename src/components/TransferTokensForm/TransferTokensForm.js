// @flow
import React from 'react';
import TransferTokensFormRenderer from './TransferTokensFormRenderer';

import type { EtherTxParams, TransferTokensTxParams } from '../../types/transferTokensForm';
import type { Token } from '../../types/tokens';

type State = {
  token: Token,
  amount: number,
  receiver: string,
  customGas: ?number,
  customGasPrice: ?number,
};

type Props = {
  token: Token,
  tokens: Array<Token>,
  loading: boolean,
  error: string,
  status: string,
  statusMessage: string,
  gas: number,
  gasPrice: number,
  hash: string,
  receipt: Object,
  validateEtherTx: EtherTxParams => void,
  validateTransferTokensTx: TransferTokensTxParams => void,
  sendEtherTx: EtherTxParams => void,
  sendTransferTokensTx: TransferTokensTxParams => void,
};

class TransferTokensForm extends React.PureComponent<Props, State> {
  state = {
    token: this.props.token || this.props.tokens[0],
    amount: 0,
    receiver: '',
    sender: '',
    customGas: null,
    customGasPrice: null,
  };

  handleChange = (e: SyntheticInputEvent<>) => {
    const { value, name } = e.target;

    this.setState({ [name]: value }, () => {
      let { amount, receiver, token, customGasPrice, customGas } = this.state;
      let { gas, gasPrice, validateEtherTx, validateTransferTokensTx } = this.props;

      gas = customGas || gas;
      gasPrice = customGasPrice || gasPrice;

      if (token.symbol === 'ETH' && amount && receiver) {
        validateEtherTx({ amount, receiver, gas, gasPrice });
      } else if (amount && receiver && token) {
        validateTransferTokensTx({ amount, receiver, gas, gasPrice, tokenAddress: token.address });
      }
    });
  };

  handleTokenChange = (token: Object) => {
    this.setState({ token: token }, () => {
      let { amount, receiver, token } = this.state;
      let { gas, gasPrice, validateEtherTx, validateTransferTokensTx } = this.props;

      if (token.symbol === 'ETH' && amount && receiver) {
        validateEtherTx({ amount, receiver, gas, gasPrice });
      } else if (token && amount && receiver) {
        validateTransferTokensTx({ amount, receiver, gas, gasPrice, tokenAddress: token.address });
      }
    });
  };

  handleSubmit = () => {
    let { amount, receiver, token, customGas, customGasPrice } = this.state;
    let { gas, gasPrice, sendEtherTx, sendTransferTokensTx } = this.props;
    gas = customGas || gas;
    gasPrice = customGasPrice || gasPrice;


    if (this.state.token.symbol === 'ETH') {
      sendEtherTx({ amount, receiver, gas, gasPrice });
    } else {
      sendTransferTokensTx({ amount, receiver, gas, gasPrice, tokenAddress: token.address });
    }
  };

  render() {
    let { tokens, loading, error, status, statusMessage, gas, gasPrice, hash, receipt } = this.props;
    let { token, amount, receiver, customGas, customGasPrice } = this.state;
    gas = customGas || gas;
    gasPrice = customGasPrice || gasPrice;

    return (
      <TransferTokensFormRenderer
        handleChange={this.handleChange}
        handleTokenChange={this.handleTokenChange}
        handleSubmit={this.handleSubmit}
        loading={loading}
        error={error}
        status={status}
        statusMessage={statusMessage}
        gas={gas}
        gasPrice={gasPrice}
        hash={hash}
        receipt={receipt}
        tokens={tokens}
        token={token}
        amount={amount}
        receiver={receiver}
      />
    );
  }
}

export default TransferTokensForm;
