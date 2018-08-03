// @flow
import React from 'react';
import { isJson } from '../../utils/helpers';

import {
  createWalletFromJSON,
  createWalletFromMnemonic,
  createWalletFromPrivateKey,
} from '../../store/services/wallet';

import WalletLoginFormRenderer from './WalletLoginFormRenderer';
import type { CreateWalletParams } from '../../types/walletLoginForm';

type Status = 'incomplete' | 'valid' | 'invalid';
type Props = { loginWithWallet: CreateWalletParams => void };

type State = {
  loading: boolean,
  method: string,
  address: ?string,
  json: ?string,
  jsonStatus: Status,
  walletAddress: string,
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
    walletAddress: '',
    walletFileStatus: 'incomplete',
    privateKey: '',
    privateKeyStatus: 'incomplete',
    mnemonic: '',
    mnemonicStatus: 'incomplete',
    password: '',
    passwordStatus: 'incomplete',
    storeWallet: true,
    storePrivateKey: true,
    checkError: false,
  };

  onDrop = (acceptedFiles: *, rejectedFiles: *) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const walletFile = (reader.result: any);
        const address = JSON.parse(walletFile).address;
        this.setState({ walletFile, walletFileStatus: 'valid', walletAddress: address });
      } catch (e) {
        this.setState({ walletFile: '', walletFileStatus: 'invalid' });
      }
    };
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
      case 'password':
        value.length === 0
          ? this.setState({ passwordStatus: 'incomplete' })
          : this.setState({ passwordStatus: 'valid' });
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
    this.setState({ [target.name]: value, checkError: false }, this.validate(target.name, value));
  };

  validateForm = () => {
    const {
      method,
      password,
      passwordStatus,
      privateKeyStatus,
      jsonStatus,
      mnemonicStatus,
      walletFileStatus,
    } = this.state;
    switch (method) {
      case 'privateKey':
        if (privateKeyStatus !== 'valid') {
          this.setState({ privateKeyStatus: 'invalid' });
        } else {
          return true;
        }
        break;

      case 'json':
        if (jsonStatus !== 'valid') {
          this.setState({ jsonStatus: 'invalid' });
        }
        if (passwordStatus !== 'valid') {
          this.setState({ passwordStatus: 'invalid' });
        }
        if (jsonStatus === 'valid' && passwordStatus === 'valid') {
          return true;
        }
        break;

      case 'walletFile':
        if (walletFileStatus !== 'valid') {
          this.setState({ jsonStatus: 'invalid' });
        }
        if (passwordStatus !== 'valid') {
          this.setState({ passwordStatus: 'invalid' });
        }
        if (walletFileStatus === 'valid' && passwordStatus === 'valid') {
          return true;
        }
        break;

      case 'mnemonic':
        if (mnemonicStatus !== 'valid') {
          this.setState({ mnemonicStatus: 'invalid' });
        }
        if (mnemonicStatus === 'valid') {
          return true;
        }
        break;

      default:
        return;
    }
    return false;
  };

  submit = async () => {
    const {
      method,
      json,
      walletFile,
      privateKey,
      password,
      passwordStatus,
      mnemonic,
      storeWallet,
      storePrivateKey,
    } = this.state;
    const { loginWithWallet } = this.props;

    if (!this.validateForm()) {
      this.setState({ checkError: true });
      return;
    }

    console.log(this.validateForm(), passwordStatus);
    this.setState({ loading: true, checkError: true });

    let invalidPassword = false;
    let invalidKey = false;
    let invalidJSON = false;
    let invalidMnemonic = false;

    switch (method) {
      case 'privateKey':
        var { wallet } = await createWalletFromPrivateKey(privateKey);
        if (!wallet) {
          invalidKey = true;
        }
        break;
      case 'json':
        var { wallet, encryptedWallet } = await createWalletFromJSON(json, password);
        if (!wallet) {
          invalidPassword = true;
          invalidJSON = true;
        }
        break;
      case 'walletFile':
        var { wallet, encryptedWallet } = await createWalletFromJSON(walletFile, password);
        if (!wallet) {
          invalidPassword = true;
        }
        break;
      case 'mnemonic':
        var { wallet } = await createWalletFromMnemonic(mnemonic);
        if (!wallet) {
          invalidMnemonic = true;
        }
        break;
      default:
        return;
    }

    if (wallet) {
      this.setState({ loading: false });
      loginWithWallet({ wallet, encryptedWallet, storeWallet, storePrivateKey });
    }
    if (invalidJSON) {
      this.setState({ loading: false, jsonStatus: 'invalid' });
    }
    if (invalidPassword) {
      this.setState({ loading: false, passwordStatus: 'invalid' });
    } else if (invalidMnemonic) {
      this.setState({ loading: false, mnemonicStatus: 'invalid' });
    } else if (invalidKey) {
      this.setState({ loading: false, privateKeyStatus: 'invalid' });
    }
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
      walletAddress,
      walletFileStatus,
      mnemonic,
      mnemonicStatus,
      password,
      passwordStatus,
      storePrivateKey,
      storeWallet,
      checkError,
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
        walletAddress={walletAddress}
        walletFileStatus={walletFileStatus}
        mnemonic={mnemonic}
        mnemonicStatus={mnemonicStatus}
        password={password}
        passwordStatus={passwordStatus}
        storeWallet={storeWallet}
        storePrivateKey={storePrivateKey}
        checkError={checkError}
        onDrop={this.onDrop}
        handleChange={this.handleChange}
        submit={this.submit}
        saveEncryptedWalletDisabled={saveEncryptedWalletDisabled}
      />
    );
  }
}

export default WalletLoginForm;
