import { Wallet } from 'ethers';
import { getProvider } from './signer';

export const getDefaultWalletAddress = () => {
  return '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47';
};

export const getDefaultPrivateKey = () => {
  return '';
};

export const getCurrentBlock = async () => {
  const provider = getProvider();
  const block = await provider.getBlock();
  return block.hash;
};

/**
 * @description Generates a brain wallet from a username/password pair
 * @param username [String]
 * @param password [String]
 * @returns [Object] - Ethers.js wallet object
 */
export const generateBrainWalletPrivateKey = async (username, password) => {
  let wallet = await Wallet.fromBrainWallet(username, password);
  return wallet;
};

/**
 * @description Creates a random (unencrypted) ethers.js wallet object
 * @returns [Object] - Ethers.js wallet object
 */
export const createRandomWallet = async () => {
  let wallet = await Wallet.createRandom();
  return wallet;
};

/**
 * @description Creates an (unencrypted) ethers.js wallet object
 * @param privateKey [String]
 * @returns [Object] - Ethers.js wallet object
 */
export const createWalletFromPrivateKey = privateKey => {
  let wallet;
  try {
    wallet = new Wallet(privateKey);
  } catch (e) {}
  return { wallet };
};

export const createWalletFromJSON = async (encryptedWallet, password) => {
  let wallet;
  try {
    wallet = await Wallet.fromEncryptedWallet(encryptedWallet, password);
  } catch (e) {}
  return { wallet, encryptedWallet };
};

export const createWalletFromMnemonic = async mnemonic => {
  let wallet;
  try {
    wallet = await Wallet.fromMnemonic(mnemonic);
  } catch (e) {}
  return { wallet };
};

/**
 * @description Creates an encrypted ethers.js wallet object and returns it
 * along with it's address
 * @param password [String]
 * @returns [Object] - Ethers.js encrypted wallet and wallet address
 */
export const createAndEncryptWallet = async (password, callback) => {
  let wallet = await Wallet.createRandom();
  let address = wallet.address;
  let encryptedWallet = await wallet.encrypt(password, callback);
  return { address, encryptedWallet };
};

/**
 * @description Decrypts an ethers.js wallet object and returns the plain decrypted object
 * @param jsonWallet [Object]
 * @param password
 * @returns [Object] - Ethers.js wallet
 */
export const decryptWallet = async (jsonWallet, password) => {
  let wallet = await Wallet.fromEncryptedWallet(jsonWallet, password);
  return wallet;
};

export const saveWalletInSessionStorage = wallet => {
  let address = wallet.address;
  let privateKey = wallet.privateKey;
  sessionStorage.setItem(address, privateKey);
};

export const getWalletFromSessionStorage = address => {
  let privateKey = sessionStorage.getItem(address);
  let wallet = new Wallet(privateKey);
  return wallet;
};

export const savePrivateKeyInSessionStorage = async ({ address, password, encryptedWallet, privateKey }) => {
  if (!privateKey) privateKey = await decryptWallet(encryptedWallet, password);
  sessionStorage.setItem(address, privateKey);
};

export const getPrivateKeyFromSessionStorage = address => {
  let key = sessionStorage.getItem(address);
  return key;
};

export const saveEncryptedWalletInLocalStorage = (address, encryptedWallet) => {
  localStorage.setItem(address, encryptedWallet);
};

export const getEncryptedWalletFromLocalStorage = address => {
  let encryptedWallet = localStorage.getItem(address);
  return encryptedWallet;
};
