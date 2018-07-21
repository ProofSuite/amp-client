// @flow
import React from 'react';
import styled from 'styled-components';
import { isJson } from '../../utils/helpers';

import WalletLoginFormRenderer from './WalletLoginFormRenderer';

type Props = {};

type Status = 'incomplete' | 'valid' | 'invalid';

type State = {
  method: string,
  address: ?string,
  json: ?string,
  jsonStatus: Status,
  walletFile: ?string,
  walletFileStatus: Status,
  privateKey: ?string,
  privateKeyStatus: Status,
  mnemonic: ?string,
  mnemonicStatus: Status,
  password: ?string,
  storeWallet: boolean,
  storePrivateKey: boolean,
};

class WalletLoginForm extends React.PureComponent<Props, State> {
  state = {
    method: 'walletFile',
    address: null,
    json: null,
    jsonStatus: 'incomplete',
    walletFile: null,
    walletFileStatus: 'incomplete',
    privateKey: null,
    privateKeyStatus: 'incomplete',
    mnemonic: null,
    mnemonicStatus: 'incomplete',
    password: null,
    storeWallet: true,
    storePrivateKey: true,
  };

  onDrop = (acceptedFiles: *) => {
    console.log(acceptedFiles);
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const serialized = reader.result;
        console.log(serialized);
        // const address = JSON.parse(serialized).address
        // this.setState({ walletFile: serialized, walletFileStatus: 'valid', address: address })
        // console.log('success')
      } catch (e) {
        console.log(e);
        this.setState({ walletFile: '', walletFileStatus: 'invalid' });
      }
    };
    reader.readAsText(file);
  };

  validate = (method: string, value: string) => {
    switch (method) {
      case 'privateKey':
        value.length === 64
          ? this.setState({ privateKeyStatus: 'valid' })
          : this.setState({ privateKeyStatus: 'invalid' });
        break;
      case 'json':
        value.length === 0
          ? this.setState({ jsonStatus: 'incomplete' })
          : isJson(value)
            ? this.setState({ jsonStatus: 'valid' })
            : this.setState({ jsonStatus: 'invalid' });
        break;
      case 'walletFile':
        break;
      case 'mnemonic':
        value.length === 0
          ? this.setState({ mnemonicStatus: 'incomplete' })
          : value.split(' ').length === 12
            ? this.setState({ mnemonicStatus: 'valid' })
            : this.setState({ mnemonicStatus: 'invalid' });
        break;
      default:
        return;
    }
  };

  handleChange = ({ target }: SyntheticInputEvent<>) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, this.validate(target.name, value));
  };

  submit = () => {
    this.setState({});
  };

  render() {
    const {
      method,
      json,
      jsonStatus,
      privateKey,
      privateKeyStatus,
      mnemonic,
      mnemonicStatus,
      password,
      storePrivateKey,
      storeWallet,
    } = this.state;

    return (
      <WalletLoginFormRenderer
        method={method}
        privateKey={privateKey}
        privateKeyStatus={privateKeyStatus}
        json={json}
        jsonStatus={jsonStatus}
        walletFile={json}
        walletFileStatus={jsonStatus}
        mnemonic={mnemonic}
        mnemonicStatus={mnemonicStatus}
        password={password}
        handleChange={this.handleChange}
        onDrop={this.onDrop}
        storeWallet={storeWallet}
        storePrivateKey={storePrivateKey}
      />
    );
  }
}

export default WalletLoginForm;
