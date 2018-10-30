import { Wallet } from 'ethers';
import * as walletService from './wallet';

jest.mock('ethers')

describe('wallet service', () => {
  let callback = jest.fn();
  let password = 'test password';
  let address = 'test address';
  let encrypt = jest.fn(() => Promise.resolve('test serialized wallet'));
  let createRandomMock = jest.fn(() => Promise.resolve({ address, encrypt }))


  Wallet.createRandom = createRandomMock

  it('createAndEncryptWallet should work correctly', async () => {
    let result = await walletService.createAndEncryptWallet(password, callback);
    expect(Wallet.createRandom).toHaveBeenCalledTimes(1);
    expect(encrypt).toHaveBeenCalledTimes(1);
    expect(encrypt).toHaveBeenCalledWith(password, callback);
    expect(result.encryptedWallet).toEqual('test serialized wallet');
    expect(result.address).toEqual('test address');
  });
});

describe.only('wallet service (integration with ethers', () => {
  //TODO make this test work
  // it('createWalletFromJSON should return correct json file', async () => {
  //   Wallet.fromEncryptedWallet = jest.fn()
  //   Wallet.fromEncryptedWallet.mockImplementationOnce(require.requireActual('ethers').Wallet.fromEncryptedWallet);

  //   let json = '{"version":3,"id":"1a7ab7f2-b8d5-4614-a9cd-5f527be0fd01","address":"17fe89190052827fb351e965c965e5fe1ee60080","Crypto":{"ciphertext":"fddc61ff55af178a9291488b4164d38e3e261323e10ea71e5ee723ca6081837a","cipherparams":{"iv":"7bdad18b98f6d30309d0c09342d8b9f1"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"19d3e088f5fc74702a74693ba47f01ab786f2828c2801143a2a5be5a6a99863e","n":8192,"r":8,"p":1},"mac":"fb36b7047161d90e3397de802c7b26e97810ee7528db7fb2427df9d6124f8d48"}}';
  //   let { wallet, encryptedWallet } = await walletService.createWalletFromJSON(json, 'coolcoolcool');

  //   expect(wallet.privateKey).toEqual('0x77d7e234e5141bc98b11cb7ea8e9190dc6ef028f17ce237ec36a41cf1ac6fbec');
  //   expect(wallet.address).toEqual('0x17fE89190052827FB351e965C965E5fE1Ee60080');
  //   expect(encryptedWallet).toEqual(json);
  // });

  it('createRandomWallet should return a json file with an address and a private key', async () => {
    Wallet.createRandom.mockImplementationOnce(require.requireActual('ethers').Wallet.createRandom);

    let wallet = await walletService.createRandomWallet();
    expect(wallet.address.length).toEqual(42);
    expect(wallet.privateKey.length).toEqual(66);
  });

  it('createWalletFromMnemonic should return file a wallet with an address and a private key', async () => {
    Wallet.fromMnemonic.mockImplementationOnce(require.requireActual('ethers').Wallet.fromMnemonic);

    let mnemonic = 'radar blur cabbage chef fix engine embark joy scheme fiction master release';
    let { wallet } = await walletService.createWalletFromMnemonic(mnemonic);

    expect(wallet.address.length).toEqual(42);
    expect(wallet.privateKey.length).toEqual(66);
  });

  //skipping this test because it occasionally causes a timeout due to encryption time
  it.skip('should encrypt a wallet with a password', async () => {
    let callback = jest.fn();
    Wallet.createRandom.mockImplementationOnce(require.requireActual('ethers').Wallet.createRandom);

    let { address, encryptedWallet } = await walletService.createAndEncryptWallet('coolcoolcoolcool', callback);
    expect(address.length).toEqual(42);
    expect(callback).toHaveBeenCalled();
    expect(encryptedWallet).toBeDefined();
  });

  //skipping this test because it occasionally causes a timeout due to encryption time
  it.skip('should encrypt and decrypt a wallet with a password', async () => {
    Wallet.createRandom.mockImplementationOnce(require.requireActual('ethers').Wallet.createRandom);
    Wallet.fromEncryptedWallet.mockImplementationOnce(
      require.requireActual('ethers').Wallet.fromEncryptedWallet
    );

    let encryptedWallet =
      '{"address":"4254845ebe8ee14256e56b3c01bbc1a3a98009cb","id":"079e5f99-8ebe-4783-9fb2-7ccc5ed8d4f8","version":3,"Crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"3a4d8c8730f16f6aaca7bccb1628e0a0"},"ciphertext":"7be18e08cb5d48f2fa2c5516436a7316c364d17ad0cdf6f8c1568133fab84c83","kdf":"scrypt","kdfparams":{"salt":"1896001ef0d252ba317b5f42c984dad8b70abc55659b809dcf97dcf1033d4592","n":131072,"dklen":32,"p":1,"r":8},"mac":"1473e104e6ae09f7c3e0f8d5a88701be93b638c118230d2d81f67644d8b6d847"},"x-ethers":{"client":"js","gethFilename":"UTC--2018-07-22T14-05-13.0Z--4254845ebe8ee14256e56b3c01bbc1a3a98009cb","mnemonicCounter":"5644753ec300ddf9f6f65a9863e69343","mnemonicCiphertext":"85a06ee26791d38052bb0e0048b24724","version":"0.1"}}';
    let decryptedWallet = await walletService.decryptWallet(encryptedWallet, 'coolcoolcoolcool');

    expect(decryptedWallet.privateKey).toEqual('0xaf7303ee1e1a47971cb6ce8eeb31f9d0b768328287a2e3f199a160bec8b26fe9');
  });
});
