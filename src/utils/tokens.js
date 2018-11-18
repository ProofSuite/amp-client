export const getPairSymbol = (baseTokenSymbol, quoteTokenSymbol) => {
  return `${baseTokenSymbol}/${quoteTokenSymbol}`;
};

export const getBaseToken = pairSymbol => {
  return pairSymbol.split('/')[0];
};

export const getQuoteToken = pairSymbol => {
  return pairSymbol.split('/')[1];
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
          decimalsMultiplier: 10 ** (token.decimals - quoteToken.decimals),
          pricepointMultiplier: 10 ** 9
        };
      }
    });
  });

  return tokenPairs;
};
