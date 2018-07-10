import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

it('renders without crashing', () => {
  shallow(<LandingPage />);
});
