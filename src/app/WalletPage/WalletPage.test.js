import React from 'react';
import { shallow } from 'enzyme';
import WalletPage from './WalletPage';

it('renders without crashing', () => {
  shallow(<WalletPage />);
});
