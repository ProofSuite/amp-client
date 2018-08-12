import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Card } from '@blueprintjs/core';
import OrderBookContainer from './index';
import OrderBook from './OrderBook';
import README from './README.md';

let bids = [
  { price: 414.3982, amount: 76.85, total: 76.85, relativeTotal: 0.2504481016783444 },
  { price: 414.2421, amount: 80, total: 156.85, relativeTotal: 0.5111618054423985 },
  { price: 411.7926, amount: 64, total: 220.85, relativeTotal: 0.7197327684536418 },
  { price: 409.039, amount: 17, total: 237.85, relativeTotal: 0.7751344305035033 },
  { price: 407.5885, amount: 69, total: 306.85, relativeTotal: 1 },
];

let asks = [
  { price: 402.2414, amount: 79, total: 100, relativeTotal: 0.3258921297050676 },
  { price: 403.3452, amount: 45, total: 145, relativeTotal: 0.47254358807234803 },
  { price: 403.755, amount: 43, total: 188, relativeTotal: 0.612677203845527 },
  { price: 417.5532, amount: 16, total: 204, relativeTotal: 0.6648199445983379 },
  { price: 418.1707, amount: 52, total: 256, relativeTotal: 0.834283852044973 },
];

let currentPair = {
  baseTokenAddress: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
  baseTokenSymbol: 'BNB',
  pair: 'BNB_WETH',
  quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
  quoteTokenSymbol: 'WETH',
};

storiesOf('OrderBook', module)
  .addDecorator(withKnobs)
  .add(
    'Sell Order Book',
    withInfo({ text: README, source: false })(() => (
      <div className="pt-dark">
        <OrderBook
          loading={false}
          asks={asks}
          currentPair={currentPair}
          bids={bids}
          baseToken="ETH"
          quoteToken="USDT"
        />
      </div>
    ))
  );
