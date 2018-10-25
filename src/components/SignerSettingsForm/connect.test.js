import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import createStore from '../../store/configureStore';
import connect, { mapDispatchToProps, mapStateToProps } from './connect';
import signerSettingsSelector from '../../store/models/signerSettings';
import * as actionCreators from '../../store/models/signerSettings';

jest.mock('../../store/models/signerSettings');

describe('mapStateToProps(state, props)', () => {
  let isLoading = jest.fn(() => 'test isLoading');
  let getError = jest.fn(() => 'test getError');
  let getCurrentSigner = jest.fn(() => 'test getCurrentSigner');
  signerSettingsSelector.mockReturnValue({ isLoading, getError, getCurrentSigner });
});

it('returns something as expected', () => {
  const state = {};
  const result = mapStateToProps(state, null);
  const expected = { loading: 'test isLoading', error: 'test getError', currentSigner: 'test getCurrentSigner' };

  expect(result).toBeDefined();
  expect(result).toEqual(expected);
});

describe('mapDispatchToProps(dispatch, props)', () => {
  beforeEach(() => {
    actionCreators.updateSigner.mockReturnValue('test updateSigner');
  });

  it('returns something as expected', () => {
    const dispatch = jest.fn();
    const props = { isLoading: false };
    const actionDispatchers = mapDispatchToProps(dispatch, props);

    expect(actionDispatchers).toBeDefined();
    expect(actionDispatchers).toHaveProperty('updateSigner');
  });

  it('creates a wrapped updateSigner function with dispatch', () => {
    const dispatch = jest.fn(() => 'test dispatch');
    const options = { url: 'http://localhost:8545', networkID: 8888 };
    const actionDispatchers = mapDispatchToProps(dispatch, null);

    const result = actionDispatchers.updateSigner(options);

    expect(result).toEqual('test dispatch');
    expect(actionCreators.updateSigner).toBeCalledWith(options);
    expect(dispatch).toBeCalledWith('test updateSigner');
  });
});

describe('connect(Component)', () => {
  it('injects a certain prop and renders without crashing', () => {
    const { store } = createStore();
    const ConnectedTestComponent = connect(props => {
      expect(props).toBeDefined();
      expect(props).toHaveProperty('updateSigner');
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
