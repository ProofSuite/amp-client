// @flow
import React from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import {
  Button,
  Card,
  Checkbox,
  FormGroup,
  Icon,
  InputGroup,
  Intent,
  Label,
  Radio,
  RadioGroup,
  TextArea,
} from '@blueprintjs/core';
import { Divider, OverlaySpinner, Text } from '../../components/Common';
// TODO -> Intent issue is still to get fix this func () => `JSONFileInputForm`

type Status = 'incomplete' | 'valid' | 'invalid';

type Props = {
  loading: boolean,
  handleChange: (SyntheticInputEvent<>) => void,
  onDrop: (Array<Object>) => void,
  method: string,
  privateKey: ?string,
  privateKeyStatus: Status,
  json: ?string,
  jsonStatus: Status,
  walletFile: ?string,
  walletFileStatus: Status,
  mnemonic: ?string,
  mnemonicStatus: Status,
  password: ?string,
  storeWallet: boolean,
  storePrivateKey: boolean,
  submit: (SyntheticEvent<>) => Promise<void>,
  saveEncryptedWalletDisabled: boolean,
};

const inputStatuses = {
  privateKey: {
    incomplete: '',
    valid: 'Valid Private Key',
    invalid: 'Private Key Invalid',
  },
  json: {
    incomplete: '',
    valid: 'Valid JSON',
    invalid: 'Invalid JSON',
  },
  walletFile: {
    incomplete: '',
    valid: 'Wallet File Valid',
    invalid: 'Invalid Wallet',
  },
  mnemonic: {
    incomplete: '',
    valid: 'Valid Mnemonic',
    invalid: 'Invalid Mnemonic. Mnemonic must be 12 words long',
  },
  password: {
    incomplete: '',
    valid: '',
    invalid: 'Invalid Password.',
  },
};

const intents = {
  invalid: Intent.DANGER,
  valid: Intent.SUCCESS,
  incomplete: Intent.PRIMARY,
};

const WalletLoginFormRenderer = (props: Props) => {
  const {
    loading,
    handleChange,
    method,
    privateKey,
    privateKeyStatus,
    json,
    jsonStatus,
    walletFile,
    walletAddress,
    walletFileStatus,
    mnemonic,
    mnemonicStatus,
    password,
    passwordStatus,
    onDrop,
    storeWallet,
    storePrivateKey,
    submit,
    saveEncryptedWalletDisabled,
    checkError,
  } = props;

  const inputForms = {
    privateKey: (
      <PrivateKeyInputForm
        privateKeyStatus={privateKeyStatus}
        privateKey={privateKey}
        handleChange={handleChange}
        checkError={checkError}
      />
    ),
    json: (
      <JSONInputForm
        json={json}
        jsonStatus={jsonStatus}
        handleChange={handleChange}
        password={password}
        passwordStatus={passwordStatus}
        checkError={checkError}
      />
    ),
    walletFile: (
      <JSONFileInputForm
        walletFile={walletFile}
        walletAddress={walletAddress}
        walletFileStatus={walletFileStatus}
        handleChange={handleChange}
        onDrop={onDrop}
        password={password}
        passwordStatus={passwordStatus}
        checkError={checkError}
      />
    ),
    mnemonic: (
      <MnemonicSentenceInputForm
        mnemonic={mnemonic}
        mnemonicStatus={mnemonicStatus}
        handleChange={handleChange}
        checkError={checkError}
      />
    ),
  };

  console.log(walletFileStatus, walletAddress, intents[walletFileStatus]);
  return (
    <Card elevation="1" style={{ width: '600px', position: 'relative' }}>
      <RadioGroup name="method" onChange={handleChange} selectedValue={method} label="Choose how to access your wallet">
        <Radio label="Private Key" value="privateKey" />
        <Radio label="JSON" value="json" />
        <Radio label="Wallet File" value="walletFile" />
        <Radio label="Mnemonic Sentence" value="mnemonic" />
      </RadioGroup>
      <InputFormsBox>{inputForms[method]}</InputFormsBox>
      <FormGroup helperText="Learn more about different options here">
        <Checkbox
          name="storeWallet"
          disabled={saveEncryptedWalletDisabled}
          checked={storeWallet && !saveEncryptedWalletDisabled}
          onChange={handleChange}
        >
          <strong>Save encrypted wallet in local storage</strong>
        </Checkbox>
        <Checkbox name="storePrivateKey" checked={storePrivateKey} onChange={handleChange}>
          <strong>Save private key in session storage </strong>
        </Checkbox>
      </FormGroup>
      <ButtonBox>
        <Button intent="primary" text="Authenticate" onClick={submit} />
      </ButtonBox>
      <OverlaySpinner visible={loading} transparent />
    </Card>
  );
};

