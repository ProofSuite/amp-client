import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import CoinSearcherRenderer from './index';
import * as README from './README.md';
import * as coinsList from '../../jsons/coinsList.json';

storiesOf('CoinSearcher', module)
  .addDecorator(withKnobs)
  .add(
    'Loading',
    withInfo({ text: README, source: false })(() => (
      <CoinSearcherRenderer coinsList={coinsList.list} loading={true} small={false} decimals={5} />
    ))
  )
  .add(
    'Large CoinSearcher',
    withInfo({ text: README, source: false })(() => (
      <CoinSearcherRenderer coinsList={coinsList.list} loading={false} small={false} decimals={5} />
    ))
  )
  .add(
    'Small CoinSearcher',
    withInfo({ text: README, source: false })(() => (
      <CoinSearcherRenderer coinsList={coinsList.list} loading={false} small={true} decimals={5} />
    ))
  );
