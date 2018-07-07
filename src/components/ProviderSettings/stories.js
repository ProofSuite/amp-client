import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import ProviderSettingsContainer from './index';
import ProviderSettings from './ProviderSettings';
import ProviderSettingsRenderer from './ProviderSettingsRenderer';
import README from './README.md';

const networks = [
  { name: 'Mainnet', id: 1 },
  { name: 'Ropsten', id: 3 },
  { name: 'Rinkeby', id: 4 },
  { name: 'Private', id: 1000 },
  { name: 'Private', id: 8888 },
].map((m, index) => ({ ...m, rank: index + 1 }));

storiesOf('ProviderSettings', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Provider Settings',
    withInfo({
      text: README,
      propTablesExclude: [ProviderSettingsContainer],
      source: false,
    })(() => (
      <div className="pt-dark">
        <ProviderSettingsContainer />
      </div>
    ))
  )
  .add(
    'Provider Settings',
    withInfo()(() => (
      <div className="pt-dark">
        <ProviderSettings
          loading={false}
          error=""
          currentProvider={{ type: 'local', url: 'http://127.0.0.1:8545', networkId: 8888 }}
          setProvider={action('setProvider')}
        />
      </div>
    ))
  )
  .add(
    'Renderer (Non expanded)',
    withInfo()(() => (
      <div className="pt-dark">
        <ProviderSettingsRenderer
          options={{ provider: 'metamask', type: '', url: '', networkId: 8888 }}
          currentProvider={{ type: 'local', url: 'http://127.0.0.1:8545', networkId: 8888 }}
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
        <ProviderSettingsRenderer
          loading
          options={{ provider: 'metamask', type: '', url: '', networkId: 1 }}
          currentProvider={{ type: 'local', url: 'http://127.0.0.1:8545', networkId: 8888 }}
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
        <ProviderSettingsRenderer
          options={{ provider: 'custom', type: 'wallet', url: 'https://my.node.com', networkId: 2 }}
          currentProvider={{ type: 'local', url: 'http://127.0.0.1:8545', networkId: 8888 }}
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
    'Renderer (Custom - Expanded - Error)',
    withInfo()(() => (
      <div className="pt-dark">
        <ProviderSettingsRenderer
          options={{ provider: 'custom', type: 'wallet', url: 'https://my.node.com', networkId: 2 }}
          currentProvider={{ type: 'local', url: 'http://127.0.0.1:8545', networkId: 8888 }}
          handleSubmit={action('handleSubmit')}
          handleChange={action('handleChange')}
          handleNetworkChange={action('handleNetworkChange')}
          error="Could not set provider"
          networks={networks}
        />
      </div>
    ))
  );
