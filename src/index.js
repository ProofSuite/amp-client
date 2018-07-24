import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { bootstrap, App } from './app';
import { createStore } from './store';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = createStore();
const container = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  container
);

if (module.hot) {
  module.hot.accept('./app', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      container
    );
  });
}

// bootstrap(store, container);
registerServiceWorker();
