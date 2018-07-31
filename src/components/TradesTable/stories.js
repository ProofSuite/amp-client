import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import TradesTableContainer from './index';
import TradeTable from './TradeTable';
import README from './README.md';
import * as tradeHistory from '../../jsons/tradeHistory.json';

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
      <div className="pt-dark">
        <TradesTable marketTradeHistory={tradeHistory.list} userTradeHistory={tradeHistory.list} />
      </div>
    ))
  );
