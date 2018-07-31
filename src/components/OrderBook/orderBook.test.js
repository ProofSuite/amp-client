import React from 'react';
import { shallow } from 'enzyme';
import OrderBook from './index';
import * as orderList from '../../jsons/ordersList.json';

describe('renders', () => {
  it('renders without crashing', () => {
    // shallow(<OrderBook orderList={orderList.list} bookName="Sell" baseToken="ETH" quoteToken="USDT" />);
  });
});
