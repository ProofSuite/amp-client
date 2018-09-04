// @flow
import React from 'react';
import { isJson, getSessionStorageWallets, getLocalStorageWallets } from '../../utils/helpers';

import {
  createWalletFromJSON,
  createWalletFromMnemonic,
  createWalletFromPrivateKey,
} from '../../store/services/wallet';

import WalletLoginFormRenderer from './WalletLoginFormRenderer';
import type { CreateWalletParams } from '../../types/walletLoginForm';
// import keythereum from 'keythereum';
import FileSaver from 'file-saver';

type Status = 'incomplete' | 'valid' | 'invalid';
type Props = {
  loginWithWallet: CreateWalletParams => void,
  showLoginMethods: CreateWalletParams => void,
};

type State = {
  loading: boolean,
  method: string,
  address: ?string,
  json: ?string,
  jsonStatus: Status,
  walletAddress: string,
  walletFile: ?string,
  walletAddress: ?string,
  walletFileStatus: Status,
  privateKey: ?string,
  privateKeyStatus: Status,
  mnemonic: ?string,
  mnemonicStatus: Status,
  password: ?string,
  passwordStatus: Status,
  passwordHelpingText: string,
  localStorageWallets: Array<Object>,
  sessionStorageWallets: Array<Object>,
  storeWallet: boolean,
  storePrivateKey: boolean,
};

class WalletLoginForm extends React.PureComponent<Props, State> {
  state = {
    loading: false,
    method: 'createWallet',
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
    passwordHelpingText: '',
    sessionStorageWallets: getSessionStorageWallets(),
    localStorageWallets: getLocalStorageWallets(),
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

  handleChange = ({ target }: Object) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, this.validate(target.name, value));
    if (target.name === 'method') {
      this.setState({
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
        passwordHelpingText: '',
        storeWallet: true,
        storePrivateKey: true,
      });
    }
  };

  validateForm = () => {
    const { method, passwordStatus, privateKeyStatus, jsonStatus, mnemonicStatus, walletFileStatus } = this.state;
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
          this.setState({ passwordStatus: 'invalid', passwordHelpingText: 'No Password!' });
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
          this.setState({ passwordStatus: 'invalid', passwordHelpingText: 'No Password!' });
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

  onEnterKeyPress = (evt: Object) => {
    if (evt.which === 13) {
      evt.preventDefault();
      this.submit();
    }
  };

  submit = async () => {
    const { method, json, walletFile, privateKey, password, mnemonic, storeWallet, storePrivateKey } = this.state;
    const { loginWithWallet } = this.props;
    if (!this.validateForm()) {
      return;
    }

    this.setState({ loading: true });
    let invalidPassword = false;
    let text = '';
    let invalidKey = false;
    let invalidJSON = false;
    let invalidMnemonic = false;

    switch (method) {
      case 'privateKey':
        // eslint-disable-next-line
        var { wallet } = await createWalletFromPrivateKey(privateKey);
        if (!wallet) {
          invalidKey = true;
        }
        break;
      case 'json':
        // eslint-disable-next-line
        var { wallet, encryptedWallet } = await createWalletFromJSON(json, password);
        if (!wallet) {
          invalidPassword = true;
          invalidJSON = true;
        }
        break;
      case 'walletFile':
        // eslint-disable-next-line
        var { wallet, encryptedWallet } = await createWalletFromJSON(walletFile, password);
        if (!wallet) {
          invalidPassword = true;
        }
        break;
      case 'mnemonic':
        // eslint-disable-next-line
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
      this.setState({ loading: false, passwordStatus: 'invalid', passwordHelpingText: 'Invalid Password!' });
    } else if (invalidMnemonic) {
      this.setState({ loading: false, mnemonicStatus: 'invalid' });
    } else if (invalidKey) {
      this.setState({ loading: false, privateKeyStatus: 'invalid' });
    }
  };

  createWallet = () => {
    // var params = { keyBytes: 32, ivBytes: 16 };
    // var dk = keythereum.create(params);
    // var options = {
    //   kdf: "pbkdf2",
    //   cipher: "aes-128-ctr",
    //   kdfparams: {
    //     c: 262144,
    //     dklen: 32,
    //     prf: "hmac-sha256"
    //   }
    // };
    //
    // var keyObject = keythereum.dump(this.state.password, dk.privateKey, dk.salt, dk.iv, options);
    // var blob = new Blob([keythereum.exportToFile(keyObject)], {type: "json/plain;charset=utf-8"});
    // FileSaver.saveAs(blob,  "AMP-" + new Date(Date()).toISOString() + "-" + keyObject.address + ".json");
  };

  render() {
    const {
      state: {
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
        passwordHelpingText,
        sessionStorageWallets,
        localStorageWallets,
        storePrivateKey,
        storeWallet,
      },
      props: { showLoginMethods },
      onDrop,
      handleChange,
      submit,
      createWallet,
      onEnterKeyPress,
      createNewWallet,
    } = this;
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
        passwordHelpingText={passwordHelpingText}
        sessionStorageWallets={sessionStorageWallets}
        localStorageWallets={localStorageWallets}
        storeWallet={storeWallet}
        storePrivateKey={storePrivateKey}
        onDrop={onDrop}
        handleChange={handleChange}
        showLoginMethods={showLoginMethods}
        submit={submit}
        onEnterKeyPress={onEnterKeyPress}
        createWallet={createWallet}
        saveEncryptedWalletDisabled={saveEncryptedWalletDisabled}
      />
    );
  }
}

export default WalletLoginForm;
