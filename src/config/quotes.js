export const quoteTokens = [
  { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
  { symbol: 'DAI', address: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359' },
].map((m, index) => ({ ...m, rank: index + 1 }));

export const quoteTokensBySymbols = {
  WETH: {
    symbol: 'WETH',
    address: '0x276e16ada4b107332afd776691a7fbbaede168ef',
  },
  DAI: {
    symbol: 'DAI',
    address: '0x8daa913db90bd1c2804b4eb6d8f070de0d861bb5',
  },
};

export const quoteTokenSymbols = Object.keys(quoteTokensBySymbols);
