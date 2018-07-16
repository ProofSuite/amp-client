import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import DepthChartRenderer from './index';
import * as README from './README.md';
import * as bidAsk from '../../jsons/bidAsk.json';

storiesOf('DepthChart', module)
  .addDecorator(withKnobs)
  .add(
    'Loading',
    withInfo({ text: README, source: false })(() => (
      <DepthChartRenderer data={bidAsk.list} loading={true} title="Price (BTC/USDT)" />
    ))
  )
  .add(
    'Not Loading',
    withInfo({ text: README, source: false })(() => (
      <DepthChartRenderer data={bidAsk.list} loading={false} title="Price (BTC/USDT)" />
    ))
  )
  .add(
    'Logged In state Buy Eth Form',
    withInfo({ text: README, source: false })(() => (
      <DepthChartRenderer data={bidAsk.list} loading={false} title="Price (BTC/USDT)" />
    ))
  )
  .add(
    'Logged In state Sell Eth Form',
    withInfo({ text: README, source: false })(() => (
      <DepthChartRenderer data={bidAsk.list} loading={false} title="Price (BTC/USDT)" />
    ))
  );
