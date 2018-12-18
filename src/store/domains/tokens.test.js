import getTokenDomain, * as eventCreators from './tokens';

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return getTokenDomain(state);
}

it('handles initialized event properly', () => {
  const tokenDomain = getDomain([eventCreators.initialized()]);

  expect(tokenDomain.symbols()).toEqual([]);
  expect(tokenDomain.tokens()).toEqual([]);
  expect(tokenDomain.bySymbol()).toEqual({});
});

it('handle update tokens correctly', () => {
  const tokens1 = [
    { 
      symbol: 'DAI',
      address: '0x0'
    }
  ]

  const tokens2 = [
    {
      symbol: 'ZRX',
      address: '0x1'
    },
    {
      symbol: 'WETH',
      address: '0x2'
    }
  ]

  const tokenDomain = getDomain([
    eventCreators.initialized(),
    eventCreators.tokensUpdated(tokens1),
    eventCreators.tokensUpdated(tokens2)
  ])

  expect(tokenDomain.symbols()).toEqual(['DAI', 'ZRX', 'WETH'])

  expect(tokenDomain.bySymbol()).toEqual({
    'DAI': {
      symbol: 'DAI',
      address: '0x0'
    },
    'ZRX': {
      symbol: 'ZRX',
      address: '0x1'
    },
    "WETH": {
      symbol: 'WETH',
      address: '0x2'
    }
  })

  expect(tokenDomain.tokens()).toEqual([
    {
      symbol: 'DAI',
      address: '0x0'
    },
    {
      symbol: 'ZRX',
      address: '0x1'
    },
    {
      symbol: "WETH",
      address: '0x2'
    }
  ])  
})

it('handle tokensReset correctly', () => {
    const tokens1 = [
    { 
      symbol: 'DAI',
      address: '0x0'
    }
  ]

  const tokens2 = [
    {
      symbol: 'ZRX',
      address: '0x1'
    },
    {
      symbol: 'WETH',
      address: '0x2'
    }
  ]

  const tokenDomain = getDomain([
    eventCreators.initialized(),
    eventCreators.tokensUpdated(tokens1),
    eventCreators.tokensReset(tokens2)
  ])

  expect(tokenDomain.symbols()).toEqual(['ZRX', 'WETH'])

  expect(tokenDomain.bySymbol()).toEqual({
    'ZRX': {
      symbol: 'ZRX',
      address: '0x1'
    },
    "WETH": {
      symbol: 'WETH',
      address: '0x2'
    }
  })

  expect(tokenDomain.tokens()).toEqual([
    {
      symbol: 'ZRX',
      address: '0x1'
    },
    {
      symbol: "WETH",
      address: '0x2'
    }
  ])  
})

it('handles tokenRatesUpdated correctly', () => {
  const tokens = [
    {
      symbol: 'ZRX',
      address: '0x1'
    },
    {
      symbol: 'WETH',
      address: '0x2'
    }
  ]

  const rates = [
    {
      symbol: 'ZRX',
      USD: 1.50,
      EUR: 2.15,
      JPY: 3000,
    },
    {
      symbol: 'WETH',
      USD: 2.1,
      EUR: 2.2,
      JPY: 3.4,
    }
  ]

  const tokenDomain = getDomain([
    eventCreators.initialized(),
    eventCreators.tokensUpdated(tokens),
    eventCreators.tokenRatesUpdated(rates)
  ])

  
  expect(tokenDomain.bySymbol()).toEqual({
    'ZRX': {
      symbol: 'ZRX',
      address: '0x1',
      USDRate: 1.50,
      EURRate: 2.15,
      JPYRate: 3000,
    },
    "WETH": {
      symbol: 'WETH',
      address: '0x2',
      USDRate: 2.1,
      EURRate: 2.2,
      JPYRate: 3.4,
    }
  })
})


// it('handles update and remove tokens events properly', () => {
//   const newToken = {
//     symbol: 'TOK',
//     address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144',
//   };

//   const expectedSymbols = tokenSymbols.concat('TOK').filter(elem => elem !== 'ZRX');
//   const expectedTokensBySymbol = objectWithoutKey({ ...tokensBySymbol, ['TOK']: newToken }, 'ZRX');
//   const expectedTokens = Object.values(expectedTokensBySymbol);

//   const tokenDomain = getDomain([
//     eventCreators.initialized(),
//     eventCreators.tokenUpdated(newToken.symbol, newToken.address),
//     eventCreators.tokenRemoved('ZRX'),
//   ]);

//   expect(tokenDomain.symbols()).toEqual(expectedSymbols);
//   expect(tokenDomain.bySymbol()).toEqual(expectedTokensBySymbol);
//   expect(tokenDomain.tokens()).toEqual(expectedTokens);
// });
