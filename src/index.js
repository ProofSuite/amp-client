import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { AppContainer } from 'react-hot-loader'
import App from './app';
import { Provider } from 'react-redux';


const { store } = configureStore();
// registerServiceWorker();

const render = () => {
  return ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>
      ,
    document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept('./app', () => {
    render();
  });
}
