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

it('verifies Components Elements: h5 & Tabs', () => {
  const wrapper = shallow(
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
  let heading = wrapper.find('h5');
  expect(heading.text()).toEqual('Sell ETH');

  wrapper.setProps({ formName: 'Buy' });
  heading = wrapper.find('h5');
  expect(heading.text()).toEqual('Buy ETH');

  const tab1 = wrapper.find('Tab#limit');
  expect(tab1.props().title).toEqual('Limit');

  const tab2 = wrapper.find('Tab#stop');
  expect(tab2.props().title).toEqual('Stop Limit');
});

it('verifies changeTab func', () => {
  const wrapper = shallow(
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
  // Default Tab
  expect(wrapper.instance().state.selectedTabId).toEqual('limit');

  // Changing Tab
  wrapper.instance().changeTab('stop');
  expect(wrapper.instance().state.selectedTabId).toEqual('stop');
});

it('verifies changeTab func', () => {
  const wrapper = shallow(
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
  // Default Tab
  expect(wrapper.instance().state.selectedTabId).toEqual('limit');

  // Changing Tab
  wrapper.instance().changeTab('stop');
  expect(wrapper.instance().state.selectedTabId).toEqual('stop');
});

it('verifies changeTab func', () => {
  const wrapper = shallow(
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
  // Default Tab
  expect(wrapper.instance().state.selectedTabId).toEqual('limit');

  // Changing Tab
  wrapper.instance().changeTab('stop');
  expect(wrapper.instance().state.selectedTabId).toEqual('stop');
});
