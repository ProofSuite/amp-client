import React from 'react';
import { shallow } from 'enzyme';
import OrderForm from './OrderForm';

it('renders without crashing', () => {
  shallow(
    <OrderForm
      askPrice={0.25}
      bidPrice={0.29}
      totalQuoteBalance={1000}
      totalBaseBalance={10}
      formName="Sell"
      quoteToken="ETH"
      baseToken="BTC"
      decimals={7}
      loggedIn={false}
    />
  );
});

describe('tests Functions and state', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(
      <OrderForm
        askPrice={0.25}
        bidPrice={0.29}
        totalQuoteBalance={1000}
        totalBaseBalance={10}
        formName="Sell"
        quoteToken="ETH"
        baseToken="BTC"
        decimals={7}
        loggedIn={true}
      />
    );

    instance = wrapper.instance();
  });

  it('changes Tab Successfully', () => {
    expect(instance.state.selectedTabId).toEqual('limit');
    instance.changeTab('stop');
    expect(instance.state.selectedTabId).toEqual('stop');
  });

  it('verifies Prices', () => {
    expect(instance.props.askPrice).toEqual(0.25);
    expect(instance.props.bidPrice).toEqual(0.29);
  });

  it('validates onAmountChange Func', () => {
    instance.onInputChange({ target: { name: 'amount', value: '10' } });
    expect(instance.state.total).toEqual('2.9');
  });

  it('validates onPriceChange Func', () => {
    instance.onInputChange({ target: { name: 'price', value: '0.39' } });
    instance.onInputChange({ target: { name: 'amount', value: '10' } });
    expect(instance.state.total).toEqual('3.9');
  });

  it('validates onTotalChange Func', () => {
    instance.onInputChange({ target: { name: 'price', value: '0.25' } });
    instance.onInputChange({ target: { name: 'total', value: '10' } });
    expect(instance.state.amount).toEqual('40');
  });

  it('validates onPortionChange Func', () => {
    instance.onInputChange({ target: { name: 'portion', value: 50 } });
    expect(instance.state.amount).toEqual('500');
  });

  it('verifies resetRadios Func', () => {
    instance.resetRadios();
    expect(instance.state.portion).toEqual(0);
  });
});
