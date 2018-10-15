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
  default: {
    WETH: {
      symbol: 'WETH',
      address: '0x549638ff7b1038a1923f8e2c38b8c6fc50b8acb6',
    },
    DAI: {
      symbol: 'DAI',
      address: '0x77da6a1ea1cf893ac9941f08bf9714b63c90298d',
    },
  },
};

export const quoteTokensBySymbols = quoteTokensBySymbolsTable[DEFAULT_NETWORK_ID];
export const quoteTokenSymbols = Object.keys(quoteTokensBySymbols);
export const quoteTokens = quoteTokensTable[DEFAULT_NETWORK_ID].map((m, index) => ({ ...m, rank: index + 1 }));
