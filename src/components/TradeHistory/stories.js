import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import TradeHistoryContainer from './index';
import TradeHistory from './TradeHistory';
import README from './README.md';
import * as tradeHistory from '../../jsons/tradeHistory.json';

storiesOf('TradeHistory', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Provider Settings',
    withInfo({
      text: README,
      propTablesExclude: [TradeHistoryContainer],
      source: false,
    })(() => (
      <div className="pt-dark">
        <TradeHistoryContainer />
      </div>
    ))
  )
  .add(
    'Data Loaded',
    withInfo({ text: README, source: false })(() => (
      <div className="pt-dark">
        <TradeHistory marketTradeHistory={tradeHistory.list} userTradeHistory={tradeHistory.list} />
      </div>
    ))
  );
