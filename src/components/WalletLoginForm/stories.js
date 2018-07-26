// @flow
import React from 'react';
import { connect } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { loginWithWallet } from '../../store/models/loginPage';
import { action } from '@storybook/addon-actions';
import WalletLoginForm from './index';
import WalletLoginFormRenderer from './WalletLoginFormRenderer';

let ConnectedWalletLoginForm = connect(
  null,
  { loginWithWallet }
)(WalletLoginForm);
storiesOf('WalletLoginForm', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Component',
    withInfo({ source: false })(() => (
      <div className="pt-dark">
        <ConnectedWalletLoginForm />
      </div>
    ))
  )
  .add(
    'Loading State',
    withInfo({ source: false })(() => (
      <div className="pt-dark">
        <WalletLoginFormRenderer
          loading={true}
          method={'privateKey'}
          privateKey={''}
          privateKeyStatus={'incomplete'}
          json={''}
          jsonStatus={'incomplete'}
          walletFile={null}
          walletFileStatus={'incomplete'}
          mnemonic={''}
          mnemonicStatus={'incomplete'}
          password={''}
          storeWallet={true}
          storePrivateKey={true}
          onDrop={action('onDrop')}
          handleChange={action('onChange')}
          submit={action('submit')}
          saveEncryptedWalletDisabled={false}
        />
      </div>
    ))
  )
  .add(
    'Default State',
    withInfo({ source: false })(() => (
      <div className="pt-dark">
        <WalletLoginFormRenderer
          loading={false}
          method={'privateKey'}
          privateKey={''}
          privateKeyStatus={'incomplete'}
          json={''}
          jsonStatus={'incomplete'}
          walletFile={null}
          walletFileStatus={'incomplete'}
          mnemonic={''}
          mnemonicStatus={'incomplete'}
          password={''}
          storeWallet={true}
          storePrivateKey={true}
          onDrop={action('onDrop')}
          handleChange={action('onChange')}
          submit={action('submit')}
          saveEncryptedWalletDisabled={false}
        />
      </div>
    ))
  );
