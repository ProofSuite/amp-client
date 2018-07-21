import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import OrderBook from './OrderBook';
import README from './README.md';
import * as orderList from '../../jsons/ordersList.json';

storiesOf('OrderBook', module)
  .addDecorator(withKnobs)
  .add(
    'Loading state',
    withInfo({ text: README, source: false })(() => (
      <OrderBook
        buyOrderList={orderList.list}
        sellOrderList={orderList.list}
        baseToken="ETH"
        quoteToken="USDT"
        loading={true}
        decimals={7}
      />
    ))
  )
  .add(
    'Loaded',
    withInfo({ text: README, source: false })(() => (
      <OrderBook
        buyOrderList={orderList.list}
        sellOrderList={orderList.list}
        baseToken="ETH"
        quoteToken="USDT"
        loading={false}
        decimals={7}
      />
    ))
  );
