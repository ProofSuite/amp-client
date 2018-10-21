import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import OrderFormContainer from './index';
import OrderForm from './OrderForm';
import * as README from './README.md';

storiesOf('Order Form', module)
  .addDecorator(withKnobs)
  .add(
    'Buy Orderform',
    withInfo({ text: README, source: false })(() => (
      <div className="bp3-dark">
        <OrderForm
          side='BUY'
          askPrice={0.25}
          bidPrice={0.29}
          baseTokenBalance={1000}
          quoteTokenBalance={10}
          quoteToken="ETH"
          baseToken="PRFT"
          sendNewOrder={action('sendNewOrder')}
        />
      </div>
    ))
  )
  .add(
    'Sell Orderform',
    withInfo({ text: README, source: false })(() => (
      <div className="bp3-dark">
        <OrderForm
          side='SELL'
          askPrice={0.25}
          bidPrice={0.29}
          baseTokenBalance={1000}
          quoteTokenBalance={10}
          quoteToken="ETH"
          baseToken="PRFT"
          sendNewOrder={action('sendNewOrder')}
        />
      </div>
    ))
  );
