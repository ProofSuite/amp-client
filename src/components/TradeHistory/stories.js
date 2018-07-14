import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import TradeHistoryRenderer from './index';
import README from './README.md';
import * as tradeHistory from '../../jsons/tradeHistory.json';

storiesOf('TradeHistory', module)
  .addDecorator(withKnobs)
  .add(
    'Loading state',
    withInfo({ text: README, source: false })(() => (
      <TradeHistoryRenderer tradeHistory={tradeHistory.list} loggedIn={true} loading={true} decimals={7} />
    ))
  )
  .add(
    'Not LoggedIn',
    withInfo({ text: README, source: false })(() => (
      <TradeHistoryRenderer tradeHistory={tradeHistory.list} loggedIn={false} loading={false} decimals={7} />
    ))
  )
  .add(
    'LoggedIn',
    withInfo({ text: README, source: false })(() => (
      <TradeHistoryRenderer tradeHistory={tradeHistory.list} loading={false} loggedIn={true} decimals={7} />
    ))
  );
