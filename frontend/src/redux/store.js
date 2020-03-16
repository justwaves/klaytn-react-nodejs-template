import { createStore, applyMiddleware, combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from 'redux/modules/auth';
import loading from 'redux/modules/loading';
import user, { userSaga } from 'redux/modules/user';
import write, { writeSaga } from 'redux/modules/write';
import post, { postSaga } from 'redux/modules/post';
import posts, { postsSaga } from 'redux/modules/posts';
import wallet from 'redux/modules/wallet';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';

const env = process.env.NODE_ENV;

if (env === 'development') {
  // eslint-disable-next-line global-require
  // const { createLogger } = require('redux-logger');
  // const logger = createLogger();
  // middlewares.push(logger);
}

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
  wallet,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, ReduxThunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
