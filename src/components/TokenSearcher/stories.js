import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import ConnectedTokenSearcher from './index.js';
import * as README from './README.md';

storiesOf('TokenSearcher', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Component',
    withInfo({ text: README, source: false })(() => (
      <div className="pt-dark">
        <ConnectedTokenSearcher />
      </div>
    ))
  );

// .add(
//   'Loading',
//   withInfo({ text: README, source: false })(() => (
//     <TokenSearcher

//     coinsList={{ btc: [{}] }} loading={true} />
//   ))
// )
// .add(
//   'Large TokenSearcher',
//   withInfo({ text: README, source: false })(() => (
//     <TokenSearcher coinsList={coinsList.list} loading={false} />
//   ))
// )
// .add(
//   'Small TokenSearcher',
//   withInfo({ text: README, source: false })(() => (
//     <TokenSearcher coinsList={coinsList.list} loading={false} />
//   ))
// );
