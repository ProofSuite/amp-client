import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import EtherBalanceContainer from './index';
import EtherBalanceComponent from './EtherBalance';
import README from './README.md';

storiesOf('EtherBalance', module)
  .addDecorator(withKnobs)
  .add(
    'Default Export',
    withInfo({ text: README, propTablesExclude: [EtherBalanceContainer], source: false })(() => (
      <EtherBalanceContainer
        address={text('account', '0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE')}
        loadingMessage="Loading..."
      />
    ))
  )
  .add(
    'Inner Component (Loading)',
    withInfo()(() => (
      <EtherBalanceComponent
        address="0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE"
        balance={null}
        isSubscribed={true}
        loadingMessage="Your balance is..."
        subscribeBalance={action('subscribeBalance')}
      />
    ))
  )
  .add(
    'Inner Component (Loaded)',
    withInfo()(() => (
      <EtherBalanceComponent
        address="0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE"
        balance="1.2345"
        isSubscribed={true}
        loadingMessage="Your balance is..."
        subscribeBalance={action('subscribeBalance')}
      />
    ))
  );
