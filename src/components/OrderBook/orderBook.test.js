import React from 'react';
import { shallow } from 'enzyme';
import { OrderBook } from './OrderBook';
import * as orderList from '../../jsons/ordersList.json';

it('renders without crashing', () => {
  shallow(
    <OrderBook
      orderList={orderList.list}
      bookName="Buy"
      loading={false}
      baseToken="ETH"
      quoteToken="BAT"
      decimals={5}
    />
  );
});

it('verifies Book Type', () => {
  const wrapper = shallow(
    <OrderBook
      orderList={orderList.list}
      bookName="Buy"
      loading={false}
      baseToken="ETH"
      quoteToken="BAT"
      decimals={5}
    />
  );
  let heading = wrapper.find('h5');
  expect(heading.text()).toEqual('Buy');

  wrapper.setProps({ bookName: 'Sell' });
  heading = wrapper.find('h5');
  expect(heading.text()).toEqual('Sell');
});

it('checks Loading State', () => {
  const wrapper = shallow(
    <OrderBook
      orderList={orderList.list}
      bookName="Buy"
      loading={false}
      baseToken="ETH"
      quoteToken="BAT"
      decimals={5}
    />
  );
  let heading = wrapper.find('h5');
  expect(heading.text()).toEqual('Buy');

  wrapper.setProps({ bookName: 'Sell' });
  heading = wrapper.find('h5');
  expect(heading.text()).toEqual('Sell');
});
