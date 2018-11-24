import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';
import tokenPairData from '../src/jsons/tokenPairData.json'
import { parseJSONToFixed } from '../src/utils/parsers'

import { generateTokenPairs } from '../src/utils/tokens';
import { quoteTokens } from '../src/config/quotes'
import { tokens } from '../src/config/tokens'

const defaultTokenPairs = generateTokenPairs(quoteTokens, tokens)

export function withStore(storyFn) {
  const { store } = configureStore({
    account: {
      address: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47'
    },
    tokenPairs: {
      byPair: defaultTokenPairs,
      data: parseJSONToFixed(tokenPairData),
      favorites: [],
      currentPair: (Object.values(defaultTokenPairs)[0]: any).pair
    }
  });

  return (
    <Provider store={store}>
      {storyFn()}
    </Provider>
  );
}
