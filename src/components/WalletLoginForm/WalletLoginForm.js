// @flow
import React from 'react';
import { isJson } from '../../utils/helpers';
import { getLocalStorageWallets } from '../../store/services/storage'

import {
  createWalletFromJSON,
  createWalletFromMnemonic,
  createWalletFromPrivateKey,
  getEncryptedWalletAddress,
} from '../../store/services/wallet';

import WalletLoginFormRenderer from './WalletLoginFormRenderer';
import type { CreateWalletParams } from '../../types/walletLoginForm';

type Status = 'incomplete' | 'valid' | 'invalid';
type Props = {
  loginWithWallet: CreateWalletParams => void,
  showLoginMethods: CreateWalletParams => void,
};

type State = {
  loading: boolean,
  method: string,
  address: ?string,
  savedWallet: string,
  savedWalletAddress: string,
  savedWalletPasswordStatus: string,
  savedWalletPassword: string,
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
  storeWallet: boolean,
  storePrivateKey: boolean,
};

class WalletLoginForm extends React.PureComponent<Props, State> {
  state = {
    loading: false,
    method: 'privateKey',
    address: '',
    walletAddress: '',
    savedWallet: '',
    savedWalletAddress: '',
    savedWalletPassword: '',
    savedWalletPasswordStatus: 'incomplete',
    json: '',
    jsonStatus: 'incomplete',
    walletFile: '',
    walletFileStatus: 'incomplete',
    privateKey: '',
    privateKeyStatus: 'incomplete',
    mnemonic: '',
    mnemonicStatus: 'incomplete',
    password: '',
    passwordStatus: 'incomplete',
    passwordHelpingText: '',
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
      case 'savedWallet':
        value.length === 0
          ? this.setState({ savedWalletPasswordStatus: 'incomplete'})
          : this.setState({ savedWalletPasswordStatus: 'valid' })
          break;
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

    console.log(target.name, value)

    if (target.name === 'savedWallet') {
      this.setState({
        savedWalletAddress: getEncryptedWalletAddress(value)
      })
    }

    if (target.name === 'method') {
      this.setState({
        address: '',
        savedWalletPasswordStatus: 'incomplete',
        savedWalletPassword: '',
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
    const {
      savedWalletPasswordStatus,
      method,
      passwordStatus,
      privateKeyStatus,
      jsonStatus,
      mnemonicStatus,
      walletFileStatus
    } = this.state;

    switch (method) {
      case 'savedWallet':
        if (savedWalletPasswordStatus === 'invalid') this.setState({ savedWalletPassword: 'invalid' })
        return true

      case 'privateKey':
        if (privateKeyStatus !== 'valid') this.setState({ privateKeyStatus: 'invalid' })
        return true

      case 'json':
        if (jsonStatus !== 'valid') this.setState({ jsonStatus: 'invalid' });
        if (passwordStatus !== 'valid') this.setState({ passwordStatus: 'invalid', passwordHelpingText: 'No Password!' });
        if (jsonStatus === 'valid' && passwordStatus === 'valid') return true;
        break;

      case 'walletFile':
        if (walletFileStatus !== 'valid') this.setState({ jsonStatus: 'invalid' });
        if (passwordStatus !== 'valid') this.setState({ passwordStatus: 'invalid', passwordHelpingText: 'No Password!' })
        if (walletFileStatus === 'valid' && passwordStatus === 'valid') return true;
        break;

      case 'mnemonic':
        if (mnemonicStatus !== 'valid') this.setState({ mnemonicStatus: 'invalid' });
        if (mnemonicStatus === 'valid') return true;
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
    const {
      method,
      json,
      walletFile,
      privateKey,
      password,
      mnemonic,
      storeWallet,
      storePrivateKey,
      savedWallet,
      savedWalletPassword,
    } = this.state;

    const {
      loginWithWallet
    } = this.props;

    if (!this.validateForm()) return

    this.setState({ loading: true });

    switch (method) {
      case 'savedWallet':
      var { wallet, encryptedWallet } = await createWalletFromJSON(savedWallet, savedWalletPassword)
      if (!wallet) {
        this.setState({ loading: false, savedWalletPasswordStatus: 'invalid' })
        return
      }
      break;

      case 'privateKey':
        // eslint-disable-next-line
        var { wallet } = await createWalletFromPrivateKey(privateKey);
        if (!wallet) {
          this.setState({ loading: false, privateKeyStatus: 'invalid' });
          return
        }

        break;
      case 'json':
        // eslint-disable-next-line
        var { wallet, encryptedWallet } = await createWalletFromJSON(json, password);
        if (!wallet) {
          this.setState({ loading: false, passwordStatus: 'invalid', passwordHelpingText: 'Invalid Password!' });
          return
        }

        break;
      case 'walletFile':
        // eslint-disable-next-line
        var { wallet, encryptedWallet } = await createWalletFromJSON(walletFile, password);
        if (!wallet) {
          this.setState({ loading: false, passwordStatus: 'invalid', passwordHelpingText: 'Invalid Password!' });
          return
        }

        break;
      case 'mnemonic':
        // eslint-disable-next-line
        var { wallet } = await createWalletFromMnemonic(mnemonic);
        if (!wallet) {
          this.setState({ loading: false, mnemonicStatus: 'invalid' });
          return
        }

        break;
      default:
        return;
    }

    if (wallet) {
      this.setState({ loading: false });
      loginWithWallet({ wallet, encryptedWallet, storeWallet, storePrivateKey });
    }
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
        localStorageWallets,
        storePrivateKey,
        storeWallet,
        savedWallet,
        savedWalletAddress,
        savedWalletPassword,
        savedWalletPasswordStatus,
      },
      props: { showLoginMethods },
      onDrop,
      handleChange,
      submit,
      onEnterKeyPress,
    } = this;

    const saveEncryptedWalletDisabled = method === 'privateKey' || method === 'mnemonic';
    const savedWalletsDisabled = (!localStorageWallets || localStorageWallets.length === 0);

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
        localStorageWallets={localStorageWallets}
        storeWallet={storeWallet}
        storePrivateKey={storePrivateKey}
        onDrop={onDrop}
        handleChange={handleChange}
        showLoginMethods={showLoginMethods}
        submit={submit}
        onEnterKeyPress={onEnterKeyPress}
        saveEncryptedWalletDisabled={saveEncryptedWalletDisabled}
        savedWallet={savedWallet}
        savedWalletAddress={savedWalletAddress}
        savedWalletPassword={savedWalletPassword}
        savedWalletPasswordStatus={savedWalletPasswordStatus}
        savedWalletsDisabled={savedWalletsDisabled}
      />
    );
  }
}

export default WalletLoginForm;
