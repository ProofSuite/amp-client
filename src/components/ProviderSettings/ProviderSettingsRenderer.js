// @flow
import React from 'react';
import styled from 'styled-components';
import NetworkSelect from '../NetworkSelect/NetworkSelect';
import { Button, Callout, Card, InputGroup, Label, Radio, RadioGroup } from '@blueprintjs/core';

import type { ProviderOptions } from '../../types/provider';

type Props = {
  loading: boolean,
  error: string,
  options: ProviderOptions,
  currentProvider: ProviderOptions,
  handleSubmit: (SyntheticEvent<>) => void,
  handleChange: (SyntheticInputEvent<>) => void,
  handleNetworkChange: Object => void,
  networks: Array<Object>,
};

const ProviderSettingsRenderer = (props: Props) => {
  const { handleChange, handleSubmit, options, loading, error, currentProvider } = props;
  const { provider, type, networkId, url } = options;

  return (
    <CardBox>
      <Card interactive={true}>
        <options>
          <RadioGroup name="provider" onChange={handleChange} selectedValue={provider} label="Choose a provider">
            <Radio label="Default Metamask Provider" value="metamask" />
            <Radio label="Default Local Node Provider" value="local" />
            <Radio label="Default Wallet Provider" value="wallet" />
            <Radio label="Default Wallet Provider (Rinkeby)" value="wallet (rinkeby)" />
            <Radio label="Custom Provider" value="custom" />
          </RadioGroup>
        </options>
        {provider === 'custom' && renderCustomProviderForm(props)}
        <ButtonBox>
          <Button intent="primary" loading={loading} onClick={handleSubmit} text="Change Provider" />
        </ButtonBox>
        {error ? renderErrorCallout(error) : renderCurrentProviderCallout(currentProvider)}
      </Card>
    </CardBox>
  );
};

const renderErrorCallout = (error: string) => {
  return (
    <CalloutBox>
      <Callout title="Error" intent="danger">
        Could not connect provider ({error})
      </Callout>
    </CalloutBox>
  );
};

const renderCurrentProviderCallout = (currentProvider: ProviderOptions) => {
  return (
    <CalloutBox>
      <Callout title="Provider Connected" intent="success">
        Current Provider Type: {currentProvider.type}
      </Callout>
    </CalloutBox>
  );
};

const renderCustomProviderForm = (props: Props) => {
  const { handleChange, handleNetworkChange, options, networks } = props;
  const { type, networkId, url } = options;

  return (
    <div>
      <RadioGroup label="Provider Type" name="type" onChange={handleChange} selectedValue={type}>
        <Radio label="Metamask" value="metamask" />
        <Radio label="Local" value="local" />
        <Radio label="Wallet" value="wallet" />
      </RadioGroup>

      <InputBox>
        <Label text="Network ID">
          <NetworkSelect handleChange={handleNetworkChange} networkId={networkId} networks={networks} />
        </Label>
      </InputBox>

      <Label text="Provider URL">
        <InputGroup placeholder="Ex: 127.0.0.1:8545" value={url} onChange={handleChange} name="url" />
      </Label>
    </div>
  );
};

const CardBox = styled.div`
  text-align: left;
`;

const InputBox = styled.div`
  padding-bottom: 15px;
  padding-top: 15px;
`;

const ButtonBox = styled.div`
  padding-top: 20px;
`;

const CalloutBox = styled.div`
  padding-top: 20px;
`;

export default ProviderSettingsRenderer;
