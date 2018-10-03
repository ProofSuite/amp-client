import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import history from './store/history';
import App from './app';
import { Provider } from 'react-redux';

const { store } = configureStore();

registerServiceWorker();

const render = (Component) => {
  return ReactDOM.render(
      <Provider store={store}>
          <Component history={history} />
      </Provider>
      ,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    // render()
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
