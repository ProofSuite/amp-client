import React from 'react';
import { shallow } from 'enzyme';
import OrderForm from './OrderForm';

it('renders without crashing', () => {
    shallow(
        <OrderForm askPrice={0.25} bidPrice={0.29} totalQuoteBalance={1000} totalBaseBalance={10} formName="Sell" quoteToken="ETH" baseToken="BTC" loggedIn={false} />
    );
});
