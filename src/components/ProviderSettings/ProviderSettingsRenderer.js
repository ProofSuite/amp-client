// @flow
import React from 'react';
import styled from 'styled-components';
import NetworkSelect from '../NetworkSelect/NetworkSelect';
import { Card, Radio, RadioGroup, Button, InputGroup, Label } from '@blueprintjs/core';

import type { ProviderOptions } from '../../types/provider';

type Props = {
  loading: boolean,
  options: ProviderOptions,
  handleSubmit: (SyntheticEvent<>) => void,
  handleChange: (SyntheticInputEvent<>) => void,
  handleNetworkChange: Object => void,
  networks: Array<Object>,
};

const ProviderSettingsRenderer = (props: Props) => {
  const { handleChange, handleSubmit, options, loading } = props;
  const { provider } = options;

  return (
    <CardContainer>
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
        <ButtonWrapper>
          <Button intent="primary" loading={loading} onClick={handleSubmit} text="Change Provider" />
        </ButtonWrapper>
      </Card>
    </CardContainer>
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

      <InputWrapper>
        <Label text="Network ID">
          <NetworkSelect handleChange={handleNetworkChange} networkId={networkId} networks={networks} />
        </Label>
      </InputWrapper>

      <Label text="Provider URL">
        <InputGroup placeholder="Ex: 127.0.0.1:8545" value={url} onChange={handleChange} name="url" />
      </Label>
    </div>
  );
};

const CardContainer = styled.div`
  text-align: left;
`;

const InputWrapper = styled.div`
  padding-bottom: 15px;
  padding-top: 15px;
`;

const ButtonWrapper = styled.div`
  padding-top: 20px;
`;

export default ProviderSettingsRenderer;
