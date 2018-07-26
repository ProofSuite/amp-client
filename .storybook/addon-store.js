import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';

export function withStore(storyFn) {

  const { store } = configureStore({
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