const PrivateKeyInputForm = ({ handleChange, privateKey, privateKeyStatus, checkError }: *) => {
  const error = privateKeyStatus !== 'valid' && checkError;
  return (
    <InputPadding>
      <FormGroup
        helperText={inputStatuses['privateKey'][privateKeyStatus]}
        label="Input Private Key"
        intent={intents[privateKeyStatus]}
      >
        <InputGroup
          name="privateKey"
          className={error ? 'input-err' : ''}
          placeholder="(must start with 0x)"
          intent={intents[privateKeyStatus]}
          onChange={handleChange}
          value={privateKey}
        />
      </FormGroup>
    </InputPadding>
  );
};

const JSONInputForm = ({ handleChange, json, jsonStatus, password, passwordStatus, checkError }: *) => {
  return (
    <div>
      <Label text="Input JSON File Text">
        <InputPadding>
          <FormGroup helperText={inputStatuses['json'][jsonStatus]} intent={intents[jsonStatus]}>
            <TextArea
              name="json"
              intent={intents[jsonStatus]}
              onChange={handleChange}
              value={json}
              style={{ height: '100px' }}
              fill
            />
          </FormGroup>
        </InputPadding>
      </Label>
      <Label text="Input Password">
        <InputPadding>
          <FormGroup helperText={inputStatuses['password'][passwordStatus]} intent={intents[passwordStatus]}>
            <InputGroup
              name="password"
              intent={intents[passwordStatus]}
              type="password"
              label="password"
              disabled={json === null}
              placeholder="Password for JSON"
              onChange={handleChange}
              value={password}
            />
          </FormGroup>
        </InputPadding>
      </Label>
    </div>
  );
};

const JSONFileInputForm = ({
  onDrop,
  walletFileStatus,
  walletAddress,
  handleChange,
  password,
  checkError,
  passwordStatus,
}: *) => {
  const validWalletFile = walletFileStatus === 'valid';
  const inValidWalletFile = walletFileStatus === 'invalid';
  return (
    <div>
      <Label
        className={inValidWalletFile ? 'text-err' : ''}
        text="Drag on Click on Container to load your JSON wallet"
        style={{ textAlign: 'center' }}
      />
      <Dropzone onDrop={onDrop} style={dropZoneStyles}>
        <DropzoneMessageContainer style={{ width: '150px', height: '90px' }}>
          <Icon icon="inbox" iconSize={50} intent={Intent.PRIMARY} />
        </DropzoneMessageContainer>
        <Divider style={{ margin: '15px' }} />

        {validWalletFile && <Text style={{ marginBottom: '10px' }}>Address: {walletAddress}</Text>}
        <Text intent={intents[walletFileStatus]}>
          {validWalletFile && <Icon icon="tick-circle" />}
          {inValidWalletFile && <Icon icon="delete" />}
          {' ' + inputStatuses['walletFile'][walletFileStatus]}
        </Text>
      </Dropzone>
      <Label text="Input Password">
        <InputPadding>
          <FormGroup helperText={inputStatuses['password'][passwordStatus]} intent={intents[passwordStatus]}>
            <InputGroup
              name="password"
              intent={intents[passwordStatus]}
              type="password"
              label="password"
              placeholder="Password for Wallet File"
              onChange={handleChange}
              value={password}
            />
          </FormGroup>
        </InputPadding>
      </Label>
    </div>
  );
};

const MnemonicSentenceInputForm = ({ handleChange, mnemonic, mnemonicStatus, checkError }: *) => {
  const error = mnemonicStatus !== 'valid' && checkError;
  return (
    <Label text="Input Mnemonic Sentence">
      <InputPadding>
        <FormGroup
          helperText={inputStatuses['mnemonic'][mnemonicStatus]}
          intent={intents[mnemonicStatus]}
          className={error ? 'input-err' : ''}
        >
          <TextArea
            name="mnemonic"
            large
            intent={intents[mnemonicStatus]}
            onChange={handleChange}
            value={mnemonic}
            style={{ height: '100px' }}
            fill
          />
        </FormGroup>
      </InputPadding>
    </Label>
  );
};

var dropZoneStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const InputPadding = styled.div`
  padding-top: 5px;
`;

const InputFormsBox = styled.div`
  padding-top: 50px;
`;

const ButtonBox = styled.div`
  text-align: right;
  padding-top: 20px;
`;

const InputFormBox = styled.div`
  position: relative;
`;

const DropzoneContainer = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
`;

const DropzoneMessageContainer = styled(Card)`
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
`;

export default WalletLoginFormRenderer;
