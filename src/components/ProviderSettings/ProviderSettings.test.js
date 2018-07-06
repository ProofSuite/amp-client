import React from 'react';
import { shallow } from 'enzyme';
import ProviderSettings from './ProviderSettings';

it('renders without crashing', () => {
  shallow(<ProviderSettings setProvider={jest.fn()} />);
});
