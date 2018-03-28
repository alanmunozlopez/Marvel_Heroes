import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import ReduxSaga from 'redux-saga';
import sagaFunction from './sagas';
import CONSTANTS from './constants';

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

const reducerHeroes = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.LIST_OF_HEROES:
      console.log(action);
      return action;
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
