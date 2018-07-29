import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import Key from './Key';

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add('Key', withInfo({ source: false })(() => <Key size={200} color="black" />));
