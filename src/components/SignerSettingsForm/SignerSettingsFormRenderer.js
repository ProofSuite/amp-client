// @flow
import React from 'react';
import styled from 'styled-components';
import NetworkSelect from '../NetworkSelect/NetworkSelect';
import { Button, Callout, Card, InputGroup, Label, Radio, RadioGroup } from '@blueprintjs/core';

import type { SignerSettings } from '../../types/signer';

type Props = {
  loading: boolean,
  error: string,
  type: 'metamask' | 'wallet' | 'rpc' | 'custom',
  custom: boolean,
  customType: 'wallet' | 'rpc',
  url: ?string,
  networkID: number,
  wallet: Object,
  currentSigner: SignerSettings,
  handleSubmit: (SyntheticEvent<>) => void,
  handleChange: (SyntheticInputEvent<>) => void,
  handleNetworkChange: Object => void,
  networks: Array<Object>,
};

const SignerSettingsFormRenderer = (props: Props) => {
  const { handleChange, handleSubmit, loading, error, currentSigner, custom, type } = props;

  return (
    <CardBox>
      <Card interactive={true}>
        <options>
          <RadioGroup name="type" onChange={handleChange} selectedValue={type} label="Choose a signing method">
            <Radio label="Metamask" value="metamask" />
            <Radio label="Local Ethereum Node" value="rpc" />
            <Radio label="Wallet" value="wallet" />
            <Radio label="Custom Signer" value="custom" />
          </RadioGroup>
        </options>
        {custom && renderCustomSignerForm(props)}
        <ButtonBox>
          <Button intent="primary" loading={loading} onClick={handleSubmit} text="Change Signer" />
        </ButtonBox>
        {error ? renderErrorCallout(error) : renderCurrentSignerCallout(currentSigner)}
      </Card>
    </CardBox>
  );
};

const renderErrorCallout = (error: string) => {
  return (
    <CalloutBox>
      <Callout title="Error" intent="danger">
        Could not connect signer ({error})
      </Callout>
    </CalloutBox>
  );
};

const renderCurrentSignerCallout = (currentSigner: SignerSettings) => {
  return (
    <CalloutBox>
      <Callout title="Signer Connected" intent="success">
        Current Signer Type: {currentSigner.type}
      </Callout>
    </CalloutBox>
  );
};

const renderCustomSignerForm = (props: Props) => {
  const { networkID, url, handleChange, handleNetworkChange, networks, customType } = props;

  return (
    <div>
      <RadioGroup label="Signer Type" name="customType" onChange={handleChange} selectedValue={customType}>
        <Radio label="Local" value="rpc" />
        <Radio label="Wallet" value="wallet" />
      </RadioGroup>

      <InputBox>
        <Label text="Network ID">
          <NetworkSelect handleChange={handleNetworkChange} networkID={networkID} networks={networks} />
        </Label>
      </InputBox>

      <Label text="Signer URL">
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

export default SignerSettingsFormRenderer;
