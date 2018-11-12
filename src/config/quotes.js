import { DEFAULT_NETWORK_ID } from './environment.js'
import addresses from './addresses.json';

const quoteTokensTable = {
  '8888': [
    { symbol: 'WETH', address: addresses['8888']['WETH'] },
    { symbol: 'DAI', address: addresses['8888']['DAI'] },
  ],
  '1000': [
    { symbol: 'WETH', address: addresses['1000']['WETH'] },
    { symbol: 'DAI', address: addresses['1000']['DAI'] },
  ],
  '4': [
    { symbol: 'WETH', address: addresses['4']['WETH'] },
    { symbol: 'DAI', address: addresses['4']['DAI'] },
  ],
  '1': [
    { symbol: 'WETH', addresses: addresses['1']['WETH'] },
    { symbol: 'DAI', addresses: addresses['1']['DAI'] },
    { symbol: 'TUSD', addresses: addresses['1']['TUSD'] }
  ],
  default: [
    { symbol: 'WETH', address: '0x549638ff7b1038a1923f8e2c38b8c6fc50b8acb6' },
    { symbol: 'DAI', address: '0x77da6a1ea1cf893ac9941f08bf9714b63c90298d' },
  ],
};

const quoteTokensBySymbolsTable = {
  '8888': {
    WETH: {
      symbol: 'WETH',
      address: addresses['8888']['WETH'],
    },
    DAI: {
      symbol: 'DAI',
      address: addresses['8888']['DAI'],
    },
  },
  '1000': {
    WETH: {
      symbol: 'WETH',
      address: addresses['1000']['WETH'],
    },
    DAI: {
      symbol: 'DAI',
      address: addresses['1000']['DAI'],
    },
  },
  '4': {
    WETH: {
      symbol: 'WETH',
      address: addresses['4']['WETH'],
    },
    DAI: {
      symbol: 'DAI',
      address: addresses['4']['DAI']
    }
  },
  '1': {
    WETH: {
      symbol: 'WETH',
      address: addresses['1']['WETH'],
    },
    DAI: {
      symbol: 'DAI',
      address: addresses['1']['DAI']
    },
    TUSD: {
      symbol: 'TUSD',
      addresses: addresses['1']['TUSD']
    }
  },
  default: {
    WETH: {
      symbol: 'WETH',
      address: '0x549638ff7b1038a1923f8e2c38b8c6fc50b8acb6',
    },
    DAI: {
      symbol: 'DAI',
      address: '0x77da6a1ea1cf893ac9941f08bf9714b63c90298d',
    },
    TUSD: {
      symbol: 'TUSD',
      address: '0x8dd5fbce2f6a956c3022ba3663759011dd51e73e',
    }
  },
};

export const quoteTokensBySymbols = quoteTokensBySymbolsTable[DEFAULT_NETWORK_ID];
export const quoteTokenSymbols = Object.keys(quoteTokensBySymbols);
export const quoteTokens = quoteTokensTable[DEFAULT_NETWORK_ID].map((m, index) => ({ ...m, rank: index + 1 }));
