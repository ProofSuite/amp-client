import React from 'react';
import { shallow } from 'enzyme';
import ExchangePage from './ExchangePage';

it('renders without crashing', () => {
  shallow(<ExchangePage />);
});
