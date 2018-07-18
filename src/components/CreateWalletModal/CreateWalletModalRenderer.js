// @flow
import React from 'react';
import Download from '@axetroy/react-download';
import {
  ControlGroup,
  FormGroup,
  InputGroup,
  Label,
  ProgressBar,
  Intent,
  Icon,
  Button,
  Dialog,
  Checkbox,
} from '@blueprintjs/core';
import Steps from 'rc-steps';
import styled from 'styled-components';

type Props = {
  address: string,
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
  encryptionPercentage: number,
  showEncryptionProgress: boolean,
  handleChange: (SyntheticInputEvent<>) => void,
  storeWallet: boolean,
  storePrivateKey: boolean,
  serialized: string,
};

const CreateWalletWizardRenderer = (props: Props) => {
  const {
    address,
    visible,
    hideModal,
    currentStep,
    password,
    serialized,
    showEncryptionProgress,
    encryptionPercentage,
    goToDownloadWallet,
    cancel,
    goToComplete,
    goBackToCreateWallet,
    complete,
    goBackToDownloadWallet,
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
      ok: 'Complete',
      cancel: 'Go back',
      onOkClick: complete,
      onCancelClick: goBackToDownloadWallet,
    },
  ];

  const content = {
    '0': (
      <WalletPasswordStep
        password={password}
        handleChange={handleChange}
        showEncryptionProgress={showEncryptionProgress}
        encryptionPercentage={encryptionPercentage}
      />
    ),
    '1': <WalletDownloadStep address={address} serialized={serialized} />,
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
      title="Create Wallet Modal"
      icon="inbox"
      isOpen={visible}
      onClose={hideModal}
      width={800}
      className="pt-dark"
      style={{ width: '600px' }}
    >
      <div className="pt-dialog-body">
        <Steps current={currentStep}>
          <Steps.Step title="Choose password" />
          <Steps.Step title="Download Wallet" />
          <Steps.Step title="Wallet Information" />
        </Steps>
        {content[currentStep]}
      </div>
      <div className="pt-dialog-footer">
        <div className="pt-dialog-footer-actions">
          <Button key="Previous" text={buttons[currentStep].cancel} onClick={buttons[currentStep].onCancelClick} />
          <Button
            key="Next"
            text={buttons[currentStep].ok}
            intent={Intent.PRIMARY}
            onClick={buttons[currentStep].onOkClick}
          />
        </div>
      </div>
    </Dialog>
  );
};

const WalletPasswordStep = props => {
  const { password, handleChange, showEncryptionProgress, encryptionPercentage } = props;

  return (
    <div>
      <PasswordInputBox>
        <Label helperText="Input a secure password that will be used to encrypt your wallet">
          <ControlGroup fill vertical={false}>
            <InputGroup
              icon="password"
              placeholder="Input a secure password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </ControlGroup>
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
  const { serialized, address } = props;
  return (
    <WalletDownloadBox>
      <Icon icon="tick-circle" iconSize={150} intent={Intent.SUCCESS} />
      <WalletDownloadHeader>Wallet successfully encrypted</WalletDownloadHeader>
      <Download file={`${address}.json`} content={serialized}>
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

const PasswordInputBox = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  width: 500px;
  margin: auto;
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
