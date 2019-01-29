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
  Position,
  Radio,
  RadioGroup,
  TextArea,
} from '@blueprintjs/core';

import {
  Divider,
  OverlaySpinner,
  Text,
  Indent
} from '../../components/Common';

import Help from '../../components/Help';
import WalletSelect from './WalletSelect';

import { Spring } from 'react-spring'


// TODO -> Intent issue is still to get fix this func () => `JSONFileInputForm`

type Status = 'incomplete' | 'valid' | 'invalid';

type Props = {
  loading: boolean,
  handleChange: Object => void,
  onEnterKeyPress: Object => void,
  onDrop: (Array<Object>) => void,
  method: string,
  privateKey: ?string,
  privateKeyStatus: Status,
  json: ?string,
  jsonStatus: Status,
  savedWallet: string,
  savedWalletAddress: string,
  savedWalletPassword: ?string,
  savedWalletPasswordStatus: Status,
  walletFile: ?string,
  walletAddress: ?string,
  walletFileStatus: Status,
  mnemonic: ?string,
  mnemonicStatus: Status,
  password: ?string,
  passwordStatus: Status,
  passwordHelpingText: ?string,
  localStorageWallets: ?Array<Object>,
  storeWallet: boolean,
  storePrivateKey: boolean,
  submit: (SyntheticEvent<>) => Promise<void>,
  showLoginMethods: () => void,
  saveEncryptedWalletDisabled: boolean,
  savedWalletsDisabled: boolean,
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
  savedWalletPassword: {
    incomplete: '',
    valid: '',
    invalid: 'Invalid Password.'
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
    onEnterKeyPress,
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
    savedWallet,
    savedWalletAddress,
    savedWalletPassword,
    savedWalletPasswordStatus,
    passwordHelpingText,
    localStorageWallets,
    onDrop,
    storeWallet,
    storePrivateKey,
    submit,
    saveEncryptedWalletDisabled,
    showLoginMethods,
    savedWalletsDisabled
  } = props;

  const inputForms = {
    savedWallet: (
      <SavedWalletInputForm
        handleChange={handleChange}
        onEnterKeyPress={onEnterKeyPress}
        localStorageWallets={localStorageWallets}
        savedWallet={savedWallet}
        savedWalletAddress={savedWalletAddress}
        savedWalletPassword={savedWalletPassword}
        savedWalletPasswordStatus={savedWalletPasswordStatus}
        savedWalletDisabled={savedWalletsDisabled}
      />
    ),
    privateKey: (
      <PrivateKeyInputForm
        onEnterKeyPress={onEnterKeyPress}
        privateKeyStatus={privateKeyStatus}
        privateKey={privateKey}
        handleChange={handleChange}
        storeWallet={storeWallet}
        storePrivateKey={storePrivateKey}
        saveEncryptedWalletDisabled={saveEncryptedWalletDisabled}
      />
    ),
    json: (
      <JSONInputForm
        json={json}
        jsonStatus={jsonStatus}
        handleChange={handleChange}
        password={password}
        localStorageWallets={localStorageWallets}
        onEnterKeyPress={onEnterKeyPress}
        passwordStatus={passwordStatus}
        passwordHelpingText={passwordHelpingText}
        storeWallet={storeWallet}
        storePrivateKey={storePrivateKey}
        saveEncryptedWalletDisabled={saveEncryptedWalletDisabled}
      />
    ),
    walletFile: (
      <JSONFileInputForm
        walletFile={walletFile}
        walletAddress={walletAddress}
        walletFileStatus={walletFileStatus}
        handleChange={handleChange}
        onEnterKeyPress={onEnterKeyPress}
        onDrop={onDrop}
        password={password}
        passwordStatus={passwordStatus}
        passwordHelpingText={passwordHelpingText}
        storeWallet={storeWallet}
        storePrivateKey={storePrivateKey}
        saveEncryptedWalletDisabled={saveEncryptedWalletDisabled}
      />
    ),
    mnemonic: (
      <MnemonicSentenceInputForm
        onEnterKeyPress={onEnterKeyPress}
        mnemonic={mnemonic}
        mnemonicStatus={mnemonicStatus}
        handleChange={handleChange}
        storeWallet={storeWallet}
        storePrivateKey={storePrivateKey}
        saveEncryptedWalletDisabled={saveEncryptedWalletDisabled}
      />
    ),
  };

  return (
    <Spring from={{ opacity: 0, marginLeft: -1000, marginRight: 1000 }} to={{ opacity: 1, marginLeft: 0, marginRight: 0 }}>
      {props =>
      <Card elevation="1" style={props}>
        <RadioGroup name="method" onChange={handleChange} selectedValue={method} label="Choose how to access your wallet">
          <Radio label="Saved Wallet" value="savedWallet" disabled={savedWalletsDisabled} />
          <Radio label="Private Key" value="privateKey" />
          <Radio label="JSON" value="json" />
          <Radio label="Wallet File" value="walletFile" />
          <Radio label="Mnemonic Sentence" value="mnemonic" />
        </RadioGroup>
        <InputFormsBox>{inputForms[method]}</InputFormsBox>
        <FooterWrapper>
          <ButtonBox>
            <Button intent="danger" text="Back" onClick={showLoginMethods} />
          </ButtonBox>
          <ButtonBox>
            <Button intent="primary" text="Authenticate" onClick={submit} />
          </ButtonBox>
        </FooterWrapper>
        <OverlaySpinner visible={loading} transparent />
      </Card>
      }
    </Spring>
  );
};


