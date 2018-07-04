import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../src/store';

export function withStore(storyFn) {
  const store = createStore();

  return (
    <Provider store={store}>
      {storyFn()}
    </Provider>
  );
}
