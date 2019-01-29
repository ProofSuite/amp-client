import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Card } from '@blueprintjs/core';
import OrderBook from './OrderBook';
import OrderBookRenderer from './OrderBookRenderer'
import VerticalOrderBookRenderer from './VerticalOrderBookRenderer'
import README from './README.md';

let bids = [
  { price: 414.3982, amount: 76.85, total: 76.85, relativeTotal: 0.2504481016783444 },
  { price: 414.2421, amount: 80, total: 156.85, relativeTotal: 0.5111618054423985 },
  { price: 411.7926, amount: 64, total: 220.85, relativeTotal: 0.7197327684536418 },
  { price: 409.039, amount: 17, total: 237.85, relativeTotal: 0.7751344305035033 },
  { price: 407.5885, amount: 69, total: 306.85, relativeTotal: 1 },
];

let asks = [
  { price: 418.1707, amount: 52, total: 256, relativeTotal: 0.24283852044973 },
  { price: 420.5532, amount: 16, total: 204, relativeTotal: 0.4748199445983379 },
  { price: 421.755, amount: 43, total: 188, relativeTotal: 0.612677203845527 },
  { price: 422.3452, amount: 45, total: 145, relativeTotal: 0.66254358807234803 },
  { price: 423.2414, amount: 79, total: 100, relativeTotal: 0.8358921297050676 },
];


let moreBids = [
  { price: 426.3982, amount: 76.85, total: 76.85, relativeTotal: 0.1 },
  { price: 423.2421, amount: 80, total: 156.85, relativeTotal: 0.1111618054423985 },
  { price: 420.7926, amount: 64, total: 220.85, relativeTotal: 0.2197327684536418 },
  { price: 418.039, amount: 17, total: 237.85, relativeTotal: 0.3451344305035033 },
  { price: 416.3982, amount: 76.85, total: 76.85, relativeTotal: 0.4504481016783444 },
  { price: 414.2421, amount: 80, total: 156.85, relativeTotal: 0.5111618054423985 },
  { price: 411.7926, amount: 64, total: 220.85, relativeTotal: 0.7197327684536418 },
  { price: 409.039, amount: 17, total: 237.85, relativeTotal: 0.7751344305035033 },
  { price: 408.5885, amount: 69, total: 306.85, relativeTotal: 0.9 },
  { price: 407.5885, amount: 69, total: 306.85, relativeTotal: 1 },
];

let moreAsks = [
  { price: 402.2414, amount: 79, total: 100, relativeTotal: 0.2258921297050676 },
  { price: 403.3452, amount: 45, total: 145, relativeTotal: 0.37254358807234803 },
  { price: 404.755, amount: 43, total: 188, relativeTotal: 0.412677203845527 },
  { price: 406.5532, amount: 16, total: 204, relativeTotal: 0.5648199445983379 },
  { price: 408.1707, amount: 52, total: 256, relativeTotal: 0.634283852044973 },
  { price: 410.2414, amount: 79, total: 100, relativeTotal: 0.7258921297050676 },
  { price: 411.3452, amount: 45, total: 145, relativeTotal: 0.77254358807234803 },
  { price: 412.755, amount: 43, total: 188, relativeTotal: 0.812677203845527 },
  { price: 413.5532, amount: 16, total: 204, relativeTotal: 0.8648199445983379 },
  { price: 414.1707, amount: 52, total: 256, relativeTotal: 0.934283852044973 },
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
    'OrderBook',
    withInfo({ text: README, source: false })(() => (
      <Card className="bp3-dark">
        <OrderBook
          loading={false}
          asks={asks}
          currentPair={currentPair}
          bids={bids}
          baseToken="ETH"
          quoteToken="USDT"
          direction="vertical"
        />
      </Card>
    ))
  )
  .add(
    'Orderlist',
    withInfo({ text: README, source: false })(() => (
      <Card className="bp3-dark">
        <OrderBookRenderer
          asks={asks}
          onSelect={action('onSelect')}
          bids={bids}
        />
      </Card>
    ))
  )
  .add(
    'Vertical Orderbook',
    withInfo({ text: README, source: false })(() => (
      <Card className="bp3-dark">
        <VerticalOrderBookRenderer
          asks={asks}
          onSelect={action('onSelect')}
          bids={bids}
        />
      </Card>
    ))
  )
  .add(
    'Vertical Orderbook (Large)',
    withInfo({ text: README, source: false })(() => (
      <Card className="bp3-dark">
        <VerticalOrderBookRenderer
          asks={moreAsks}
          onSelect={action('onSelect')}
          bids={moreBids}
        />
      </Card>
    ))
  );
