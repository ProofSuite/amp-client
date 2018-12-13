// @flow
import { tokensBySymbol } from '../../config/tokens';

import type { TokenState, Token, Tokens } from '../../types/tokens';

const initialState = {
  bySymbol: {}
  // bySymbol: tokensBySymbol,
};

export const initialized = () => {
  const event = (state: TokenState = initialState) => state;
  return event;
};

export const tokensUpdated = (tokens: Tokens) => {
  const event = (state: TokenState) => {
    let bySymbol = tokens.reduce(
      (result, token) => {
        result[token.symbol] = {
          address: token.address,
          symbol: token.symbol,
          decimals: token.decimals,
          registered: token.registered,
          listed: token.listed
        }

        return result
      },
      { }
    )

    return {
      ...state,
      bySymbol: {
        ...state.bySymbol,
        ...bySymbol,
      }
    }
  }

  return event
}

export const tokensReset = (tokens: Tokens) => {
  const event = (state: TokenState) => {
    let bySymbol = tokens.reduce(
      (result, token) => {
        result[token.symbol] = {
          address: token.address,
          symbol: token.symbol,
          decimals: token.decimals,
          registered: token.registered,
          listed: token.listed
        }

        return result
      },
      { }
    )

    return {
      ...state,
      bySymbol
    }
  }

  return event
}

export const tokenFeeUpdated = (symbol: string, makeFee: string, takeFee: string) => {
  const event = (state: TokenState) => {
    if (!state.bySymbol[symbol]) return

    return {
      ...state,
      bySymbol: {
        ...state.bySymbol,
        [symbol]: {
          ...state.bySymbol[symbol],
          makeFee,
          takeFee
        }
      }
    }
  }

  return event
}

export default function getTokenDomain(state: TokenState) {
  return {
    bySymbol: () => state.bySymbol,
    symbols: (): any => Object.keys(state.bySymbol),
    token: (symbol: string) => state.bySymbol[symbol],
    tokens: () => Object.values(state.bySymbol),
    rankedTokens: () => (Object.values(state.bySymbol): any).map((m, index) => ({ ...m, rank: index + 1 })),
  };
}
