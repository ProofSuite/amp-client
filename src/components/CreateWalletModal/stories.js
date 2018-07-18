import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import ModalBox from '../ModalBox';
import CreateWalletModal from './index.js';
import CreateWalletModalRenderer from './CreateWalletModalRenderer';

storiesOf('Create Wallet Modal', module)
  .addDecorator(withKnobs)
  .add(
    'Create Wallet Modal',
    withInfo({ source: false })(() => (
      <ModalBox>{({ handleClose, isOpen }) => <CreateWalletModal hideModal={handleClose} visible={isOpen} />}</ModalBox>
    ))
  )
  .add(
    'Create Wallet Modal (Step 1)',
    withInfo({ source: false })(() => (
      <ModalBox>
        {({ handleClose, isOpen }) => (
          <CreateWalletModalRenderer
            address="0x18B607182D78300165a649e97AD42E2bE06a6D8B"
            currentStep={0}
            password={'password'}
            updatePassword={action('updatePassword')}
            showEncryptionProgress={false}
            encryptionPercentage={0}
            goToDownloadWallet={action('goToDownloadWallet')}
            cancel={action('cance')}
            goToComplete={action('goToComplete')}
            goBackToCreateWallet
            createWallet={action('createWallet')}
            hideModal={handleClose}
            visible={true}
          />
        )}
      </ModalBox>
    ))
  )
  .add(
    'Create Wallet Modal (Step 2)',
    withInfo({ source: false })(() => (
      <ModalBox>
        {({ handleClose, isOpen }) => (
          <CreateWalletModalRenderer
            address="0x18B607182D78300165a649e97AD42E2bE06a6D8B"
            currentStep={1}
            password={'password'}
            updatePassword={action('updatePassword')}
            showEncryptionProgress={false}
            encryptionPercentage={0}
            goToDownloadWallet={action('goToDownloadWallet')}
            cancel={action('cance')}
            goToComplete={action('goToComplete')}
            goBackToCreateWallet
            createWallet={action('createWallet')}
            hideModal={handleClose}
            visible={true}
          />
        )}
      </ModalBox>
    ))
  )
  .add(
    'Create Wallet Modal (Step 3)',
    withInfo({ source: false })(() => (
      <ModalBox>
        {({ handleClose, isOpen }) => (
          <CreateWalletModalRenderer
            address="0x18B607182D78300165a649e97AD42E2bE06a6D8B"
            currentStep={2}
            password={'password'}
            updatePassword={action('updatePassword')}
            showEncryptionProgress={false}
            encryptionPercentage={0}
            goToDownloadWallet={action('goToDownloadWallet')}
            cancel={action('cance')}
            goToComplete={action('goToComplete')}
            goBackToCreateWallet
            createWallet={action('createWallet')}
            hideModal={handleClose}
            visible={true}
          />
        )}
      </ModalBox>
    ))
  );
