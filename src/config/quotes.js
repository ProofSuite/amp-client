import addresses from './addresses.json';

const quoteTokensTable = {
  '8888': [
    { symbol: 'WETH', address: addresses['8888']['WETH'] },
    { symbol: 'MKR', address: addresses['8888']['MKR'] },
  ],
  '1000': [
    { symbol: 'WETH', address: addresses['1000']['WETH'] },
    { symbol: 'MKR', address: addresses['1000']['MKR'] },
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
    MKR: {
      symbol: 'MKR',
      address: addresses['8888']['MKR'],
    },
  },
  '1000': {
    WETH: {
      symbol: 'WETH',
      address: addresses['1000']['WETH'],
    },
    MKR: {
      symbol: 'MKR',
      address: addresses['1000']['MKR'],
    },
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

const networkID = process.env.REACT_APP_DEFAULT_NETWORK_ID || 'default';
export const quoteTokensBySymbols = quoteTokensBySymbolsTable[networkID];
export const quoteTokenSymbols = Object.keys(quoteTokensBySymbols);
export const quoteTokens = quoteTokensTable[process.env.REACT_APP_DEFAULT_NETWORK_ID].map((m, index) => ({
  ...m,
  rank: index + 1,
}));
