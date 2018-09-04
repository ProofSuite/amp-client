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

const currentPair = {
  baseTokenSymbol: 'BNB',
  quoteTokenSymbol: 'ETH',
};

storiesOf('Trades', module)
  .addDecorator(withKnobs)
  .add(
    'Data Loaded',
    withInfo({ text: README, source: false })(() => (
      <LoadData getData={getTrades}>
        {data => (
          <div className="bp3-dark">
            <TradesTable trades={data} currentPair={currentPair} />
          </div>
        )}
      </LoadData>
    ))
  );
