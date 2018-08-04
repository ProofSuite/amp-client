import React from 'react';
import { mount } from 'enzyme';
import OrderBook from './OrderBook';

describe('Component methods', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = mount(<OrderBook asks={[]} bids={[]} />);
    instance = wrapper.instance();
  });

  it('changeTab modifies selectedTabId state', () => {
    instance.changeTab('depth-chart');
    expect(wrapper.state('selectedTabId')).toBe('depth-chart');
  });

  it('toggleCollapse modifies isOpen state', () => {
    instance.toggleCollapse();
    expect(wrapper.state('isOpen')).toBe(false);
  });
});
