import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import Wallet from './Wallet';

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add('Wallet', withInfo({ source: false })(() => <Wallet size={200} color="black" />));
