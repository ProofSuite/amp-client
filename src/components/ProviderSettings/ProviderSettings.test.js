import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderSettings from './ProviderSettings';

it('renders without crashing', () => {
  shallow(
    <ProviderSettings
      setProvider={jest.fn()}
      loading={false}
      error=""
      currentProvider={{ type: 'metamask', url: '', networkId: 1 }}
    />
  );
});

it('calls setProvider upon submitting the form', () => {
  const setProvider = jest.fn();
  const wrapper = mount(
    <ProviderSettings
      setProvider={setProvider}
      loading={false}
      error=""
      currentProvider={{ type: 'metamask', url: '', networkId: 1 }}
    />
  );
  wrapper.find('button').simulate('click', { target: { name: 0 } });

  expect(setProvider).toHaveBeenCalledTimes(1);
});
