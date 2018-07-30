import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Card } from '@blueprintjs/core';
import DepthChartContainer from './index';
import DepthChart from './DepthChart';
import * as README from './README.md';
import * as bidAsk from '../../jsons/bidAsk.json';

storiesOf('DepthChart', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Provider Settings',
    withInfo({
      text: README,
      propTablesExclude: [DepthChartContainer],
      source: false,
    })(() => (
      <Card className="pt-dark" style={{ height: '500px' }}>
        <DepthChartContainer />
      </Card>
    ))
  )
  .add(
    'Data Loaded',
    withInfo({ text: README, source: false })(() => (
      <Card className="pt-dark">
        <DepthChart data={bidAsk.list} title="Price (BTC/USDT)" />
      </Card>
    ))
  );
