import React from 'react';
import { shallow } from 'enzyme';
import LogoutPage from './LogoutPage.js';

it('renders without crashing', () => {
  shallow(<LogoutPage logout={jest.fn()} />);
});
