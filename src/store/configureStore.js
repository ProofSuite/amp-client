import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { loadState, saveState } from '../store/services/storage/localStorage'
import history from './history'
import thunk from 'redux-thunk'
import * as services from './services'
import rootReducer from './index.js'
import '../styles/css/index.css'

let composeEnhancers = compose

if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}

const middlewares = [thunk.withExtraArgument(services), routerMiddleware(history)]
const enhancers = [applyMiddleware(...middlewares)]
const storeEnhancer = composeEnhancers(...enhancers)


const configureStore = () => {
  let persistedState = loadState()
  let store = createStore(connectRouter(history)(rootReducer), persistedState, storeEnhancer)

  store.subscribe(() => {
    saveState({
      tokens: store.getState().tokens,
      tokenPairs: store.getState().tokenPairs
    })
  })

  if (module.hot) {
    module.hot.accept('./index.js', () => {
      store.replaceReducer(connectRouter(history)(rootReducer))
    })
  }

  return { store }
}

export default configureStore



// const rootReducer = combineReducers(reducers)

// eslint-disable-next-line
// const persistedReducer = persistReducer(persistConfig, rootReducer)
// let store = createStore(connectRouter(history)(persistedReducer), preloadedState, storeEnhancer)
// let persistor = persistStore(store);
// console.log('in configure store')
// const nextReducers = require('./reducers')
// const nextRootReducer = combineReducers(nextReducers)
// const persistedReducer = persistReducer(persistConfig, nextRootReducer)
// store.replaceReducer(connectRouter(history)(nextRootReducer))
// store.replaceReducer(connectRouter(history)(persistedReducer))