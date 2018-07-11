import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import OrderForm from './OrderForm';
import README from './README.md';

storiesOf('Order Form', module)
    .addDecorator(withKnobs)
    .add(
        'Logged Out state',
        withInfo({ text: README, source: false })(() => (
            <OrderForm
                askPrice={0.25}
                bidPrice={0.29}
                totalQuoteBalance={1000}
                totalBaseBalance={10}
                formName="Sell"
                quoteToken="ETH"
                baseToken="BTC"
                loggedIn={false}
            />
        ))
    )
    .add(
        'Logged In state Buy Eth Form',
        withInfo({ text: README, source: false })(() => (
            <OrderForm
                askPrice={0.25}
                bidPrice={0.29}
                totalQuoteBalance={1000}
                totalBaseBalance={10}
                formName="Sell"
                quoteToken="ETH"
                baseToken="BTC"
                loggedIn={true}
            />
        ))
    )
    .add(
        'Logged In state Sell Eth Form',
        withInfo({ text: README, source: false })(() => (
            <OrderForm
                askPrice={0.25}
                bidPrice={0.29}
                totalQuoteBalance={1000}
                totalBaseBalance={10}
                formName="Sell"
                quoteToken="ETH"
                baseToken="BTC"
                loggedIn={true}
            />
        ))
    );