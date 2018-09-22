import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import history from './history';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import * as services from './services';
import '../styles/css/index.css';
import storage from 'redux-persist/lib/storage';

let composeEnhancers = compose;

const persistConfig = {
  key: 'root',
  storage,
};

if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const middlewares = [thunk.withExtraArgument(services), routerMiddleware(history)];
const enhancers = [applyMiddleware(...middlewares)];
const storeEnhancer = composeEnhancers(...enhancers);
const rootReducer = combineReducers(reducers);

// eslint-disable-next-line
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = preloadedState => {
  let store = createStore(connectRouter(history)(rootReducer), preloadedState, storeEnhancer);
  // let persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept(() => {
      const nextReducers = require('./reducers');
      const nextRootReducer = combineReducers(nextReducers);
      // store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
      store.replaceReducer(connectRouter(history)(nextRootReducer));
    });
  }

  return { store };
};

export default configureStore;
