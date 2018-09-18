// @flow
import React from 'react';
import Download from '@axetroy/react-download';
import {
  Button,
  Spinner,
  Checkbox,
  Dialog,
  FormGroup,
  Icon,
  InputGroup,
  Intent,
  Label,
  ProgressBar,
} from '@blueprintjs/core';
import Steps from 'rc-steps';
import styled from 'styled-components';

type Props = {
  address: string,
  title: string,
  visible: boolean,
  hideModal: void => void,
  currentStep: number,
  goBackToCreateWallet: void => void,
  goToDownloadWallet: (SyntheticEvent<>) => Promise<void>,
  goToComplete: (SyntheticEvent<>) => void,
  goBackToDownloadWallet: (SyntheticEvent<>) => void,
  complete: (SyntheticEvent<>) => void,
  cancel: (SyntheticEvent<>) => void,
  password: string,
  passwordStatus: string,
  encryptionPercentage: number,
  showPassword: boolean,
  togglePasswordView: () => void,
  showEncryptionProgress: boolean,
  handleChange: (SyntheticInputEvent<>) => void,
  storeWallet: boolean,
  storePrivateKey: boolean,
  encryptedWallet: string,
};

const intents = {
  invalid: Intent.DANGER,
  valid: Intent.SUCCESS,
  incomplete: Intent.PRIMARY,
};
const inputStatuses = {
  password: {
    incomplete: '',
    valid: '',
    invalid: 'Password is required.',
  },
};

const CreateWalletWizardRenderer = (props: Props) => {
  const {
    title,
    address,
    visible,
    hideModal,
    currentStep,
    password,
    showPassword,
    encryptedWallet,
    passwordStatus,
    showEncryptionProgress,
    encryptionPercentage,
    goToDownloadWallet,
    cancel,
    goToComplete,
    goBackToCreateWallet,
    complete,
    goBackToDownloadWallet,
    togglePasswordView,
    handleChange,
    storeWallet,
    storePrivateKey,
  } = props;

  const buttons = [
    {
      ok: 'Create Wallet',
      cancel: 'Cancel',
      onOkClick: goToDownloadWallet,
      onCancelClick: cancel,
    },
    {
      ok: 'I have downloaded my wallet',
      cancel: 'Go back',
      onOkClick: goToComplete,
      onCancelClick: goBackToCreateWallet,
    },
    {
      ok: 'Complete & Login',
      cancel: 'Go back',
      onOkClick: complete,
      onCancelClick: goBackToDownloadWallet,
    },
  ];

  const content = {
    '0': (
      <WalletPasswordStep
        password={password}
        showPassword={showPassword}
        passwordStatus={passwordStatus}
        handleChange={handleChange}
        togglePasswordView={togglePasswordView}
        showEncryptionProgress={showEncryptionProgress}
        encryptionPercentage={encryptionPercentage}
      />
    ),
    '1': <WalletDownloadStep address={address} encryptedWallet={encryptedWallet} />,
    '2': (
      <WalletInformationStep
        address={address}
        storeWallet={storeWallet}
        storePrivateKey={storePrivateKey}
        handleChange={handleChange}
      />
    ),
  };
  return (
    <Dialog
      title={title}
      icon="inbox"
      isOpen={visible}
      onClose={hideModal}
      width={800}
      className="bp3-dark"
      style={{ width: '600px' }}
    >
      {currentStep === 3 ? (
        <LoadingState />
      ) : (
        <div>
          <div className="bp3-dialog-body">
            <Steps current={currentStep}>
              <Steps.Step title="Choose password" />
              <Steps.Step title="Download Wallet" />
              <Steps.Step title="Wallet Information" />
            </Steps>
            {content[currentStep]}
          </div>
          <div className="bp3-dialog-footer">
            <div className="bp3-dialog-footer-actions">
              <Button key="Previous" text={buttons[currentStep].cancel} onClick={buttons[currentStep].onCancelClick} />
              <Button
                key="Next"
                text={buttons[currentStep].ok}
                intent={Intent.PRIMARY}
                onClick={buttons[currentStep].onOkClick}
              />
            </div>
          </div>
        </div>
      )}
    </Dialog>
  );
};

const WalletPasswordStep = props => {
  const {
    password,
    showPassword,
    handleChange,
    showEncryptionProgress,
    togglePasswordView,
    encryptionPercentage,
    passwordStatus,
  } = props;
  return (
    <div>
      <PasswordInputBox>
        <Label helpertext="Input a secure password that will be used to encrypt your wallet">
          <FormGroup helperText={inputStatuses.password[passwordStatus]} intent={intents[passwordStatus]}>
            <InputGroup
              icon="password"
              placeholder="Input a secure password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              rightElement={
                <Button minimal="true" onClick={togglePasswordView} icon={showPassword ? 'eye-open' : 'eye-off'} />
              }
              onChange={handleChange}
              autoFocus
            />
          </FormGroup>
        </Label>
        <LinkBox>
          <a href="">Learn how to secure your wallet</a>
        </LinkBox>
      </PasswordInputBox>
      <ProgressBarBox>
        {showEncryptionProgress && <ProgressBar animate intent={Intent.PRIMARY} value={encryptionPercentage} stripes />}
      </ProgressBarBox>
    </div>
  );
};

const WalletDownloadStep = props => {
  const { encryptedWallet, address } = props;
  return (
    <WalletDownloadBox>
      <Icon icon="tick-circle" iconSize={150} intent={Intent.SUCCESS} />
      <WalletDownloadHeader>Wallet successfully encrypted</WalletDownloadHeader>
      <Download file={`${address}.json`} content={encryptedWallet}>
        <Button intent={Intent.PRIMARY} minimal>
          Download Wallet
        </Button>
      </Download>
    </WalletDownloadBox>
  );
};

const WalletInformationStep = props => {
  const { address, handleChange, storeWallet, storePrivateKey } = props;
  return (
    <div>
      <WalletInformationBox>
        <h4>Your wallet address is:</h4>
        <em>{address}</em>
      </WalletInformationBox>
      <WalletStorageSettingsBox>
        <FormGroup helperText="Learn more about different options here">
          <Checkbox name="storeWallet" checked={storeWallet} onChange={handleChange}>
            <strong>Save encrypted wallet in local storage</strong>
          </Checkbox>
          <Checkbox name="storePrivateKey" checked={storePrivateKey} onChange={handleChange}>
            <strong>Save private key in session storage </strong>
          </Checkbox>
        </FormGroup>
      </WalletStorageSettingsBox>
    </div>
  );
};

const LoadingState = () => {
  return (
    <LoadingStateWrapper>
      <Spinner intent="primary" />
    </LoadingStateWrapper>
  );
};

const PasswordInputBox = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  width: 500px;
  margin: auto;
`;
const LoadingStateWrapper = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WalletInformationBox = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: auto;
`;

const WalletDownloadHeader = styled.h4`
  padding-top: 20px;
`;

const WalletStorageSettingsBox = styled.div`
  padding-top: 80px;
`;

const WalletDownloadBox = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`;

const ProgressBarBox = styled.div`
  margin-top: 15px;
`;

const LinkBox = styled.div`
  margin-top: 10px;
`;

export default CreateWalletWizardRenderer;
