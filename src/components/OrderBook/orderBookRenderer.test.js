import React from 'react';
import { shallow } from 'enzyme';
import { OrderBookRenderer } from './OrderBookRenderer';
import * as orderList from '../../jsons/ordersList.json';

it('renders without crashing', () => {
  shallow(<OrderBookRenderer orderList={orderList.list} bookName="Buy" baseToken="ETH" quoteToken="BAT" />);
});

it('verifies Book Type', () => {
  const wrapper = shallow(
    <OrderBookRenderer orderList={orderList.list} bookName="Buy" baseToken="ETH" quoteToken="BAT" />
  );
  let heading = wrapper.find('h5');
  expect(heading.text()).toEqual('Buy');

  wrapper.setProps({ bookName: 'Sell' });
  heading = wrapper.find('h5');
  expect(heading.text()).toEqual('Sell');
});

it('checks Loading State', () => {
  const wrapper = shallow(
    <OrderBookRenderer orderList={orderList.list} bookName="Buy" baseToken="ETH" quoteToken="BAT" />
  );
  let heading = wrapper.find('h5');
  expect(heading.text()).toEqual('Buy');

  wrapper.setProps({ bookName: 'Sell' });
  heading = wrapper.find('h5');
  expect(heading.text()).toEqual('Sell');
});
