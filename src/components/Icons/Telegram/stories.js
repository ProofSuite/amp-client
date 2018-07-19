import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import Telegram from './Telegram';

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add('Telegram', withInfo({ source: false })(() => <Telegram size={200} />));