const SavedWalletInputForm = ({
  handleChange,
  onEnterKeyPress,
  localStorageWallets,
  savedWallet,
  savedWalletAddress,
  savedWalletPassword,
  savedWalletPasswordStatus
}: *) => {

  const walletsSaved = localStorageWallets && localStorageWallets.length >= 1;
  // silence-error: couldn't resolve
  return (
    <React.Fragment>
      {walletsSaved && (
        <InputPadding>
          <WalletSelectBox>
          <WalletSelect
            // silence-error: couldn't resolve
            item={localStorageWallets[0]}
            items={localStorageWallets}
            handleChange={event => handleChange({ target: { value: event.encryptedWallet, name: 'savedWallet' } })}
            label="Select saved Wallet"
          />
          <WalletAddressBox>
            {savedWalletAddress && (
              <React.Fragment>
                <Indent />
                <Icon icon='tick-circle' intent='success' />
                <Indent/>
                {savedWalletAddress}
              </React.Fragment>
            )}
          </WalletAddressBox>
          </WalletSelectBox>
        </InputPadding>
      )}
      <InputPadding>
        <FormGroup
          helperText={inputStatuses['savedWalletPassword'][savedWalletPasswordStatus]}
          label="Input Wallet Password"
          intent={intents[savedWalletPasswordStatus]}
        >
          <InputGroup
            name="savedWalletPassword"
            type="password"
            placeholder="(must start with 0x)"
            intent={intents[savedWalletPasswordStatus]}
            onChange={handleChange}
            onKeyPress={onEnterKeyPress}
            value={savedWalletPassword}
            autoFocus
          />
        </FormGroup>
      </InputPadding>
    </React.Fragment>
  );
};

const WalletSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const WalletAddressBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`





const PrivateKeyInputForm = ({
  handleChange,
  privateKey,
  privateKeyStatus,
  onEnterKeyPress,
  saveEncryptedWalletDisabled,
  storeWallet,
  storePrivateKey
}: *) => {
  // silence-error: couldn't resolve
  return (
    <React.Fragment>
      <InputPadding>
        <FormGroup
          helperText={inputStatuses['privateKey'][privateKeyStatus]}
          label="Input Private Key"
          intent={intents[privateKeyStatus]}
        >
          <InputGroup
            name="privateKey"
            placeholder="(must start with 0x)"
            intent={intents[privateKeyStatus]}
            onChange={handleChange}
            onKeyPress={onEnterKeyPress}
            value={privateKey}
            autoFocus
          />
        </FormGroup>
      </InputPadding>
      <FormGroup helperText="Learn more about different options here">
        <Checkbox
          name="storeWallet"
          disabled={saveEncryptedWalletDisabled}
          checked={storeWallet && !saveEncryptedWalletDisabled}
          onChange={handleChange}
        >
          <strong>Save encrypted wallet in local storage</strong>
          <span> </span>
          <Help position={Position.RIGHT}>
            By saving in local storage, you will be able to restore your wallet everytime you enter the platform.
            You will be required to delete it manually on the Setting page.
          </Help>
        </Checkbox>
      </FormGroup>
    </React.Fragment>
  );
};

const JSONInputForm = ({
  handleChange,
  json,
  jsonStatus,
  password,
  passwordStatus,
  localStorageWallets,
  passwordHelpingText,
  onEnterKeyPress,
  saveEncryptedWalletDisabled,
  storeWallet,
  storePrivateKey
}: *) => {
  return (
    <React.Fragment>
      <Label text="Input JSON File Text">
        <InputPadding>
          <FormGroup helperText={inputStatuses['json'][jsonStatus]} intent={intents[jsonStatus]}>
            <TextArea
              name="json"
              intent={intents[jsonStatus]}
              onChange={handleChange}
              value={json}
              onKeyPress={onEnterKeyPress}
              style={{ height: '100px' }}
              fill
              autoFocus
            />
          </FormGroup>
        </InputPadding>
      </Label>
      <Label text="Input Password">
        <InputPadding>
          <FormGroup helperText={passwordHelpingText} intent={intents[passwordStatus]}>
            <InputGroup
              name="password"
              intent={intents[passwordStatus]}
              type="password"
              label="password"
              disabled={json === null}
              placeholder="Password for JSON"
              onKeyPress={onEnterKeyPress}
              onChange={handleChange}
              value={password}
            />
          </FormGroup>
        </InputPadding>
      </Label>
      <FormGroup helperText="Learn more about different options here">
        <Checkbox
          name="storeWallet"
          disabled={saveEncryptedWalletDisabled}
          checked={storeWallet && !saveEncryptedWalletDisabled}
          onChange={handleChange}
        >
          <strong>Save encrypted wallet in local storage</strong>
          <Help position={Position.RIGHT}>
            By saving in local storage, you will be able to restore your wallet everytime you enter the platform.
            You will be required to delete it manually on the Setting page.
          </Help>
        </Checkbox>
      </FormGroup>
    </React.Fragment>
  );
};

const JSONFileInputForm = ({
  onDrop,
  walletFileStatus,
  walletAddress,
  onEnterKeyPress,
  handleChange,
  password,
  passwordStatus,
  passwordHelpingText,
  saveEncryptedWalletDisabled,
  storeWallet,
  storePrivateKey
}: *) => {
  const validWalletFile = walletFileStatus === 'valid';
  const inValidWalletFile = walletFileStatus === 'invalid';
  return (
    <React.Fragment>
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
          <FormGroup helperText={passwordHelpingText} intent={intents[passwordStatus]}>
            <InputGroup
              name="password"
              intent={intents[passwordStatus]}
              type="password"
              label="password"
              placeholder="Password for Wallet File"
              onChange={handleChange}
              value={password}
              onKeyPress={onEnterKeyPress}
            />
          </FormGroup>
        </InputPadding>
      </Label>
      <FormGroup helperText="Learn more about different options here">
        <Checkbox
          name="storeWallet"
          disabled={saveEncryptedWalletDisabled}
          checked={storeWallet && !saveEncryptedWalletDisabled}
          onChange={handleChange}
        >
          <strong>Save encrypted wallet in local storage</strong>
          <span> </span>
          <Help position={Position.RIGHT}>
            By saving in local storage, you will be able to restore your wallet everytime you enter the platform.
            You will be required to delete it manually on the Setting page.
          </Help>
        </Checkbox>
      </FormGroup>
    </React.Fragment>
  );
};

const MnemonicSentenceInputForm = ({
  handleChange,
  mnemonic,
  mnemonicStatus,
  saveEncryptedWalletDisabled,
  storeWallet,
  savedEncryptedWalletDisabled,
  storePrivateKey
  }: *) => {
  return (
    <React.Fragment>
      <Label text="Input Mnemonic Sentence">
        <InputPadding>
          <FormGroup helperText={inputStatuses['mnemonic'][mnemonicStatus]} intent={intents[mnemonicStatus]}>
            <TextArea
              name="mnemonic"
              large
              intent={intents[mnemonicStatus]}
              onChange={handleChange}
              value={mnemonic}
              style={{ height: '100px' }}
              fill
              autoFocus
            />
          </FormGroup>
        </InputPadding>
      </Label>
      <FormGroup helperText="Learn more about different options here">
      <Checkbox
        name="storeWallet"
        disabled={saveEncryptedWalletDisabled}
        checked={storeWallet && !saveEncryptedWalletDisabled}
        onChange={handleChange}
      >
        <strong>Save encrypted wallet in local storage</strong>
        <span> </span>
        <Help position={Position.RIGHT}>
          By saving in local storage, you will be able to restore your wallet everytime you enter the platform.
          You will be required to delete it manually on the Setting page.
        </Help>
      </Checkbox>
    </FormGroup>
    </React.Fragment>
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
  padding-top: 20px;
`;

const InputFormsBox = styled.div`
  padding-top: 20px;
`;

const ButtonBox = styled.div`
  text-align: right;
  padding-top: 20px;
`;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
