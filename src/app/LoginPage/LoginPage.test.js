import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';

it('renders without crashing', () => {
  shallow(<LoginPage />);
});
