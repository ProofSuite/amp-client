import React from 'react';
import { shallow } from 'enzyme';
import WalletPage from './WalletPage';

const depositTableData = [
  { symbol: 'EOS', balance: '10.0000', allowed: true },
  { symbol: 'ZRX', balance: '1.00000', allowed: false },
  { symbol: 'EOS', balance: '5.00000', allowed: false },
  { symbol: 'EOS', balance: '8.00000', allowed: true },
];

it('renders without crashing', () => {
  shallow(<WalletPage queryAccountData={jest.fn()} />);
});

it('calls queryAccountData on mount', () => {
  const queryAccountData = jest.fn();
  shallow(
    <WalletPage
      authenticated={true}
      queryAccountData={queryAccountData}
      depositTableData={depositTableData}
      loading={false}
    />
  );

  expect(queryAccountData).toBeCalled();
});
