import { applyMiddleware, combineReducers, compose, createStore as baseCreateStore } from 'redux';
import thunk from 'redux-thunk';
// import { createStore } from 'redux'
import * as reducers from './reducers';
import '../styles/css/index.css';

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const middlewares = [thunk.withExtraArgument(window)];
const enhancers = [applyMiddleware(...middlewares)];
const storeEnhancer = composeEnhancers(...enhancers);
const rootReducer = combineReducers(reducers);

export function configureStore(preloadedState) {
  return baseCreateStore(rootReducer, preloadedState, storeEnhancer);
}

export const createStore = () => {
  const store = configureStore(rootReducer);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }
  return store;
};
