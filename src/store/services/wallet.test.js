import { Wallet } from 'ethers';
import * as walletService from './wallet';

jest.mock('ethers');

describe('wallet service', () => {
  let callback = jest.fn();
  let password = 'test password';
  let address = 'test address';
  let encrypt = jest.fn(() => Promise.resolve('test serialized wallet'));
  Wallet.createRandom = jest.fn(() => Promise.resolve({ address, encrypt }));

  it('createAndEncryptWallet should work correctly', async () => {
    let result = await walletService.createAndEncryptWallet(password, callback);
    expect(Wallet.createRandom).toHaveBeenCalledTimes(1);
    expect(encrypt).toHaveBeenCalledTimes(1);
    expect(encrypt).toHaveBeenCalledWith(password, callback);
    expect(result.serialized).toEqual('test serialized wallet');
    expect(result.address).toEqual('test address');
  });
});
