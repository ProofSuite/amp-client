import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../src/store';
import { createProvider } from '../src/store/services/provider'

export function withStore(storyFn) {

  const store = createStore({
    account: {
      address: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47'
    }
  });

  return (
    <Provider store={store}>
      {storyFn()}
    </Provider>
  );
}
