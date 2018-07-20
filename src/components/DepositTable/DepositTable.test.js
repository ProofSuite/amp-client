import React from 'react';
import { shallow } from 'enzyme';
import DepositTable from './DepositTable';

it('shows "loadingMessage" when balance being null, elsewise the balance', () => {
  const testDepositData = [
    { symbol: 'EOS', balance: '10.0000', allowed: true },
    { symbol: 'ZRX', balance: '1.00000', allowed: false },
    { symbol: 'EOS', balance: '5.00000', allowed: false },
    { symbol: 'EOS', balance: '8.00000', allowed: true },
  ];

  const loadingMessage = 'Loading...';
  const balance = 'test balance';
  const wrapper = shallow(<DepositTable depositData={testDepositData} />);
});
