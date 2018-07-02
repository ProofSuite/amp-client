import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

export function bootstrap(store, container) {
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  ReactDOM.render(app, container);
}
