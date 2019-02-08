import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import MarketsTableRenderer from './MarketsTableRenderer';
import MarketsTable from './MarketsTable';
import { Card } from '@blueprintjs/core';

const pairs = [
  {
    pair: 'WETH/USDC',
    baseTokenSymbol: 'WETH',
    quoteTokenSymbol: 'USDC',
    baseTokenDecimals: 18,
    quoteTokenDecimals: 18,
    baseTokenAddress: '0x1',
    quoteTokenAddress: '0x2',
    lastPrice: 7425.2945,
    price: 7425.2945,
    change: 4.5421,
    high: 8782.7964,
    low: 6499.3696,
    volume: 720404,
    makeFee: 500000,
    takeFee: 500000,
    orderbookSize: 100000,
  },
  {
    pair: 'DAI/USDC',
    baseTokenSymbol: 'WETH',
    quoteTokenSymbol: 'DAI',
    baseTokenDecimals: 18,
    quoteTokenDecimals: 18,
    baseTokenAddress: '0x3',
    quoteTokenAddress: '0x2',
    lastPrice: 6018.7886,
    price: 6018.7886,
    change: 1.6589,
    high: 3876.8717,
    low: 4613.5315,
    volume: 68946,
    makeFee: 500000,
    takeFee: 500000,
    orderbookSize: 100000,
  },
  {
    pair: 'DAI/WETH',
    baseTokenSymbol: 'WETH',
    quoteTokenSymbol: 'DAI',
    baseTokenDecimals: 18,
    quoteTokenDecimals: 18,
    baseTokenAddress: '0x3',
    quoteTokenAddress: '0x2',
    lastPrice: 6018.7886,
    price: 6018.7886,
    change: 1.6589,
    high: 3876.8717,
    low: 4613.5315,
    volume: 68946,
    makeFee: 500000,
    takeFee: 500000,
    orderbookSize: 100000,
  },
];

storiesOf('Markets Table', module)
  .addDecorator(withKnobs)
  .add(
    'Markets Table (Default)',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <MarketsTable
          pairs={pairs}
          redirectToTradingPage={action('redirectToTradingPage')}
          toggleMarketStatistics={action('toggleMarketStatistics')}
          currentReferenceCurrency={'$'}
          quoteTokens={['USDC', 'WETH', 'DAI']}
        />
      </Card>
    ))
  )
