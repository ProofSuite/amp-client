import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import Metamask from './Metamask';

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add('Metamask', withInfo({ source: false })(() => <Metamask size={200} />));
