import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import ConnectedTokenSearcher from './index.js';
import * as README from './README.md';

storiesOf('TokenSearcher', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Component',
    withInfo({ text: README, source: false })(() => (
      <div className="bp3-dark">
        <ConnectedTokenSearcher />
      </div>
    ))
  );
