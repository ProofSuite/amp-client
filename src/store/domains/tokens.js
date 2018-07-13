// @flow
import { arrayWithoutElement, objectWithoutKey, addKeyToObject, addElementToArray } from '../../helpers/utils';
import type { TokenState } from '../../types/tokens';
import { tokenSymbols, tokensBySymbol } from '../../data';

const initialState = {
  symbols: tokenSymbols,
  bySymbol: tokensBySymbol,
};

export const initialized = () => {
  const event = (state: TokenState = initialState) => state;
  return event;
};

export const tokenUpdated = (symbol: string, address: string) => {
  const event = (state: TokenState) => ({
    ...state,
    symbols: addElementToArray(state.symbols, symbol),
    bySymbol: addKeyToObject(state.bySymbol, symbol, { symbol, address }),
  });
  return event;
};

export const tokenRemoved = (symbol: string) => {
  const event = (state: TokenState) => ({
    ...state,
    symbols: arrayWithoutElement(state.symbols, symbol),
    bySymbol: objectWithoutKey(state.bySymbol, symbol),
  });
  return event;
};

export default function model(state: TokenState) {
  return {
    bySymbol: () => state.bySymbol,
    symbols: () => state.symbols,
    tokens: () => Object.values(state.bySymbol),
    rankedTokens: () => Object.values(state.bySymbol).map((m, index) => ({ ...m, rank: index + 1 })),
  };
}
