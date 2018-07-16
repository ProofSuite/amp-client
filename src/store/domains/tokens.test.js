import model, * as eventCreators from './tokens';

const symbols = ['ETH', 'EOS', 'WETH', 'ZRX'];

const tokensBySymbol = {
  ETH: { symbol: 'ETH', address: '0x0' },
  EOS: { symbol: 'EOS', address: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95' },
  WETH: { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
  ZRX: { symbol: 'ZRX', address: '0xc73eec564e96e6653943d6d0e32121d455917653' },
};

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const tokenModel = getModel([eventCreators.initialized()]);

  expect(tokenModel.symbols()).toEqual(symbols);
  expect(tokenModel.bySymbol()).toEqual(tokensBySymbol);
});

it('handles update tokens event properly', () => {
  const newToken = {
    symbol: 'PRFT',
    address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144',
  };
  const expectedTokensBySymbol = {
    ETH: { symbol: 'ETH', address: '0x0' },
    EOS: { symbol: 'EOS', address: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95' },
    WETH: { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
    ZRX: { symbol: 'ZRX', address: '0xc73eec564e96e6653943d6d0e32121d455917653' },
    PRFT: { symbol: 'PRFT', address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144' },
  };

  const expectedTokens = [
    { symbol: 'ETH', address: '0x0' },
    { symbol: 'EOS', address: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95' },
    { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
    { symbol: 'ZRX', address: '0xc73eec564e96e6653943d6d0e32121d455917653' },
    { symbol: 'PRFT', address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144' },
  ];

  const expectedSymbols = ['ETH', 'EOS', 'WETH', 'ZRX', 'PRFT'];
  const tokenModel = getModel([
    eventCreators.initialized(),
    eventCreators.tokenUpdated(newToken.symbol, newToken.address),
  ]);

  expect(tokenModel.symbols()).toEqual(expectedSymbols);
  expect(tokenModel.bySymbol()).toEqual(expectedTokensBySymbol);
  expect(tokenModel.tokens()).toEqual(expectedTokens);
});

it('handles update and remove tokens events properly', () => {
  const newToken = {
    symbol: 'PRFT',
    address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144',
  };
  const expectedTokensBySymbols = {
    ETH: { symbol: 'ETH', address: '0x0' },
    EOS: { symbol: 'EOS', address: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95' },
    WETH: { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
    PRFT: { symbol: 'PRFT', address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144' },
  };

  const expectedTokens = [
    { symbol: 'ETH', address: '0x0' },
    { symbol: 'EOS', address: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95' },
    { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
    { symbol: 'PRFT', address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144' },
  ];

  const expectedRankedTokens = [
    { rank: 1, symbol: 'ETH', address: '0x0' },
    { rank: 2, symbol: 'EOS', address: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95' },
    { rank: 3, symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
    { rank: 4, symbol: 'PRFT', address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144' },
  ];

  const expectedSymbols = ['ETH', 'EOS', 'WETH', 'PRFT'];

  const tokenModel = getModel([
    eventCreators.initialized(),
    eventCreators.tokenUpdated(newToken.symbol, newToken.address),
    eventCreators.tokenRemoved('ZRX'),
  ]);

  expect(tokenModel.symbols()).toEqual(expectedSymbols);
  expect(tokenModel.bySymbol()).toEqual(expectedTokensBySymbols);
  expect(tokenModel.tokens()).toEqual(expectedTokens);
  expect(tokenModel.rankedTokens()).toEqual(expectedRankedTokens);
});
