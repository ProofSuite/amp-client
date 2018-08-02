import React from 'react';
import { shallow } from 'enzyme';
import OrderBook from './index';
import * as orderList from '../../jsons/ordersList.json';
import { Provider } from 'react-redux';
import createStore from '../../store/configureStore';

describe('renders', () => {
  it('renders without crashing', () => {
    const { store } = createStore();
    shallow(
      <Provider store={store}>
        <OrderBook orderList={orderList.list} bookName="Sell" baseToken="ETH" quoteToken="USDT" />
      </Provider>
    );
  });
});
