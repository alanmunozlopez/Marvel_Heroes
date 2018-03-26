import CONSTANTS from './constants';

export const registerAction = values => ({
  type: CONSTANTS.REGISTER,
  values,
});

export const loginAction = values => ({
  type: CONSTANTS.LOGIN,
  values,
});

export const beginSessionAction = values => ({
  type: CONSTANTS.BEGIN_SESSION,
  values,
});

export const closeSessionAction = values => ({
  type: CONSTANTS.CLOSE_SESSION,
});
