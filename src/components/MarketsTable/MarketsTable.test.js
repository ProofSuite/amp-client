import React from 'react';
import { shallow } from 'enzyme';
import MarketsTable from './MarketsTable';


const pairs = [
  {
    pair: 'WETH/USDC',
    baseTokenSymbol: 'WETH',
    quoteTokenSymbol: 'USDC',
    baseTokenDecimals: 18,
    quoteTokenDecimals: 18,
    baseTokenAddress: '0x1',
    quoteTokenAddress: '0x2',
    lastPrice: '7425.2945',
    change: '4.5421',
    high: '8782.7964',
    low: '6499.3696',
    volume: 720404,
    makeFee: '500000',
    takeFee: '500000',
    orderbookSize: '100000',
  },
  {
    pair: 'DAI/USDC',
    baseTokenSymbol: 'WETH',
    quoteTokenSymbol: 'DAI',
    baseTokenDecimals: 18,
    quoteTokenDecimals: 18,
    baseTokenAddress: '0x3',
    quoteTokenAddress: '0x2',
    lastPrice: '6018.7886',
    change: '1.6589',
    high: '3876.8717',
    low: '4613.5315',
    volume: 68946,
    makeFee: '500000',
    takeFee: '500000',
    orderbookSize: '100000',
  },
  {
    pair: 'DAI/WETH',
    baseTokenSymbol: 'WETH',
    quoteTokenSymbol: 'DAI',
    baseTokenDecimals: 18,
    quoteTokenDecimals: 18,
    baseTokenAddress: '0x3',
    quoteTokenAddress: '0x2',
    lastPrice: '6018.7886',
    change: '1.6589',
    high: '3876.8717',
    low: '4613.5315',
    volume: 68946,
    makeFee: '500000',
    takeFee: '500000',
    orderbookSize: '100000',
  },
];

const quoteTokens = ['USDC', 'WETH', 'DAI']


it('renders without crashing', () => {
  const wrapper = shallow(
    <MarketsTable 
      quoteTokens={quoteTokens}
      redirectToTradingPage={jest.fn()}
      pairs={pairs}
    />);
});
