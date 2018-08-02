import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import SignerSettingsFormContainer from './index';
import SignerSettingsForm from './SignerSettingsForm';
import SignerSettingsFormRenderer from './SignerSettingsFormRenderer';
import README from './README.md';

const networks = [
  { name: 'Mainnet', id: 1 },
  { name: 'Ropsten', id: 3 },
  { name: 'Rinkeby', id: 4 },
  { name: 'Private', id: 1000 },
  { name: 'Private', id: 8888 },
].map((m, index) => ({ ...m, rank: index + 1 }));

storiesOf('SignerSettingsForm', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Signer Settings',
    withInfo({
      text: README,
      propTablesExclude: [SignerSettingsFormContainer],
      source: false,
    })(() => (
      <div className="pt-dark">
        <SignerSettingsFormContainer />
      </div>
    ))
  )
  .add(
    'Signer Settings',
    withInfo()(() => (
      <div className="pt-dark">
        <SignerSettingsForm
          loading={false}
          error=""
          currentSigner={{ type: 'rpc', url: 'http://127.0.0.1:8545', networkId: 8888 }}
          updateSigner={action('updateSigner')}
        />
      </div>
    ))
  )
  .add(
    'Renderer (Non expanded)',
    withInfo()(() => (
      <div className="pt-dark">
        <SignerSettingsFormRenderer
          options={{ provider: 'metamask', type: '', url: '', networkId: 8888 }}
          currentSigner={{ type: 'local', url: 'http://127.0.0.1:8545', networkId: 8888 }}
          handleSubmit={action('handleSubmit')}
          handleChange={action('handleChange')}
          handleNetworkChange={action('handleNetworkChange')}
          networks={networks}
        />
      </div>
    ))
  )
  .add(
    'Renderer (Non expanded) - Loading',
    withInfo()(() => (
      <div className="pt-dark">
        <SignerSettingsFormRenderer
          loading
          options={{ provider: 'metamask', type: '', url: '', networkId: 1 }}
          currentSigner={{ type: 'local', url: 'http://127.0.0.1:8545', networkId: 8888 }}
          handleSubmit={action('handleSubmit')}
          handleChange={action('handleChange')}
          handleNetworkChange={action('handleNetworkChange')}
          error=""
          networks={networks}
        />
      </div>
    ))
  )
  .add(
    'Renderer (Custom - Expanded)',
    withInfo()(() => (
      <div className="pt-dark">
        <SignerSettingsFormRenderer
          error=""
          type="wallet"
          url="https://my.node.com"
          custom={true}
          networkId={2}
          customType=""
          currentSigner={{ type: 'wallet', url: 'http://127.0.0.1:8545', networkId: 8888 }}
          handleSubmit={action('handleSubmit')}
          handleChange={action('handleChange')}
          handleNetworkChange={action('handleNetworkChange')}
          networks={networks}
          wallet=""
        />
      </div>
    ))
  )
  .add(
    'Renderer (Custom - Expanded - Error)',
    withInfo()(() => (
      <div className="pt-dark">
        <SignerSettingsFormRenderer
          error="Invalid Json Response"
          type="wallet"
          url="https://my.node.com"
          custom={true}
          networkId={2}
          customType=""
          currentSigner={{ type: 'local', url: 'http://127.0.0.1:8545', networkId: 8888 }}
          handleSubmit={action('handleSubmit')}
          handleChange={action('handleChange')}
          handleNetworkChange={action('handleNetworkChange')}
          networks={networks}
        />
      </div>
    ))
  );
