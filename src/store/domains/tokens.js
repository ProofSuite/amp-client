// @flow
import type { TokenState, Tokens, TokenRates } from '../../types/tokens';

const initialState = {
  bySymbol: {}
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
          listed: token.listed,
          quote: token.quote,
          rank: token.rank,
          USDRate: token.USDRate,
          EURRate: token.EURRate,
          JPYRate: token.JPYRate
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
          listed: token.listed,
          quote: token.quote,
          rank: token.rank,
          USDRate: token.USDRate,
          EURRate: token.EURRate,
          JPYRate: token.JPYRate
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

export const tokenRatesUpdated = (tokenRates: TokenRates) => {
  const event = (state: TokenState) => {
    let bySymbol = tokenRates.reduce(
      (result, tokenRate) => {
        result[tokenRate.symbol] = {
          ...state.bySymbol[tokenRate.symbol],
          USDRate: tokenRate.USD,
          EURRate: tokenRate.EUR,
          JPYRate: tokenRate.JPY
        }

        return result
      }, 
      {}
    )

    return {
      ...state,
      bySymbol: {
        ...state.bySymbol,
        ...bySymbol
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

    quoteTokens: (): any => {
      let tokens: any = Object.values(state.bySymbol)
      let quoteTokens = tokens.filter(token => token.quote === true)

      return quoteTokens
    },

    tokenAddresses: (): any => {
      let tokens: any = Object.values(state.bySymbol)
      let addresses = tokens.map(token => token.address)

      return addresses
    },

    registeredTokens: (): any => {
      let tokens: any = Object.values(state.bySymbol)
      let registeredTokens = tokens.filter(token => token.registered === true)

      return registeredTokens
    },

    listedTokens: (): any => {
      let tokens: any = Object.values(state.bySymbol)
      let listedTokens = tokens.filter(token => token.listed === true)

      return listedTokens
    },

    listedTokenAddresses: (): any => {
      let tokens: any = Object.values(state.bySymbol)
      let listed = tokens.filter(token => token.listed === true)
      let addresses = listed.map(token => token.address)
      
      return addresses
    },

    registeredTokenAddresses: (): any => {
      let tokens: any = Object.values(state.bySymbol)
      let registered = tokens.filter(token => token.registered === true)
      let addresses = registered.map(token => token.address)

      return addresses
    },
    rankedTokens: () => (Object.values(state.bySymbol): any).map((m, index) => ({ ...m, rank: index + 1 })),
  };
}
