import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import OrderHistoryContainer from './index';
import OrderHistory from './OrderHistory';
import README from './README.md';
import * as orderHistory from '../../jsons/orderHistory.json';

storiesOf('OrderHistory', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Order History Container',
    withInfo({
      text: README,
      propTablesExclude: [OrderHistoryContainer],
      source: false,
    })(() => (
      <div className="pt-dark">
        <OrderHistoryContainer />
      </div>
    ))
  )
  .add(
    'Order History',
    withInfo({ text: README, source: false })(() => (
      <div class="pt-dark">
        <OrderHistory orderHistory={orderHistory.list} userOrderHistory={orderHistory.list} />
      </div>
    ))
  );
