import getTokenDomain, * as eventCreators from './tokens';

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return getTokenDomain(state);
}

it('handles initialized event properly', () => {
  const tokenDomain = getDomain([eventCreators.initialized()]);

  expect(tokenDomain.symbols()).toEqual(['ETH']);
  expect(tokenDomain.tokens()).toEqual([
    { symbol: 'ETH', address: '0x0', decimals: 18, quote: false }
  ]);
  expect(tokenDomain.bySymbol()).toEqual({
    'ETH': { symbol: 'ETH', address: '0x0', decimals: 18, quote: false }
  });
});

it('handle update tokens correctly', () => {
  const tokens1 = [
    { 
      symbol: 'DAI',
      address: '0x0',
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
    }
  ]

  const tokens2 = [
    {
      symbol: 'ZRX',
      address: '0x1',
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
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

  expect(tokenDomain.symbols()).toEqual(['ETH', 'DAI', 'ZRX', 'WETH'])

  expect(tokenDomain.bySymbol()).toEqual({
    'ETH': {
      symbol: 'ETH',
      address: '0x0',
      decimals: 18,
      quote: false,
    },
    'DAI': {
      symbol: 'DAI',
      address: '0x0',
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
      USDRate: null,
      EURRate: null,
      JPYRate: null
    },
    'ZRX': {
      symbol: 'ZRX',
      address: '0x1',
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
      USDRate: null,
      EURRate: null,
      JPYRate: null
    },
    "WETH": {
      symbol: 'WETH',
      address: '0x2',
      decimals: null,
      listed: null,
      registered: null,
      quote: null,
      rank: null,
      USDRate: null,
      EURRate: null,
      JPYRate: null
    }
  })

  expect(tokenDomain.tokens()).toEqual([
    {
      symbol: 'ETH',
      address: '0x0',
      decimals: 18,
      quote: false,
    },
    {
      symbol: 'DAI',
      address: '0x0',
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
      USDRate: null,
      EURRate: null,
      JPYRate: null
    },
    {
      symbol: 'ZRX',
      address: '0x1',
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
      USDRate: null,
      EURRate: null,
      JPYRate: null
    },
    {
      symbol: "WETH",
      address: '0x2',
      decimals: null,
      listed: null,
      registered: null,
      quote: null,
      rank: null,
      USDRate: null,
      EURRate: null,
      JPYRate: null
    }
  ])  
})

it('handle tokensReset correctly', () => {
    const tokens1 = [
    { 
      symbol: 'DAI',
      address: '0x0',
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
    }
  ]

  const tokens2 = [
    {
      symbol: 'ZRX',
      address: '0x1',
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
    },
    {
      symbol: 'WETH',
      address: '0x2',
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
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
      address: '0x1',
      USDRate: null,
      EURRate: null,
      JPYRate: null,
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
    },
    "WETH": {
      symbol: 'WETH',
      address: '0x2',
      USDRate: null,
      EURRate: null,
      JPYRate: null,
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
    }
  })

  expect(tokenDomain.tokens()).toEqual([
    {
      symbol: 'ZRX',
      address: '0x1',
      USDRate: null,
      EURRate: null,
      JPYRate: null,
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
    },
    {
      symbol: "WETH",
      address: '0x2',
      USDRate: null,
      EURRate: null,
      JPYRate: null,
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
    }
  ])  
})

it('handles tokenRatesUpdated correctly', () => {
  const tokens = [
    {
      symbol: 'ZRX',
      address: '0x1',
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
    },
    {
      symbol: 'WETH',
      address: '0x2',
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
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
    'ETH': {
      symbol: 'ETH',
      address: '0x0',
      decimals: 18,
      quote: false,
    },
    'ZRX': {
      symbol: 'ZRX',
      address: '0x1',
      USDRate: 1.50,
      EURRate: 2.15,
      JPYRate: 3000,
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
    },
    "WETH": {
      symbol: 'WETH',
      address: '0x2',
      USDRate: 2.1,
      EURRate: 2.2,
      JPYRate: 3.4,
      decimals: 18,
      listed: true,
      registered: true,
      quote: true,
      rank: 1,
    }
  })
})