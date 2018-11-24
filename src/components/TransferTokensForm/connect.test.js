import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import createStore from '../../store/configureStore';
import connect, { mapStateToProps } from './connect';
import getTransferTokensFormSelector from '../../store/models/transferTokensForm';



jest.mock('../../store/models/transferTokensForm');

describe('mapStateToProps(state, props)', () => {
  let getState;

  beforeEach(() => {
    jest.clearAllMocks();

    getState = jest.fn(() => ({
      loading: 'test loading',
      status: 'test status',
      statusMessage: 'test statusMessage',
      gas: 'test gas',
      gasPrice: 'test gasPrice',
      hash: 'test hash',
      receipt: 'test receipt',
      tokens: 'test tokens',
    }));

    getTransferTokensFormSelector.mockReturnValue({
      isLoading: jest.fn(() => 'test loading'),
      getStatus: jest.fn(() => 'test status'),
      getStatusMessage: jest.fn(() => 'test statusMessage'),
      getGas: jest.fn(() => 'test gas'),
      getGasPrice: jest.fn(() => 'test gasPrice'),
      getHash: jest.fn(() => 'test hash'),
      getReceipt: jest.fn(() => 'test receipt'),
      tokens: jest.fn(() => 'test tokens'),
    });
  });

  it('returns component TransferTokensForm props as expected', () => {
    const state = {};
    const props = { token: { symbol: 'PRFT', address: '0x1' } };
    const result = mapStateToProps(state, props);
    const expected = {
      token: { symbol: 'PRFT', address: '0x1' },
      loading: 'test loading',
      status: 'test status',
      statusMessage: 'test statusMessage',
      gas: 'test gas',
      gasPrice: 'test gasPrice',
      hash: 'test hash',
      receipt: 'test receipt',
      tokens: 'test tokens',
    };

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });

  it('calls transferTokensFormSelector(state) and then ', () => {
    const state = {};
    const props = { token: { symbol: 'PRFT', address: '0x1' } };
    mapStateToProps(state, props);

    expect(getTransferTokensFormSelector).toHaveBeenCalledTimes(1);
    expect(getTransferTokensFormSelector).toBeCalledWith(state);
  });
});

describe('connect(Component)', () => {
  it('injects certain props and renders without crashing', () => {
    const { store } = createStore();
    const ConnectedTestComponent = connect(props => {
      expect(props).toBeDefined();
      expect(props).toHaveProperty('validateEtherTx');
      expect(props).toHaveProperty('sendEtherTx');
      expect(props).toHaveProperty('validateTransferTokensTx');
      expect(props).toHaveProperty('sendTransferTokensTx');
      return null;
    });

    mount(
      <Provider store={store}>
        <ConnectedTestComponent />
      </Provider>
    );
  });
});
