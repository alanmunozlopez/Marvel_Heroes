import {Platform} from 'react-native';
import { takeEvery, call } from 'redux-saga/effects';
import { authentication, database } from '../services/firebase';
import Marvel from '../services/marvel';
import CONSTANTS from '../constants';

const createUser = values =>
  authentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(success => success.toJSON());

const registerInDatabase = ({ uid, email, name }) =>
  database.ref(`users/${uid}`).set({
    name,
    email,
  });


function* sagaRegister(values) {
  console.log('valores');
  console.log(values);
  try {
    const register = yield call(createUser, values.values);
    console.log('done register');
    console.log(register);
    const { email, uid } = register;
    const { values: { name } } = values;
    // uid, email, name
    console.log(`list of parameters: ${email},${uid},${name}`);
    yield call(registerInDatabase, { uid, email, name });
  } catch (error) {
    console.log(error);
  }
}

const getHeroes = state => database.ref(`access/${Date.now()}`).set({
  state,
  origin: Platform.OS === 'ios' ? 'iOS' : 'Android',
});

function* sagaHeroes() {
  try {
    const result = yield call(getHeroes, 'success');
    console.log('CALL THE SAGA');
    console.log(result);
    return result;
  } catch (error) {
    console.log('Errrrrrr');
    console.log(error);
  }
}

const signInUser = ({ email, password }) =>
  authentication
    .signInWithEmailAndPassword(email, password)
    .then(success => success.toJSON());

function* sagaLogin(values) {
  try {
    const result = yield call(signInUser, values.values);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}


export default function* sagaFunction() {
  yield takeEvery(CONSTANTS.REGISTER, sagaRegister);
  yield takeEvery(CONSTANTS.LOGIN, sagaLogin);
  yield takeEvery(CONSTANTS.GET_HEROES, sagaHeroes);
}
