import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../../store/configureStore';
import connect, { mapStateToProps } from './connect';
import { shallow } from 'enzyme';
import tradesTableSelector from '../../store/models/tradesTable';

jest.mock('../../store/models/tradesTable');

describe('mapStateToProps(state, props)', () => {
  it('returns expected props', () => {
    const trades = jest.fn(() => 'test getTrades');
    const currentPair = jest.fn(() => 'test getCurrentPair');
    tradesTableSelector.mockReturnValue({ trades, currentPair });

    const state = {};
    const result = mapStateToProps({}, {});
    const expected = { trades: 'test getTrades', currentPair: 'test getCurrentPair' };

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});

describe('connect(Component)', () => {
  it('injects certain props and renders without crashing', () => {
    const { store } = createStore();
    const ConnectedTestComponent = connect(props => {
      expect(props).toBeDefined();
      expect(props).toHaveProperty('trades');
      return null;
    });

    shallow(
      <Provider store={store}>
        <ConnectedTestComponent />
      </Provider>
    );
  });
});
