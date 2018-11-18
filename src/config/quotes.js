import { DEFAULT_NETWORK_ID } from './environment.js'
import addresses from './addresses.json';

const quoteTokensBySymbolsTable = {
  '8888': {
    WETH: {
      symbol: 'WETH',
      address: addresses['8888']['WETH'],
      decimals: 18,
    },
    DAI: {
      symbol: 'DAI',
      address: addresses['8888']['DAI'],
      decimals: 18,
    },
    TUSD: {
      symbol: 'TUSD',
      address: addresses['8888']['TUSD'],
      decimals: 18,
    },
    USDC: {
      symbol: 'USDC',
      address: addresses['8888']['USDC'],
      decimals: 6,
    }
  },
  '1000': {
    WETH: {
      symbol: 'WETH',
      address: addresses['1000']['WETH'],
      decimals: 18,
    },
    DAI: {
      symbol: 'DAI',
      address: addresses['1000']['DAI'],
      decimals: 18,
    },
    TUSD: {
      symbol: 'TUSD',
      address: addresses['1000']['TUSD'],
      decimals: 18,
    },
    USDC: {
      symbol: 'USDC',
      address: addresses['1000']['USDC'],
      decimals: 6
    }
  },
  '4': {
    WETH: {
      symbol: 'WETH',
      address: addresses['4']['WETH'],
      decimals: 18,
    },
    DAI: {
      symbol: 'DAI',
      address: addresses['4']['DAI'],
      decimals: 18,
    },
    TUSD: {
      symbol: 'TUSD',
      address: addresses['4']['TUSD'],
      decimals: 18,
    },
    USDC: {
      symbols: 'USDC',
      address: addresses['4']['USDC'],
      decimals: 6,
    }
  },
  '1': {
    WETH: {
      symbol: 'WETH',
      address: addresses['1']['WETH'],
      decimals: 18,
    },
    DAI: {
      symbol: 'DAI',
      address: addresses['1']['DAI'],
      decimals: 18,
    },
    TUSD: {
      symbol: 'TUSD',
      addresses: addresses['1']['TUSD'],
      decimals: 18,
    },
    USDC: {
      symbol: 'USDC',
      addresses: addresses['1']['USDC'],
      decimals: 6,
    }
  },
  default: {
    WETH: {
      symbol: 'WETH',
      address: '0x549638ff7b1038a1923f8e2c38b8c6fc50b8acb6',
      decimals: 18,
    },
    DAI: {
      symbol: 'DAI',
      address: '0x77da6a1ea1cf893ac9941f08bf9714b63c90298d',
      decimals: 18,
    },
    TUSD: {
      symbol: 'TUSD',
      address: '0x8dd5fbce2f6a956c3022ba3663759011dd51e73e',
      decimals: 18,
    },
    USDC: {
      symbol: 'USDC',
      address: '0x8dd5fbce2f6a956c3022ba3663759011dd51e73e',
      decimals: 6,
    }
  },
};

export const quoteTokensBySymbols = quoteTokensBySymbolsTable[DEFAULT_NETWORK_ID];
export const quoteTokenSymbols = Object.keys(quoteTokensBySymbols);
export const quoteTokens = Object.values(quoteTokensBySymbolsTable[DEFAULT_NETWORK_ID]).map((m, index) => ({ ...m, rank: index + 1 }));
