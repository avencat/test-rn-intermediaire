// @flow
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import indexReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  indexReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

export default store;
