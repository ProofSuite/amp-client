export const quoteTokens = [
  { symbol: 'WETH', address: '0x549638ff7b1038a1923f8e2c38b8c6fc50b8acb6' },
  { symbol: 'DAI', address: '0x77da6a1ea1cf893ac9941f08bf9714b63c90298d' },
].map((m, index) => ({ ...m, rank: index + 1 }));

export const quoteTokensBySymbols = {
  WETH: {
    symbol: 'WETH',
    address: '0x549638ff7b1038a1923f8e2c38b8c6fc50b8acb6',
  },
  DAI: {
    symbol: 'DAI',
    address: '0x77da6a1ea1cf893ac9941f08bf9714b63c90298d',
  },
};

export const quoteTokenSymbols = Object.keys(quoteTokensBySymbols);
