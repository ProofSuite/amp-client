//@flow
import React from 'react';
import { createAndEncryptWallet } from '../../store/services/wallet';
import CreateWalletModalRenderer from './CreateWalletModalRenderer';

import type { CreateWalletParams } from '../../types/wallets';

type Props = {
  visible: boolean,
  hideModal: void => void,
  createWallet: CreateWalletParams => void,
};

type State = {
  currentStep: number,
  password: string,
  showEncryptionProgress: boolean,
  encryptionPercentage: number,
  address: string,
  encryptedWallet: string,
  storeWallet: boolean,
  storePrivateKey: boolean,
};

class CreateWalletModal extends React.PureComponent<Props, State> {
  state = {
    currentStep: 0,
    password: '',
    address: '',
    encryptedWallet: '',
    storeWallet: false,
    storePrivateKey: false,
    encryptionPercentage: 0,
    showEncryptionProgress: false,
  };

  cancel = () => {
    this.props.hideModal();
    setTimeout(() => {
      this.setState({
        currentStep: 0,
        password: '',
        encryptionPercentage: 0,
        address: '',
        encryptedWallet: '',
        showEncryptionProgress: false,
      });
    }, 500);
  };

  updateProgressBar = (percent: number) => {
    if (percent === 1) {
      this.setState({ encryptionPercentage: 1 });
      setTimeout(() => {
        this.setState({ currentStep: 1 });
      }, 1500);
    } else if (percent > 0.75) {
      this.setState({ encryptionPercentage: 0.75 });
    } else if (percent > 0.5) {
      this.setState({ encryptionPercentage: 0.5 });
    } else if (percent > 0.25) {
      this.setState({ encryptionPercentage: 0.25 });
    }
  };

  goToDownloadWallet = async () => {
    this.setState({ showEncryptionProgress: true });
    let { encryptedWallet, address } = await createAndEncryptWallet(this.state.password, percent =>
      this.updateProgressBar(percent)
    );
    this.setState({ address, encryptedWallet });
  };

  goBackToCreateWallet = () => {
    this.setState({ currentStep: 0 });
  };

  goBackToDownloadWallet = () => {
    this.setState({ currentStep: 1 });
  };

  goToComplete = () => {
    this.setState({ currentStep: 2 });
  };

  complete = () => {
    const { createWallet, hideModal } = this.props;
    const { address, password, encryptedWallet, storeWallet, storePrivateKey } = this.state;

    createWallet({ address, password, encryptedWallet, storeWallet, storePrivateKey });
    hideModal();
  };

  handleChange = ({ target }: SyntheticInputEvent<>) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  };

  render() {
    const { visible, hideModal } = this.props;
    const {
      currentStep,
      password,
      showEncryptionProgress,
      encryptionPercentage,
      address,
      encryptedWallet,
      storeWallet,
      storePrivateKey,
    } = this.state;

    return (
      <CreateWalletModalRenderer
        visible={visible}
        hideModal={hideModal}
        currentStep={currentStep}
        showEncryptionProgress={showEncryptionProgress}
        encryptionPercentage={encryptionPercentage}
        address={address}
        encryptedWallet={encryptedWallet}
        password={password}
        storeWallet={storeWallet}
        storePrivateKey={storePrivateKey}
        goToDownloadWallet={this.goToDownloadWallet}
        goBackToCreateWallet={this.goBackToCreateWallet}
        goToComplete={this.goToComplete}
        goBackToDownloadWallet={this.goBackToDownloadWallet}
        complete={this.complete}
        cancel={this.cancel}
        handleChange={this.handleChange}
      />
    );
  }
}

export default CreateWalletModal;
