import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
const { store } = configureStore();

registerServiceWorker();

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    render(NextApp);
  });
}

//TODO Reinclude PersistGate if needed:
// import { PersistGate } from 'redux-persist/integration/react';
// const { store, persistor } = configureStore();
// <PersistGate loading={null} persistor={persistor}>
// <Component />
// </PersistGate>
