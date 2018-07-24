import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import createStore from '../../store/configureStore';
import connect, { mapStateToProps, mapDispatchToProps } from './connect';
import getEtherBalance, * as etherBalanceActionCreators from '../../store/models/etherBalance';

jest.mock('../../store/models/etherBalance');

describe('mapStateToProps(state, props)', () => {
  let get;
  let isSubscribed;

  beforeEach(() => {
    get = jest.fn(() => 'test get');
    isSubscribed = jest.fn(() => 'test isSubscribed');

    getEtherBalance.mockReturnValue({ get, isSubscribed });
  });

  it('returns something as expected', () => {
    const state = {};
    const props = { address: 'test address' };
    const result = mapStateToProps(state, props);
    const expected = {
      balance: 'test get',
      isSubscribed: 'test isSubscribed',
    };

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });

  it('calls getEtherBalance(state) and then the returned api with props.address', () => {
    const state = {};
    const props = { address: 'test address' };

    mapStateToProps(state, props);

    expect(getEtherBalance).toBeCalledWith(state);
    expect(get).toBeCalledWith(props.address);
    expect(isSubscribed).toBeCalledWith(props.address);
  });
});

describe('mapDispatchToProps(dispatch, props)', () => {
  beforeEach(() => {
    etherBalanceActionCreators.subscribeBalance.mockReturnValue('test subscribeBalance');
  });

  it('returns something as expected', () => {
    const dispatch = jest.fn();
    const props = { address: 'test address' };
    const actionDispatchers = mapDispatchToProps(dispatch, props);

    expect(actionDispatchers).toBeDefined();
    expect(actionDispatchers).toHaveProperty('subscribeBalance');
  });

  it('creates a wrapped subscribeBalance function with dispatch and props.address', () => {
    const dispatch = jest.fn(() => 'test dispatch');
    const props = { address: 'test address' };
    const actionDispatchers = mapDispatchToProps(dispatch, props);

    const result = actionDispatchers.subscribeBalance();

    expect(result).toEqual('test dispatch');
    expect(etherBalanceActionCreators.subscribeBalance).toBeCalledWith(props.address);
    expect(dispatch).toBeCalledWith('test subscribeBalance');
  });
});

describe('connect(Component)', () => {
  it('injects certain props and renders without crashing', () => {
    const { store } = createStore();
    const ConnectedTestComponent = connect(props => {
      expect(props).toBeDefined();
      expect(props).toHaveProperty('balance');
      expect(props).toHaveProperty('isSubscribed');
      expect(props).toHaveProperty('subscribeBalance');

      return null;
    });

    mount(
      <Provider store={store}>
        <ConnectedTestComponent />
      </Provider>
    );
  });
});
