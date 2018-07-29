import React from 'react';
import { shallow } from 'enzyme';
import SignerSettingsForm from './SignerSettingsForm';

describe('Rendering', () => {
  it('renders without crashing', () => {
    shallow(
      <SignerSettingsForm
        loading={false}
        error=""
        currentSigner={{ type: 'rpc', url: 'http://127.0.0.1:8545', networkId: 8888 }}
        updateSigner={jest.fn()}
      />
    );
  });
});
