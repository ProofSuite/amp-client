// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import WalletLoginForm from './WalletLoginForm';

storiesOf('WalletLoginForm', module)
  .addDecorator(withKnobs)
  .add(
    'Default Export',
    withInfo({ source: false })(() => (
      <div className="pt-dark">
        <WalletLoginForm />
      </div>
    ))
  );
