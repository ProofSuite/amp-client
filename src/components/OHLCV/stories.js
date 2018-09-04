import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { LoadData } from '../Common';
import OHLCVContainer from './index';
import OHLCV from './OHLCV';
import README from './README.md';
import { getData } from '../../store/services/homePage';

const initialState = {
  noOfCandles: 150,
  currentTimeSpan: { name: '1 min', label: '1m' },
  currentDuration: { name: '1 Hour', label: '1h' },
};

storiesOf('OHLCV', module)
  .addDecorator(withKnobs)
  .add(
    'Connected OHLCV',
    withInfo({
      text: README,
      propTablesExclude: [OHLCVContainer],
      source: false,
    })(() => (
      <div className="bp3-dark">
        <OHLCVContainer />
      </div>
    ))
  )
  .add(
    'Chart',
    withInfo({
      text: README,
      source: false,
    })(() => (
      <LoadData getData={getData}>
        {data => {
          console.log('data: ', data);
          return (
            <div className="bp3-dark">
              <OHLCV
                ohlcvData={data}
                noOfCandles={initialState.noOfCandles}
                currentDuration={initialState.currentDuration}
                currentTimeSpan={initialState.currentTimeSpan}
              />
            </div>
          );
        }}
      </LoadData>
    ))
  );
