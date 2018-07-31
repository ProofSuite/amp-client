import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../../store/configureStore';
import connect, { mapStateToProps } from './connect';
import { shallow } from 'enzyme';
import ordersTableSelector from '../../store/models/ordersTable';

jest.mock('../../store/models/ordersTable');

describe('mapStateToProps(state, props)', () => {
  it('returns expected props', () => {
    const orders = jest.fn(() => 'test getOrders');
    ordersTableSelector.mockReturnValue({ orders });

    const state = {};
    const result = mapStateToProps({}, {});
    const expected = { orders: 'test getOrders' };

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});

describe('connect(Component)', () => {
  it('injects certain props and renders without crashing', () => {
    const { store } = createStore();
    const ConnectedTestComponent = connect(props => {
      expect(props).toBeDefined();
      expect(props).toHaveProperty('orders');
      return null;
    });

    shallow(
      <Provider store={store}>
        <ConnectedTestComponent />
      </Provider>
    );
  });
});
