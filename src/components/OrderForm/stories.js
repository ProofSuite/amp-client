import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import OrderFormContainer from './index';
import OrderForm from './OrderForm';
import * as README from './README.md';

storiesOf('Order Form', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Provider Settings',
    withInfo({
      text: README,
      propTablesExclude: [OrderFormContainer],
      source: false,
    })(() => (
      <div className="bp3-dark">
        <OrderFormContainer />
      </div>
    ))
  )
  .add(
    'Logged In state Sell Eth Form',
    withInfo({ text: README, source: false })(() => (
      <div className="bp3-dark">
        <OrderForm
          askPrice={0.25}
          bidPrice={0.29}
          totalQuoteBalance={1000}
          totalBaseBalance={10}
          formType="Sell"
          quoteToken="ETH"
          baseToken="BTC"
        />
      </div>
    ))
  )
  .add(
    'Logged In state Buy Eth Form',
    withInfo({ text: README, source: false })(() => (
      <div className="bp3-dark">
        <OrderForm
          askPrice={0.25}
          bidPrice={0.29}
          totalQuoteBalance={1000}
          totalBaseBalance={10}
          formType="Buy"
          quoteToken="ETH"
          baseToken="BTC"
        />
      </div>
    ))
  );
