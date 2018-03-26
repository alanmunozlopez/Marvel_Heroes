import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import ReduxSaga from 'redux-saga';
import sagaFunction from './sagas';
import CONSTANTS from './constants';

const reducerHeroes = (state = [0], action) => {
  switch (action.type) {
    case CONSTANTS.HERO_LIST:
      return [...state, 1];
    default:
      return state;
  }
};

const reducerSession = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.BEGIN_SESSION:
      console.log(action);
      return action.values;
    case CONSTANTS.CLOSE_SESSION:
      return null;
    default:
      return state;
  }
};

const sagaMiddleware = ReduxSaga();

const reducers = combineReducers({
  reducerSession,
  reducerHeroes,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagaFunction);

export default store;
