import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error,
  });
};

const loginUserSuccess = (dispatch, user, navigate) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  navigate('Settings');
};

export const loginUser = ({ email, password, navigate }) => (dispatch) => {
  dispatch({ type: LOGIN_USER });
  try {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user, navigate))
      .catch((error) => {
        loginUserFail(dispatch, error);
      });
  } catch (err) {
    loginUserFail(dispatch, err);
  }
};

