import getTokenDomain, * as eventCreators from './tokens';
import { tokensBySymbol, tokenSymbols } from '../../config/tokens';
import { objectWithoutKey } from '../../helpers/utils';

const symbols = ['ETH', 'EOS', 'WETH', 'ZRX'];

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return getTokenDomain(state);
}

it('handles initialized event properly', () => {
  const tokenDomain = getDomain([eventCreators.initialized()]);

  expect(tokenDomain.symbols()).toEqual(tokenSymbols);
  expect(tokenDomain.bySymbol()).toEqual(tokensBySymbol);
});

it('handles update tokens event properly', () => {
  const newToken = {
    symbol: 'TOK',
    address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144',
  };

  const expectedSymbols = tokenSymbols.concat('TOK');
  const expectedTokensBySymbol = { ...tokensBySymbol, ['TOK']: newToken };
  const expectedTokens = Object.values(expectedTokensBySymbol);

  const tokenDomain = getDomain([
    eventCreators.initialized(),
    eventCreators.tokenUpdated(newToken.symbol, newToken.address),
  ]);

  expect(tokenDomain.symbols()).toEqual(expectedSymbols);
  expect(tokenDomain.bySymbol()).toEqual(expectedTokensBySymbol);
  expect(tokenDomain.tokens()).toEqual(expectedTokens);
});

it('handles update and remove tokens events properly', () => {
  const newToken = {
    symbol: 'TOK',
    address: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144',
  };

  const expectedSymbols = tokenSymbols.concat('TOK').filter(elem => elem !== 'ZRX');
  const expectedTokensBySymbol = objectWithoutKey({ ...tokensBySymbol, ['TOK']: newToken }, 'ZRX');
  const expectedTokens = Object.values(expectedTokensBySymbol);

  const tokenDomain = getDomain([
    eventCreators.initialized(),
    eventCreators.tokenUpdated(newToken.symbol, newToken.address),
    eventCreators.tokenRemoved('ZRX'),
  ]);

  expect(tokenDomain.symbols()).toEqual(expectedSymbols);
  expect(tokenDomain.bySymbol()).toEqual(expectedTokensBySymbol);
  expect(tokenDomain.tokens()).toEqual(expectedTokens);
});
