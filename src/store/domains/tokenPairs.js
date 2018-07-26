import { quoteTokens } from '../../config/quotes';
import { tokens } from '../../config/tokens';
import type { TokenPairState } from '../../types/tokens';

const getPairSymbol = (baseTokenSymbol, quoteTokenSymbol) => {
  return `${baseTokenSymbol}_${quoteTokenSymbol}`;
};

const getBaseToken = pairSymbol => {
  return pairSymbol.split('_')[0];
};

const getQuoteToken = pairSymbol => {
  return pairSymbol.split('_')[1];
};

export const createInitialState = (quoteTokens, tokens) => {
  let pairs = [];
  let byPair = {};

  tokens.forEach(token => {
    if (token.symbol === 'ETH') return;
    quoteTokens.forEach(quoteToken => {
      if (token.symbol !== quoteToken.symbol) {
        let pairSymbol = getPairSymbol(token.symbol, quoteToken.symbol);
        pairs.push(pairSymbol);
        byPair[pairSymbol] = {
          pair: pairSymbol,
          baseTokenSymbol: token.symbol,
          quoteTokenSymbol: quoteToken.symbol,
          baseTokenAddress: token.address,
          quoteTokenAddress: quoteToken.address,
        };
      }
    });
  });

  return {
    pairs,
    byPair,
  };
};

const defaultInitialState = createInitialState(quoteTokens, tokens);

//By default the application is started with a default create from tokens in a configuration file. To
//create a tokenpair domain with less tokens, the initialized function can be called with a custom initial
//token pair state (that can be created with the createInitialState function).
export const initialized = customInitialState => {
  let initialState = customInitialState || defaultInitialState;
  const event = (state: TokenPairState = initialState) => state;
  return event;
};

export const tokenPairUpdated = baseToken => {
  const event = (state: TokenPairState) => {
    if (baseToken.symbol === 'ETH') return;
    let newState = quoteTokens.reduce(
      (result, quoteToken) => {
        if (quoteToken.symbol === baseToken.symbol) return result;
        if (state.pairs.indexOf(getPairSymbol(quoteToken.symbol, baseToken.symbol)) !== -1) {
          return result;
        }

        let pairSymbol = getPairSymbol(baseToken.symbol, quoteToken.symbol);
        result.pairs = [...result.pairs, pairSymbol];
        result.byPair[pairSymbol] = {
          pair: pairSymbol,
          baseTokenSymbol: baseToken.symbol,
          quoteTokenSymbol: quoteToken.symbol,
          baseTokenAddress: baseToken.address,
          quoteTokenAddress: quoteToken.address,
        };
        return result;
      },
      { pairs: [], byPair: {} }
    );

    return {
      pairs: [...state.pairs, ...newState.pairs],
      byPair: { ...state.byPair, ...newState.byPair },
    };
  };

  return event;
};

export const tokenPairRemoved = baseToken => {
  const event = (state: TokenPairState) => {
    let newPairs = state.pairs.filter(elem => getBaseToken(elem) !== baseToken.symbol);
    let newByPair = Object.keys(state.byPair)
      .filter(key => getBaseToken(key) !== baseToken.symbol)
      .reduce((result, current) => {
        result[current] = state.byPair[current];
        return result;
      }, {});

    return {
      pairs: newPairs,
      byPair: newByPair,
    };
  };

  return event;
};

export default function getTokenPairsDomain(state: TokenPairState) {
  return {
    getPairs: () => state.pairs,
    getPairsBySymbol: () => state.byPair,
  };
}
