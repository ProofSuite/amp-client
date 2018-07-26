import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import createStore from '../../store/configureStore';
import connect, { mapStateToProps, mapDispatchToProps } from './connect';
import providerModel, * as providerActionCreators from '../../store/models/provider';

jest.mock('../../store/models/provider');

describe('mapStateToProps(state, props)', () => {
  let isLoading = jest.fn(() => 'test isLoading');
  let getError = jest.fn(() => 'test getError');
  let getCurrentProvider = jest.fn(() => 'test getCurrentProvider');
  providerModel.mockReturnValue({ isLoading, getError, getCurrentProvider });
});

it('returns something as expected', () => {
  const state = {};
  const result = mapStateToProps(state, null);
  const expected = { loading: 'test isLoading', error: 'test getError', currentProvider: 'test getCurrentProvider' };

  expect(result).toBeDefined();
  expect(result).toEqual(expected);
});

describe('mapDispatchToProps(dispatch, props)', () => {
  beforeEach(() => {
    providerActionCreators.setProvider.mockReturnValue('test setProvider');
  });

  it('returns something as expected', () => {
    const dispatch = jest.fn();
    const props = { isLoading: false };
    const actionDispatchers = mapDispatchToProps(dispatch, props);

    expect(actionDispatchers).toBeDefined();
    expect(actionDispatchers).toHaveProperty('setProvider');
  });

  it('creates a wrapped setProvider function with dispatch', () => {
    const dispatch = jest.fn(() => 'test dispatch');
    const options = { url: 'http://localhost:8545', networkId: 8888 };
    const actionDispatchers = mapDispatchToProps(dispatch, null);

    const result = actionDispatchers.setProvider(options);

    expect(result).toEqual('test dispatch');
    expect(providerActionCreators.setProvider).toBeCalledWith(options);
    expect(dispatch).toBeCalledWith('test setProvider');
  });
});

describe('connect(Component)', () => {
  it('injects a certain prop and renders without crashing', () => {
    const { store } = createStore();
    const ConnectedTestComponent = connect(props => {
      expect(props).toBeDefined();
      expect(props).toHaveProperty('setProvider');
      expect(props).toHaveProperty('loading');

      return null;
    });

    mount(
      <Provider store={store}>
        <ConnectedTestComponent />
      </Provider>
    );
  });
});
