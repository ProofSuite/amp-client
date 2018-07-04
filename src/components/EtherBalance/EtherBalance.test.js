import React from 'react';
import { shallow } from 'enzyme';
import EtherBalance from './EtherBalance';

it('renders without crashing', () => {
  shallow(
    <EtherBalance address="test address" balance="test balance" isSubscribed={true} subscribeBalance={jest.fn()} />
  );
});

it('calls subscribeBalance() on mount and unsubscribe it on unmount', () => {
  const unsubscribeBalance = jest.fn();
  const subscribeBalance = jest.fn(() => unsubscribeBalance);
  const wrapper = shallow(
    <EtherBalance
      address="test address"
      balance="test balance"
      isSubscribed={false}
      subscribeBalance={subscribeBalance}
    />
  );

  expect(subscribeBalance).toBeCalled();
  expect(unsubscribeBalance).not.toBeCalled();

  wrapper.unmount();
  expect(unsubscribeBalance).toBeCalled();
});

it('resubscribes on certain conditions', () => {
  const unsubscribeBalance = jest.fn();
  const subscribeBalance = jest.fn(() => unsubscribeBalance);
  const wrapper = shallow(
    <EtherBalance
      address="test address"
      balance="test balance"
      isSubscribed={false}
      subscribeBalance={subscribeBalance}
    />
  );

  expect(subscribeBalance).toHaveBeenCalledTimes(1);
  expect(unsubscribeBalance).toHaveBeenCalledTimes(0);

  wrapper.setProps({ isSubscribed: true });
  expect(subscribeBalance).toHaveBeenCalledTimes(1);
  expect(unsubscribeBalance).toHaveBeenCalledTimes(0);

  wrapper.setProps({ isSubscribed: false });
  expect(subscribeBalance).toHaveBeenCalledTimes(2);
  expect(unsubscribeBalance).toHaveBeenCalledTimes(1);

  wrapper.setProps({ address: 'test address 2' });
  expect(subscribeBalance).toHaveBeenCalledTimes(3);
  expect(unsubscribeBalance).toHaveBeenCalledTimes(2);

  wrapper.setProps({ balance: 'test balance 2' });
  expect(subscribeBalance).toHaveBeenCalledTimes(3);
  expect(unsubscribeBalance).toHaveBeenCalledTimes(2);
});

it('shows "loadingMessage" when balance being null, elsewise the balance', () => {
  const loadingMessage = 'Loading...';
  const balance = 'test balance';
  const wrapper = shallow(
    <EtherBalance
      address="test address"
      balance={null}
      isSubscribed={true}
      loadingMessage={loadingMessage}
      subscribeBalance={jest.fn()}
    />
  );

  expect(wrapper.text()).toEqual(loadingMessage);

  wrapper.setProps({ balance });
  expect(wrapper.text()).toEqual(balance);
});
