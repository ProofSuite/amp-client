import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { LoadData } from '../Common';
import OHLCVContainer from './index';
import OHLCV from './OHLCV';
import README from './README.md';
import { getMissingData } from '../../utils/ohlcvDataOperations';

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
    })(() => <LoadData>{data => <OHLCV ohlcvData={data} />}</LoadData>)
  );
