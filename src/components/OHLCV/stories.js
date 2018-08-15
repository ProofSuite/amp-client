import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { LoadData } from '../Common';
import OHLCVContainer from './index';
import OHLCV from './OHLCV';
import README from './README.md';
import { getData } from '../../store/services/homePage';

storiesOf('OHLCV', module)
  .addDecorator(withKnobs)
  .add(
    'Connected OHLCV',
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
    })(() => (
      <LoadData getData={getData}>
        {data => (
          <div className="bp3-dark">
            <OHLCV ohlcvData={data} />
          </div>
        )}
      </LoadData>
    ))
  );
