// @flow
import React from 'react';
import { isJson } from '../../utils/helpers';

import {
  createWalletFromMnemonic,
  createWalletFromJSON,
  createWalletFromPrivateKey,
} from '../../store/services/wallet';

import WalletLoginFormRenderer from './WalletLoginFormRenderer';
import type { CreateWalletParams } from '../../types/walletLoginForm';

type Status = 'incomplete' | 'valid' | 'invalid';
type Props = { connectWithWallet: CreateWalletParams => void };

type State = {
  loading: boolean,
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
    loading: false,
    method: 'walletFile',
    address: '',
    json: '',
    jsonStatus: 'incomplete',
    walletFile: '',
    walletFileStatus: 'incomplete',
    privateKey: '',
    privateKeyStatus: 'incomplete',
    mnemonic: '',
    mnemonicStatus: 'incomplete',
    password: '',
    storeWallet: true,
    storePrivateKey: true,
  };

  onDrop = (acceptedFiles: *, rejectedFiles: *) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const walletFile = (reader.result: any);
        const address = JSON.parse(walletFile).address;
        console.log('here');
        this.setState({ walletFile, walletFileStatus: 'valid' });
      } catch (e) {
        this.setState({ walletFile: '', walletFileStatus: 'invalid' });
      }
    };
    console.log('here');
    reader.readAsText(file);
  };

  validate = (method: string, value: string | boolean) => {
    switch (method) {
      case 'privateKey':
        value.length === 66
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
          : (value: any).split(' ').length === 12
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

  submit = async () => {
    const { method, json, walletFile, privateKey, password, mnemonic, storeWallet, storePrivateKey } = this.state;
    const { connectWithWallet } = this.props;
    var wallet, encryptedWallet;

    this.setState({ loading: true });

    switch (method) {
      case 'privateKey':
        wallet = await createWalletFromPrivateKey(privateKey);
        break;
      case 'json':
        var { wallet, encryptedWallet } = await createWalletFromJSON(json, password);
        break;
      case 'jsonFile':
        var { wallet, encryptedWallet } = await createWalletFromJSON(walletFile, password);
        break;
      case 'mnemonic':
        var { wallet } = await createWalletFromMnemonic(mnemonic);
        break;
      default:
        return;
    }

    this.setState({ loading: false });
    connectWithWallet({ wallet, encryptedWallet, storeWallet, storePrivateKey });
  };

  render() {
    const {
      loading,
      method,
      json,
      jsonStatus,
      privateKey,
      privateKeyStatus,
      walletFile,
      walletFileStatus,
      mnemonic,
      mnemonicStatus,
      password,
      storePrivateKey,
      storeWallet,
    } = this.state;

    const saveEncryptedWalletDisabled = method === 'privateKey' || method === 'mnemonic';

    return (
      <WalletLoginFormRenderer
        loading={loading}
        method={method}
        privateKey={privateKey}
        privateKeyStatus={privateKeyStatus}
        json={json}
        jsonStatus={jsonStatus}
        walletFile={walletFile}
        walletFileStatus={walletFileStatus}
        mnemonic={mnemonic}
        mnemonicStatus={mnemonicStatus}
        password={password}
        storeWallet={storeWallet}
        storePrivateKey={storePrivateKey}
        onDrop={this.onDrop}
        handleChange={this.handleChange}
        submit={this.submit}
        saveEncryptedWalletDisabled={saveEncryptedWalletDisabled}
      />
    );
  }
}

export default WalletLoginForm;
