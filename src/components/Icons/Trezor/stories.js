import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import Trezor from './Trezor';

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add('Trezor', withInfo({ source: false })(() => <Trezor size={200} color="black" />));
