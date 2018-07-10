// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import TxReceipt from './TxReceipt';
import { receipt } from '../../data';

import '../../styles/reset.css';

storiesOf('TxReceipt', module)
  .addDecorator(withKnobs)
  .add('Default Export', withInfo({ source: false })(() => <TxReceipt receipt={receipt} />));
