import { Wallet } from 'ethers';
import { getProvider } from './provider';
import { getPrivateKeyFromSessionStorage } from './wallet';

export const WalletSigner = async (provider, address) => {
  let key = getPrivateKeyFromSessionStorage(address);
  let signer = new Wallet(key, provider);
  return signer;
};

export const MetamaskSigner = async (provider, accountIndex) => {
  let accounts = await provider.listAccounts();
  let signer = provider.getSigner(accounts[accountIndex]);
  return signer;
};

export const LocalSigner = async provider => {
  let accounts = await provider.listAccounts();
  let signer = provider.getSigner(accounts[0]);
  return signer;
};

export const getDefaultSigner = async (address: ?string) => {
  let signer;
  let { provider, type } = getProvider();
  switch (type) {
    case 'metamask':
      signer = await MetamaskSigner(provider, 0);
      break;
    case 'wallet':
      signer = await WalletSigner(provider, address);
      break;
    case 'local':
      signer = await LocalSigner(provider);
      break;
    default:
      throw new Error('Could not get signer');
  }

  return signer;
};
