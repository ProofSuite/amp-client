import { Wallet } from 'ethers';
import { getProvider } from './provider';
import { getDefaultWalletAddress, getWalletFromSessionStorage } from './wallet';

export const PrivateKeySigner = (privateKey, provider) => {
  this.wallet = new Wallet(privateKey);
  this.provider = provider;
  this.getAddress = async () => {
    return this.wallet.address;
  };
  this.sign = async tx => {}; //TODO
  return {
    provider: this.provider,
    getAddress: this.getAddress,
    sign: this.sign,
  };
};

export const WalletSigner = async (wallet, provider) => {
  this.getAddress = async () => {
    return wallet.address;
  };
  this.sign = async () => {}; //TODO

  return {
    provider: this.wallet,
    getAddress: this.getAddress,
    sign: this.sign,
  };
};

export const MetamaskSigner = async (provider, accountIndex) => {
  let accounts = await provider.listAccounts();
  let signer = provider.getSigner(accounts[accountIndex]);

  signer.estimateGas = async tx => {
    let estimatedGas = await signer.provider.estimateGas(tx);
    estimatedGas = estimatedGas.toNumber();
    return estimatedGas;
  };

  return signer;
};

export const LocalSigner = async provider => {
  let accounts = await provider.listAccounts();
  let signer = provider.getSigner(accounts[0]);
  return signer;
};

export const getDefaultSigner = async getState => {
  let signer;
  let { provider, type } = getProvider();

  switch (type) {
    case 'metamask':
      signer = await MetamaskSigner(provider, 0);
      break;
    case 'wallet':
      let address = getDefaultWalletAddress(getState);
      let wallet = getWalletFromSessionStorage(address);
      signer = await WalletSigner(wallet, provider);
      break;
    case 'local':
      signer = await LocalSigner(provider);
      break;
    default:
      throw new Error('Could not get signer');
  }

  return signer;
};