import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import OrderBookContainer from './index';
import OrderBook from './OrderBook';
import README from './README.md';
import * as orderList from '../../jsons/ordersList.json';

storiesOf('OrderBook', module)
  .addDecorator(withKnobs)
  .add(
    'Connected OrderBook',
    withInfo({
      text: README,
      propTablesExclude: [OrderBookContainer],
      source: false,
    })(() => <OrderBookContainer />)
  )
  .add(
    'Sell Order Book',
    withInfo({ text: README, source: false })(() => (
      <OrderBook orderList={orderList.list} bookName="Sell" baseToken="ETH" quoteToken="USDT" />
    ))
  )
  .add(
    'Buy Order Book',
    withInfo({ text: README, source: false })(() => (
      <OrderBook orderList={orderList.list} bookName="Buy" baseToken="ETH" quoteToken="USDT" />
    ))
  );
