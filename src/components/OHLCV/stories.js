import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Card } from '@blueprintjs/core';
import OHLCVContainer from './index';
import OHLCV from './index';
import README from './README.md';
import { getData } from '../../store/services/homePage';

storiesOf('OHLCV', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Provider Settings',
    withInfo({
      text: README,
      propTablesExclude: [OHLCVContainer],
      source: false,
    })(() => <OHLCVContainer />)
  )
  .add(
    'Chart',
    withInfo({
      text: README,
      source: false,
    })(() => <OHLCV ohlcvData={data} />)
  );
async function data() {
  let ohlcvData = await getData();
  return ohlcvData;
}
