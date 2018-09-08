// @flow
import React from 'react';
import SendEtherFormRenderer from './SendEtherFormRenderer';
import { tokens } from '../../data';

import type { EtherTxParams, TransferTokensTxParams } from '../../types/etherTx';

type State = {
  token: Object,
  amount: number,
  receiver: string,
  customGas: ?number,
  customGasPrice: ?number,
};

type Props = {
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

class SendEtherForm extends React.PureComponent<Props, State> {
  state = {
    token: tokens[0],
    amount: 0,
    receiver: '',
    sender: '',
    customGas: '',
    customGasPrice: '',
  };

  handleChange = (e: SyntheticInputEvent<>) => {
    const { value, name } = e.target;

    this.setState({ [name]: value }, () => {
      let { amount, receiver, token, customGasPrice, customGas } = this.state;
      let { gas, gasPrice, validateEtherTx, validateTransferTokensTx } = this.props;

      gas = customGas || gas;
      gasPrice = customGasPrice || gasPrice;

      if (token.address === '0x0' && amount && receiver) {
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

      if (token.address === '0x0' && amount && receiver) {
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

    console.log(amount, receiver, gas, gasPrice, token);
    if (this.state.token.address === '0x0') {
      sendEtherTx({ amount, receiver, gas, gasPrice });
    } else {
      sendTransferTokensTx({ amount, receiver, gas, gasPrice, tokenAddress: token.address });
    }
  };

  render() {
    let { loading, error, status, statusMessage, gas, gasPrice, hash, receipt } = this.props;
    let { token, amount, receiver, customGas, customGasPrice } = this.state;
    gas = customGas || gas;
    gasPrice = customGasPrice || gasPrice;

    return (
      <SendEtherFormRenderer
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

export default SendEtherForm;
