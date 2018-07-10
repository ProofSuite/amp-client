import React from 'react';
import { shallow } from 'enzyme';
import PortfolioPage from './PortfolioPage';

it('renders without crashing', () => {
  shallow(<PortfolioPage />);
});
