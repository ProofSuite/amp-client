import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import TradesTable from './TradesTable';
import README from './README.md';

const currentPair = {
  baseTokenSymbol: 'BNB',
  quoteTokenSymbol: 'ETH',
};

const trades = [
  {
    time: 2384972,
    price: 34.23,
    amount: 23.4,
    hash: '0x1',
    orderHash: '0x2',
    takerOrderHash: '0x3',
    status: 'SUCCESS',
    type: 'MARKET',
    side: 'BUY',
    pair: 'ETH/USDC',
    maker: '0x4',
    taker: '0x5'
  }
]

const userTrades = [
  {
    time: 2384972,
    price: 34.23,
    amount: 23.4,
    hash: '0x1',
    orderHash: '0x2',
    takerOrderHash: '0x3',
    status: 'SUCCESS',
    type: 'MARKET',
    side: 'BUY',
    pair: 'ETH/USDC',
    maker: '0x4',
    taker: '0x5'
  }
]

storiesOf('Trades', module)
  .addDecorator(withKnobs)
  .add(
    'Data Loaded',
    withInfo({ text: README, source: false })(() => (
      <div className="bp3-dark">
        <TradesTable 
          trades={trades}
          userTrades={userTrades}
          currentPair={currentPair}
          onCollapse={action('')}
          onExpand={action('')}
          onResetDefaultLayout={action('')}
        />
      </div>
    ))
  );
