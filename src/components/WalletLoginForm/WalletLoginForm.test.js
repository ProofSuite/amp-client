import React from 'react';
import { shallow } from 'enzyme';

import WalletLoginForm from './WalletLoginForm';
import * as walletService from '../../store/services/wallet';

jest.mock('../../store/services/wallet');

let connectWithWallet = jest.fn();

describe('Rendering', () => {
  it('renders without crashing', () => {
    shallow(<WalletLoginForm connectWithWallet={connectWithWallet} />);
  });
});

describe('Component methods', () => {
  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow(<WalletLoginForm connectWithWallet={connectWithWallet} />);

    instance = wrapper.instance();
  });

  it('calls connect with wallet upon submit', async () => {
    walletService.createWalletFromPrivateKey = jest.fn(() => Promise.resolve('test wallet'));
    instance.setState({
      method: 'privateKey',
      privateKey: 'test privateKey',
      storeWallet: false,
      storePrivateKey: true,
    });

    await instance.submit();

    expect(walletService.createWalletFromPrivateKey).toHaveBeenCalledTimes(1);
    expect(walletService.createWalletFromPrivateKey).toHaveBeenCalledWith('test privateKey');
    expect(connectWithWallet).toHaveBeenCalledWith({
      wallet: 'test wallet',
      encryptedWallet: undefined,
      storeWallet: false,
      storePrivateKey: true,
    });
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
  //   let json = '{"address":"4254845ebe8ee14256e56b3c01bbc1a3a98009cb","id":"079e5f99-8ebe-4783-9fb2-7ccc5ed8d4f8","version":3,"Crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"3a4d8c8730f16f6aaca7bccb1628e0a0"},"ciphertext":"7be18e08cb5d48f2fa2c5516436a7316c364d17ad0cdf6f8c1568133fab84c83","kdf":"scrypt","kdfparams":{"salt":"1896001ef0d252ba317b5f42c984dad8b70abc55659b809dcf97dcf1033d4592","n":131072,"dklen":32,"p":1,"r":8},"mac":"1473e104e6ae09f7c3e0f8d5a88701be93b638c118230d2d81f67644d8b6d847"},"x-ethers":{"client":"ethers.js","gethFilename":"UTC--2018-07-22T14-05-13.0Z--4254845ebe8ee14256e56b3c01bbc1a3a98009cb","mnemonicCounter":"5644753ec300ddf9f6f65a9863e69343","mnemonicCiphertext":"85a06ee26791d38052bb0e0048b24724","version":"0.1"}}'
  //   let file = new Blob([json], { type: 'text/plain'})
  //   instance.onDrop([file])
  //   // expect(wrapper.state('walletFileStatus')).toBe('valid')
  // })
});
