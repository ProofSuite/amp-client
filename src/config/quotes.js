export const quoteTokens = [
  { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
  { symbol: 'DAI', address: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359' },
].map((m, index) => ({ ...m, rank: index + 1 }));

export const quoteTokenSymbols = ['WETH', 'DAI'];

export const quoteTokensBySymbols = {
  WETH: { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
  DAI: { symbol: 'DAI', address: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359' },
};
