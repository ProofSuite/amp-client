import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import HomePage from './index';
import README from './README.md';

storiesOf('A HomePage', module)
  .addDecorator(withKnobs)
  .add('Default', withInfo({ text: README, source: false })(() => <HomePage />));
