import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import OHLCVRenderer from './index';
import README from './README.md';

storiesOf('OHLCV', module)
  .addDecorator(withKnobs)
  .add('Chart', withInfo({ text: README, source: false })(() => <OHLCVRenderer />));
