import React from 'react';
import { shallow } from 'enzyme';
import OrderBookRenderer from './OrderBookRenderer';
import { OrderBook } from './OrderBook';
import * as orderList from '../../jsons/ordersList.json';

it('renders without crashing', () => {
  shallow(
    <OrderBookRenderer
      buyOrderList={orderList.list}
      sellOrderList={orderList.list}
      baseToken="ETH"
      quoteToken="USDT"
      loading={false}
      decimals={7}
    />
  );
});
