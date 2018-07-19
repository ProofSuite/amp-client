import React from 'react';
import { shallow } from 'enzyme';
import SettingsPage from './SettingsPage';

it('renders without crashing', () => {
  shallow(<SettingsPage />);
});
