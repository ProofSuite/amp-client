import React from 'react';
import { shallow } from 'enzyme';
import LogoutPage from './LogoutPage';

it('renders without crashing', () => {
  shallow(<LogoutPage />);
});
