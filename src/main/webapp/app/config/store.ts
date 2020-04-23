import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import reducer, { IRootState } from 'app/shared/reducers';
import DevTools from './devtools';
import errorMiddleware from './error-middleware';
import notificationMiddleware from './notification-middleware';
import loggerMiddleware from './logger-middleware';
import { loadingBarMiddleware } from 'react-redux-loading-bar';

const defaultMiddlewares = [
  thunkMiddleware,
  errorMiddleware,
  notificationMiddleware,
  promiseMiddleware,
  loadingBarMiddleware(),
  loggerMiddleware
];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedMiddlewares = middlewares =>
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(
        applyMiddleware(...defaultMiddlewares, ...middlewares)
        // , DevTools.instrument()
      )
    : compose(applyMiddleware(...defaultMiddlewares, ...middlewares));

const initialize = (initialState?: IRootState, middlewares = []) => {
  /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
  console.warn('**********0002 store.js initia is called');

  return createStore(reducer, initialState, composedMiddlewares(middlewares));
};

export default initialize;
