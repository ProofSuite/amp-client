import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import createStore from '../../store/configureStore';
import connect, { mapStateToProps } from './connect';
import etherTxModel from '../../store/models/etherTx';

jest.mock('../../store/models/etherTx');

describe('mapStateToProps(state, props)', () => {
  let getState;

  beforeEach(() => {
    jest.clearAllMocks();

    getState = jest.fn(() => ({
      loading: 'test loading',
      status: 'test incomplete',
      statusMessage: 'test statusMessage',
      gas: 'test gas',
      gasPrice: 'test gasPrice',
      hash: 'test hash',
      receipt: 'test receipt',
    }));
    etherTxModel.mockReturnValue({ getState });
  });

  it('returns component SendEtherForm props as expected', () => {
    const state = {};
    const props = null;
    const result = mapStateToProps(state, props);
    const expected = {
      loading: 'test loading',
      status: 'test incomplete',
      statusMessage: 'test statusMessage',
      gas: 'test gas',
      gasPrice: 'test gasPrice',
      hash: 'test hash',
      receipt: 'test receipt',
    };

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });

  it('calls etherTxModel(state) and then ', () => {
    const state = {};
    const props = null;
    mapStateToProps(state, props);

    expect(etherTxModel).toHaveBeenCalledTimes(1);
    expect(etherTxModel).toBeCalledWith(state);
    expect(getState).toHaveBeenCalledTimes(1);
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

// import { connect } from 'react-redux';
// import etherTxModel, { validateEtherTx, sendEtherTx } from '../../store/models/etherTx';
// import { validateTransferTokensTx, sendTransferTokensTx } from '../../store/models/etherTokensTx';

// const mapStateToProps = state => {
//   return etherTxModel(state).getState();
// };

// const mapDispatchToProps = {
//   validateEtherTx,
//   sendEtherTx,
//   validateTransferTokensTx,
//   sendTransferTokensTx,
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// );
