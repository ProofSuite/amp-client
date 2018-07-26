import React from 'react';
import { shallow } from 'enzyme';

import DepositForm from './DepositForm';
import * as walletService from '../../store/services/wallet';

import { mockAddress, mockTokens, mockAllowTxState, mockConvertTxState } from '../../mockData';

jest.mock('../../store/services/wallet');

let connectWithWallet = jest.fn();

describe('Rendering', () => {
  it('renders without crashing', () => {
    shallow(
      <DepositForm
        step="waiting"
        balances={{ ETH: '1000 ' }}
        address={mockAddress}
        tokens={mockTokens}
        queryBalances={jest.fn()}
        subscribeBalance={jest.fn()}
        confirmTokenDeposit={jest.fn()}
        confirmEtherDeposit={jest.fn()}
        allowTx={mockAllowTxState}
        convertTx={mockConvertTxState}
      />
    );
  });
});

describe('Component methods', () => {
  let wrapper, instance;
  let queryBalances = jest.fn();
  let unsubscribe = jest.fn();
  let subscribeBalance = jest.fn(() => Promise.resolve(unsubscribe));
  let confirmTokenDeposit = jest.fn();
  let confirmEtherDeposit = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <DepositForm
        step="waiting"
        balances={{ ETH: '1000 ' }}
        address={mockAddress}
        tokens={mockTokens}
        queryBalances={queryBalances}
        subscribeBalance={subscribeBalance}
        confirmTokenDeposit={confirmTokenDeposit}
        confirmEtherDeposit={confirmEtherDeposit}
        allowTx={mockAllowTxState}
        convertTx={mockConvertTxState}
      />
    );

    instance = wrapper.instance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls queryBalances and subscribe on mount', () => {
    expect(queryBalances).toHaveBeenCalled();
    expect(subscribeBalance).toHaveBeenCalledTimes(1);
    expect(subscribeBalance).toHaveBeenCalledWith(mockTokens[0]);
  });

  it('unsubscribes on unmount', () => {
    wrapper.unmount();
    expect(unsubscribe).toHaveBeenCalledTimes(1);
  });

  it('unsubscribes before subscribing to new balance', () => {
    instance.subscribe(mockTokens[1]);
    expect(unsubscribe).toHaveBeenCalledTimes(1);
    expect(subscribeBalance).toHaveBeenCalledTimes(2);

    expect(wrapper.state('unsubscribeBalance')).toEqual(unsubscribe);
  });

  it('handlesChangeToken sets state correctly', () => {
    instance.handleChangeToken(mockTokens[2]);
    expect(wrapper.state('inputToken')).toEqual(mockTokens[2]);
  });

  it('handleChangeConvertAmount sets amount correctly', () => {
    instance.handleChangeConvertAmount(50);
    expect(wrapper.state('convertAmount')).toEqual(50);
  });

  it('handleSubmitChangeToken sets token correctly', () => {
    wrapper.setState({ token: mockTokens[2] });
    instance.handleSubmitChangeToken();

    expect(wrapper.state('token')).toEqual(mockTokens[2]);
    expect(subscribeBalance).toHaveBeenCalledWith(mockTokens[2]);
    expect(unsubscribe).toHaveBeenCalledTimes(1);
  });

  it('handleConfirm', () => {
    wrapper.setState({ token: mockTokens[0], shouldAllow: true, shouldConvert: true, convertAmount: 50 });
    instance.handleConfirm();
    expect(unsubscribe).toHaveBeenCalledTimes(1);
    expect(confirmEtherDeposit).toHaveBeenCalledWith(true, true, 50);
  });

  it('handleConfirm (token case)', () => {
    wrapper.setState({ token: mockTokens[1], shouldAllow: true, shouldConvert: true, convertAmount: 50 });
    instance.handleConfirm();
    expect(unsubscribe).toHaveBeenCalledTimes(1);
    expect(confirmTokenDeposit).toHaveBeenCalledWith(true, mockTokens[1]);
  });
});
