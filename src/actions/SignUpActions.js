import firebase from 'firebase';
import {
  SIGNUP_NAME_CHANGED,
  SIGNUP_PHONE_CHANGED,
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_CONFIRM_PASSWORD_CHANGED,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER,
} from './types';

export const signUpNameChanged = text => ({
  type: SIGNUP_NAME_CHANGED,
  payload: text,
});

export const signUpPhoneChanged = text => ({
  type: SIGNUP_PHONE_CHANGED,
  payload: text,
});

export const signUpEmailChanged = text => ({
  type: SIGNUP_EMAIL_CHANGED,
  payload: text,
});

export const signUpPasswordChanged = text => ({
  type: SIGNUP_PASSWORD_CHANGED,
  payload: text,
});

export const signUpConfirmPasswordChanged = text => ({
  type: SIGNUP_CONFIRM_PASSWORD_CHANGED,
  payload: text,
});

const signUpUserFail = (dispatch, error) => {
  dispatch({
    type: SIGNUP_USER_FAIL,
    payload: error,
  });
};

const createUser = (dispatch, user, name, phone, navigate) => {
  user.updateProfile({
    displayName: name,
    phoneNumber: phone,
  }).then(() => {
    dispatch({
      type: SIGNUP_USER_SUCCESS,
      payload: user,
    });
    navigate('Settings');
  }).catch((error) => {
    signUpUserFail(dispatch, error);
  });
};

// eslint-disable-next-line arrow-parens
export const SignUpUser = (props) => (dispatch) => {
  const { name, phone, email, password, confirmPassword, navigate } = props;
  dispatch({ type: SIGNUP_USER });
  if (!name) {
    signUpUserFail(dispatch, {
      code: 'name-error',
    });
    return;
  }

  if (!phone) {
    signUpUserFail(dispatch, {
      code: 'phone-error',
    });
    return;
  }

  if (password && password === confirmPassword) {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => createUser(dispatch, user, name, phone, navigate))
        .catch((error) => {
          signUpUserFail(dispatch, error);
        });
    } catch (err) {
      signUpUserFail(dispatch, err);
    }
  } else {
    signUpUserFail(dispatch, {
      code: 'password-mismatch',
    });
  }
};

