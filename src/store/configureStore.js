import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
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

const middlewares = [thunk.withExtraArgument(window)];
const enhancers = [applyMiddleware(...middlewares)];
const storeEnhancer = composeEnhancers(...enhancers);
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = preloadedState => {
  let store = createStore(persistedReducer, preloadedState, storeEnhancer);
  let persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept(() => {
      const nextReducers = require('./reducers');
      const nextRootReducer = combineReducers(nextReducers);
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    });
  }

  return { store, persistor };
};

export default configureStore;
