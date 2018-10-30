import React from 'react';
import { shallow } from 'enzyme';

import WalletLoginForm from './WalletLoginForm';
import * as walletService from '../../store/services/wallet';




jest.mock('../../store/services/wallet');

let loginWithWallet = jest.fn();

describe('Rendering', () => {
  it('renders without crashing', () => {
    shallow(<WalletLoginForm loginWithWallet={loginWithWallet} />);
  });
});

describe('Component methods', () => {
  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow(<WalletLoginForm loginWithWallet={loginWithWallet} />);

    instance = wrapper.instance();
  });

  it('calls connect with wallet upon submit', async () => {
    walletService.createWalletFromPrivateKey = jest.fn(() => Promise.resolve({ wallet: 'test wallet' }));
    instance.setState({
      privateKeyStatus: 'valid',
      method: 'privateKey',
      privateKey: 'test Private Key',
      storeWallet: false,
      storePrivateKey: true,
    });

    await instance.submit();

    expect(walletService.createWalletFromPrivateKey).toHaveBeenCalledTimes(1);
    expect(walletService.createWalletFromPrivateKey).toHaveBeenCalledWith('test Private Key');

    expect(loginWithWallet).toHaveBeenCalledWith({
      wallet: 'test wallet',
      encryptedWallet: undefined,
      storeWallet: false,
      storePrivateKey: true,
    });
  });

  it('validates Form correctly on Submit with Private Key', async () => {
    walletService.createWalletFromPrivateKey = jest.fn(() => Promise.resolve({ wallet: 'test wallet' }));

    instance.handleChange({ target: { type: 'checkbox', checked: 'privateKey', name: 'method' } });
    instance.handleChange({
      target: { value: '0x7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712660', name: 'privateKey' },
    });

    expect(wrapper.state('privateKeyStatus')).toBe('valid');
    expect(wrapper.state('method')).toBe('privateKey');

    await instance.submit();
    expect(walletService.createWalletFromPrivateKey).toHaveBeenCalledTimes(1);
  });

  it('inValidates Form correctly on Submit with Private Key', async () => {
    walletService.createWalletFromPrivateKey = jest.fn(() => Promise.resolve({ wallet: 'test wallet' }));

    instance.handleChange({ target: { type: 'checkbox', checked: 'privateKey', name: 'method' } });
    instance.handleChange({ target: { value: 'wrong Private key', name: 'privateKey' } });

    expect(wrapper.state('privateKeyStatus')).toBe('invalid');
    expect(wrapper.state('method')).toBe('privateKey');

    await instance.submit();
    expect(walletService.createWalletFromPrivateKey).toHaveBeenCalledTimes(0);
  });

  it('Validates Form correctly on Submit with JSON', async () => {
    walletService.createWalletFromJSON = jest.fn(() => Promise.resolve({ wallet: 'test wallet' }));

    instance.handleChange({ target: { type: 'checkbox', checked: 'json', name: 'method' } });
    instance.handleChange({
      target: {
        value:
          '{"version":3,"id":"c1ec0f2b-4aa0-4a71-81d3-4ca6390e1797","address":"1caa9b97a1dc31c561c211cf9351f488b43eebfb","Crypto":{"ciphertext":"e425297f5b77e95559f7370576f7f79b622805f552b66e8d9a3bcf84dab8f6d9","cipherparams":{"iv":"c8e4b0ab122130477572f8e4c48f2de2"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"68d926311a56439876566a821dfa733c323b0bea2707e8bd4c1a7ef04fd8d6ef","n":8192,"r":8,"p":1},"mac":"122ca80fe0521b561f419ed7df53c8b9f3e1c27c10c8f6be16d3bd371ae3b8d1"}}',
        name: 'json',
      },
    });
    instance.handleChange({ target: { value: 'hassankhokhar', name: 'password' } });

    expect(wrapper.state('jsonStatus')).toBe('valid');
    expect(wrapper.state('passwordStatus')).toBe('valid');
    expect(wrapper.state('method')).toBe('json');

    await instance.submit();
    expect(walletService.createWalletFromJSON).toHaveBeenCalledTimes(1);
  });

  it('invalidates Form correctly on Submit with JSON', async () => {
    walletService.createWalletFromJSON = jest.fn(() => Promise.resolve({ wallet: 'test wallet' }));

    instance.handleChange({ target: { type: 'checkbox', checked: 'json', name: 'method' } });
    instance.handleChange({
      target: {
        value:
          'version":3,"id":"c1ec0f2b-4aa0-4a71-81d3-4ca6390e1797","address":"1caa9b97a1dc31c561c211cf9351f488b43eebfb","Crypto":{"ciphertext":"e425297f5b77e95559f7370576f7f79b622805f552b66e8d9a3bcf84dab8f6d9","cipherparams":{"iv":"c8e4b0ab122130477572f8e4c48f2de2"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"68d926311a56439876566a821dfa733c323b0bea2707e8bd4c1a7ef04fd8d6ef","n":8192,"r":8,"p":1},"mac":"122ca80fe0521b561f419ed7df53c8b9f3e1c27c10c8f6be16d3bd371ae3b8d1"}}',
        name: 'json',
      },
    });
    instance.handleChange({ target: { value: 'wrongPassword', name: 'password' } });

    expect(wrapper.state('jsonStatus')).toBe('invalid');
    expect(wrapper.state('passwordStatus')).toBe('valid');
    expect(wrapper.state('method')).toBe('json');

    await instance.submit();
    expect(walletService.createWalletFromJSON).toHaveBeenCalledTimes(0);
  });

  //TODO: -----
  it('checks Password Helping Text on Submitting Wrong Password with JSON', async () => {
    walletService.createWalletFromJSON = jest.fn(() => Promise.resolve({ wallet: '' }));

    instance.handleChange({ target: { type: 'checkbox', checked: 'json', name: 'method' } });
    instance.handleChange({
      target: {
        value:
          '{"version":3,"id":"c1ec0f2b-4aa0-4a71-81d3-4ca6390e1797","address":"1caa9b97a1dc31c561c211cf9351f488b43eebfb","Crypto":{"ciphertext":"e425297f5b77e95559f7370576f7f79b622805f552b66e8d9a3bcf84dab8f6d9","cipherparams":{"iv":"c8e4b0ab122130477572f8e4c48f2de2"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"68d926311a56439876566a821dfa733c323b0bea2707e8bd4c1a7ef04fd8d6ef","n":8192,"r":8,"p":1},"mac":"122ca80fe0521b561f419ed7df53c8b9f3e1c27c10c8f6be16d3bd371ae3b8d1"}}',
        name: 'json',
      },
    });
    instance.handleChange({ target: { value: '12', name: 'password' } });

    expect(wrapper.state('jsonStatus')).toBe('valid');
    expect(wrapper.state('passwordStatus')).toBe('valid');
    expect(wrapper.state('passwordHelpingText')).toBe('');
    expect(wrapper.state('method')).toBe('json');

    await instance.submit();
    // console.log(wrapper.state())
    expect(walletService.createWalletFromJSON).toHaveBeenCalledTimes(1);
    expect(wrapper.state('passwordHelpingText')).toBe('Invalid Password!');
  });

  it('Validates Form correctly on Submit with Mnemonic', async () => {
    walletService.createWalletFromMnemonic = jest.fn(() => Promise.resolve({ wallet: 'test wallet' }));

    instance.handleChange({ target: { type: 'checkbox', checked: 'mnemonic', name: 'method' } });
    instance.handleChange({
      target: {
        value: 'clown shiver class wheel this mixture create illness fatigue amateur talent bitter',
        name: 'mnemonic',
      },
    });

    expect(wrapper.state('mnemonicStatus')).toBe('valid');
    expect(wrapper.state('method')).toBe('mnemonic');

    await instance.submit();
    expect(walletService.createWalletFromMnemonic).toHaveBeenCalledTimes(1);
  });

  it('invalidates Form correctly on Submit with Mnemonic', async () => {
    walletService.createWalletFromMnemonic = jest.fn(() => Promise.resolve({ wallet: 'test wallet' }));

    instance.handleChange({ target: { type: 'checkbox', checked: 'mnemonic', name: 'method' } });
    instance.handleChange({
      target: {
        value: 'shiver class wheel this mixture create illness fatigue amateur talent bitter',
        name: 'mnemonic',
      },
    });
    expect(wrapper.state('mnemonicStatus')).toBe('invalid');
    expect(wrapper.state('method')).toBe('mnemonic');

    await instance.submit();
    expect(walletService.createWalletFromMnemonic).toHaveBeenCalledTimes(0);
  });

  it('validates privateKey correctly', () => {
    wrapper.setState({
      method: 'privateKey',
      value: '0x7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712660',
    });
    instance.validate('privateKey', '0x7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712660');

    expect(wrapper.state('privateKeyStatus')).toBe('valid');
  });

  it('invalidates privateKey correctly', () => {
    instance.validate('privateKey', '7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712660');
    expect(wrapper.state('privateKeyStatus')).toBe('invalid');
  });

  it('validates json correctly', () => {
    instance.validate(
      'json',
      '{"address":"4254845ebe8ee14256e56b3c01bbc1a3a98009cb","id":"079e5f99-8ebe-4783-9fb2-7ccc5ed8d4f8","version":3,"Crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"3a4d8c8730f16f6aaca7bccb1628e0a0"},"ciphertext":"7be18e08cb5d48f2fa2c5516436a7316c364d17ad0cdf6f8c1568133fab84c83","kdf":"scrypt","kdfparams":{"salt":"1896001ef0d252ba317b5f42c984dad8b70abc55659b809dcf97dcf1033d4592","n":131072,"dklen":32,"p":1,"r":8},"mac":"1473e104e6ae09f7c3e0f8d5a88701be93b638c118230d2d81f67644d8b6d847"},"x-ethers":{"client":"ethers.js","gethFilename":"UTC--2018-07-22T14-05-13.0Z--4254845ebe8ee14256e56b3c01bbc1a3a98009cb","mnemonicCounter":"5644753ec300ddf9f6f65a9863e69343","mnemonicCiphertext":"85a06ee26791d38052bb0e0048b24724","version":"0.1"}}'
    );
    expect(wrapper.state('jsonStatus')).toBe('valid');
  });

  it('invalidates json correctly', () => {
    //There is a typo at the end of the json
    instance.validate(
      'json',
      '{"address":"4254845ebe8ee14256e56b3c01bbc1a3a98009cb","id":"079e5f99-8ebe-4783-9fb2-7ccc5ed8d4f8","version":3,"Crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"3a4d8c8730f16f6aaca7bccb1628e0a0"},"ciphertext":"7be18e08cb5d48f2fa2c5516436a7316c364d17ad0cdf6f8c1568133fab84c83","kdf":"scrypt","kdfparams":{"salt":"1896001ef0d252ba317b5f42c984dad8b70abc55659b809dcf97dcf1033d4592","n":131072,"dklen":32,"p":1,"r":8},"mac":"1473e104e6ae09f7c3e0f8d5a88701be93b638c118230d2d81f67644d8b6d847"},"x-ethers":{"client":"ethers.js","gethFilename":"UTC--2018-07-22T14-05-13.0Z--4254845ebe8ee14256e56b3c01bbc1a3a98009cb","mnemonicCounter":"5644753ec300ddf9f6f65a9863e69343","mnemonicCiphertext":"85a06ee26791d38052bb0e0048b24724","version":"0.1}'
    );
    expect(wrapper.state('jsonStatus')).toBe('invalid');
  });

  it('validates mnemonics correctly', () => {
    instance.validate('mnemonic', 'radar blur cabbage chef fix engine embark joy scheme fiction master release');
    expect(wrapper.state('mnemonicStatus')).toBe('valid');
  });

  it('invalidates mnemonics correctly', () => {
    instance.validate('mnemonic', 'radar blur cabbage chef fix engine embark joy scheme fiction master');
    expect(wrapper.state('mnemonicStatus')).toBe('invalid');
  });

  // it('parses JSON wallets correctly', () => {
  //   let json = '{"address":"4254845ebe8ee14256e56b3c01bbc1a3a98009cb","id":"079e5f99-8ebe-4783-9fb2-7ccc5ed8d4f8","version":3,"Crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"3a4d8c8730f16f6aaca7bccb1628e0a0"},"ciphertext":"7be18e08cb5d48f2fa2c5516436a7316c364d17ad0cdf6f8c1568133fab84c83","kdf":"scrypt","kdfparams":{"salt":"1896001ef0d252ba317b5f42c984dad8b70abc55659b809dcf97dcf1033d4592","n":131072,"dklen":32,"p":1,"r":8},"mac":"1473e104e6ae09f7c3e0f8d5a88701be93b638c118230d2d81f67644d8b6d847"},"x-ethers":{"client":"ethers.js","gethFilename":"UTC--2018-07-22T14-05-13.0Z--4254845ebe8ee14256e56b3c01bbc1a3a98009cb","mnemonicCounter":"5644753ec300ddf9f6f65a9863e69343","mnemonicCiphertext":"85a06ee26791d38052bb0e0048b24724","version":"0.1"}}';
  //   var file = new Blob([json], {type: "application/json"});
  // instance.onDrop([file])
  // expect(wrapper.state('walletFileStatus')).toBe('valid')
  // })
});
