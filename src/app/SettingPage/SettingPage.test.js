import React from 'react';
import { shallow } from 'enzyme';
import SettingPage from './SettingPage';

it('renders without crashing', () => {
  shallow(<SettingPage />);
});
