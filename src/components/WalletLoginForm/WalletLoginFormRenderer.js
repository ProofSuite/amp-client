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
import { Divider, OverlaySpinner, Text, Colors } from '../../components/Common';
import WalletSelect from './WalletSelect';
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
  walletFile: ?string,
  walletAddress: ?string,
  walletFileStatus: Status,
  mnemonic: ?string,
  mnemonicStatus: Status,
  password: ?string,
  passwordStatus: Status,
  passwordHelpingText: ?string,
  localStorageWallets: ?Array<Object>,
  sessionStorageWallets: ?Array<Object>,
  storeWallet: boolean,
  storePrivateKey: boolean,
  submit: (SyntheticEvent<>) => Promise<void>,
  showLoginMethods: () => void,
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
    passwordHelpingText,
    sessionStorageWallets,
    localStorageWallets,
    onDrop,
    storeWallet,
    storePrivateKey,
    submit,
    saveEncryptedWalletDisabled,
    showLoginMethods,
    createWallet,
  } = props;

  const inputForms = {
    privateKey: (
      <PrivateKeyInputForm
        sessionStorageWallets={sessionStorageWallets}
        onEnterKeyPress={onEnterKeyPress}
        privateKeyStatus={privateKeyStatus}
        privateKey={privateKey}
        handleChange={handleChange}
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
      />
    ),
    mnemonic: (
      <MnemonicSentenceInputForm
        onEnterKeyPress={onEnterKeyPress}
        mnemonic={mnemonic}
        mnemonicStatus={mnemonicStatus}
        handleChange={handleChange}
      />
    ),
    createWallet: (
      <CreateWalletWrap
        handleChange={handleChange}
        password={password}
        onEnterKeyPress={onEnterKeyPress}
        passwordStatus={passwordStatus}
        createWallet={createWallet}
        passwordHelpingText={passwordHelpingText}
      />
    ),
  };

  return (
    <Card elevation="1" style={{ width: '600px', position: 'relative' }}>
      <RadioGroup name="method" onChange={handleChange} selectedValue={method} label="Choose how to access your wallet">
        <Radio label="Private Key" value="privateKey" />
        <Radio label="JSON" value="json" />
        <Radio label="Wallet File" value="walletFile" />
        <Radio label="Mnemonic Sentence" value="mnemonic" />
        <Radio label="Create New Wallet" value="createWallet" />
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
      <FooterWrapper>
        <ButtonBox>
          <Button intent="normal" minimal={true} icon="undo" onClick={showLoginMethods} />
        </ButtonBox>
        <ButtonBox>
          {method === 'createWallet' ? (
            <Button intent="primary" text="Create Wallet" onClick={createWallet} />
          ) : (
            <Button intent="primary" text="Authenticate" onClick={submit} />
          )}
        </ButtonBox>
      </FooterWrapper>
      <OverlaySpinner visible={loading} transparent />
    </Card>
  );
};

const PrivateKeyInputForm = ({
  sessionStorageWallets,
  handleChange,
  privateKey,
  privateKeyStatus,
  onEnterKeyPress,
}: *) => {
  // silence-error: couldn't resolve
  const walletsSaved = sessionStorageWallets.length > 1;
  return (
    <div>
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
          />
        </FormGroup>
      </InputPadding>
    </div>
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
}: *) => {
  // silence-error: couldn't resolve
  const walletsSaved = localStorageWallets.length > 1;
  return (
    <div>
      {walletsSaved && (
        <InputPadding>
          <WalletSelect
            // silence-error: couldn't resolve
            item={localStorageWallets[0]}
            items={localStorageWallets}
            handleChange={evt => handleChange({ target: { value: evt.key, name: 'json' } })}
            label="Select saved Wallet"
          />
        </InputPadding>
      )}

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
    </div>
  );
};

const CreateWalletWrap = ({
  handleChange,
  password,
  passwordStatus,
  passwordHelpingText,
  onEnterKeyPress,
  createWallet,
}: *) => {
  return (
    <div>
      <InputPadding>
        <FormGroup>
          <InputGroup
            name="password"
            type="password"
            label="password"
            placeholder="Password for new Wallet"
            onChange={handleChange}
            value={password}
          />
        </FormGroup>
      </InputPadding>
      <HelperText>
        <b>Do not lose it!</b> It cannot be recovered if you lose it.
      </HelperText>
      <HelperText>
        <b>Do not share it!</b> Your funds will be stolen if you use this file on a malicious/phishing site.
      </HelperText>
      <HelperText>
        <b>Make a backup!</b> Secure it like the millions of dollars it may one day be worth.
      </HelperText>
      <InputPadding>
        <Button onClick={createWallet} text="Create New Wallet" />
      </InputPadding>
    </div>
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
    </div>
  );
};

const MnemonicSentenceInputForm = ({ handleChange, mnemonic, mnemonicStatus }: *) => {
  return (
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
const HelperText = styled.p`
  color: ${Colors.GRAY5};
  text-align: center;
  padding: 0 40px;
`;

export default WalletLoginFormRenderer;
