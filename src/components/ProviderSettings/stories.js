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
  { name: '1 (Mainnet)', id: 1 },
  { name: '2 (Ropsten)', id: 2 },
  { name: '3 (Rinkeby)', id: 3 },
  { name: '4 (?)', id: 4 },
  { name: '1000 (Local Default TestRPC)', id: 1000 },
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
        <ProviderSettings setProvider={action('setProvider')} />
      </div>
    ))
  )
  .add(
    'Renderer (Non expanded)',
    withInfo()(() => (
      <div className="pt-dark">
        <ProviderSettingsRenderer
          options={{ provider: 'metamask', type: '', url: '', networkId: 1 }}
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
          handleSubmit={action('handleSubmit')}
          handleChange={action('handleChange')}
          handleNetworkChange={action('handleNetworkChange')}
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
          handleSubmit={action('handleSubmit')}
          handleChange={action('handleChange')}
          handleNetworkChange={action('handleNetworkChange')}
          networks={networks}
        />
      </div>
    ))
  );

// storiesOf('EtherBalance', module)
//   .addDecorator(withKnobs)
//   .add(
//     'Default Export',
//     withInfo({ text: README, propTablesExclude: [EtherBalanceContainer], source: false })(() => (
//       <EtherBalanceContainer
//         address={text('account', '0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE')}
//         loadingMessage="Loading..."
//       />
//     ))
//   )
//   .add(
//     'Inner Component (Loading)',
//     withInfo()(() => (
//       <EtherBalanceComponent
//         address="0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE"
//         balance={null}
//         isSubscribed={true}
//         loadingMessage="Your balance is..."
//         subscribeBalance={action('subscribeBalance')}
//       />
//     ))
//   )
//   .add(
//     'Inner Component (Loaded)',
//     withInfo()(() => (
//       <EtherBalanceComponent
//         address="0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE"
//         balance="1.2345"
//         isSubscribed={true}
//         loadingMessage="Your balance is..."
//         subscribeBalance={action('subscribeBalance')}
//       />
//     ))
//   );
