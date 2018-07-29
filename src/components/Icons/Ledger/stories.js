import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import Ledger from './Ledger';

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add('Ledger', withInfo({ source: false })(() => <Ledger size={200} color="black" />));
