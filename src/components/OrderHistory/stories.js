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
    'Connected Provider Settings',
    withInfo({
      text: README,
      propTablesExclude: [OrderHistoryContainer],
      source: false,
    })(() => <OrderHistoryContainer />)
  )
  .add(
    'Data Loaded',
    withInfo({ text: README, source: false })(() => (
      <OrderHistory orderHistory={orderHistory.list} userOrderHistory={orderHistory.list} />
    ))
  );
