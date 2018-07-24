import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import createStore from '../../store/configureStore';
import connect, { mapStateToProps, mapDispatchToProps } from './connect';
import getDepositFormModel, * as depositFormActionCreators from '../../store/models/depositForm';
import getAccountBalancesModel from '../../store/models/accountBalances';
import getTokenModel from '../../store/models/tokens';
import getAccountModel from '../../store/models/account';

jest.mock('../../store/models/tokens');
jest.mock('../../store/models/account');
jest.mock('../../store/models/accountBalances');
jest.mock('../../store/models/depositForm');

describe('mapStateToProps(state, props)', () => {
  let getStep, balances, address, rankedTokens, getTokens, getAllowTxState, getConvertTxState;

  beforeEach(() => {
    getStep = jest.fn(() => 'test step');
    getConvertTxState = jest.fn(() => 'test convertTxState');
    getAllowTxState = jest.fn(() => 'test allowTxState');

    rankedTokens = jest.fn(() => 'test rankedTokens');
    balances = jest.fn(() => 'test balances');
    address = jest.fn(() => 'test address');

    getDepositFormModel.mockReturnValue({
      getStep,
      getConvertTxState,
      getAllowTxState,
    });

    getTokenModel.mockReturnValue({
      rankedTokens,
    });

    getAccountBalancesModel.mockReturnValue({
      balances,
    });

    getAccountModel.mockReturnValue({
      address,
    });
  });

  it('returns expected object', () => {
    const state = {};
    const props = {};
    const result = mapStateToProps(state, props);
    const expected = {
      balances: 'test balances',
      address: 'test address',
      tokens: 'test rankedTokens',
      step: 'test step',
      convertTx: 'test convertTxState',
      allowTx: 'test allowTxState',
    };

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });

  it('calls correct models and correct functions', () => {
    const state = {};
    const props = {};

    mapStateToProps(state, props);

    expect(getTokenModel).toBeCalledWith(state);
    expect(getDepositFormModel).toBeCalledWith(state);
    expect(getAccountBalancesModel).toBeCalledWith(state);
    expect(getAccountModel).toBeCalledWith(state);

    expect(balances).toBeCalled();
    expect(address).toBeCalled();
    expect(rankedTokens).toBeCalled();
    expect(getStep).toBeCalled();
    expect(getConvertTxState).toBeCalled();
    expect(getAllowTxState).toBeCalled();
  });
});

describe('connect(Component)', () => {
  it('injects certain props and renders without crashing', () => {
    const { store } = createStore();
    const ConnectedTestComponent = connect(props => {
      expect(props).toBeDefined();
      expect(props).toHaveProperty('step');
      expect(props).toHaveProperty('balances');
      expect(props).toHaveProperty('address');
      expect(props).toHaveProperty('tokens');
      expect(props).toHaveProperty('queryBalances');
      expect(props).toHaveProperty('subscribeBalance');
      expect(props).toHaveProperty('confirmTokenDeposit');
      expect(props).toHaveProperty('confirmEtherDeposit');
      expect(props).toHaveProperty('allowTx');
      expect(props).toHaveProperty('convertTx');

      return null;
    });

    mount(
      <Provider store={store}>
        <ConnectedTestComponent />
      </Provider>
    );
  });
});
