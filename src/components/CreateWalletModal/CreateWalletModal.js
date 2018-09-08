//@flow
import React from 'react';
import { createAndEncryptWallet } from '../../store/services/wallet';
import CreateWalletModalRenderer from './CreateWalletModalRenderer';

type Props = {
  visible: boolean,
  hideModal: void => void,
  walletCreated: Object => void,
};

type State = {
  currentStep: number,
  password: string,
  passwordStatus: string,
  showEncryptionProgress: boolean,
  encryptionPercentage: number,
  address: string,
  encryptedWallet: string,
  storeWallet: boolean,
  showPassword: boolean,
  storePrivateKey: boolean,
};

class CreateWalletModal extends React.PureComponent<Props, State> {
  state = {
    currentStep: 0,
    password: '',
    address: '',
    passwordStatus: 'incomplete',
    encryptedWallet: '',
    showPassword: false,
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
    if (this.state.password) {
      this.setState({ showEncryptionProgress: true });
      let { encryptedWallet, address } = await createAndEncryptWallet(this.state.password, percent =>
        this.updateProgressBar(percent)
      );
      this.setState({ address, encryptedWallet, passwordStatus: 'valid' });
    } else {
      this.setState({ passwordStatus: 'invalid' });
    }
  };

  goBackToCreateWallet = () => {
    this.setState({ currentStep: 0, showEncryptionProgress: false });
  };

  goBackToDownloadWallet = () => {
    this.setState({ currentStep: 1 });
  };

  goToComplete = () => {
    this.setState({ currentStep: 2 });
  };

  complete = () => {
    const { walletCreated, hideModal } = this.props;
    const { address, password, encryptedWallet, storeWallet, storePrivateKey } = this.state;
    walletCreated({ address, password, encryptedWallet, storeWallet, storePrivateKey });
    hideModal();
  };

  handleChange = ({ target }: SyntheticInputEvent<>) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  };

  togglePasswordView = () => {
    this.setState(function(prevState: State) {
      return { showPassword: !prevState.showPassword };
    });
  };

  render() {
    const { visible, hideModal } = this.props;
    const {
      currentStep,
      password,
      showPassword,
      showEncryptionProgress,
      encryptionPercentage,
      address,
      encryptedWallet,
      passwordStatus,
      storeWallet,
      storePrivateKey,
    } = this.state;
    return (
      <CreateWalletModalRenderer
        visible={visible}
        hideModal={hideModal}
        currentStep={currentStep}
        showEncryptionProgress={showEncryptionProgress}
        showPassword={showPassword}
        encryptionPercentage={encryptionPercentage}
        address={address}
        encryptedWallet={encryptedWallet}
        password={password}
        storeWallet={storeWallet}
        passwordStatus={passwordStatus}
        storePrivateKey={storePrivateKey}
        goToDownloadWallet={this.goToDownloadWallet}
        goBackToCreateWallet={this.goBackToCreateWallet}
        togglePasswordView={this.togglePasswordView}
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
