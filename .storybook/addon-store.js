import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';
import tokenPairData from '../src/jsons/tokenPairData.json'

import { parseJSONToFixed } from '../src/utils/parsers'


export function withStore(storyFn) {
  const { store } = configureStore({
    account: {
      address: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47'
    },
      tokenPairs: {
      data: parseJSONToFixed(tokenPairData),
      favorites: []
    }
  });

  return (
    <Provider store={store}>
      {storyFn()}
    </Provider>
  );
}
