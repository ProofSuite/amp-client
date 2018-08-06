import React from 'react';
import { mount } from 'enzyme';
import OrderBook from './OrderBook';

describe('Component methods', () => {
  let wrapper, instance;
  let currentPair = {
    pair: 'DAI_WETH',
    baseTokenSymbol: 'DAI',
    quoteTokenSymbol: 'WETH',
    baseTokenAddress: '0xc838efcb6512a2ca12027ebcdf9e1fc5e4ff7ee3',
    quoteTokenAddress: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47',
  };

  beforeEach(() => {
    wrapper = mount(<OrderBook asks={[]} bids={[]} currentPair={currentPair} />);
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
