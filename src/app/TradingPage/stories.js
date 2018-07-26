import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import TradingPage from './index';
import README from './README.md';

storiesOf('A TradingPage', module)
  .addDecorator(withKnobs)
  .add('Default', withInfo({ text: README, source: false })(() => <TradingPage />));
