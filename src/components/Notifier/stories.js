import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import ConnectedNotifier from './index.js';
import README from './README.md';
import ClickBox from './ClickBox.js';

storiesOf('Notifier', module)
  .addDecorator(withKnobs)
  .add(
    'Default Export',
    withInfo({ text: README, source: false })(() => (
      <React.Fragment>
        <ClickBox />
        <ConnectedNotifier />
      </React.Fragment>
    ))
  );
