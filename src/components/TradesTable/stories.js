import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import TradesTableContainer from './index';
import TradesTable from './TradesTable';
import README from './README.md';
import { LoadData } from '../Common';
import * as tradeHistory from '../../jsons/tradeHistory.json';
import { getTrades } from '../../store/services/api';

storiesOf('Trades', module)
  .addDecorator(withKnobs)
  .add(
    'Trades',
    withInfo({
      text: README,
      propTablesExclude: [TradesTableContainer],
      source: false,
    })(() => (
      <div className="pt-dark">
        <TradesTableContainer />
      </div>
    ))
  )
  .add(
    'Data Loaded',
    withInfo({ text: README, source: false })(() => (
      <LoadData getData={getTrades}>
        {data => (
          <div className="pt-dark">
            <TradesTable trades={data} />
          </div>
        )}
      </LoadData>
    ))
  );
