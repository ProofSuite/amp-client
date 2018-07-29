export const getPairSymbol = (baseTokenSymbol, quoteTokenSymbol) => {
  return `${baseTokenSymbol}_${quoteTokenSymbol}`;
};

export const getBaseToken = pairSymbol => {
  return pairSymbol.split('_')[0];
};

export const getQuoteToken = pairSymbol => {
  return pairSymbol.split('_')[1];
};

export const generateTokenPairs = (quoteTokens, tokens) => {
  let tokenPairs = {};

  tokens.forEach(token => {
    if (token.symbol === 'ETH') return;
    quoteTokens.forEach(quoteToken => {
      if (token.symbol !== quoteToken.symbol) {
        let pairSymbol = getPairSymbol(token.symbol, quoteToken.symbol);
        tokenPairs[pairSymbol] = {
          pair: pairSymbol,
          baseTokenSymbol: token.symbol,
          quoteTokenSymbol: quoteToken.symbol,
          baseTokenAddress: token.address,
          quoteTokenAddress: quoteToken.address,
        };
      }
    });
  });

  return tokenPairs;
};
